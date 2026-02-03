# 📝 Task Manager CRUD

Sistema de gestión de tareas (To-Do List) desarrollado con **Node.js**, **Express** y **MongoDB**. La aplicación permite realizar las operaciones básicas de creación, lectura, actualización y eliminación de tareas, siguiendo una arquitectura de capas (Controller, Service, Domain).

🚀 **Demo en vivo:** [https://tasks-x97j.onrender.com/](https://tasks-x97j.onrender.com/)

---

## 🛠️ Tecnologías utilizadas

* **Backend:** Node.js con Express.
* **Base de Datos:** MongoDB (vía Mongoose o Driver Nativo).
* **Arquitectura:** Separación de responsabilidades (Routes -> Controllers -> Services -> Domain).
* **Despliegue:** Render.

---

## 🏗️ Arquitectura del Proyecto

El proyecto está organizado para separar la lógica de infraestructura de la lógica de negocio:

* **Routes:** Define los puntos de entrada (endpoints).
* **Controllers:** Maneja la comunicación HTTP (`req`, `res`) y delega al servicio.
* **Services:** Orquesta la lógica de la aplicación y la comunicación con la base de datos.
* **Domain (Models):** Define la estructura de la tarea y las reglas de negocio.

---

## 🛣️ Endpoints de la API

| Método | Ruta | Descripción |
| --- | --- | --- |
| **GET** | `/` | Obtiene todas las tareas. |
| **POST** | `/task/add` | Crea una nueva tarea. |
| **GET** | `/task/edit/:id` | Obtiene una tarea específica por ID para edición. |
| **POST** | `/task/edit/:id` | Actualiza los datos de una tarea. |
| **GET** | `/task/toggleDone/:id` | Cambia el estado de la tarea (Completada/Pendiente). |
| **GET** | `/task/delete/:id` | Elimina una tarea del sistema. |

---

## 🚀 Instalación y Uso

1. **Clonar el repositorio:**
```bash
git clone https://github.com/tu-usuario/nombre-del-repo.git
cd nombre-del-repo

```


2. **Instalar dependencias:**
```bash
npm install

```


3. **Configurar variables de entorno:**
Crea un archivo `.env` en la raíz y añade tu cadena de conexión a MongoDB:
```env
MONGO_URI=tu_conexion_a_mongodb
PORT=3000

```


4. **Arrancar la aplicación:**
```bash
npm start


