export type Estado = "Activo" | "Suspendido";
export interface Profesor { id: number; nombre: string; cargo: string; especialidad: string; centro: string; email: string }
export interface Taller { id: number; nombre: string; programa: string; dias: string[]; cupo: number; inscritos: number; recinto: string; profesorId: number | null; estado: Estado }
export interface DB { profesores: Profesor[]; talleres: Taller[] }
export interface Stats {
  asistenciaMensual: [string, number][]; metaAsistencia: number; desercion: number; nuevosMes: number;
  edades: [string, number][]; asistenciaPrograma: Record<string, number>;
}
