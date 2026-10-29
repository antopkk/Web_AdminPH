"use client";
import PageHeader from "@/components/PageHeader";
import { useDB } from "@/lib/useDB";
import { PCOL, PROGRAMAS, STATS, pcol } from "@/lib/db";
import "./dashboard.css";

export default function DashboardPage() {
  const { db } = useDB();
  const T = db.talleres;
  const activos = T.filter(t => t.estado === "Activo").length;
  const enrolados = T.reduce((s, t) => s + t.inscritos, 0);
  const asis = STATS.asistenciaMensual[STATS.asistenciaMensual.length - 1][1];
  const pts = STATS.asistenciaMensual.map(([m, v], i) => ({ x: 40 + i * 120, y: 190 - (v - 50) * 3.4, m }));
  const tot = STATS.edades.reduce((s, e) => s + e[1], 0);
  let acc = 0;
  const resumen = PROGRAMAS.map(p => ({ p, ins: T.filter(t => t.programa === p).reduce((s, t) => s + t.inscritos, 0), pct: STATS.asistenciaPrograma[p] }));

  return (
    <>
      <PageHeader title="Tablero Analítico" />
      <div className="cont">
        <div className="grid4">
          <div className="card kpi"><small>Talleres Activos</small><b style={{ color: "var(--blue)" }}>{activos}</b><small>{T.length} registrados</small></div>
          <div className="card kpi"><small>Asistencia General</small><b style={{ color: "var(--green)" }}>{asis}%</b><small>Meta: {STATS.metaAsistencia}%</small></div>
          <div className="card kpi"><small>Tasa de Deserción</small><b style={{ color: "var(--red)" }}>{STATS.desercion}%</b><small>▲ 2.1% vs anterior</small></div>
          <div className="card kpi"><small>Usuarios Enrolados</small><b style={{ color: "var(--brown)" }}>{enrolados}</b><small>{STATS.nuevosMes} nuevos en sep.</small></div>
        </div>
        <div className="grid2">
          <div className="card">
            <h3>Asistencia Mensual</h3><div className="sub">Abril – Septiembre 2026</div>
            <svg viewBox="0 0 640 230" width="100%">
              {[50, 65, 80, 100].map(v => (
                <g key={v}><line x1="40" x2="640" y1={190 - (v - 50) * 3.4} y2={190 - (v - 50) * 3.4} stroke="#eee" strokeDasharray="4" />
                  <text x="0" y={194 - (v - 50) * 3.4} fontSize="11" fill="#999">{v}</text></g>
              ))}
              <polyline fill="none" stroke="#1f5f99" strokeWidth="2.5" points={pts.map(p => `${p.x},${p.y}`).join(" ")} />
              {pts.map(p => <g key={p.m}><circle cx={p.x} cy={p.y} r="5" fill="#1f5f99" /><text x={p.x} y="215" fontSize="11" fill="#999" textAnchor="middle">{p.m}</text></g>)}
            </svg>
          </div>
          <div className="card">
            <h3>Distribución por Edad</h3><div className="sub">Participantes activos</div>
            <svg viewBox="0 0 160 160" width="100%" height="170">
              <g transform="rotate(-90 80 80)">
                {STATS.edades.map((e, i) => {
                  const len = (e[1] / tot) * 377; const o = -acc; acc += len;
                  return <circle key={i} cx="80" cy="80" r="60" fill="none" stroke={PCOL[i]} strokeWidth="22" strokeDasharray={`${len - 2} ${377 - len + 2}`} strokeDashoffset={o} />;
                })}
              </g>
            </svg>
            <div className="legend">{STATS.edades.map((e, i) => <span key={e[0]} style={{ color: PCOL[i] }}>● {e[0]}</span>)}</div>
          </div>
        </div>
        <div className="card">
          <h3>Resumen por Programa de Salud</h3>
          {resumen.map(r => (
            <div className="prog" key={r.p}>
              <span className="dot" style={{ background: pcol(r.p) }} /><span className="name">{r.p}</span>
              <span className="ins">{r.ins} inscritos</span>
              <div className="bar"><i style={{ width: `${r.pct}%`, background: pcol(r.p) }} /></div>
              <b className="pct" style={{ color: pcol(r.p) }}>{r.pct}%</b>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
