import type { ReactNode } from "react";

export function Modal({ title, onClose, children }: { title: string; onClose: () => void; children: ReactNode }) {
  return (
    <div className="ov" onMouseDown={e => e.target === e.currentTarget && onClose()}>
      <div className="modal"><h2>{title}</h2>{children}</div>
    </div>
  );
}

export function Field({ label, error, children }: { label: string; error?: string; children: ReactNode }) {
  return <div><label>{label}</label>{children}{error && <div className="err">{error}</div>}</div>;
}
