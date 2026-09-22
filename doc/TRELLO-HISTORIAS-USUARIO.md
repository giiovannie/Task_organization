# Flujo para historias de usuario en Trello

Este procedimiento registra cómo crear una historia de usuario en Trello y conservar el contexto para futuras implementaciones.

## Procedimiento

1. Consultar en Engram las memorias relacionadas con Trello para recuperar el tablero, la lista y las convenciones del proyecto.
2. Obtener el miembro autenticado mediante Trello MCP (`trelloReadMember`, acción `get_me`).
3. Buscar el tablero por nombre mediante `trelloSearch` con la acción `search_boards`.
4. Listar las listas del tablero con `trelloReadList` y localizar `Funcionalidades/historias de usuarios`.
5. Leer la lista para comprobar historias existentes y evitar duplicados.
6. Crear la tarjeta mediante `trelloWriteCard` con:
   - un título con formato de historia: `Como [tipo de usuario], quiero [acción], para [beneficio]`;
   - una descripción funcional;
   - criterios de aceptación verificables;
   - posición `bottom` para conservar el orden de las historias.
7. Guardar en Engram la decisión, el enlace de Trello, el tablero, la lista y cualquier criterio relevante.
8. Registrar en este repositorio los detalles del flujo que deban ser reutilizados por futuras funciones.

## Ejemplo registrado

La historia creada para el registro de credenciales fue:

> Como usuario, quiero registrarme para guardar mis credenciales por primera vez.

Se ubicó en el tablero `hack-formosa-2026`, dentro de `Funcionalidades/historias de usuarios`, y sus criterios indican que un usuario sin cuenta debe ser dirigido al registro antes de guardar credenciales.

## Reglas para futuros cambios

- No guardar credenciales, tokens ni datos sensibles en Trello, Engram o el repositorio.
- Verificar la lista y sus tarjetas antes de crear una historia nueva.
- Separar la creación de la historia en Trello de la implementación de código.
- Usar una rama `feature/*` para implementar una funcionalidad; no trabajar directamente sobre `main` o `develop`.
- Usar el formato de commit `docs(trello): se documentó el flujo de historias de usuario` para cambios exclusivamente documentales.
