export default function ForWhom() {
  const situations = [
    "Din baby har en tydelig favoritside og kigger mest til én side",
    "Du er bekymret for et fladt eller skævt baghoved",
    "Din baby virker meget urolig eller er svær at aflæse",
    "Du ønsker støtte til leg, bevægelse og sansemotorisk udvikling",
    "Du vil gerne have et trygt holdforløb med plads til spørgsmål",
    "Du leder efter vejledning om barnets trivsel og signaler"
  ];

  return (
    <section id="for-hvem" className="section-padding bg-background">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4 text-text-primary font-heading">
              Er det noget for dig?
            </h2>
            <p className="text-lg text-text-primary/70">
              Jeg hjælper familier i mange forskellige situationer. Måske genkender du dig i en af disse:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {situations.map((situation, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm"
              >
                <p className="text-text-primary/80 leading-relaxed">
                  {situation}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-text-primary/70 leading-relaxed max-w-2xl mx-auto">
              Uanset hvad du står med, er du velkommen til at kontakte mig.
              Vi tager en uforpligtende snak om, hvordan jeg bedst kan støtte jer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
