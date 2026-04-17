import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({
  subsets: ["latin"],
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
    <html lang="da" className={`${inter.className} scroll-smooth`}>
      <body className="min-h-full antialiased">
        <Header />
        {children}
      </body>
    </html>
  );
}
