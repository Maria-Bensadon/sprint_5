import { Card } from "./CursoCard";

export const ListaCursos = ({ cursos }) => {

  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-6">

      <h2 className="mb-4 text-primary-container font-bold text-2xl">Lista de cursos</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {cursos.map((curso) => (
          <Card
            key={curso.id}
            id={curso.id}
            titulo={curso.titulo}
            docente={curso.docente}
            categoria={curso.categoria}
            imagen={curso.imagen}
            duracion={curso.duracionHoras}
            precio={curso.precio}
            activo={curso.activo}
          />
        ))}
      </div>

    </section>
  );
};
