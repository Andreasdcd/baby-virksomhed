"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

          {/* Hamburger Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-text-primary hover:text-primary transition-colors"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Full-screen Dropdown Menu with solid background */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-[73px] bg-white z-40 animate-fadeIn">
          <nav className="section-container py-8">
            <div className="flex flex-col gap-6">
              <Link
                href="/"
                onClick={() => setIsMenuOpen(false)}
                className="text-3xl font-heading text-text-primary hover:text-primary transition-colors py-4 border-b border-text-primary/10"
              >
                Hjem
              </Link>
              <Link
                href="/om-mig"
                onClick={() => setIsMenuOpen(false)}
                className="text-3xl font-heading text-text-primary hover:text-primary transition-colors py-4 border-b border-text-primary/10"
              >
                Om mig
              </Link>
              <Link
                href="/kontakt"
                onClick={() => setIsMenuOpen(false)}
                className="text-3xl font-heading text-text-primary hover:text-primary transition-colors py-4 border-b border-text-primary/10"
              >
                Kontakt
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
