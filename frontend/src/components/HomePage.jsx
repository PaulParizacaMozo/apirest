import { useState, useEffect } from "react";
import client from "../api/client";
import Titulo from "./Titulo";
import ListAlumno from "./ListAlumno";
import FormularioAlumno from "./FormularioAlumno";
import FormularioEditarAlumno from "./FormularioEditarAlumno";

/** Alertas con React Toastify */
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const HomePage = () => {
  const [alumnos, setAlumnos] = useState([]);               // lista de alumnos
  const [alumnoEditar, setAlumnoEditar] = useState(null);   // alumno a editar
  const [showRegistroForm, setShowRegistroForm] = useState(true); // alterna formulario

  // Ya NO hardcodeamos "http://127.0.0.1:3000/alumnos"
  // El baseURL lo pone client.js y aquí solo usamos la ruta relativa
  const RUTA = "/alumnos";

  useEffect(() => {
    obtenerAlumnos();
  }, []);

  const obtenerAlumnos = async () => {
    try {
      const { data } = await client.get(RUTA);
      setAlumnos(data);
    } catch (error) {
      console.error("Error al obtener alumnos:", error);
      toast.error("No se pudo cargar la lista de alumnos.");
    }
  };

  const eliminarAlumno = async (id) => {
    try {
      const { data } = await client.delete(`${RUTA}/${id}`);
      console.log("Alumno eliminado:", data);
      toast.error("Alumno eliminado correctamente.");
      obtenerAlumnos();
    } catch (error) {
      console.error("Error al eliminar alumno:", error);
      toast.error("No se pudo eliminar el alumno.");
    }
  };

  const obtenerDatosAlumno = async (id) => {
    try {
      const { data } = await client.get(`${RUTA}/${id}`);
      console.log("datos del alumno:", data);
      setShowRegistroForm(false);
      // tu backend devuelve un array y tomabas el primer elemento:
      setAlumnoEditar(Array.isArray(data) ? data[0] : data);
    } catch (error) {
      console.error("Error al obtener datos del alumno:", error);
      toast.error("No se pudo obtener los datos del alumno.");
    }
  };

  const agregarAlumno = async (nuevoAlumno) => {
    try {
      const { data } = await client.post(RUTA, nuevoAlumno);
      console.log("Alumno agregado:", data);
      toast.success("Alumno registrado correctamente.");
      obtenerAlumnos();
    } catch (error) {
      console.error("Error al agregar alumno:", error);
      toast.error("No se pudo registrar el alumno.");
    }
  };

  const handleActualizarAlumno = async (datosAlumno) => {
    try {
      console.log("Información del Alumno a actualizar:", datosAlumno);
      const { data } = await client.put(`${RUTA}/${datosAlumno.id}`, datosAlumno);
      console.log("Respuesta de la API:", data);
      toast.success("Alumno actualizado correctamente.");
      obtenerAlumnos();
      // Opcional: volver al formulario de registro
      setShowRegistroForm(true);
      setAlumnoEditar(null);
    } catch (error) {
      console.error("Error al actualizar los datos del alumno:", error);
      toast.error("No se pudo actualizar el alumno.");
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="row justify-content-md-center">
        <div className="col-md-5">
          <Titulo
            estado={showRegistroForm}
            setShowRegistroForm={setShowRegistroForm}
          />
          {showRegistroForm ? (
            <FormularioAlumno agregarAlumno={agregarAlumno} />
          ) : (
            <FormularioEditarAlumno
              alumno={alumnoEditar}
              handleActualizarAlumno={handleActualizarAlumno}
            />
          )}
        </div>

        <ListAlumno
          alumnos={alumnos}
          eliminarAlumno={eliminarAlumno}
          obtenerDatosAlumno={obtenerDatosAlumno}
        />
      </div>
    </>
  );
};

export default HomePage;

