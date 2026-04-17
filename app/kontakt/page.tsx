import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Kontakt | Baby Vejledning & Tumlehold",
  description: "Kontakt mig for at høre mere om tumlehold og vejledning. Jeg svarer inden for 24-48 timer.",
};

export default function KontaktPage() {
  return (
    <>
      <div className="pt-20">
        <Contact />
      </div>
      <Footer />
    </>
  );
}
