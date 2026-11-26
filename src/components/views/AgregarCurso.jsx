import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { useCursos } from '../../context/CursosContext';

export const AgregarCurso = () => {

    const { agregarCurso } = useCursos();
    const navigate = useNavigate();

    const {
        register, handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm();

    const onSubmit = async (data) => {
        await agregarCurso(data);
        navigate('/');
    };

    return (
        <section className="px-6 py-6 max-w-2xl mx-auto">

            <h2 className="font-bold text-2xl text-on-surface mb-6">Agregar curso</h2>

            <form onSubmit={handleSubmit(onSubmit)} className="bauhaus-surface bauhaus-border bauhaus-shadow p-4 flex flex-col gap-4">

                {/* titulo */}
                <div className="form-campo">
                    <label htmlFor="titulo" className="form-etiqueta">Título del curso</label>
                    <input
                        id="titulo"
                        type="text"
                        aria-invalid={errors.titulo ? "true" : "false"}
                        aria-describedby="error-titulo"
                        className="form-input"
                        placeholder="Ingrese el título"
                        {...register("titulo", {
                            required: "El título es obligatorio",
                            minLength: { value: 3, message: "Mínimo 3 caracteres" },
                        })}
                    />
                    {errors.titulo && <p id="error-titulo" className="form-error">{errors.titulo.message}</p>}
                </div>

                {/* docente */}
                <div className="form-campo">
                    <label htmlFor="docente" className="form-etiqueta">Docente</label>
                    <input
                        id="docente"
                        type="text"
                        aria-invalid={errors.docente ? "true" : "false"}
                        aria-describedby="error-docente"
                        className="form-input"
                        placeholder="Ingrese el nombre del docente"
                        {...register("docente", {
                            required: "El docente es obligatorio",
                            minLength: { value: 3, message: "Mínimo 3 caracteres" },
                        })}
                    />
                    {errors.docente && <p id="error-docente" className="form-error">{errors.docente.message}</p>}
                </div>

                {/* categoria */}
                <div className="form-campo">
                    <label htmlFor="categoria" className="form-etiqueta">Categoría</label>
                    <input
                        id="categoria"
                        type="text"
                        aria-invalid={errors.categoria ? "true" : "false"}
                        aria-describedby="error-categoria"
                        className="form-input"
                        placeholder="Ingrese la categoría"
                        {...register("categoria", {
                            required: "La categoría es obligatoria",
                        })}
                    />
                    {errors.categoria && <p id="error-categoria" className="form-error">{errors.categoria.message}</p>}
                </div>

                {/* imagen */}
                <div className="form-campo">
                    <label htmlFor="imagen" className="form-etiqueta">URL de imagen</label>
                    <input
                        id="imagen"
                        type="text"
                        aria-invalid={errors.imagen ? "true" : "false"}
                        aria-describedby="error-imagen"
                        className="form-input"
                        placeholder="Ingrese la URL de la imagen"
                        {...register("imagen")}
                    />
                    {errors.imagen && <p id="error-imagen" className="form-error">{errors.imagen.message}</p>}
                </div>

                {/* duracionHoras */}
                <div className="form-campo">
                    <label htmlFor="duracionHoras" className="form-etiqueta">Duración (horas)</label>
                    <input
                        id="duracionHoras"
                        type="number"
                        aria-invalid={errors.duracionHoras ? "true" : "false"}
                        aria-describedby="error-duracionHoras"
                        className="form-input"
                        placeholder="Ingrese la duración en horas"
                        {...register("duracionHoras", {
                            required: "La duración es obligatoria",
                            min: { value: 1, message: "Debe ser mayor a 0" },
                            valueAsNumber: true,
                        })}
                    />
                    {errors.duracionHoras && <p id="error-duracionHoras" className="form-error">{errors.duracionHoras.message}</p>}
                </div>

                {/* precio */}
                <div className="form-campo">
                    <label htmlFor="precio" className="form-etiqueta">Precio</label>
                    <input
                        id="precio"
                        type="number"
                        aria-invalid={errors.precio ? "true" : "false"}
                        aria-describedby="error-precio"
                        className="form-input"
                        placeholder="Ingrese el precio"
                        {...register("precio", {
                            required: "El precio es obligatorio",
                            min: { value: 0, message: "El precio no puede ser negativo" },
                            valueAsNumber: true,
                        })}
                    />
                    {errors.precio && <p id="error-precio" className="form-error">{errors.precio.message}</p>}
                </div>

                {/* activo */}
                <div className="flex items-center gap-2">
                    <input
                        id="activo"
                        type="checkbox"
                        className="accent-primary"
                        {...register("activo")}
                    />
                    <label htmlFor="activo" className="text-sm text-on-surface">Curso activo</label>
                </div>

                <button
                    onClick={() => navigate(`/`)}
                    className="btn-secondary px-4 py-2 font-bold"
                >
                    Volver
                </button>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary bauhaus-interactive bauhaus-shadow py-3 font-bold uppercase tracking-wider text-sm cursor-pointer"
                >
                    {isSubmitting ? "Guardando..." : "Agregar curso"}
                </button>

            </form>

        </section>
    );
};
