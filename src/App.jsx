import { Routes, Route } from "react-router";
import { BarraNavegacion } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { VistaCurso } from "./components/views/CursoView";
import { CursoDetalle } from "./components/views/IdCursoView";
import { AgregarCurso } from "./components/views/AgregarCurso";
import { EdicionCurso } from "./components/views/EditarCurso";
import { NotFound } from "./components/views/404NotFound";

function App() {
  return (
    <>
      <header className="sticky top-0 z-50">
        <BarraNavegacion />
      </header>

      <main className="p-4 max-w-7xl mx-auto">
        <Routes>
          <Route path="/" element={<VistaCurso />} />
          <Route path="/cursos/nuevo" element={<AgregarCurso />} />
          <Route path="/cursos/:id" element={<CursoDetalle />} />
          <Route path="/cursos/:id/editar" element={<EdicionCurso />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
