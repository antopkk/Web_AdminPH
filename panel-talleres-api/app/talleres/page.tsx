"use client";
import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import { Modal, Field } from "@/components/Modal";
import { useDB, norm, nextId } from "@/lib/useDB";
import { DIAS, PROGRAMAS, pcol } from "@/lib/db";
import { validarTaller } from "@/tests/validators";
import type { DB, Taller, Estado } from "@/lib/types";
import "./talleres.css";

type Form = { id?: number; nombre: string; programa: string; recinto: string; cupo: string; estado: Estado; profesorId: string; dias: string[]; inscritos: number };
const VACIO: Form = { nombre: "", programa: "", recinto: "", cupo: "", estado: "Activo", profesorId: "", dias: [], inscritos: 0 };

function TallerForm({ initial, db, onSave, onClose }: { initial: Form; db: DB; onSave: (t: Taller) => void; onClose: () => void }) {
  const [f, setF] = useState<Form>(initial);
  const [er, setEr] = useState<Record<string, string>>({});
  const set = <K extends keyof Form>(k: K, v: Form[K]) => setF({ ...f, [k]: v });
  const toggle = (d: string) => set("dias", DIAS.filter(x => (x === d ? !f.dias.includes(d) : f.dias.includes(x))));

  const submit = () => {
    const e = validarTaller(f, db.talleres, PROGRAMAS);
    const n = f.nombre.trim(), c = Number(f.cupo);
    setEr(e);
    if (Object.keys(e).length) return;
    onSave({ id: f.id ?? 0, nombre: n, programa: f.programa, dias: f.dias, cupo: c, inscritos: f.inscritos, recinto: f.recinto.trim(), estado: f.estado, profesorId: f.profesorId ? Number(f.profesorId) : null });
  };

  return (
    <Modal title={f.id ? "Editar Taller" : "Crear Nuevo Taller"} onClose={onClose}>
      <Field label="Nombre del Taller" error={er.nombre}><input className={er.nombre ? "bad" : ""} value={f.nombre} onChange={e => set("nombre", e.target.value)} placeholder="Ej: Pilates Funcional" /></Field>
      <Field label="Programa de Salud" error={er.programa}>
        <select className={er.programa ? "bad" : ""} value={f.programa} onChange={e => set("programa", e.target.value)}>
          <option value="">— Seleccionar programa —</option>{PROGRAMAS.map(p => <option key={p}>{p}</option>)}
        </select></Field>
      <Field label="Recinto" error={er.recinto}><input className={er.recinto ? "bad" : ""} value={f.recinto} onChange={e => set("recinto", e.target.value)} placeholder="Ej: Centro Comunitario Norte" /></Field>
      <Field label="Días" error={er.dias}><div className="days">{DIAS.map(d => <button type="button" key={d} className={f.dias.includes(d) ? "on" : ""} onClick={() => toggle(d)}>{d}</button>)}</div></Field>
      <div className="row2">
        <Field label="Cupo Máximo" error={er.cupo}><input className={er.cupo ? "bad" : ""} type="number" value={f.cupo} onChange={e => set("cupo", e.target.value)} placeholder="20" /></Field>
        <Field label="Estado"><select value={f.estado} onChange={e => set("estado", e.target.value as Estado)}><option>Activo</option><option>Suspendido</option></select></Field>
      </div>
      <Field label="Asignar Profesor / Monitor">
        <select value={f.profesorId} onChange={e => set("profesorId", e.target.value)}>
          <option value="">— Sin asignar —</option>{db.profesores.map(p => <option key={p.id} value={p.id}>{p.nombre}</option>)}
        </select></Field>
      <div className="acts"><button className="btn ghost" onClick={onClose}>Cancelar</button><button className="btn" onClick={submit}>Guardar Taller</button></div>
    </Modal>
  );
}

export default function TalleresPage() {
  const { db, setDb } = useDB();
  const [q, setQ] = useState(""), [prog, setProg] = useState(""), [est, setEst] = useState("");
  const [modal, setModal] = useState<Form | null>(null);
  const prof = (id: number | null) => db.profesores.find(p => p.id === id);
  const list = db.talleres.filter(t => (!prog || t.programa === prog) && (!est || t.estado === est) &&
    (!q || norm(`${t.nombre} ${t.recinto} ${prof(t.profesorId)?.nombre ?? ""}`).includes(norm(q))));

  const save = (t: Taller) => {
    setDb(d => ({ ...d, talleres: t.id ? d.talleres.map(x => (x.id === t.id ? t : x)) : [...d.talleres, { ...t, id: nextId(d.talleres) }] }));
    setModal(null);
  };
  const toggleEstado = (t: Taller) => setDb(d => ({ ...d, talleres: d.talleres.map(x => (x.id === t.id ? { ...x, estado: x.estado === "Activo" ? "Suspendido" : "Activo" } : x)) }));
  const del = (t: Taller) => window.confirm(`¿Eliminar el taller "${t.nombre}"?`) && setDb(d => ({ ...d, talleres: d.talleres.filter(x => x.id !== t.id) }));
  const edit = (t: Taller) => setModal({ ...t, cupo: String(t.cupo), profesorId: t.profesorId ? String(t.profesorId) : "" });

  return (
    <>
      <PageHeader title="Gestión de Oferta de Talleres" />
      <div className="cont">
        <div className="tools">
          <span className="cnt">{list.length} de {db.talleres.length} talleres</span>
          <input placeholder="Buscar taller, recinto o profesor…" value={q} onChange={e => setQ(e.target.value)} />
          <select value={prog} onChange={e => setProg(e.target.value)}><option value="">Todos los programas</option>{PROGRAMAS.map(p => <option key={p}>{p}</option>)}</select>
          <select value={est} onChange={e => setEst(e.target.value)}><option value="">Todos los estados</option><option>Activo</option><option>Suspendido</option></select>
          <button className="btn" onClick={() => setModal(VACIO)}>＋ Crear Nuevo Taller</button>
        </div>
        <div className="card tbl">
          <table>
            <thead><tr><th>Nombre del taller</th><th>Programa</th><th>Días</th><th>Cupo</th><th>Recinto</th><th>Profesor</th><th>Estado</th><th>Acciones</th></tr></thead>
            <tbody>
              {list.map(t => (
                <tr key={t.id}>
                  <td className="t-nombre">{t.nombre}</td>
                  <td className="t-prog" style={{ color: pcol(t.programa) === "#9ccbec" ? "var(--blue)" : pcol(t.programa) }}>{t.programa}</td>
                  <td>{t.dias.join(" – ")}</td><td><b>{t.cupo}</b></td><td>{t.recinto}</td>
                  <td className="t-prof">{prof(t.profesorId)?.nombre ?? <span className="mut">Sin asignar</span>}</td>
                  <td><span className={`pill ${t.estado === "Activo" ? "" : "s"}`}>{t.estado}</span></td>
                  <td className="t-acts">
                    <button className="ic" title="Editar" onClick={() => edit(t)}>✏️</button>
                    <button className="ic" title={t.estado === "Activo" ? "Suspender" : "Activar"} onClick={() => toggleEstado(t)}>{t.estado === "Activo" ? "⏸️" : "▶️"}</button>
                    <button className="ic" title="Eliminar" onClick={() => del(t)}>🗑️</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {!list.length && <div className="empty">No hay talleres que coincidan con los filtros.</div>}
        </div>
      </div>
      {modal && <TallerForm initial={modal} db={db} onSave={save} onClose={() => setModal(null)} />}
    </>
  );
}
