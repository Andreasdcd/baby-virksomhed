export default function PracticalInfo() {
  return (
    <section id="praktisk-info" className="snap-section bg-background">
      <div className="section-container">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4 text-text-primary font-heading">
              Praktisk information
            </h2>
            <p className="text-lg md:text-xl text-text-primary/60">
              Her finder du de praktiske detaljer om hold og vejledning
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Baby tumlehold */}
            <div className="card">
              <h3 className="text-2xl mb-4 text-text-primary font-heading">
                Baby tumlehold
              </h3>

              <div className="space-y-3 text-text-primary/60">
                <div>
                  <p className="font-medium text-text-primary mb-1">Sted</p>
                  <p>[Adresse eller navn på lokation]</p>
                </div>

                <div>
                  <p className="font-medium text-text-primary mb-1">Hvornår</p>
                  <p>[Dag og tidspunkt, fx "Tirsdage kl. 10-11"]</p>
                </div>

                <div>
                  <p className="font-medium text-text-primary mb-1">Holdstørrelse</p>
                  <p>Maks. [antal] familier per hold</p>
                </div>

                <div>
                  <p className="font-medium text-text-primary mb-1">Pris</p>
                  <p>[Pris] kr. for [antal] gange</p>
                </div>

                <div>
                  <p className="font-medium text-text-primary mb-1">Alder</p>
                  <p>Babyer fra [alder] til [alder]</p>
                </div>
              </div>
            </div>

            {/* Individuel vejledning */}
            <div className="card">
              <h3 className="text-2xl mb-4 text-text-primary font-heading">
                Individuel vejledning
              </h3>

              <div className="space-y-3 text-text-primary/60">
                <div>
                  <p className="font-medium text-text-primary mb-1">Hvor</p>
                  <p>Hos jer eller [lokation]</p>
                </div>

                <div>
                  <p className="font-medium text-text-primary mb-1">Varighed</p>
                  <p>[Antal] min per samtale</p>
                </div>

                <div>
                  <p className="font-medium text-text-primary mb-1">Pris</p>
                  <p>[Pris] kr. per konsultation</p>
                </div>

                <div>
                  <p className="font-medium text-text-primary mb-1">Booking</p>
                  <p>Kontakt mig for at aftale tid</p>
                </div>

                <div>
                  <p className="text-sm text-text-primary/50 italic mt-3">
                    Vi tager en uforpligtende snak om dine behov,
                    før vi booker en tid.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Kontakt info box */}
          <div className="mt-8 bg-primary/10 rounded-xl p-6 text-center">
            <p className="text-text-primary/70 mb-3">
              Har du spørgsmål til praktiske detaljer eller vil du høre mere?
            </p>
            <a href="/kontakt" className="btn-primary inline-block">
              Kontakt mig
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
