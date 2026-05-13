import Navbar      from "@/components/Navbar";
import Hero        from "@/components/Hero";
import Confiance   from "@/components/Confiance";
import Services    from "@/components/Services";
import Avis        from "@/components/Avis";
import Soumission  from "@/components/Soumission";
import Footer      from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Confiance />
        <Services />
        <div className="stripe" />
        <Avis />
        <Soumission />
        <div className="stripe" />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
