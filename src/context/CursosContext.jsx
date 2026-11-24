import { createContext, useContext, useState, useEffect } from "react";

import {
  getCursos,
  getCursoById,
  createCurso,
  updateCurso,
  deleteCurso,
} from "../services/cursosService";

// 1. crear el contexto
const CursoContext = createContext(null);

// 2. proveedor
export const CursosProvider = ({ children }) => {
  const [cursos, setCursos] = useState([]);
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState(null);

  // cargar todos los cursos
  const cargarCursos = async () => {
    setCargando(true);
    setError(null);

    try {
      const data = await getCursos();
      setCursos(data);
    } catch (error) {
      setError("No se pudieron cargar los cursos.");
    } finally {
      setCargando(false);
    }
  };

  // obtener un curso por id
  const obtenerCursoPorId = async (id) => {
    try {
      const data = await getCursoById(id);
      return data;
    } catch (error) {
      setError("No se pudo cargar el curso.");
    }
  };

  // agregar curso
  const agregarCurso = async (curso) => {
    setCargando(true);
    setError(null);

    try {
      const nuevo = await createCurso(curso);
      setCursos((prev) => [...prev, nuevo]);
    } catch (error) {
      setError("No se pudo crear el curso.");
    } finally {
      setCargando(false);
    }
  };

  // editar curso
  const editarCurso = async (id, curso) => {
    setCargando(true);
    setError(null);

    try {
      const actualizado = await updateCurso(id, curso);
      setCursos((prev) =>
        prev.map((item) => (item.id === id ? actualizado : item)),
      );
    } catch (error) {
      setError("No se pudo editar el curso.");
    } finally {
      setCargando(false);
    }
  };

  // eliminar curso
  const eliminarCurso = async (id) => {
    setCargando(true);
    setError(null);

    try {
      await deleteCurso(id);
      setCursos((prev) => prev.filter((item) => item.id !== id));
    } catch (error) {
      setError("No se pudo eliminar el curso.");
    } finally {
      setCargando(false);
    }
  };

  // cargar al montar el provider
  useEffect(() => {
    cargarCursos();
  }, []);

  return (
    <CursoContext.Provider
      value={{
        cursos,
        cargando,
        error,
        cargarCursos,
        obtenerCursoPorId,
        agregarCurso,
        editarCurso,
        eliminarCurso,
      }}
    >
      {children}
    </CursoContext.Provider>
  );
};

// 3. hook
export const useCursos = () => {
  const context = useContext(CursoContext);

  if (!context) {
    throw new Error("useCursos() tiene que usarse dentro de <CursosProvider>");
  }

  return context;
};
