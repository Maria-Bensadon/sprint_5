import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { useCursos } from "../../context/CursosContext";

export const CursoDetalle = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    const { obtenerCursoPorId, eliminarCurso, cargando, error } = useCursos();

    const [cursoElegido, setCursoElegido] = useState(null);

    useEffect(() => {
        const cargar = async () => {
            const resultado = await obtenerCursoPorId(id);
            setCursoElegido(resultado);
        };

        cargar();
    }, [id]);

    if (cargando) return <p className="text-on-surface-variant px-4 py-6">Cargando curso...</p>;
    if (error) return <p className="text-error px-4 py-6">{error}</p>;
    if (!cursoElegido) return null;

    // fn eliminar
    const handleEliminar = async () => {
        const confirmar = window.confirm(
            `¿Seguro que desea eliminar el curso "${cursoElegido.titulo}"?`
        );

        if (!confirmar) return;

        await eliminarCurso(id);
        navigate("/");
    };

    return (
        <section className="px-6 py-6">

            {/* datos del curso */}
            <h2 className="font-bold text-2xl text-on-surface mb-2">{cursoElegido.titulo}</h2>
            <p className="text-sm text-on-surface-variant">{cursoElegido.docente}</p>
            <p className="text-sm text-on-surface-variant">{cursoElegido.categoria}</p>
            <p className="text-sm text-on-surface-variant">{cursoElegido.duracionHoras} hs</p>
            <p className="text-lg font-bold text-on-surface">${cursoElegido.precio}</p>

            {/* botones */}
            <div className="flex gap-2 mt-6">
                <button
                    onClick={() => navigate(`/cursos/${id}/editar`)}
                    className="btn-secondary px-4 py-2 font-bold"
                >
                    Editar
                </button>
                <button
                    onClick={handleEliminar}
                    className="btn-primary px-4 py-2 font-bold"
                >
                    Eliminar
                </button>
            </div>

        </section>
    );
};
