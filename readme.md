# Integración de Handlebars y MongoDB en Express

## Configuración de Handlebars en Express
Se integró **Handlebars (hbs)** como motor de plantillas en una aplicación **Express**, configurándolo mediante `app.set` para definir el motor de vistas y el directorio correspondiente.  
Además, se añadieron **middlewares** esenciales que permiten el correcto procesamiento de las solicitudes, como el parseo del cuerpo de las peticiones (`express.json` y `express.urlencoded`), garantizando que los datos enviados desde formularios o en formato JSON puedan ser utilizados dentro de la aplicación.

---

## Creación y uso de vistas con Handlebars
Se crearon archivos **`.hbs`** para estructurar las vistas de la aplicación.  
En estos archivos se utilizó la **sintaxis propia de Handlebars**, como `{{}}`, `{{#each}}` y variables de contexto, permitiendo renderizar datos dinámicos enviados desde los controladores y mostrar información proveniente del backend de forma clara y reutilizable.

---

## Conexión a la base de datos MongoDB
Se estableció la conexión con **MongoDB** utilizando **Mongoose**, asegurando que el servidor solo se inicie una vez la base de datos esté correctamente conectada.  
Esto permite una comunicación estable entre la aplicación y la base de datos, evitando errores de operaciones antes de que la conexión esté lista.

---

## Definición del Schema y creación del Modelo
Se creó un **Schema** de Mongoose para definir la estructura de los documentos, estableciendo las **reglas y tipos de datos** que debe cumplir cada registro.  
A partir de este schema se exportó un **Modelo**, el cual actúa como la interfaz principal para interactuar con la base de datos, facilitando la creación, consulta y modificación de documentos.

---

## Operaciones CRUD desde los Routes
Desde los **routes** de Express se implementaron distintas operaciones utilizando métodos HTTP como **GET** y **POST**.  
Estas rutas permiten:
- Obtener información almacenada en la base de datos.
- Enviar nuevos datos para ser guardados.
  
De esta manera, se conectó el flujo completo entre vistas, lógica del servidor y persistencia de datos.

---
