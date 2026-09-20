# Frontend

## Objetivo

El frontend será responsable de toda la interfaz visual y de la interacción del usuario con la aplicación.

Permitirá al estudiante visualizar y gestionar:

* materias;
* profesores;
* tareas;
* actividades de estudio;
* exámenes;
* calificaciones;
* notas personales;
* notificaciones;
* perfil.

El frontend deberá consumir exclusivamente la API definida en `API-CONTRACT.md`.

No deberá acceder directamente a la base de datos.

---

# Tecnologías

El frontend utilizará:

```text
React
Vite
Bootstrap
JavaScript
SCSS
```

### React

Será utilizado para construir la interfaz mediante componentes reutilizables.

### Vite

Será utilizado como herramienta de desarrollo y construcción del proyecto.

### Bootstrap

Será utilizado como base para:

* sistema de grillas;
* responsive;
* formularios;
* botones;
* tarjetas;
* modales;
* utilidades visuales.

Bootstrap podrá ser personalizado mediante SCSS para respetar la identidad visual del proyecto.

### SCSS

Se utilizará principalmente para personalizar las variables internas de Bootstrap y mantener los colores globales del proyecto.

---

# Estructura de carpetas

La estructura base será:

```text
frontend/
│
├── public/
│
├── src/
│   │
│   ├── assets/
│   │   ├── img/
│   │   ├── icons/
│   │   └── fonts/
│   │
│   ├── components/
│   │   ├── common/
│   │   └── ui/
│   │
│   ├── pages/
│   │
│   ├── layouts/
│   │
│   ├── routes/
│   │
│   ├── services/
│   │
│   ├── hooks/
│   │
│   ├── context/
│   │
│   ├── utils/
│   │
│   ├── styles/
│   │   ├── variables.css
│   │   ├── bootstrap.scss
│   │   └── global.css
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── .env.example
├── index.html
├── package.json
└── vite.config.js
```

---

# Responsabilidad de las carpetas

## `assets/`

Contendrá los recursos visuales utilizados por la aplicación.

```text
assets/
├── img/
├── icons/
└── fonts/
```

### `img/`

Contendrá imágenes propias del proyecto:

* logos;
* fondos;
* ilustraciones;
* imágenes de apoyo;
* recursos visuales.

Ejemplo:

```jsx
import logo from "../assets/img/logo.png";
```

---

## `components/`

Contendrá componentes reutilizables.

Ejemplos:

```text
Navbar
Sidebar
TaskCard
SubjectCard
ExamCard
NotificationItem
Button
Modal
```

### `components/common/`

Componentes reutilizados en diferentes partes de la aplicación.

### `components/ui/`

Componentes principalmente visuales o de interfaz.

---

## `pages/`

Contendrá las pantallas principales.

Ejemplos:

```text
Home
Dashboard
Subjects
Tasks
Exams
Profile
Login
Register
```

Una página podrá utilizar varios componentes.

---

## `layouts/`

Contendrá estructuras visuales compartidas.

Ejemplo:

```text
MainLayout
AuthLayout
```

Un layout podrá contener elementos como:

```text
Navbar
Sidebar
Contenido
Footer
```

---

## `routes/`

Contendrá la configuración de navegación entre páginas.

Las rutas de la interfaz deberán mantenerse separadas de los componentes visuales.

---

## `services/`

Contendrá la comunicación con la API del backend.

Ejemplos:

```text
auth.service.js
tasks.service.js
subjects.service.js
exams.service.js
profile.service.js
```

Los componentes no deberán repetir directamente la lógica de conexión HTTP.

El flujo recomendado será:

```text
Componente
    ↓
Service
    ↓
API Backend
```

---

## `hooks/`

Contendrá hooks personalizados reutilizables.

Ejemplos:

```text
useAuth
useTasks
useNotifications
```

---

## `context/`

Contendrá estados globales cuando sea necesario compartir información entre diferentes partes de la aplicación.

Ejemplo:

```text
AuthContext
UserContext
```

No se deberá colocar todo el estado de la aplicación de forma global si puede mantenerse localmente en un componente.

---

## `utils/`

Contendrá funciones auxiliares que puedan reutilizarse.

Ejemplos:

```text
formatDate.js
calculateDaysRemaining.js
validators.js
```

---

# Comunicación con el Backend

El frontend deberá comunicarse con el backend mediante HTTP y JSON.

La URL de la API deberá obtenerse desde una variable de entorno.

Ejemplo:

```env
VITE_API_URL=http://localhost:3000/api
```

No deberán escribirse URLs del backend directamente dentro de componentes.

Ejemplo incorrecto:

```js
fetch("http://localhost:3000/api/tasks");
```

La comunicación deberá centralizarse dentro de `services/`.

---

# API Contract

Todas las peticiones deberán respetar:

```text
docs/API-CONTRACT.md
```

Frontend no deberá modificar unilateralmente:

```text
endpoints
métodos HTTP
nombres de propiedades
estructuras JSON
estados
```

Si se necesita modificar el contrato, primero deberá actualizarse y acordarse el cambio.

---

# Diseño Responsive

La interfaz deberá funcionar correctamente tanto en computadora como en dispositivos móviles.

Se aprovechará principalmente el sistema responsive de Bootstrap.

La interfaz deberá adaptarse como mínimo a:

```text
Mobile
Tablet
Desktop
```

No deberán utilizarse tamaños fijos que dificulten la adaptación de la interfaz.

---

# Identidad visual

La aplicación utilizará una estética orientada a productividad y organización académica.

La interfaz deberá transmitir:

```text
organización
claridad
concentración
tranquilidad
productividad
```

Se evitarán colores excesivamente saturados y estilos visuales infantiles.

---

# Paleta de colores

## Color primario

```css
--color-primary: #9A3412;
```

Uso recomendado:

* botones principales;
* acciones destacadas;
* elementos activos;
* identidad visual principal.

---

## Color secundario

```css
--color-secondary: #4D7C0F;
```

Uso recomendado:

* acciones secundarias;
* indicadores;
* elementos complementarios.

---

## Color de acento

```css
--color-accent: #CA8A04;
```

Uso recomendado:

* detalles;
* indicadores;
* elementos destacados;
* información relevante.

---

# Fondos

## Fondo principal

```css
--bg-main: #FAF8F5;
```

Será utilizado como fondo general de la aplicación.

## Fondo secundario

```css
--bg-secondary: #F3EFE6;
```

Podrá utilizarse en:

* secciones;
* paneles secundarios;
* sidebar;
* áreas diferenciadas.

## Tarjetas

```css
--bg-card: #FFFFFF;
```

Será utilizado en:

* tarjetas de materias;
* tareas;
* exámenes;
* paneles;
* formularios.

---

# Tipografía

## Texto principal

```css
--text-main: #271C19;
```

Utilizado en:

* títulos;
* contenido principal;
* información importante.

## Texto secundario

```css
--text-secondary: #786C66;
```

Utilizado en:

* descripciones;
* información auxiliar;
* fechas;
* metadata.

---

# Estados

## Éxito

```css
--color-success: #16A34A;
```

Ejemplos:

```text
Tarea completada
Operación realizada correctamente
```

## Advertencia

```css
--color-warning: #EA580C;
```

Ejemplos:

```text
Entrega próxima
Examen cercano
```

## Error

```css
--color-danger: #DC2626;
```

Ejemplos:

```text
Error de validación
Error de servidor
Acción destructiva
```

## Información

```css
--color-info: #0284C7;
```

Ejemplos:

```text
Notificaciones
Mensajes informativos
Información adicional
```

---

# Variables globales

Archivo:

```text
src/styles/variables.css
```

Contenido:

```css
:root {
  --color-primary: #9A3412;
  --color-secondary: #4D7C0F;
  --color-accent: #CA8A04;

  --bg-main: #FAF8F5;
  --bg-secondary: #F3EFE6;
  --bg-card: #FFFFFF;

  --text-main: #271C19;
  --text-secondary: #786C66;

  --color-success: #16A34A;
  --color-warning: #EA580C;
  --color-danger: #DC2626;
  --color-info: #0284C7;
}
```

Estas variables deberán utilizarse como referencia para estilos personalizados.

---

# Personalización de Bootstrap

Archivo:

```text
src/styles/bootstrap.scss
```

Bootstrap deberá sobrescribirse antes de ser importado.

```scss
$primary: #9A3412;
$secondary: #4D7C0F;
$success: #16A34A;
$info: #0284C7;
$warning: #EA580C;
$danger: #DC2626;

$light: #F3EFE6;
$dark: #271C19;

$body-bg: #FAF8F5;
$body-color: #271C19;
$card-bg: #FFFFFF;

@import "bootstrap/scss/bootstrap";
```

Para poder utilizar SCSS será necesario tener Sass instalado en el proyecto.

```bash
npm install -D sass
```

---

# Estilos globales

El archivo:

```text
src/styles/global.css
```

se utilizará únicamente para estilos generales que no puedan resolverse mediante Bootstrap.

Por ejemplo:

```css
body {
  background-color: var(--bg-main);
  color: var(--text-main);
}
```

Se deberá evitar crear CSS personalizado innecesario cuando Bootstrap ya proporcione una utilidad equivalente.

---

# Estados visuales de tareas

Las tareas deberán diferenciar visualmente su estado.

```text
Pendiente
En progreso
Completada
```

Ejemplo conceptual:

```text
Pendiente
→ estilo normal

En progreso
→ indicador informativo

Completada
→ indicador de éxito + tarea tachada
```

---

# Fechas importantes

Las fechas próximas deberán poder diferenciarse visualmente.

Ejemplo:

```text
Examen lejano
→ estado normal

Examen próximo
→ warning

Examen inmediato
→ danger
```

La lógica exacta de cuántos días corresponden a cada estado podrá definirse durante el desarrollo.

---

# Componentes y reutilización

Antes de crear un componente nuevo se deberá comprobar si existe uno reutilizable.

Se deberá evitar duplicar componentes que tengan prácticamente la misma responsabilidad.

Ejemplo:

```text
TaskCard
ExamCard
SubjectCard
```

pueden compartir determinados componentes visuales internos sin necesidad de convertirse en un único componente complejo.

---

# Reglas generales

El frontend deberá:

* respetar `API-CONTRACT.md`;
* utilizar React mediante componentes;
* mantener separación entre páginas, componentes y servicios;
* utilizar Bootstrap como base visual;
* respetar la paleta definida;
* utilizar la estructura de carpetas establecida;
* mantener compatibilidad responsive;
* centralizar las llamadas HTTP dentro de `services/`;
* evitar lógica de negocio correspondiente al backend;
* mantener nombres de archivos y componentes claros.

---

# Alcance del Frontend

El frontend podrá:

```text
mostrar datos
capturar datos
validar información básica
realizar peticiones HTTP
manejar navegación
manejar estados visuales
mostrar notificaciones
```

El frontend no deberá:

```text
acceder directamente a la base de datos
implementar reglas críticas exclusivamente del lado cliente
almacenar información sensible de forma insegura
modificar contratos de API unilateralmente
```
