import { BarraNavegacion } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";

function App() {
  return (
    <>
      <header className="sticky top-0 z-50">
        <BarraNavegacion />
      </header>

      <main className="p-4 max-w-7xl mx-auto"></main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
