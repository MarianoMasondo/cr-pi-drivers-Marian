# 🏎️ Drivers App

**Drivers App** es una aplicación web sobre corredores de distintas categorías del automovilismo.

Permite explorar drivers, buscar por nombre, filtrar por equipo u origen, ordenarlos, ver el detalle de cada corredor y crear nuevos drivers mediante un formulario.

Los drivers creados por el usuario se guardan en una base de datos PostgreSQL y también pueden eliminarse desde la aplicación.

Este proyecto fue desarrollado por **Mariano Masondo** como una **Single Page Application** utilizando **React, Redux, Node.js, Express, Sequelize y PostgreSQL**.

---

## 🚀 Deploy

### 🌐 Frontend

https://cr-pi-drivers-marian.vercel.app

### 🛠️ Backend

https://cr-pi-drivers-marian-api.onrender.com/drivers

---

## ✨ Funcionalidades principales

- 🏁 Ver un listado de drivers de distintas categorías del automovilismo.
- 🔎 Buscar drivers por nombre.
- 🏎️ Filtrar drivers por team.
- 🧩 Filtrar drivers por origen:
  - Archivo local de datos.
  - Base de datos.
- 🔤 Ordenar drivers alfabéticamente.
- 📅 Ordenar drivers por fecha de nacimiento.
- 📄 Ver el detalle completo de cada driver.
- ➕ Crear nuevos drivers desde un formulario.
- 🗄️ Guardar drivers creados en PostgreSQL.
- 🗑️ Eliminar drivers creados por el usuario.
- 🖼️ Usar imagen por defecto cuando una imagen externa no carga.

---

## 🧰 Tecnologías utilizadas

### 🎨 Frontend

- React
- Redux
- React Router
- Axios
- JavaScript
- CSS
- Vite

### ⚙️ Backend

- Node.js
- Express
- Sequelize
- PostgreSQL
- CORS
- Dotenv

### ☁️ Deploy

- Vercel para el frontend.
- Render para el backend.
- PostgreSQL en Render para la base de datos.

---

## 📁 Estructura del proyecto

```txt
cr-pi-drivers-Marian/
├── client/   # Frontend React + Redux
└── server/   # Backend Node + Express + Sequelize
```

---

## 🔗 Rutas principales del backend

### 🏎️ Drivers

```txt
GET /drivers
```

Obtiene todos los drivers.

```txt
GET /drivers/:id
```

Obtiene el detalle de un driver por ID.

```txt
GET /drivers/name?name=nombre
```

Busca drivers por nombre.

```txt
POST /drivers
```

Crea un nuevo driver en la base de datos.

```txt
DELETE /drivers/:id
```

Elimina un driver creado por el usuario.

### 🏁 Teams

```txt
GET /teams
```

Obtiene todos los teams disponibles.

---

## 👨‍💻 Autor

Desarrollado por **Mariano Masondo**.
