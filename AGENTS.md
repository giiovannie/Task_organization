# AGENTS

## Objetivo

Definir las reglas generales que deberán respetar todos los agentes que trabajen sobre el proyecto.

Estas reglas tienen prioridad sobre las instrucciones específicas de cada agente.

---

## Reglas generales

Los agentes deberán:

* respetar la estructura actual del proyecto;
* consultar la documentación dentro de `docs/` antes de realizar cambios importantes;
* respetar `API-CONTRACT.md`;
* respetar `GIT-WORKFLOW.md`;
* modificar únicamente los archivos necesarios para la tarea actual;
* evitar cambios innecesarios fuera del alcance solicitado;
* mantener el código simple, legible y consistente con el proyecto existente;
* conservar nombres, patrones y convenciones ya utilizadas cuando no exista una razón clara para modificarlos.

---

## Variables de entorno

Los agentes **no deberán leer, modificar, crear ni eliminar el archivo `.env`**.

Únicamente podrán trabajar sobre:

```text
.env.example
```

Si una funcionalidad necesita una nueva variable de entorno, deberá agregarse únicamente a `.env.example`.

Ejemplo:

```env
JWT_SECRET=
FRONTEND_URL=
```

El valor real deberá ser configurado manualmente por el equipo.

---

## Seguridad

Los agentes no deberán:

* escribir contraseñas, tokens o claves directamente en el código;
* exponer secretos en commits;
* guardar credenciales dentro de la documentación;
* desactivar validaciones o medidas de seguridad para resolver errores rápidamente;
* almacenar contraseñas sin hashing;
* incluir información sensible en logs.

---

## Git

Los agentes no deberán realizar cambios directamente sobre `main`.

El flujo deberá respetar:

```text
main
└── develop
    └── feature/...
```

No deberán realizar:

```text
push --force
```

ni modificar el historial de Git sin autorización explícita.

Los commits deberán respetar `docs/GIT-WORKFLOW.md`.

---

## Alcance de los agentes

Cada agente deberá trabajar únicamente dentro de su responsabilidad.

```text
frontend.agent.md
→ frontend/

backend.agent.md
→ backend/

planner.agent.md
→ planificación

reviewer.agent.md
→ revisión
```

Un agente no deberá modificar otra área salvo que la tarea lo requiera explícitamente.

---

## Documentación

Los archivos dentro de:

```text
docs/
```

serán considerados fuente de contexto del proyecto.

Los agentes deberán consultarlos antes de tomar decisiones sobre:

* arquitectura;
* API;
* tecnologías;
* estructura;
* Git;
* responsabilidades de Frontend y Backend.

No deberán modificar documentación sin que el cambio esté relacionado con una decisión real del proyecto.

---

## Dependencias

Los agentes no deberán instalar dependencias nuevas sin que sean necesarias para la tarea.

Antes de agregar una dependencia deberán comprobar que la funcionalidad no pueda resolverse con las herramientas ya utilizadas por el proyecto.

No deberán eliminar dependencias existentes sin verificar previamente que ya no sean utilizadas.

---

## Base de datos

Los agentes no deberán modificar la estructura de la base de datos de forma arbitraria.

Los cambios en:

```text
modelos
relaciones
claves foráneas
tipos de datos
```

deberán mantenerse consistentes con Backend y con el contrato de la API.

No deberán eliminar datos o tablas como forma de solucionar errores.

---

## Código

Los agentes deberán evitar:

* duplicar lógica;
* crear archivos innecesarios;
* dejar código muerto;
* dejar imports sin utilizar;
* crear funciones excesivamente grandes;
* cambiar nombres existentes sin necesidad;
* mezclar responsabilidades entre módulos.

---

## Errores

Ante un error, el agente deberá:

1. identificar la causa;
2. corregir el problema real;
3. evitar soluciones temporales que oculten el error;
4. mantener compatibilidad con el resto del proyecto.

---

## Restricciones importantes

Los agentes no deberán:

* modificar `.env`;
* cambiar tecnologías definidas sin autorización;
* modificar `API-CONTRACT.md` unilateralmente;
* trabajar directamente sobre `main`;
* eliminar archivos que no estén relacionados con la tarea;
* rehacer módulos completos si una corrección puntual es suficiente;
* cambiar la arquitectura sin justificación;
* realizar cambios destructivos en la base de datos;
* introducir dependencias innecesarias.

---

## Prioridad de información

Ante conflictos entre instrucciones, utilizar este orden:

```text
1. Instrucción directa del equipo
2. AGENTS.md
3. Documentación de docs/
4. Archivo específico del agente
5. Código existente
```
