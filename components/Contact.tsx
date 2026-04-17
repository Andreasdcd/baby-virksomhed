"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Her skal der senere integreres en formular-service (fx Formspree, Web3Forms, etc.)
    console.log("Form submitted:", formData);
    setSubmitted(true);

    // Reset efter 3 sekunder
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", phone: "", message: "" });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="kontakt" className="section-padding bg-white">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4 text-text-primary font-heading">
              Lad os tage en snak
            </h2>
            <p className="text-lg text-text-primary/70">
              Udfyld formularen, så vender jeg tilbage til dig hurtigst muligt
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Kontaktformular */}
            <div className="card">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2">
                      Dit navn *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-text-primary/20 focus:outline-none focus:border-primary transition-colors bg-white"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                      Din email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-text-primary/20 focus:outline-none focus:border-primary transition-colors bg-white"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-2">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-text-primary/20 focus:outline-none focus:border-primary transition-colors bg-white"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
                      Din besked *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-warm-300 focus:outline-none focus:border-sage-300 transition-colors resize-none"
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full">
                    Send forespørgsel
                  </button>
                </form>
              ) : (
                <div className="text-center py-12">
                  <div className="mb-4">
                    <svg className="w-16 h-16 mx-auto text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <p className="text-xl text-text-primary mb-2">Tak for din besked!</p>
                  <p className="text-text-primary/70">Jeg vender tilbage til dig hurtigst muligt.</p>
                </div>
              )}
            </div>

            {/* Kontaktinfo */}
            <div>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-medium text-text-primary mb-4 font-heading">
                    Kontakt direkte
                  </h3>
                  <div className="space-y-3 text-text-primary/80">
                    <p className="flex items-start gap-3">
                      <span className="font-medium">Email:</span>
                      <span>[email@example.dk]</span>
                    </p>
                    <p className="flex items-start gap-3">
                      <span className="font-medium">Telefon:</span>
                      <span>[+45 12 34 56 78]</span>
                    </p>
                    <p className="flex items-start gap-3">
                      <span className="font-medium">Område:</span>
                      <span>[By eller område]</span>
                    </p>
                  </div>
                </div>

                <div className="pt-6 border-t border-text-primary/10">
                  <h3 className="text-xl font-medium text-neutral-800 mb-4">
                    Følg med
                  </h3>
                  <a
                    href="https://instagram.com/[profil]"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-link hover:text-primary transition-colors font-medium"
                  >
                    <span>Instagram: @[profil]</span>
                  </a>
                </div>

                <div className="pt-6 border-t border-text-primary/10">
                  <p className="text-sm text-text-primary/70 leading-relaxed">
                    Jeg bestræber mig på at svare inden for 24-48 timer på hverdage.
                    Er det akut, så ring gerne direkte.
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
