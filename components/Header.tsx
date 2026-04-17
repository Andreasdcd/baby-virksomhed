"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <nav className="section-container">
        <div className="flex items-center justify-between py-4">
          {/* Logo/Brand */}
          <Link
            href="/"
            className="text-2xl font-heading font-semibold text-text-primary hover:text-primary transition-colors"
          >
            Babysteps
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-text-primary/80 hover:text-primary transition-colors font-medium"
            >
              Hjem
            </Link>
            <Link
              href="/om-mig"
              className="text-text-primary/80 hover:text-primary transition-colors font-medium"
            >
              Om mig
            </Link>
            <Link
              href="/kontakt"
              className="btn-primary"
            >
              Kontakt
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-text-primary"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-text-primary/10 pt-4">
            <div className="flex flex-col gap-4">
              <Link
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-text-primary/80 hover:text-primary transition-colors py-2"
              >
                Hjem
              </Link>
              <Link
                href="/om-mig"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-text-primary/80 hover:text-primary transition-colors py-2"
              >
                Om mig
              </Link>
              <Link
                href="/kontakt"
                onClick={() => setIsMobileMenuOpen(false)}
                className="btn-primary text-center"
              >
                Kontakt
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
