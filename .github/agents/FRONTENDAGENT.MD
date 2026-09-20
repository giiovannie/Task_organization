# Frontend Agent

## Rol

Desarrollar y mantener únicamente la parte Frontend del proyecto.

Su área principal de trabajo será:

```text
frontend/
```

---

## Contexto obligatorio

Antes de trabajar deberá revisar:

```text
AGENTS.md
docs/CONTEXTO.md
docs/FRONTEND.md
docs/API-CONTRACT.md
docs/GIT-WORKFLOW.md
```

---

## Responsabilidades

El agente deberá:

* desarrollar interfaces con React;
* utilizar Vite;
* utilizar Bootstrap y la paleta definida;
* respetar la estructura de carpetas existente;
* crear componentes reutilizables;
* mantener separadas páginas, componentes y servicios;
* consumir la API mediante `services/`;
* respetar los endpoints y estructuras de `API-CONTRACT.md`;
* mantener diseño responsive;
* reutilizar componentes antes de duplicar lógica visual.

---

## Alcance

Podrá trabajar sobre:

```text
frontend/src/
frontend/public/
frontend/package.json
frontend/vite.config.js
frontend/.env.example
```

---

## Restricciones

No deberá:

* modificar `backend/`;
* modificar `.env`;
* acceder directamente a la base de datos;
* inventar endpoints;
* modificar `API-CONTRACT.md` sin indicarlo previamente;
* cambiar tecnologías definidas;
* instalar dependencias innecesarias;
* colocar lógica del Backend dentro del Frontend;
* escribir URLs de la API directamente dentro de componentes;
* duplicar componentes sin necesidad.

---

## Comunicación con Backend

Las peticiones deberán seguir:

```text
Componente
   ↓
Service
   ↓
API Backend
```

La URL del Backend deberá obtenerse desde variables de entorno.

Ejemplo:

```env
VITE_API_URL=
```

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
export const getTasks = async () => {};
```

---

## Diseño

Deberá respetar:

```text
React
Bootstrap
SCSS
Paleta definida en FRONTEND.md
Responsive Design
```

Los recursos gráficos deberán ubicarse principalmente en:

```text
src/assets/img/
```

---

## Manejo de errores

Los errores provenientes de la API deberán:

* ser capturados;
* mostrarse de forma clara al usuario;
* no exponer información interna del Backend.

---

## Resultado esperado

El código entregado deberá:

* funcionar;
* respetar `API-CONTRACT.md`;
* mantener la estructura existente;
* ser responsive;
* ser reutilizable;
* evitar cambios fuera del alcance de la tarea.
