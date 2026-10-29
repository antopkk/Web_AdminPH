# API simulada para Panel de Talleres

La aplicación web Next.js se ejecuta en el puerto **3000** y la API en el **4000**. No se usa una base de datos real: el servidor carga `data/db.json` al iniciar y mantiene las modificaciones en memoria. Al reiniciar la API, los datos vuelven a los valores del JSON.

## Requisitos
- Node.js 20.9 o superior (por Next.js 16).

## Instalación y ejecución
En la carpeta raíz del proyecto, ejecuta `npm install`. Abre dos terminales:

Terminal 1 (API):
```bash
npm run api
```

Terminal 2 (web):
```bash
npm run dev
```

Web: http://localhost:3000
API: http://localhost:4000/api/health

También puedes usar `npm run dev:all` para levantar ambos procesos en paralelo.

## Endpoints disponibles
- `GET /api/health` estado de la API.
- `GET /api/db` obtiene profesores y talleres.
- `PUT /api/db` reemplaza los datos simulados que consume el panel.
- `GET /api/config` programas, días y colores.
- `GET /api/stats` estadísticas del dashboard.
- `GET /api/profesores` y `GET /api/profesores/:id`.
- `POST /api/profesores`, `PUT/PATCH /api/profesores/:id`, `DELETE /api/profesores/:id`.
- Los mismos métodos para `/api/talleres`.

## Importante
Los cambios se mantienen solamente mientras el proceso de API está ejecutándose. No se escriben archivos JSON ni se requiere MySQL. La web usa `NEXT_PUBLIC_API_URL` y por defecto apunta a `http://localhost:4000/api`.
