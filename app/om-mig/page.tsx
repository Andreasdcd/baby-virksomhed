import About from "@/components/About";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Om Anna Sundby Jensen | Baby Vejledning & Tumlehold",
  description: "Jeg er uddannet ergoterapeut med flere års erfaring på børneområdet. Ansat hos Modu, hvor jeg udvikler open-ended stimulerende legetøj til børn.",
};

export default function OmMigPage() {
  return (
    <>
      <div className="pt-20">
        <About />
      </div>
      <Footer />
    </>
  );
}
