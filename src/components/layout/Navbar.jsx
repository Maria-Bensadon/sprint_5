import { NavLink } from "react-router";
import { ThemeSwitcher } from "../ThemeSwitcher";

export const BarraNavegacion = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-surface-container border-b border-primary-container/15">
      <NavLink to="/" className="font-bold text-xl text-primary-container">
        Cursos
      </NavLink>
      <div className="flex items-center gap-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `text-sm font-bold ${isActive ? "text-primary" : "text-on-surface-variant hover:text-on-surface"}`
          }
        >
          Inicio
        </NavLink>
        <NavLink
          to="/cursos/nuevo"
          className={({ isActive }) =>
            `text-sm font-bold ${isActive ? "text-primary" : "text-on-surface-variant hover:text-on-surface"}`
          }
        >
          Agregar curso
        </NavLink>
        <ThemeSwitcher />
      </div>
    </nav>
  );
};
