export default function PageHeader({ title }: { title: string }) {
  const f = new Date().toLocaleDateString("es-CL", { weekday: "long", day: "numeric", month: "long", year: "numeric" });
  return (
    <header className="top">
      <h1>{title}</h1>
      <h5>{f.charAt(0).toUpperCase() + f.slice(1)}</h5>
    </header>
  );
}
