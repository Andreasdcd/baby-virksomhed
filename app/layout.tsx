import type { Metadata } from "next";
import { Cormorant_Garamond, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Baby Vejledning & Tumlehold | Tryg støtte til dig og din baby",
  description: "Jeg tilbyder vejledning og babytumlehold i rolige og nærværende rammer. Få hjælp til favoritside, skævt kranie, sanseudfordringer og trivsel. Små hold og individuel sparring.",
  keywords: ["baby tumlehold", "baby vejledning", "favoritside baby", "skævt kranie", "sanseintegration", "baby trivsel", "sansemotorisk udvikling"],
  authors: [{ name: "[Virksomhedens navn]" }],
  openGraph: {
    title: "Baby Vejledning & Tumlehold | Tryg støtte til dig og din baby",
    description: "Jeg tilbyder vejledning og babytumlehold i rolige og nærværende rammer.",
    type: "website",
    locale: "da_DK",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="da" className={`${poppins.variable} ${cormorant.variable} scroll-smooth`}>
      <body className="min-h-full antialiased font-sans">
        <Header />
        {children}
      </body>
    </html>
  );
}
