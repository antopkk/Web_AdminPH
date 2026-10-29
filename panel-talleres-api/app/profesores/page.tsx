"use client";
import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import { Modal, Field } from "@/components/Modal";
import { useDB, norm, nextId } from "@/lib/useDB";
import { validarProfesor } from "@/tests/validators";
import type { DB, Profesor } from "@/lib/types";
import "./profesores.css";

const VACIO: Profesor = { id: 0, nombre: "", cargo: "", especialidad: "", centro: "", email: "" };
const CAMPOS: [keyof Profesor, string, string][] = [
  ["nombre", "Nombre completo", "Ej: Claudia Peñaloza Vera"], ["cargo", "Cargo", "Ej: Kinesiólogo"],
  ["especialidad", "Especialidad", "Ej: Rehabilitación"], ["centro", "Centro", "Ej: CESFAM Padre Hurtado"], ["email", "Correo", "nombre@padrehurtado.cl"],
];

function ProfForm({ initial, db, onSave, onClose }: { initial: Profesor; db: DB; onSave: (p: Profesor) => void; onClose: () => void }) {
  const [f, setF] = useState(initial);
  const [er, setEr] = useState<Record<string, string>>({});
  const submit = () => {
    const e = validarProfesor(f, db.profesores);
    const n = f.nombre.trim();
    setEr(e);
    if (Object.keys(e).length) return;
    onSave({ ...f, nombre: n, cargo: f.cargo.trim(), especialidad: f.especialidad.trim(), centro: f.centro.trim(), email: f.email.trim() });
  };
  return (
    <Modal title={f.id ? "Editar Profesor" : "Agregar Profesor"} onClose={onClose}>
      {CAMPOS.map(([k, l, ph]) => (
        <Field key={k} label={l} error={er[k]}><input className={er[k] ? "bad" : ""} value={f[k] as string} onChange={e => setF({ ...f, [k]: e.target.value })} placeholder={ph} /></Field>
      ))}
      <div className="acts"><button className="btn ghost" onClick={onClose}>Cancelar</button><button className="btn" onClick={submit}>Guardar</button></div>
    </Modal>
  );
}

export default function ProfesoresPage() {
  const { db, setDb } = useDB();
  const [q, setQ] = useState(""), [modal, setModal] = useState<Profesor | null>(null), [sel, setSel] = useState<number | null>(null);
  const tal = (id: number) => db.talleres.filter(t => t.profesorId === id);
  const list = db.profesores.filter(p => !q || norm(`${p.nombre} ${p.cargo} ${p.especialidad} ${p.centro}`).includes(norm(q)));
  const sp = db.profesores.find(p => p.id === sel);

  const save = (p: Profesor) => {
    setDb(d => ({ ...d, profesores: p.id ? d.profesores.map(x => (x.id === p.id ? p : x)) : [...d.profesores, { ...p, id: nextId(d.profesores) }] }));
    setModal(null);
  };
  const del = (p: Profesor) => {
    if (!window.confirm(`¿Eliminar a "${p.nombre}"? Sus talleres quedarán sin asignar.`)) return;
    setDb(d => ({ profesores: d.profesores.filter(x => x.id !== p.id), talleres: d.talleres.map(t => (t.profesorId === p.id ? { ...t, profesorId: null } : t)) }));
    setSel(null);
  };

  return (
    <>
      <PageHeader title="Profesores" />
      <div className="cont">
        <div className="tools">
          <span className="cnt">{list.length} profesores</span>
          <input placeholder="Buscar profesor, cargo o centro…" value={q} onChange={e => setQ(e.target.value)} />
          <button className="btn" onClick={() => setModal(VACIO)}>＋ Agregar Profesor</button>
        </div>
        <div className="card tbl">
          <table>
            <thead><tr><th>Profesor/a</th><th>Cargo</th><th>Especialidad</th><th>Centro</th><th>Talleres asignados</th><th>Acciones</th></tr></thead>
            <tbody>
              {list.map(p => (
                <tr key={p.id} className="click" onClick={() => setSel(p.id)}>
                  <td><span className="avatar">{p.nombre.split(" ").slice(0, 2).map(w => w[0]).join("")}</span>{p.nombre}</td>
                  <td className="p-cargo">{p.cargo}</td><td className="p-esp">{p.especialidad}</td><td className="p-centro">{p.centro}</td>
                  <td>{tal(p.id).length ? tal(p.id).map(t => <span className="chip" key={t.id}>{t.nombre}</span>) : <span className="mut">Sin taller asignado</span>}</td>
                  <td onClick={e => e.stopPropagation()} style={{ whiteSpace: "nowrap" }}>
                    <button className="ic" title="Editar" onClick={() => setModal(p)}>✏️</button>
                    <button className="ic" title="Eliminar" onClick={() => del(p)}>🗑️</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {!list.length && <div className="empty">Sin resultados.</div>}
        </div>
        {sp && (
          <div className="card detail">
            <div className="detail-head">
              <div><h3>{sp.nombre}</h3><div className="detail-sub">{sp.cargo} · {sp.centro} · {sp.email}</div></div>
              <button className="ic" onClick={() => setSel(null)}>✕</button>
            </div>
            <label>TALLERES ASIGNADOS</label>
            {tal(sp.id).map(t => (
              <div key={t.id} className="detail-item">
                <div className="info"><b>{t.nombre}</b><small>{t.dias.join(" – ")} · {t.recinto}</small></div>
                <span className={`pill ${t.estado === "Activo" ? "" : "s"}`}>{t.estado}</span>
              </div>
            ))}
            {!tal(sp.id).length && <div className="mut">Sin talleres asignados.</div>}
          </div>
        )}
      </div>
      {modal && <ProfForm initial={modal} db={db} onSave={save} onClose={() => setModal(null)} />}
    </>
  );
}
