const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");

const PORT = Number(process.env.API_PORT || 4000);
const dataDir = path.join(__dirname, "data");
const readJson = (file) => JSON.parse(fs.readFileSync(path.join(dataDir, file), "utf8"));
// Datos cargados en memoria: los cambios se pierden al reiniciar el servidor.
let db = readJson("db.json");
const config = readJson("config.json");
const stats = readJson("stats.json");

function send(res, status, body) {
  res.writeHead(status, {
    "Content-Type": "application/json; charset=utf-8",
    "Access-Control-Allow-Origin": "http://localhost:3000",
    "Access-Control-Allow-Methods": "GET, PUT, POST, PATCH, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  });
  res.end(body === undefined ? "" : JSON.stringify(body));
}
function readBody(req) {
  return new Promise((resolve, reject) => {
    let raw = "";
    req.on("data", chunk => { raw += chunk; if (raw.length > 1_000_000) reject(new Error("Cuerpo demasiado grande")); });
    req.on("end", () => {
      if (!raw) return resolve({});
      try { resolve(JSON.parse(raw)); } catch { reject(new Error("JSON inválido")); }
    });
    req.on("error", reject);
  });
}
function nextId(items) { return items.reduce((max, item) => Math.max(max, Number(item.id) || 0), 0) + 1; }
function collectionFor(pathname) {
  if (pathname === "/api/profesores" || pathname.startsWith("/api/profesores/")) return "profesores";
  if (pathname === "/api/talleres" || pathname.startsWith("/api/talleres/")) return "talleres";
  return null;
}

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host || "localhost"}`);
  const pathname = url.pathname.replace(/\/$/, "") || "/";
  if (req.method === "OPTIONS") return send(res, 204);
  if (req.method === "GET" && pathname === "/api/health") return send(res, 200, { status: "ok", modo: "simulado", puerto: PORT });
  if (req.method === "GET" && pathname === "/api/db") return send(res, 200, db);
  if (req.method === "PUT" && pathname === "/api/db") {
    try {
      const body = await readBody(req);
      if (!body || !Array.isArray(body.profesores) || !Array.isArray(body.talleres)) return send(res, 400, { error: "Se requiere un objeto con arreglos profesores y talleres." });
      db = { profesores: body.profesores, talleres: body.talleres };
      return send(res, 200, db);
    } catch (e) { return send(res, 400, { error: e.message }); }
  }
  if (req.method === "GET" && pathname === "/api/config") return send(res, 200, config);
  if (req.method === "GET" && pathname === "/api/stats") return send(res, 200, stats);

  const collection = collectionFor(pathname);
  if (collection) {
    const parts = pathname.split("/").filter(Boolean);
    const id = parts.length === 3 ? Number(parts[2]) : null;
    const items = db[collection];
    if (req.method === "GET" && id === null) return send(res, 200, items);
    if (req.method === "GET" && id !== null) {
      const item = items.find(x => x.id === id);
      return item ? send(res, 200, item) : send(res, 404, { error: "Registro no encontrado" });
    }
    if (req.method === "POST" && id === null) {
      try {
        const body = await readBody(req);
        const item = { ...body, id: body.id || nextId(items) };
        db[collection] = [...items, item];
        return send(res, 201, item);
      } catch (e) { return send(res, 400, { error: e.message }); }
    }
    if ((req.method === "PUT" || req.method === "PATCH") && id !== null) {
      try {
        const body = await readBody(req);
        const index = items.findIndex(x => x.id === id);
        if (index < 0) return send(res, 404, { error: "Registro no encontrado" });
        const item = { ...items[index], ...body, id };
        db[collection] = items.map((x, i) => i === index ? item : x);
        return send(res, 200, item);
      } catch (e) { return send(res, 400, { error: e.message }); }
    }
    if (req.method === "DELETE" && id !== null) {
      const exists = items.some(x => x.id === id);
      if (!exists) return send(res, 404, { error: "Registro no encontrado" });
      db[collection] = items.filter(x => x.id !== id);
      if (collection === "profesores") db.talleres = db.talleres.map(t => t.profesorId === id ? { ...t, profesorId: null } : t);
      return send(res, 200, { eliminado: true, id });
    }
  }
  return send(res, 404, { error: "Ruta no encontrada", ruta: pathname });
});

server.listen(PORT, "0.0.0.0", () => console.log(`API simulada disponible en http://localhost:${PORT}/api`));
