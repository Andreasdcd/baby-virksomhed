export default function About() {
  return (
    <section id="om-mig" className="section-padding bg-warm-100">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Billede placeholder - skal udskiftes */}
            <div className="order-2 md:order-1">
              <div className="aspect-[4/5] bg-warm-300 rounded-2xl flex items-center justify-center text-neutral-600">
                <div className="text-center p-8">
                  <p className="text-sm">Indsæt billede her</p>
                  <p className="text-xs mt-2 opacity-60">(Varm, venlig professionel)</p>
                </div>
              </div>
            </div>

            {/* Tekst */}
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl mb-6 text-neutral-800">
                Om mig
              </h2>

              <div className="space-y-4 text-neutral-700 leading-relaxed">
                <p>
                  Jeg hedder <strong>Anna Sundby Jensen</strong> og har arbejdet med babyer og små børn i flere år.
                  Min baggrund er som uddannet ergoterapeut, og jeg har en særlig interesse
                  for sansemotorisk udvikling og trivsel hos de mindste.
                </p>

                <p>
                  Jeg brænder for at støtte familier i en tid, hvor der er mange spørgsmål og
                  måske også bekymringer. Min tilgang er nærværende, rolig og altid med respekt
                  for jer som forældre – I kender jeres barn bedst.
                </p>

                <p>
                  Jeg tror på, at små justeringer i hverdagen kan gøre en stor forskel.
                  Derfor er mit fokus altid at give jer konkrete værktøjer, som I faktisk
                  kan bruge derhjemme.
                </p>

                <div className="mt-8 pt-6 border-t border-warm-300">
                  <p className="text-sm text-neutral-600">
                    <strong>Baggrund:</strong> Uddannet Ergoterapeut<br/>
                    <strong>Erfaring:</strong> Arbejdet på børneområdet i flere år<br/>
                    <strong>Nuværende:</strong> Ansat hos Modu, hvor jeg udvikler open-ended stimulerende legetøj til børn i mange aldre
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
