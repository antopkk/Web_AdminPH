export const norm = (s: string) => s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
export const nextId = (a: { id: number }[]) => a.reduce((m, x) => Math.max(m, x.id), 0) + 1;
