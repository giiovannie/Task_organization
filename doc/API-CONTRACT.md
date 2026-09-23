# API Contract

## Objetivo

Definir el contrato de comunicación entre el Frontend y el Backend del proyecto.

Este documento establece:

* endpoints disponibles;
* métodos HTTP;
* parámetros;
* body esperado;
* estructura de las respuestas;
* códigos de estado;
* formato de errores.

Frontend y Backend deberán respetar este contrato durante el desarrollo.

---

# Configuración general

## URL base

Durante desarrollo local:

```text id="11ht0o"
http://localhost:3000/api
```

Ejemplo:

```text id="cvn5dn"
GET http://localhost:3000/api/tasks
```

En Frontend se deberá utilizar una variable de entorno:

```env id="ipbk0m"
VITE_API_URL=http://localhost:3000/api
```

---

# Formato general

La comunicación entre Frontend y Backend utilizará:

```text id="wpeqtz"
HTTP
+
JSON
```

Las peticiones que envíen información deberán utilizar:

```http id="8xsmxa"
Content-Type: application/json
```

---

# Códigos HTTP

Se utilizarán principalmente:

| Código | Uso                                 |
| ------ | ----------------------------------- |
| `200`  | operación realizada correctamente   |
| `201`  | recurso creado correctamente        |
| `204`  | operación correcta sin contenido    |
| `400`  | datos enviados incorrectos          |
| `401`  | usuario no autenticado              |
| `403`  | usuario sin permisos                |
| `404`  | recurso no encontrado               |
| `409`  | conflicto con información existente |
| `500`  | error interno del servidor          |

---