import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { useCursos } from "../../context/CursosContext";

export const CursoDetalle = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    const { obtenerCursoPorId, eliminarCurso } = useCursos();

    const [cursoElegido, setCursoElegido] = useState(null);
    const [cargandoCursoElegido, setCargandoCursoElegido] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const cargar = async () => {
            setCargandoCursoElegido(true);
            setError(null);
            try {
                const resultado = await obtenerCursoPorId(id);
                setCursoElegido(resultado);
            } catch (err) {
                setError("No se pudo cargar el curso.");
                console.error(err);
            } finally {
                setCargandoCursoElegido(false);
            }
        };

        cargar();
    }, [id]);

    if (cargandoCursoElegido) return <p className="text-on-surface-variant px-4 py-6">Cargando curso...</p>;
    if (error) return <p className="text-error px-4 py-6">{error}</p>;
    if (!cursoElegido) return <p className="text-on-surface-variant px-4 py-6">El curso no existe.</p>;

    const handleEliminar = async () => {
        const confirmar = window.confirm(
            `¿Seguro que desea eliminar el curso "${cursoElegido.titulo}"?`
        );
        if (!confirmar) return;
        await eliminarCurso(id);
        navigate("/");
    };

    return (
        <section className="px-6 py-6 max-w-2xl mx-auto">

            {/* card del detalle */}
            <div className="bauhaus-surface bauhaus-border bauhaus-shadow p-6 flex flex-col gap-4">

                {/* badge activo */}
                <div>
                    {cursoElegido.activo ? (
                        <span className="tag-ochre px-2 py-1 text-xs font-bold">Activo</span>
                    ) : (
                        <span className="px-2 py-1 text-xs font-bold italic opacity-50">Inactivo</span>
                    )}
                </div>

                {/* imagen */}
                {cursoElegido.imagen && (
                    <img
                        src={cursoElegido.imagen}
                        alt={cursoElegido.titulo}
                        className="w-full aspect-video object-cover"
                    />
                )}

                {/* título */}
                <h2 className="font-bold text-2xl text-on-surface">{cursoElegido.titulo}</h2>

                {/* datos */}
                <div className="flex flex-col gap-1">
                    <p className="text-sm text-on-surface-variant">
                        <span className="font-bold text-on-surface">Docente: </span>
                        {cursoElegido.docente}
                    </p>
                    <p className="text-sm text-on-surface-variant">
                        <span className="font-bold text-on-surface">Categoría: </span>
                        {cursoElegido.categoria}
                    </p>
                    <p className="text-sm text-on-surface-variant">
                        <span className="font-bold text-on-surface">Duración: </span>
                        {cursoElegido.duracionHoras} hs
                    </p>
                </div>

                {/* precio */}
                <p className="text-2xl font-bold text-on-surface">${cursoElegido.precio}</p>

                {/* botones */}
                <div className="flex gap-2 mt-2">
                    <button
                        type="button"
                        onClick={() => navigate("/")}
                        className="btn-secondary bauhaus-interactive px-4 py-2 font-bold"
                    >
                        Volver
                    </button>
                    <button
                        type="button"
                        onClick={() => navigate(`/cursos/${id}/editar`)}
                        className="btn-secondary bauhaus-interactive px-4 py-2 font-bold"
                    >
                        Editar
                    </button>
                    <button
                        type="button"
                        onClick={handleEliminar}
                        className="btn-primary bauhaus-interactive bauhaus-shadow px-4 py-2 font-bold"
                    >
                        Eliminar
                    </button>
                </div>

            </div>

        </section>
    );
};
