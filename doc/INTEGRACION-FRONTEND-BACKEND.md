# Integración entre Frontend y Backend

## Objetivo

Definir cómo se comunicarán el frontend y el backend del proyecto para evitar inconsistencias durante el desarrollo.

El frontend y el backend se desarrollarán de forma separada, pero deberán respetar una interfaz común de comunicación basada en una API.

---

## Arquitectura general

La comunicación seguirá esta estructura:

```text
Frontend
   │
   │ HTTP
   ▼
Backend API
   │
   ▼
Base de Datos
```

El frontend no deberá acceder directamente a la base de datos.

Toda la información deberá pasar primero por el backend.

---

## Responsabilidad del Frontend

El frontend será responsable de:

* mostrar la información al usuario;
* capturar los datos ingresados;
* realizar peticiones al backend;
* mostrar respuestas y errores;
* actualizar la interfaz según los datos recibidos.

Ejemplo:

```text
Usuario crea una tarea
        ↓
Frontend captura los datos
        ↓
POST /api/tasks
        ↓
Backend procesa la petición
```

---

## Responsabilidad del Backend

El backend será responsable de:

* recibir las peticiones del frontend;
* validar los datos;
* aplicar la lógica del sistema;
* consultar o modificar la base de datos;
* devolver una respuesta al frontend.

Ejemplo:

```text
POST /api/tasks
       ↓
Validación
       ↓
Controlador
       ↓
Base de Datos
       ↓
Respuesta JSON
```

---

## Comunicación mediante API

La comunicación se realizará mediante peticiones HTTP.

Los métodos principales serán:

```text
GET     obtener información
POST    crear información
PUT     actualizar información
DELETE  eliminar información
```

Ejemplo:

```text
GET /api/tasks
```

Respuesta:

```json
[
  {
    "id": 1,
    "title": "Trabajo práctico",
    "completed": false
  }
]
```

---

## Rutas base

Todas las rutas del backend deberán comenzar con:

```text
/api
```

Ejemplos:

```text
/api/users
/api/subjects
/api/tasks
/api/exams
/api/profiles
```

---

## Contrato entre Frontend y Backend

Antes de desarrollar una funcionalidad que dependa de ambos lados, se deberá acordar:

* ruta;
* método HTTP;
* datos enviados;
* datos recibidos;
* códigos de respuesta;
* estructura de errores.

Ejemplo:

```text
POST /api/tasks
```

Frontend envía:

```json
{
  "title": "Estudiar Sequelize",
  "subject_id": 2,
  "due_date": "2026-10-10"
}
```

Backend responde:

```json
{
  "id": 15,
  "title": "Estudiar Sequelize",
  "subject_id": 2,
  "due_date": "2026-10-10",
  "completed": false
}
```

---

## Códigos de respuesta

Se deberán utilizar códigos HTTP coherentes.

```text
200  operación correcta
201  recurso creado
400  datos inválidos
401  no autenticado
404  recurso no encontrado
500  error interno
```

---

## Manejo de errores

El backend deberá devolver errores con una estructura consistente.

Ejemplo:

```json
{
  "message": "La tarea no fue encontrada"
}
```

El frontend será responsable de mostrar ese error de forma entendible para el usuario.

---

## Variables de entorno

La URL del backend no deberá quedar escrita directamente en los componentes del frontend.

Ejemplo:

```text
VITE_API_URL=http://localhost:3000/api
```

Luego el frontend utilizará esa variable para realizar las peticiones.

Esto permitirá cambiar fácilmente entre:

```text
desarrollo
producción
```

---

## Desarrollo local

Durante el desarrollo se podrá trabajar con puertos diferentes.

Ejemplo:

```text
Frontend
http://localhost:5173

Backend
http://localhost:3000
```

El frontend realizará peticiones a:

```text
http://localhost:3000/api
```

---

## CORS

El backend deberá permitir las peticiones provenientes del frontend mediante configuración de CORS.

Ejemplo conceptual:

```text
Frontend :5173
      ↓
Backend :3000
```

Sin una configuración correcta de CORS, el navegador podría bloquear las peticiones entre ambos servicios.

---

## División de trabajo

El equipo de Frontend podrá avanzar utilizando contratos de API previamente definidos, incluso si algunos endpoints todavía no están terminados.

El equipo de Backend deberá respetar las rutas, nombres de campos y formatos acordados.

Ejemplo:

```text
Frontend
espera:

GET /api/tasks

Backend
debe devolver:

[
  {
    "id": 1,
    "title": "...",
    "completed": false
  }
]
```

No se deberá cambiar la estructura de respuesta sin avisar al equipo que trabaja en frontend.

---

## Flujo recomendado

```text
1. Se define la funcionalidad
        ↓
2. Se acuerda el endpoint
        ↓
3. Backend implementa la API
        ↓
4. Frontend consume la API
        ↓
5. Se prueba la integración
```

---

## Regla principal

Frontend y backend deberán considerarse módulos independientes.

La unión entre ambos será el contrato de la API.

```text
Frontend
   │
   │ JSON + HTTP
   ▼
API Backend
   │
   ▼
Base de Datos
```

Si el contrato se mantiene estable, ambos equipos podrán trabajar en paralelo sin depender constantemente del código interno del otro.
