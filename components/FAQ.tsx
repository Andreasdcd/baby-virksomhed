"use client";

import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Skal jeg have en henvisning for at komme?",
      answer: "Nej, du behøver ikke en henvisning. Du er velkommen til at kontakte mig direkte, hvis du har brug for vejledning eller vil tilmelde dig et hold."
    },
    {
      question: "Hvad skal jeg medbringe til tumlehold?",
      answer: "Medbring gerne en tæppe eller håndklæde til din baby, og tag evt. skiftetøj med. Ellers er der ikke brug for noget særligt – bare jer selv og gode spørgsmål!"
    },
    {
      question: "Kan jeg få hjælp, selvom mit barn er ældre end baby-alderen?",
      answer: "Ja, i mange tilfælde kan jeg stadig hjælpe. Kontakt mig gerne, så vi kan tale om, hvad der giver mening for jer."
    },
    {
      question: "Hvad er forskellen på hold og individuel vejledning?",
      answer: "På holdet er I sammen med andre familier, og fokus er på leg, bevægelse og fællesskab. Individuel vejledning er mere målrettet dine konkrete spørgsmål og dit barns specifikke behov."
    },
    {
      question: "Kan min partner også deltage?",
      answer: "Selvfølgelig! Både mor og far (eller begge forældre) er meget velkomne – både på hold og til individuel vejledning."
    },
    {
      question: "Hvad hvis jeg bliver nødt til at aflyse?",
      answer: "Kontakt mig så hurtigt som muligt, så finder vi en løsning sammen. Jeg forstår, at livet med baby kan være uforudsigeligt."
    }
  ];

  return (
    <section id="faq" className="snap-section bg-white">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6 text-text-primary font-heading">
              Ofte stillede spørgsmål
            </h2>
            <p className="text-xl md:text-2xl text-text-primary/60">
              Her finder du svar på nogle af de spørgsmål, jeg ofte får
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-background rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-background/80 transition-colors"
                >
                  <span className="text-xl font-medium text-text-primary pr-4">
                    {faq.question}
                  </span>
                  <span className="text-3xl text-primary flex-shrink-0 font-light">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </button>

                {openIndex === index && (
                  <div className="px-8 pb-6 text-text-primary/60 leading-relaxed text-lg">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
