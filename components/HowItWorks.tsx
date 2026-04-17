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
    <section id="saadan-foregaar-det" className="section-padding bg-warm-50">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4 text-neutral-800">
              Sådan foregår det
            </h2>
            <p className="text-lg text-neutral-600">
              Uanset om du kommer på hold eller til individuel vejledning, kan du forvente:
            </p>
          </div>

          <div className="space-y-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-sm flex items-start gap-6"
              >
                <div className="flex-shrink-0 w-10 h-10 bg-sage-100 rounded-full flex items-center justify-center text-sage-300 font-semibold">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-xl mb-2 text-neutral-800 font-medium">
                    {feature.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
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
