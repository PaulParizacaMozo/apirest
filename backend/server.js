// Importa las dependencias necesarias
import express from "express";
import cors from "cors";
import usuariosRouter from "./Router/router.js"; // Importa el enrutador de usuarios

const app = express();

// Configura el middleware para parsear el cuerpo de las solicitudes JSON
app.use(express.json());

// Configura el middleware para permitir solicitudes desde diferentes dominios
//app.use(cors());

const corsOrigin = process.env.CORS_ORIGIN || "*";
app.use(cors({ origin: corsOrigin }));

// Monta el enrutador de usuarios en la ruta '/usuarios'
app.use("/alumnos", usuariosRouter);

// Define el puerto en el que escuchará el servidor
const PORT = process.env.PORT || 3001;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Servidor API escuchando en http://0.0.0.0:${PORT}`);
});
