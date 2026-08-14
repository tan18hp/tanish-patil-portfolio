import Background from "@/components/Background";
import ScrollProgress from "@/components/ScrollProgress";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Leadership from "@/components/Leadership";
import CaseStudies from "@/components/CaseStudies";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <main className="relative min-h-screen text-white">
  <ScrollProgress />

  <Background />

  <Navbar />

  <Hero />

  <About />

  <Experience />

  <Skills />

  <Leadership />

  <CaseStudies />

  <Contact />

  <Footer />
</main>
  );
}