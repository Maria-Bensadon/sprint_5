import { useForm } from 'react-hook-form';
import { useCursos } from '../../context/CursosContext';

const claseCampo = "flex flex-col gap-1";
const claseEtiqueta = "text-sm font-bold text-on-surface";
const claseInput = "w-full bg-surface-container-lowest text-on-surface border-2 border-outline px-3 py-2 placeholder:text-on-surface-variant placeholder:opacity-30 italic placeholder:text-sm focus-visible:outline-2 focus-visible:outline-primary aria-invalid:border-error";
const claseError = "text-sm text-error";

export const AgregarCurso = () => {

    const { agregarCurso } = useCursos();

    const {
        register, handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm();

    const onSubmit = async (data) => {
        await agregarCurso(data);
    };

    return (
        <section className="px-6 py-6 max-w-2xl mx-auto">

            <h2 className="font-bold text-2xl text-on-surface mb-6">Agregar curso</h2>

            <form onSubmit={handleSubmit(onSubmit)} className="bauhaus-surface bauhaus-border bauhaus-shadow p-4 flex flex-col gap-4">

                {/* titulo */}
                <div className={claseCampo}>
                    <label htmlFor="titulo" className={claseEtiqueta}>Título del curso</label>
                    <input
                        id="titulo"
                        type="text"
                        aria-invalid={errors.titulo ? "true" : "false"}
                        aria-describedby="error-titulo"
                        className={claseInput}
                        placeholder="Ingrese el título"
                        {...register("titulo", {
                            required: "El título es obligatorio",
                            minLength: { value: 3, message: "Mínimo 3 caracteres" },
                        })}
                    />
                    {errors.titulo && <p id="error-titulo" className={claseError}>{errors.titulo.message}</p>}
                </div>

                {/* docente */}
                <div className={claseCampo}>
                    <label htmlFor="docente" className={claseEtiqueta}>Docente</label>
                    <input
                        id="docente"
                        type="text"
                        aria-invalid={errors.docente ? "true" : "false"}
                        aria-describedby="error-docente"
                        className={claseInput}
                        placeholder="Ingrese el nombre del docente"
                        {...register("docente", {
                            required: "El docente es obligatorio",
                            minLength: { value: 3, message: "Mínimo 3 caracteres" },
                        })}
                    />
                    {errors.docente && <p id="error-docente" className={claseError}>{errors.docente.message}</p>}
                </div>

                {/* categoria */}
                <div className={claseCampo}>
                    <label htmlFor="categoria" className={claseEtiqueta}>Categoría</label>
                    <input
                        id="categoria"
                        type="text"
                        aria-invalid={errors.categoria ? "true" : "false"}
                        aria-describedby="error-categoria"
                        className={claseInput}
                        placeholder="Ingrese la categoría"
                        {...register("categoria", {
                            required: "La categoría es obligatoria",
                        })}
                    />
                    {errors.categoria && <p id="error-categoria" className={claseError}>{errors.categoria.message}</p>}
                </div>

                {/* imagen */}
                <div className={claseCampo}>
                    <label htmlFor="imagen" className={claseEtiqueta}>URL de imagen</label>
                    <input
                        id="imagen"
                        type="text"
                        aria-invalid={errors.imagen ? "true" : "false"}
                        aria-describedby="error-imagen"
                        className={claseInput}
                        placeholder="Ingrese la URL de la imagen"
                        {...register("imagen")}
                    />
                    {errors.imagen && <p id="error-imagen" className={claseError}>{errors.imagen.message}</p>}
                </div>

                {/* duracionHoras */}
                <div className={claseCampo}>
                    <label htmlFor="duracionHoras" className={claseEtiqueta}>Duración (horas)</label>
                    <input
                        id="duracionHoras"
                        type="number"
                        aria-invalid={errors.duracionHoras ? "true" : "false"}
                        aria-describedby="error-duracionHoras"
                        className={claseInput}
                        placeholder="Ingrese la duración en horas"
                        {...register("duracionHoras", {
                            required: "La duración es obligatoria",
                            min: { value: 1, message: "Debe ser mayor a 0" },
                        })}
                    />
                    {errors.duracionHoras && <p id="error-duracionHoras" className={claseError}>{errors.duracionHoras.message}</p>}
                </div>

                {/* precio */}
                <div className={claseCampo}>
                    <label htmlFor="precio" className={claseEtiqueta}>Precio</label>
                    <input
                        id="precio"
                        type="number"
                        aria-invalid={errors.precio ? "true" : "false"}
                        aria-describedby="error-precio"
                        className={claseInput}
                        placeholder="Ingrese el precio"
                        {...register("precio", {
                            required: "El precio es obligatorio",
                            min: { value: 0, message: "El precio no puede ser negativo" },
                        })}
                    />
                    {errors.precio && <p id="error-precio" className={claseError}>{errors.precio.message}</p>}
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
