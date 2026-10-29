// Reglas de validación puras (sin React), usadas por los formularios y por /tests.
import { norm } from "../lib/utils";

export type Errors = Record<string, string>;
export interface TallerInput { id?: number; nombre: string; programa: string; recinto: string; cupo: string | number; dias: string[] }
export interface ProfesorInput { id?: number; nombre: string; cargo: string; especialidad: string; centro: string; email: string }

export function validarTaller(f: TallerInput, existentes: { id: number; nombre: string }[], programas: string[]): Errors {
  const e: Errors = {};
  const n = f.nombre.trim(), c = Number(f.cupo);
  if (n.length < 3) e.nombre = "Mínimo 3 caracteres.";
  else if (existentes.some(t => t.id !== f.id && norm(t.nombre) === norm(n))) e.nombre = "Ya existe un taller con ese nombre.";
  if (!f.programa || !programas.includes(f.programa)) e.programa = "Selecciona un programa de salud.";
  if (f.recinto.trim().length < 3) e.recinto = "Ingresa el recinto.";
  if (String(f.cupo).trim() === "" || !Number.isInteger(c) || c < 1 || c > 200) e.cupo = "Entero entre 1 y 200.";
  if (!f.dias.length) e.dias = "Selecciona al menos un día.";
  return e;
}

export function validarProfesor(f: ProfesorInput, existentes: { id: number; nombre: string }[]): Errors {
  const e: Errors = {};
  const n = f.nombre.trim();
  if (n.length < 3) e.nombre = "Mínimo 3 caracteres.";
  else if (existentes.some(p => p.id !== f.id && norm(p.nombre) === norm(n))) e.nombre = "Este profesor ya está registrado.";
  if (!f.cargo.trim()) e.cargo = "Ingresa el cargo.";
  if (!f.especialidad.trim()) e.especialidad = "Ingresa la especialidad.";
  if (!f.centro.trim()) e.centro = "Ingresa el centro.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email.trim())) e.email = "Correo electrónico inválido.";
  return e;
}
