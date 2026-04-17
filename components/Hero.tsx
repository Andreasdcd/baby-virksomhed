export default function Hero() {
  return (
    <section className="snap-section bg-gradient-to-b from-background to-white">
      <div className="section-container">
        <div className="max-w-4xl mx-auto text-center">
          {/* Overskrift */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl mb-8 leading-tight text-text-primary font-heading">
            Tryg støtte til dig og din baby
          </h1>

          {/* Undertekst */}
          <p className="text-xl md:text-2xl mb-12 leading-relaxed text-text-primary/70">
            Jeg tilbyder vejledning og babytumlehold i rolige og nærværende rammer.
            Her får I støtte til at forstå barnets signaler og udvikle jer sammen.
          </p>

          {/* CTA knapper */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#kontakt" className="btn-primary w-full sm:w-auto text-center">
              Book en plads
            </a>
            <a href="#kontakt" className="btn-secondary w-full sm:w-auto text-center">
              Kontakt mig
            </a>
          </div>

          {/* Tryghedselementer */}
          <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-text-primary/70">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              <span>Trygt og nærværende</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              <span>Plads til spørgsmål</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              <span>Fokus på både baby og forælder</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
