import About from "@/components/About";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Om mig | Baby Vejledning & Tumlehold",
  description: "Læs om min baggrund og erfaring inden for babyvejledning og sansemotorisk udvikling.",
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
