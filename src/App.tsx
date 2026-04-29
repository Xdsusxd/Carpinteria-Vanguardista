import Hero from "./components/Hero";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Hero />
      <Services />
      <Gallery />
      <Footer />
    </main>
  );
}

export default App;
