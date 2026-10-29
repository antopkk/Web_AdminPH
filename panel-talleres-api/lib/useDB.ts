"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import type { DB } from "./types";
import { SEED_DB } from "./db";
export { norm, nextId } from "./utils";

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:4000/api";
type Updater = DB | ((previous: DB) => DB);

/** Lee los datos de la API simulada y sincroniza los cambios con su memoria. */
export function useDB() {
  const [db, setDbState] = useState<DB>(SEED_DB);
  const dbRef = useRef<DB>(SEED_DB);
  const [ready, setReady] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    fetch(`${API_URL}/db`)
      .then(response => {
        if (!response.ok) throw new Error(`API respondió ${response.status}`);
        return response.json() as Promise<DB>;
      })
      .then(data => {
        if (active) {
          dbRef.current = data;
          setDbState(data);
          setApiError(null);
        }
      })
      .catch(() => {
        if (active) setApiError("No se pudo conectar con la API simulada (puerto 4000). Se muestran datos de ejemplo locales.");
      })
      .finally(() => { if (active) setReady(true); });
    return () => { active = false; };
  }, []);

  const setDb = useCallback((updater: Updater) => {
    const next = typeof updater === "function" ? updater(dbRef.current) : updater;
    dbRef.current = next;
    setDbState(next);
    // La API mantiene los cambios en memoria, sin persistirlos en disco.
    fetch(`${API_URL}/db`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(next),
    }).then(response => {
      if (!response.ok) throw new Error(`API respondió ${response.status}`);
      setApiError(null);
    }).catch(() => setApiError("No se pudo enviar el cambio a la API. Comprueba que el puerto 4000 esté activo."));
  }, []);

  return { db, setDb, ready, apiError };
}
