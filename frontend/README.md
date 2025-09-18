# CRUD Full Stack - Gestión de Alumnos

**Sistema completo de gestión de estudiantes con Node.js, Express, MySQL y React**

![Resultado final](https://raw.githubusercontent.com/urian121/imagenes-proyectos-github/master/crud-full-stack-con-node-y-react.png)

## 🚀 Tecnologías

- **Backend:** Node.js + Express + MySQL
- **Frontend:** React + Vite + Axios
- **Base de datos:** MySQL (tabla `tbl_alumnos`)
- **Notificaciones:** React Toastify

## 📋 Funcionalidades

- ✅ Crear estudiantes
- ✅ Listar todos los estudiantes
- ✅ Editar información de estudiantes
- ✅ Eliminar estudiantes
- ✅ Validación de formularios
- ✅ Notificaciones de éxito/error

## 🛠️ Instalación

### 1. Configurar Backend

```bash
cd apirest
npm install
node server.js
```

### 2. Configurar Frontend

```bash
npm install
npm run dev
```

### 3. Base de Datos

Importar el archivo `db/init.sql` en MySQL

## 🌐 URLs

- **Frontend:** <http://localhost:5173>
- **API Backend:** <http://localhost:3000>
- **Endpoints:** `/alumnos` (GET, POST, PUT, DELETE)
