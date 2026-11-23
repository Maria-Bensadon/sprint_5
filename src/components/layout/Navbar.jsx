import { ThemeSwitcher } from "../ThemeSwitcher";

export const BarraNavegacion = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-surface-container border-b border-primary-container/15">
      <h1 className="font-bold text-xl text-primary-container">
        Cursos
      </h1>
      <div className="flex items-center gap-3">
        <ThemeSwitcher />
      </div>
    </nav>
  );
};
