export default function PracticalInfo() {
  return (
    <section id="praktisk-info" className="section-padding bg-warm-50">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4 text-neutral-800">
              Praktisk information
            </h2>
            <p className="text-lg text-neutral-600">
              Her finder du de praktiske detaljer om hold og vejledning
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Baby tumlehold */}
            <div className="card">
              <h3 className="text-2xl mb-6 text-neutral-800 font-medium">
                Baby tumlehold
              </h3>

              <div className="space-y-4 text-neutral-700">
                <div>
                  <p className="font-medium text-neutral-800 mb-1">Sted</p>
                  <p>[Adresse eller navn på lokation]</p>
                </div>

                <div>
                  <p className="font-medium text-neutral-800 mb-1">Hvornår</p>
                  <p>[Dag og tidspunkt, fx "Tirsdage kl. 10-11"]</p>
                </div>

                <div>
                  <p className="font-medium text-neutral-800 mb-1">Holdstørrelse</p>
                  <p>Maks. [antal] familier per hold</p>
                </div>

                <div>
                  <p className="font-medium text-neutral-800 mb-1">Pris</p>
                  <p>[Pris] kr. for [antal] gange</p>
                </div>

                <div>
                  <p className="font-medium text-neutral-800 mb-1">Alder</p>
                  <p>Babyer fra [alder] til [alder]</p>
                </div>
              </div>
            </div>

            {/* Individuel vejledning */}
            <div className="card">
              <h3 className="text-2xl mb-6 text-neutral-800 font-medium">
                Individuel vejledning
              </h3>

              <div className="space-y-4 text-neutral-700">
                <div>
                  <p className="font-medium text-neutral-800 mb-1">Hvor</p>
                  <p>Hos jer eller [lokation]</p>
                </div>

                <div>
                  <p className="font-medium text-neutral-800 mb-1">Varighed</p>
                  <p>[Antal] min per samtale</p>
                </div>

                <div>
                  <p className="font-medium text-neutral-800 mb-1">Pris</p>
                  <p>[Pris] kr. per konsultation</p>
                </div>

                <div>
                  <p className="font-medium text-neutral-800 mb-1">Booking</p>
                  <p>Kontakt mig for at aftale tid</p>
                </div>

                <div>
                  <p className="text-sm text-neutral-600 italic mt-4">
                    Vi tager en uforpligtende snak om dine behov,
                    før vi booker en tid.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Kontakt info box */}
          <div className="mt-12 bg-sage-100 rounded-xl p-8 text-center">
            <p className="text-neutral-700 mb-4">
              Har du spørgsmål til praktiske detaljer eller vil du høre mere?
            </p>
            <a href="#kontakt" className="btn-primary inline-block">
              Kontakt mig
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
