// Carga los datos desde /data/*.json. Para usar una API, reemplaza estos imports por fetch().
import type { DB, Stats } from "./types";
import seed from "../data/db.json";
import config from "../data/config.json";
import stats from "../data/stats.json";

export const SEED_DB = seed as DB;
export const STATS = stats as unknown as Stats;
export const PROGRAMAS: string[] = config.programas;
export const DIAS: string[] = config.dias;
export const PCOL: string[] = config.colores;
export const pcol = (p: string) => PCOL[PROGRAMAS.indexOf(p)] ?? "#999";
