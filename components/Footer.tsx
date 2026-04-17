export default function Footer() {
  return (
    <footer className="bg-neutral-800 text-warm-100 py-12">
      <div className="section-container">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Virksomhedsinfo */}
          <div>
            <h3 className="text-xl font-medium mb-4">[Virksomhedens navn]</h3>
            <p className="text-sm text-warm-200 leading-relaxed">
              Tryg støtte og vejledning til babyer og forældre.
              Tumlehold og individuel sparring i nærværende rammer.
            </p>
          </div>

          {/* Kontakt */}
          <div>
            <h3 className="text-xl font-medium mb-4">Kontakt</h3>
            <div className="text-sm text-warm-200 space-y-2">
              <p>Email: [email@example.dk]</p>
              <p>Telefon: [+45 12 34 56 78]</p>
              <p>CVR: [12345678]</p>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-xl font-medium mb-4">Følg med</h3>
            <div className="text-sm text-warm-200 space-y-2">
              <a
                href="https://instagram.com/[profil]"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-sage-200 transition-colors"
              >
                Instagram: @[profil]
              </a>
              <p className="text-xs text-warm-300 mt-4">
                [Adresse eller område]
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-warm-400 text-center text-sm text-warm-300">
          <p>&copy; {new Date().getFullYear()} [Virksomhedens navn]. Alle rettigheder forbeholdes.</p>
        </div>
      </div>
    </footer>
  );
}
