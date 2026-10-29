"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [["/", "Dashboard"], ["/talleres", "Gestión de Talleres"], ["/profesores", "Profesores"]];

export default function Sidebar() {
  const path = usePathname();
  return (
    <aside className="side">
      <div className="brand">Panel Administrativo<small>Cesfam Padre Hurtado</small></div>
      <nav className="nav">
      {LINKS.map(([href, label]) => {
  const activo = href === "/" ? path === "/" : path.startsWith(href);
  return <Link key={href} href={href} className={activo ? "on" : ""}>{label}</Link>;})}
      </nav>
      <div className="user"><div className="av">MR</div><div><b>María Rodríguez</b><br /><small>Administradora</small></div></div>
    </aside>
  );
}
