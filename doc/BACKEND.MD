# Backend — Estándar de Desarrollo

## 1. Objetivo

Este documento define cómo debe escribirse y estructurarse el código Backend del proyecto.

Todo código nuevo deberá respetar los patrones definidos en este documento.

Si una funcionalidad nueva necesita una implementación que no esté definida aquí, deberá utilizar el patrón existente más cercano y mantener el mismo estilo general del proyecto.

No deberá introducir una forma diferente de trabajar cuando ya exista un patrón establecido.

---

# 2. Tecnologías

El Backend utiliza:

```text
Node.js
Express
Sequelize
MySQL
mysql2
express-validator
bcryptjs
jsonwebtoken
cookie-parser
```

Se utilizará:

```text
ES Modules
```

No utilizar:

```js
require()
```

---

# 3. Idioma del código

Los nombres utilizados en el código deberán estar en inglés.

Esto incluye:

* variables;
* funciones;
* modelos;
* parámetros;
* archivos cuando corresponda;
* nombres de propiedades;
* nombres de helpers;
* nombres de middlewares;
* nombres de validaciones.

Ejemplos:

```js
const cleanData = matchedData(req);
const hashedPassword = await hashPassword(cleanData.password);
const user = await UserModel.findByPk(id);
```

No utilizar nombres nuevos mezclando idiomas sin una razón concreta.

Las librerías deberán conservar sus nombres originales.

Ejemplo:

```js
import { matchedData } from "express-validator";
import Sequelize from "sequelize";
```

---

# 4. Mensajes de respuesta

Aunque el código utilice nombres en inglés, todos los mensajes enviados al cliente deberán estar en español.

Ejemplo:

```js
return res.status(200).json({
  message: "Usuario obtenido correctamente",
});
```

No utilizar:

```js
message: "User obtained successfully"
```

Los mensajes deberán ser claros, simples y descriptivos.

---

# 5. Formato de respuestas

Las respuestas deberán utilizar siempre:

```js
return res.status(CODIGO).json({
  ...
});
```

No utilizar respuestas diferentes sin una necesidad concreta.

---

## 5.1 Respuestas GET

Cuando un endpoint GET obtiene información, la respuesta deberá contener:

1. `message`
2. el recurso o recursos obtenidos.

Ejemplo:

```js
return res.status(200).json({
  message: "Usuarios obtenidos correctamente",
  users,
});
```

Para un único recurso:

```js
return res.status(200).json({
  message: "Usuario obtenido correctamente",
  user,
});
```

La propiedad deberá utilizar el nombre correspondiente al recurso.

---

# 6. Imports y exports

Se utilizará siempre ES Modules.

Los imports deberán utilizar la extensión `.js`.

Ejemplo:

```js
import { UserModel } from "../models/user.model.js";
import { ProfileModel } from "../models/profile.model.js";
```

Las funciones, modelos y utilidades deberán exportarse mediante:

```js
export const functionName = () => {};
```

o:

```js
export const UserModel = ...
```

No utilizar `export default` cuando exista un export nombrado adecuado.

---

# 7. Funciones

Las funciones deberán utilizar Arrow Functions.

Ejemplo:

```js
export const getUsers = async (req, res) => {
};
```

No utilizar:

```js
export async function getUsers(req, res) {
}
```

ni:

```js
function getUsers(req, res) {
}
```

cuando se trate de funciones propias del proyecto.

---

# 8. Async / Await

Las operaciones asíncronas deberán utilizar:

```js
async / await
```

Evitar utilizar `.then()` y `.catch()` para la lógica principal del Backend cuando pueda utilizarse `async/await`.

Ejemplo:

```js
const users = await UserModel.findAll();
```

---

# 11. Desestructuración

Se deberá utilizar desestructuración cuando ayude a obtener claramente los datos necesarios.

Ejemplo:

```js
const { id } = matchedData(req);
```

Para actualizar:

```js
const { id, ...cleanData } = matchedData(req);
```

No realizar desestructuraciones innecesariamente complejas.

La prioridad es mantener el código simple y legible.

---

# 36. Código simple

El código deberá priorizar:

```text
claridad
simplicidad
consistencia
mantenibilidad
```

Evitar:

* abstracciones innecesarias;
* funciones excesivamente complejas;
* patrones avanzados sin necesidad;
* código excesivamente compacto;
* soluciones difíciles de entender.

El código deberá ser comprensible para un desarrollador que está aprendiendo el proyecto.

---

# 37. Regla principal de consistencia

Cuando sea necesario crear una funcionalidad que no esté definida explícitamente en este documento, el agente deberá buscar primero el patrón existente más cercano.

Ejemplo:

Si necesita crear un nuevo CRUD:

```text
observar CRUD existente
        ↓
copiar estructura conceptual
        ↓
adaptar nombres y datos
        ↓
mantener mismo estilo
```

No deberá introducir una segunda forma de realizar la misma tarea.

---

# 38. Regla de no introducir patrones alternativos

Si el proyecto ya tiene una forma definida para realizar una tarea, esa forma tendrá prioridad.

Por ejemplo:

```text
sequelize.define()
```

no deberá reemplazarse por:

```text
Model.init()
```

Si existe:

```text
export const UserModel
```

no deberá reemplazarse por:

```text
export default UserModel
```

Si existe:

```text
matchedData(req)
```

no deberá reemplazarse por:

```text
req.body
```

Si existe:

```text
Router()
```

no deberá reemplazarse por otra estructura de routing.

La consistencia con el proyecto tiene prioridad sobre preferencias personales del agente.

---

# 39. Regla final

Todo código nuevo deberá responder a esta regla:

```text
¿Existe una forma de hacerlo en el proyecto?
        ↓
SÍ
→ utilizar esa misma forma.
        ↓
NO
→ crear una solución simple,
→ coherente con la arquitectura,
→ coherente con el estilo existente,
→ sin introducir patrones innecesarios.
```

El objetivo es que una persona pueda leer código existente y código nuevo y sentir que ambos fueron escritos siguiendo el mismo criterio.