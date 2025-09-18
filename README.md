# CRUD Full Stack - Gestión de Alumnos

**Sistema completo de gestión de estudiantes con Node.js, Express, MySQL y React (Vite)**  

---

## 🚀 Tecnologías

- **Backend:** Node.js + Express + MySQL
- **Frontend:** React + Vite + Axios
- **Base de datos:** MySQL (con tabla `tbl_alumnos` + datos iniciales desde `init.sql`)
- **Notificaciones:** React Toastify

---

## 📋 Funcionalidades

- ✅ Crear estudiantes  
- ✅ Listar todos los estudiantes  
- ✅ Editar información de estudiantes  
- ✅ Eliminar estudiantes  
- ✅ Validación de formularios  
- ✅ Notificaciones de éxito/error  

---

## 🐳 Ejecución con Docker Compose

### 1. Clonar el repositorio

```bash
git clone https://github.com/PaulParizacaMozo/apirest
cd apirest
````

### 2. Construir e iniciar los servicios

> ⚠️ La primera vez, borra volúmenes para que se cree la base de datos con datos iniciales.

```bash
docker compose down -v
docker compose up --build
```

### 3. Servicios disponibles

- **Frontend (React + Vite, con hot reload):** [http://localhost:5173](http://localhost:5173)
- **API Backend (Express):** [http://localhost:3001](http://localhost:3001)

---

## 📂 Estructura de carpetas

```
.
├── backend/     # API REST con Node.js y Express
├── frontend/    # Aplicación en React (Vite)
├── db/          # Dockerfile + init.sql con tabla y seed
└── docker-compose.yml
```

---

## 🌐 Endpoints principales

- **GET** `/alumnos` → Lista de estudiantes
- **POST** `/alumnos` → Crear estudiante
- **PUT** `/alumnos/:id` → Actualizar estudiante
- **DELETE** `/alumnos/:id` → Eliminar estudiante
