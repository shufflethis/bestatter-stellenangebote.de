import React, { useState } from 'react';
import { Sparkles, Send, X, MessageSquare } from 'lucide-react';
import { generateCoverLetter, chatWithAssistant } from '../services/geminiService';

const AIJobAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState<'chat' | 'coverLetter'>('chat');
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{role: 'user' | 'model', text: string}[]>([
    { role: 'model', text: 'Guten Tag. Ich bin Ihr Karriere-Assistent für das Bestattungswesen. Wie kann ich Ihnen helfen? Ich kann Fragen zum Beruf beantworten oder Ihnen bei einem Anschreiben helfen.' }
  ]);
  const [loading, setLoading] = useState(false);

  // Cover Letter State
  const [clJob, setClJob] = useState('');
  const [clExp, setClExp] = useState('');
  const [clMot, setClMot] = useState('');
  const [clResult, setClResult] = useState('');

  const handleSendChat = async () => {
    if (!input.trim()) return;
    const userMsg = input;
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInput('');
    setLoading(true);

    try {
      const response = await chatWithAssistant(userMsg, messages);
      setMessages(prev => [...prev, { role: 'model', text: response }]);
    } catch (e) {
      setMessages(prev => [...prev, { role: 'model', text: 'Entschuldigung, ein Fehler ist aufgetreten.' }]);
    } finally {
      setLoading(false);
    }
  };

  const handleGenerateCoverLetter = async () => {
    if(!clJob || !clExp || !clMot) return;
    setLoading(true);
    const text = await generateCoverLetter(clJob, clExp, clMot);
    setClResult(text);
    setLoading(false);
  };

  if (!isOpen) {
    return (
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-primary-700 hover:bg-primary-800 text-white p-4 rounded-full shadow-lg transition-all z-50 flex items-center gap-2"
      >
        <Sparkles size={24} />
        <span className="hidden md:inline font-medium">Karriere-Assistent</span>
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 w-full max-w-md bg-white rounded-xl shadow-2xl border border-slate-200 z-50 flex flex-col max-h-[80vh] overflow-hidden">
      {/* Header */}
      <div className="bg-primary-800 text-white p-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Sparkles size={20} />
          <h3 className="font-serif font-bold">KI Assistent</h3>
        </div>
        <button onClick={() => setIsOpen(false)} className="hover:bg-primary-700 p-1 rounded">
          <X size={20} />
        </button>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-slate-100">
        <button 
          onClick={() => setMode('chat')}
          className={`flex-1 py-3 text-sm font-medium ${mode === 'chat' ? 'text-primary-700 border-b-2 border-primary-700 bg-primary-50' : 'text-slate-500'}`}
        >
          Fragen & Antworten
        </button>
        <button 
          onClick={() => setMode('coverLetter')}
          className={`flex-1 py-3 text-sm font-medium ${mode === 'coverLetter' ? 'text-primary-700 border-b-2 border-primary-700 bg-primary-50' : 'text-slate-500'}`}
        >
          Anschreiben Generator
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-4 bg-slate-50">
        {mode === 'chat' ? (
          <div className="space-y-4">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] rounded-lg p-3 text-sm ${
                  m.role === 'user' 
                    ? 'bg-primary-600 text-white rounded-tr-none' 
                    : 'bg-white border border-slate-200 text-slate-700 rounded-tl-none shadow-sm'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {loading && <div className="text-xs text-slate-400 text-center animate-pulse">Der Assistent denkt nach...</div>}
          </div>
        ) : (
          <div className="space-y-4">
             {!clResult ? (
               <>
                 <div className="bg-blue-50 text-blue-800 p-3 rounded text-sm mb-4">
                   Lassen Sie sich von unserer KI einen Entwurf für Ihr Anschreiben erstellen.
                 </div>
                 <div>
                   <label className="block text-xs font-bold text-slate-700 mb-1">Stellenbezeichnung</label>
                   <input 
                     value={clJob} onChange={e => setClJob(e.target.value)}
                     className="w-full border p-2 rounded text-sm" placeholder="z.B. Bestattungsfachkraft"
                   />
                 </div>
                 <div>
                   <label className="block text-xs font-bold text-slate-700 mb-1">Ihre Erfahrung</label>
                   <textarea 
                     value={clExp} onChange={e => setClExp(e.target.value)}
                     className="w-full border p-2 rounded text-sm h-20" placeholder="z.B. 3 Jahre im Verkauf, Quereinsteiger, einfühlsam..."
                   />
                 </div>
                 <div>
                   <label className="block text-xs font-bold text-slate-700 mb-1">Warum diese Firma?</label>
                   <textarea 
                     value={clMot} onChange={e => setClMot(e.target.value)}
                     className="w-full border p-2 rounded text-sm h-20" placeholder="z.B. Guter Ruf, Nähe zum Wohnort..."
                   />
                 </div>
                 <button 
                    onClick={handleGenerateCoverLetter}
                    disabled={loading || !clJob || !clExp}
                    className="w-full bg-primary-700 text-white py-2 rounded font-semibold hover:bg-primary-800 disabled:opacity-50"
                 >
                   {loading ? 'Generiere...' : 'Entwurf erstellen'}
                 </button>
               </>
             ) : (
               <div className="space-y-3">
                 <div className="bg-green-50 text-green-800 p-2 text-sm rounded flex justify-between items-center">
                   <span>Entwurf generiert!</span>
                   <button onClick={() => setClResult('')} className="text-xs underline">Neu starten</button>
                 </div>
                 <textarea 
                   readOnly 
                   value={clResult}
                   className="w-full h-64 border p-2 rounded text-sm font-mono text-slate-700 bg-white"
                 />
                 <button 
                   onClick={() => navigator.clipboard.writeText(clResult)}
                   className="w-full border border-primary-700 text-primary-700 py-2 rounded hover:bg-primary-50 text-sm font-medium"
                 >
                   Text kopieren
                 </button>
               </div>
             )}
          </div>
        )}
      </div>

      {/* Footer (Chat Input) */}
      {mode === 'chat' && (
        <div className="p-3 bg-white border-t border-slate-100 flex gap-2">
          <input 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSendChat()}
            placeholder="Ihre Frage..."
            className="flex-1 border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary-500"
          />
          <button 
            onClick={handleSendChat}
            disabled={loading || !input.trim()}
            className="bg-primary-700 text-white p-2 rounded-lg hover:bg-primary-800 disabled:opacity-50"
          >
            <Send size={18} />
          </button>
        </div>
      )}
    </div>
  );
};

export default AIJobAssistant;