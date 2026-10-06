import './App.css'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Works from './components/Works';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  // Removed unused count state

  return (
    // ADDED: overflow-x-hidden to prevent horizontal scroll
    <div className="bg-[#111111] min-h-screen text-[#F2F2ED] overflow-x-hidden w-full selection:bg-[#343431] selection:text-[#FFFFFF]">
      <Navbar />
      <main>
        <Hero />
      </main>
      <About />
      <Works />
      <Contact />
      <Footer />
    </div>
  );
}

export default App