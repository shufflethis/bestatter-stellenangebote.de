import React from 'react';

const Impressum: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 text-slate-700">
      <h1 className="text-3xl font-serif font-bold text-slate-900 mb-8">Impressum</h1>
      
      <div className="space-y-6">
        <section>
          <h2 className="text-xl font-bold mb-2">Angaben gemäß § 5 TMG</h2>
          <p>
            Bestatter-Jobs GmbH (Musterfirma)<br />
            Friedhofsallee 101<br />
            12345 Musterstadt<br />
            Deutschland
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-2">Kontakt</h2>
          <p>
            Telefon: +49 (0) 123 456789<br />
            E-Mail: kontakt@bestatter-stellenangebote.de
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-2">Vertretungsberechtigt</h2>
          <p>Geschäftsführer: Max Mustermann</p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-2">Registereintrag</h2>
          <p>
            Eintragung im Handelsregister.<br />
            Registergericht: Amtsgericht Musterstadt<br />
            Registernummer: HRB 12345
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-2">Umsatzsteuer-ID</h2>
          <p>
            Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
            DE 123456789
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-2">Haftungsausschluss (Disclaimer)</h2>
          <p className="text-sm">
            <strong>Haftung für Inhalte</strong><br/>
            Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Impressum;