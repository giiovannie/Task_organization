# Convenciones de Git y Commits

## Objetivo

Definir una forma única de trabajar con ramas, commits y merges durante el desarrollo del proyecto.

Estas reglas deberán ser respetadas por todos los integrantes del equipo y también por los agentes de IA que trabajen sobre el repositorio.

---

## Estructura de ramas

La rama principal del proyecto será:

```text
main
```

Desde `main` deberá crearse:

```text
develop
```

La rama `develop` será utilizada como rama principal de integración durante el desarrollo.

La estructura general será:

```text
main
└── develop
    ├── feature/...
    ├── feature/...
    └── feature/...
```

Las nuevas funcionalidades no deberán desarrollarse directamente sobre `main` ni sobre `develop`.

Cada funcionalidad deberá trabajar en una rama propia creada a partir de `develop`.

---

## Ramas de funcionalidades

Las ramas destinadas al desarrollo de funcionalidades deberán comenzar con:

```text
feature/
```

Ejemplos:

```text
feature/task-creation
feature/subject-management
feature/exam-notifications
feature/user-profile
```

El nombre deberá indicar claramente qué funcionalidad se está desarrollando.

---

## Ramas relacionadas con autenticación

Cuando una rama pertenezca al módulo de autenticación, deberá comenzar indicando primero la funcionalidad específica que se está trabajando.

Ejemplos:

```text
feature/login-auth
feature/register-auth
feature/logout-auth
feature/password-recovery-auth
```

Se deberá evitar utilizar nombres demasiado generales como:

```text
feature/auth
```

si dentro de la rama se trabaja solamente una parte específica del sistema de autenticación.

---

## Convención de commits

Todos los commits deberán utilizar la siguiente estructura:

```text
tipo(pie): descripción
```

El `tipo` indicará la naturaleza del cambio.

El `pie` indicará la sección, módulo o parte del proyecto donde se realizó el cambio.

Ejemplo:

```text
feat(tasks): se agregó la creación de tareas
```

---

## Tipos permitidos

### `feat`

Se utilizará cuando se haya agregado una nueva funcionalidad.

```text
feat(tasks): se agregó la creación de tareas
```

```text
feat(profile): se agregó la personalización del perfil
```

---

### `refactor`

Se utilizará cuando se haya modificado código existente sin cambiar su comportamiento principal.

```text
refactor(tasks): se reorganizó la lógica de creación de tareas
```

```text
refactor(database): se separaron las consultas de la lógica del controlador
```

---

### `chore`

Se utilizará para configuraciones, dependencias o tareas de mantenimiento que no correspondan directamente a una funcionalidad.

```text
chore(project): se configuraron las variables de entorno
```

```text
chore(dependencies): se actualizaron las dependencias del proyecto
```

---

### `docs`

Se utilizará cuando se haya modificado documentación.

```text
docs(git): se documentaron las convenciones de commits
```

```text
docs(context): se actualizó el contexto general del proyecto
```

---

### `styles`

Se utilizará cuando se hayan realizado cambios exclusivamente visuales o de estilos.

```text
styles(profile): se modificaron los estilos del perfil
```

```text
styles(tasks): se ajustó el diseño de las tarjetas de tareas
```

---

### `fix`

Se utilizará cuando se haya corregido un error.

```text
fix(login): se corrigió la validación de credenciales
```

```text
fix(tasks): se corrigió el cambio de estado de las tareas
```

---

## Redacción de los commits

Las descripciones de los commits deberán escribirse en verbo pasado.

Ejemplos correctos:

```text
feat(tasks): se agregó la creación de tareas

fix(login): se corrigió la validación del usuario

refactor(profile): se reorganizó la lógica del perfil

docs(context): se actualizó la descripción del proyecto
```

Ejemplos incorrectos:

```text
feat(tasks): agregar creación de tareas

fix(login): corrigiendo validación

docs(context): actualizar contexto
```

La descripción deberá indicar qué cambio ya fue realizado.

---

## Pie o alcance del commit

El contenido entre paréntesis deberá indicar dónde se realizó el cambio.

Ejemplos:

```text
feat(frontend): se agregó la vista principal

feat(backend): se agregó el endpoint de tareas

fix(database): se corrigió la relación entre tareas y materias

styles/navbar): se modificó la navegación principal
```

Siempre deberá utilizarse un nombre corto y representativo.

---

## Flujo de trabajo

El flujo general del proyecto será:

```text
main
  ↓
develop
  ↓
feature/nueva-funcionalidad
```

Cuando una funcionalidad esté terminada y revisada:

```text
feature/nueva-funcionalidad
        ↓
     develop
```

La rama `develop` irá acumulando las funcionalidades terminadas del proyecto.

Durante el desarrollo:

```text
main
│
└── develop
    │
    ├── feature/login-auth
    ├── feature/task-creation
    ├── feature/subject-management
    └── feature/user-profile
```

---

## Finalización del proyecto

Cuando el desarrollo esté completo y la versión integrada en `develop` haya sido probada correctamente, deberá realizarse el merge final:

```text
develop
   ↓
main
```

La rama `main` deberá representar siempre la versión final, estable y funcional del proyecto.

No deberán realizarse desarrollos directamente sobre `main`.

---

## Resumen de reglas

```text
main
└── develop
    └── feature/...
```

Los commits deberán:

```text
tipo(pie): descripción en pasado
```

Tipos permitidos:

```text
feat
refactor
chore
docs
styles
fix
```

Ejemplo completo:

```text
feat(exams): se agregó el registro de fechas de examen
```
