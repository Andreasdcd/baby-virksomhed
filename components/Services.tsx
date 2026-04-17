export default function Services() {
  const services = [
    {
      title: "Baby tumlehold",
      description: "Et trygt holdforløb hvor I møder andre familier, og hvor der er masser af plads til leg, sang og bevægelse. Vi arbejder med sansemotorisk udvikling på en legende og naturlig måde."
    },
    {
      title: "Vejledning ved favoritside og skævt kranie",
      description: "Har din baby en tydelig favoritside eller et fladt baghoved? Jeg kan give konkret vejledning om positionering, leg og øvelser der støtter en god hovedform og bevægelse."
    },
    {
      title: "Støtte til sanseintegration og trivsel",
      description: "Virker din baby urolig, svær at aflæse eller har udfordringer med søvn og fald til ro? Jeg tilbyder individuel sparring om barnets sanser, signaler og trivsel."
    }
  ];

  return (
    <section id="ydelser" className="section-padding bg-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4 text-text-primary font-heading">
            Det tilbyder jeg
          </h2>
          <p className="text-lg text-text-primary/70 max-w-2xl mx-auto">
            Jeg arbejder med vejledning og støtte til familier med små børn i trygge og nærværende rammer.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="card">
              <h3 className="text-xl md:text-2xl mb-4 text-text-primary font-heading">
                {service.title}
              </h3>
              <p className="text-text-primary/70 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
