# Backend

## Tecnologías

```text
Node.js
Express
Express Validator
bcryptjs
MySQL2
Sequelize
dotenv
jsonwebtoken
cors
cookie-parser
```

---

## Estándares de código

El proyecto utilizará **ES Modules**.

```js
import express from "express";
```

En `package.json`:

```json
{
  "type": "module"
}
```

Las funciones deberán escribirse mediante **arrow functions**.

```js
export const getTasks = async (req, res) => {};
```

Las operaciones asíncronas deberán manejarse con:

```text
async / await
```

Se utilizará `try/catch` para el manejo de errores.

---

## Estructura base

```text
backend/
├── src/
│   ├── config/
│   ├── controllers/
│   ├── helpers/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── validators/
│   └── utils/
│
├── app.js
├── .env
├── .env.example
└── package.json
```

---

## Responsabilidad de carpetas

### `config/`

Configuraciones generales del backend.

Ejemplo:

```text
database.js
```

### `controllers/`

Contendrá la lógica asociada a las peticiones HTTP.

### `helpers/`

Contendrá funciones auxiliares relacionadas directamente con procesos concretos del backend.

Ejemplos:

```text
generateToken.js
hashPassword.js
comparePassword.js
```

### `utils/`

Contendrá funciones genéricas y reutilizables que no dependan directamente de una funcionalidad específica.

Ejemplos:

```text
formatDate.js
calculateDaysRemaining.js
```

La diferencia será:

```text
helpers/
→ ayudan a procesos específicos del sistema

utils/
→ contienen utilidades genéricas reutilizables
```

### `middlewares/`

Contendrá middlewares como:

```text
autenticación
validación
manejo de errores
```

### `models/`

Contendrá los modelos y relaciones de Sequelize.

### `routes/`

Definirá los endpoints de la API.

### `validators/`

Contendrá las reglas de validación realizadas con Express Validator.

---

## Base de datos

Se utilizará:

```text
MySQL
+
Sequelize
+
mysql2
```

La conexión deberá obtener sus datos desde variables de entorno.

---

## Autenticación

Se utilizarán:

```text
bcryptjs
jsonwebtoken
cookie-parser
```

`bcryptjs` permitirá hashear y comparar contraseñas.

`jsonwebtoken` se utilizará para generar y verificar tokens.

`cookie-parser` permitirá leer y manejar cookies cuando sea necesario.

---

## Validaciones

Las entradas recibidas por la API deberán validarse mediante:

```text
express-validator
```

Las validaciones deberán mantenerse separadas de los controladores.

---

## CORS

Se utilizará:

```text
cors
```

para permitir la comunicación entre Frontend y Backend.

---

## Variables de entorno

La información sensible deberá almacenarse en `.env`.

`.env.example` deberá indicar qué variables necesita el proyecto sin incluir valores privados.

```env
PORT=
DB_NAME=
DB_USER=
DB_PASSWORD=
DB_HOST=
JWT_SECRET=
FRONTEND_URL=
```

`.env` deberá incluirse en `.gitignore`.

---

## Reglas generales

El backend deberá:

* respetar `API-CONTRACT.md`;
* utilizar ES Modules;
* utilizar arrow functions;
* trabajar asincronía con `async/await`;
* manejar errores con `try/catch`;
* utilizar Sequelize para acceso a datos;
* validar entradas con Express Validator;
* mantener secretos en `.env`;
* separar rutas, controladores, modelos, validadores, helpers y utilidades;
* devolver respuestas JSON consistentes.
