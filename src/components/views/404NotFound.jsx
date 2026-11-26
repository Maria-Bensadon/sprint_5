import { useNavigate } from "react-router";

export const NotFound = () => {
    const navigate = useNavigate();

    return (
        <section className="px-6 py-16 max-w-2xl mx-auto flex flex-col items-center gap-6 text-center">

            <h2 className="font-bold text-8xl text-primary-container">404</h2>

            <h3 className="font-bold text-2xl text-on-surface">Página no encontrada</h3>

            <p className="text-on-surface-variant text-sm">
                La URL que ingresaste no existe o fue eliminada.
            </p>

            <button
                type="button"
                onClick={() => navigate("/")}
                className="btn-secondary bauhaus-interactive bauhaus-shadow px-6 py-2 font-bold uppercase tracking-wider text-sm"
            >
                Volver al inicio
            </button>

        </section>
    );
};
