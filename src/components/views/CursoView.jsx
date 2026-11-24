import { useCursos } from "../../context/CursosContext";
import { ListaCursos } from "../CursoList";

export const VistaCurso = () => {

  const { cursos, cargando, error } = useCursos();

  if (cargando) return <p className="text-on-surface-variant px-4 py-6">Cargando cursos...</p>;
  if (error) return <p className="text-error px-4 py-6">{error}</p>;
  if (cursos.length === 0)
    return (
      <p className="text-on-surface-variant px-4 py-6">
        No se encontraron cursos...
      </p>
    );

  return (
    <>
      <section>
        <ListaCursos cursos={cursos} />
      </section>
    </>
  );
};
