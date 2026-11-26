import { useNavigate } from "react-router";
import { useCursos } from "../context/CursosContext";

export const Card = ({
  id,
  titulo,
  docente,
  categoria,
  imagen,
  duracion,
  precio,
  activo,
}) => {

  const navigate = useNavigate();
  const { eliminarCurso } = useCursos();

  const handleEliminar = async () => {
    const confirmar = window.confirm(
      `¿Seguro que desea eliminar el curso "${titulo}"?`
    );
    if (!confirmar) return;
    await eliminarCurso(id);
  };

  return (
    <article className="bauhaus-surface bauhaus-border bauhaus-shadow bauhaus-interactive p-4 flex flex-col gap-2 h-full">

      {/* badge activo/inactivo */}
      <div className="flex gap-2 flex-wrap">
        {activo ? (
          <span className="tag-ochre px-2 py-1 text-xs font-bold">Activo</span>
        ) : (
          <span className="px-2 py-1 text-xs font-bold italic opacity-50">Inactivo</span>
        )}
      </div>

      {/* imagen */}
      {imagen && (
        <img
          src={imagen}
          alt={titulo}
          className="w-full aspect-video object-cover"
        />
      )}

      {/* datos */}
      <h3 className="font-bold text-base">{titulo}</h3>
      <p className="text-sm text-on-surface-variant">{docente}</p>
      <p className="text-sm text-on-surface-variant">{categoria}</p>
      <p className="text-sm text-on-surface-variant">{duracion} hs</p>
      <p className="text-lg font-bold text-on-surface">${precio}</p>

      {/* botones */}
      <div className="flex gap-2 mt-auto">
        <button
          onClick={() => navigate(`/cursos/${id}`)}
          className="btn-secondary px-3 py-1 text-sm font-bold flex-1"
        >
          Ver detalle
        </button>
        <button
          onClick={() => navigate(`/cursos/${id}/editar`)}
          className="btn-secondary px-3 py-1 text-sm font-bold flex-1"
        >
          Editar
        </button>
        <button
          onClick={handleEliminar}
          className="btn-primary px-3 py-1 text-sm font-bold"
        >
          Eliminar
        </button>
      </div>

    </article>
  );
};
