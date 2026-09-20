# Contexto del Proyecto

## Descripción general

El proyecto consiste en una aplicación de organización académica orientada a estudiantes.

Su objetivo principal es permitir que el usuario pueda organizar sus materias, tareas, exámenes, fechas importantes y notas personales desde una sola aplicación.

La aplicación deberá poder utilizarse tanto en computadora como en dispositivos móviles y deberá poder instalarse o descargarse en ambos tipos de dispositivos.

---

## Problema a resolver

Los estudiantes suelen manejar información académica en distintos lugares: cuadernos, calendarios, notas del celular, mensajes o simplemente de memoria.

Esto puede provocar que olviden:

* tareas pendientes;
* fechas de entrega;
* exámenes;
* actividades que deben estudiar;
* notas o indicaciones relacionadas con una materia.

La aplicación busca centralizar toda esta información y permitir que el estudiante pueda consultar rápidamente qué tiene pendiente y cuánto tiempo falta para cada actividad importante.

---

## Usuario principal

El usuario principal será un estudiante que necesita organizar sus actividades académicas.

Cada usuario tendrá un perfil propio que podrá personalizar con información como:

* nombre;
* apellido;
* apodo;
* datos básicos de perfil;
* preferencias personales de la aplicación.

---

## Materias

El usuario podrá registrar las materias que cursa.

Cada materia deberá contener información como:

* nombre de la materia;
* profesor responsable;
* tareas asociadas;
* exámenes asociados;
* actividades de estudio relacionadas.

Las materias funcionarán como el principal elemento de organización de la aplicación.

Ejemplo:

```text
Programación
│
├── Profesor: Juan Pérez
│
├── Tareas
│   ├── Trabajo práctico API
│   └── Ejercicio Sequelize
│
└── Exámenes
    ├── Parcial 1
    └── Recuperatorio
```

---

## Tareas

Dentro de cada materia el estudiante podrá crear tareas pendientes.

Cada tarea deberá permitir registrar como mínimo:

* título;
* descripción;
* materia asociada;
* fecha de creación;
* fecha de entrega;
* estado;
* notas personales.

Los estados principales podrán ser:

```text
Pendiente
En progreso
Completada
```

Cuando el estudiante finalice una tarea deberá poder marcarla como completada o tacharla.

Las tareas completadas deberán conservarse como parte del historial académico del usuario.

---

## Notas dentro de las tareas

Cada tarea deberá permitir que el estudiante escriba información adicional.

Estas notas podrán utilizarse para registrar, por ejemplo:

```text
- temas que debe investigar;
- indicaciones dadas por el profesor;
- materiales necesarios;
- enlaces importantes;
- dudas;
- recordatorios personales.
```

---

## Exámenes

El usuario podrá registrar los exámenes correspondientes a cada materia.

Cada examen deberá almacenar información como:

* materia;
* nombre o tipo de examen;
* fecha;
* contenido o temas a estudiar;
* estado;
* nota obtenida.

Antes del examen la aplicación deberá mostrar cuánto tiempo falta.

Ejemplo:

```text
Base de Datos

Parcial 1
Fecha: 25/09/2026

Faltan:
5 días
```

Una vez realizado el examen, el estudiante podrá registrar la calificación obtenida.

Los exámenes realizados deberán mantenerse almacenados como historial.

---

## Actividades de estudio

Además de tareas y exámenes, el estudiante podrá registrar actividades relacionadas con estudio.

Por ejemplo:

```text
Estudiar normalización
Repasar JOIN
Leer capítulo 3
Practicar ejercicios de matrices
```

Estas actividades deberán estar asociadas a una materia y podrán tener una fecha objetivo.

---

## Notificaciones y recordatorios

La aplicación deberá avisar al estudiante sobre fechas importantes.

Principalmente:

* tareas próximas a vencer;
* exámenes próximos;
* actividades de estudio pendientes.

Para los exámenes deberá mostrar cuánto tiempo falta hasta la fecha registrada.

Ejemplo:

```text
Parcial de Matemática

Fecha:
28/09/2026

Faltan:
8 días
```

---

## Perfil del usuario

Cada estudiante tendrá un perfil personalizable.

El perfil podrá incluir:

```text
nombre
apellido
apodo
imagen de perfil
preferencias
```

La aplicación podrá utilizar esta información para personalizar la experiencia del usuario.

---

## Persistencia de datos

La aplicación deberá contar con una base de datos.

Como mínimo deberán persistirse:

```text
Usuarios
Perfiles
Materias
Profesores
Tareas
Notas de tareas
Exámenes
Calificaciones
Fechas
Actividades de estudio
```

La información no deberá perderse cuando el usuario cierre la aplicación.

---

## Relaciones principales

De forma conceptual, el sistema tendrá una estructura similar a:

```text
Usuario
│
├── Perfil
│
└── Materias
      │
      ├── Profesor
      │
      ├── Tareas
      │     └── Notas
      │
      ├── Exámenes
      │     └── Calificación
      │
      └── Actividades de estudio
```

---

## Compatibilidad

La aplicación deberá estar disponible para:

```text
Computadora
+
Dispositivos móviles
```

El usuario deberá poder instalarla o descargarla para utilizarla desde sus dispositivos.

La interfaz deberá adaptarse correctamente a diferentes tamaños de pantalla.

---

## Funcionalidades principales

La aplicación deberá permitir:

1. Crear y personalizar un perfil.
2. Registrar materias.
3. Registrar el profesor de cada materia.
4. Crear tareas dentro de una materia.
5. Establecer fechas de entrega.
6. Marcar tareas como completadas.
7. Agregar notas dentro de cada tarea.
8. Registrar actividades de estudio.
9. Registrar exámenes.
10. Mostrar cuánto falta para un examen.
11. Registrar la nota obtenida en un examen.
12. Consultar tareas pendientes.
13. Consultar exámenes próximos.
14. Mantener un historial de tareas y exámenes.
15. Guardar toda la información en una base de datos.
16. Utilizar la aplicación desde computadora o celular.

---

## Objetivo general

Construir una aplicación académica multiplataforma que permita al estudiante centralizar y organizar sus materias, tareas, exámenes y actividades de estudio, facilitando el seguimiento de sus responsabilidades y fechas importantes.
