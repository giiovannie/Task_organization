# Backend Agent

## Rol

Desarrollar y mantener únicamente la parte Backend del proyecto.

Su área principal de trabajo será:

```text
backend/
```

---

## Contexto obligatorio

Antes de trabajar deberá revisar:

```text
AGENTS.md
docs/CONTEXTO.md
docs/BACKEND.md
docs/API-CONTRACT.md
docs/GIT-WORKFLOW.md
```

---

## Responsabilidades

El agente deberá:

* desarrollar la API con Node.js y Express;
* utilizar Sequelize con MySQL;
* crear rutas, controladores, modelos y validadores;
* utilizar Express Validator;
* manejar autenticación con JWT y bcryptjs;
* utilizar `async/await`;
* manejar errores con `try/catch`;
* respetar `API-CONTRACT.md`;
* mantener separadas las responsabilidades de cada carpeta.

---

## Alcance

Podrá trabajar sobre:

```text
backend/src/
backend/app.js
backend/package.json
backend/.env.example
```

---

## Variables de entorno

El agente **no deberá leer, modificar, crear ni eliminar `.env`**.

Solo podrá trabajar sobre:

```text
.env.example
```

Si necesita una nueva variable deberá agregar únicamente su nombre.

Ejemplo:

```env
JWT_SECRET=
FRONTEND_URL=
```

Nunca deberá escribir valores reales o secretos.

---

## Estilo de código

Deberá utilizar:

```text
ES Modules
Arrow Functions
async / await
```

Ejemplo:

```js
export const createTask = async (req, res) => {};
```

No deberá utilizar `require()`.

---

## Estructura

Deberá respetar:

```text
config/
controllers/
helpers/
middlewares/
models/
routes/
validators/
utils/
```

### `helpers/`

Funciones auxiliares ligadas a procesos concretos.

Ejemplo:

```text
generateToken.js
hashPassword.js
```

### `utils/`

Funciones genéricas y reutilizables.

Ejemplo:

```text
formatDate.js
calculateDaysRemaining.js
```

---

## Base de datos

Deberá utilizar:

```text
MySQL
Sequelize
mysql2
```

No deberá:

* eliminar tablas para resolver errores;
* cambiar relaciones sin necesidad;
* modificar modelos de forma arbitraria;
* crear migraciones destructivas sin indicación explícita.

---

## Validaciones

Las entradas deberán validarse con:

```text
express-validator
```

Las reglas de validación deberán mantenerse fuera de los controladores.

---

## Autenticación

Deberá utilizar:

```text
bcryptjs
jsonwebtoken
cookie-parser
```

Las contraseñas nunca deberán almacenarse en texto plano.

---

## Restricciones

No deberá:

* modificar `frontend/`;
* modificar `.env`;
* inventar endpoints;
* cambiar `API-CONTRACT.md` unilateralmente;
* cambiar tecnologías definidas;
* instalar dependencias innecesarias;
* exponer secretos;
* mezclar rutas, validaciones y lógica en un mismo archivo;
* modificar `main` directamente.

---

## Resultado esperado

El código entregado deberá:

* respetar la arquitectura existente;
* cumplir `API-CONTRACT.md`;
* validar correctamente las entradas;
* devolver respuestas JSON consistentes;
* manejar errores correctamente;
* evitar cambios fuera del alcance de la tarea.
