export default function HowItWorks() {
  const features = [
    {
      title: "Rolig og tryg stemning",
      description: "Jeg skaber et rum hvor både baby og forældre kan slappe af og være til stede."
    },
    {
      title: "Plads til jeres spørgsmål",
      description: "Der er altid tid til at tale om det, I går og tænker på – store som små bekymringer."
    },
    {
      title: "Konkrete øvelser og inspiration",
      description: "I får værktøjer og idéer, som I kan bruge hjemme i hverdagen."
    },
    {
      title: "Fokus på både baby og forælder",
      description: "Jeg ser på barnets udvikling og støtter samtidig jer som forældre i at forstå jeres barn."
    },
    {
      title: "Små hold eller personlig kontakt",
      description: "På holdene er vi få, så der er plads til alle. Ved individuel vejledning får I fuld opmærksomhed."
    }
  ];

  return (
    <section id="saadan-foregaar-det" className="snap-section bg-white">
      <div className="section-container">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6 text-text-primary font-heading">
              Sådan foregår det
            </h2>
            <p className="text-xl md:text-2xl text-text-primary/60">
              Uanset om du kommer på hold eller til individuel vejledning, kan du forvente:
            </p>
          </div>

          <div className="space-y-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-background rounded-xl p-8 shadow-sm flex items-start gap-6 hover:shadow-md transition-all"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-semibold text-lg">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-2xl mb-2 text-text-primary font-heading">
                    {feature.title}
                  </h3>
                  <p className="text-text-primary/60 leading-relaxed text-lg">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
