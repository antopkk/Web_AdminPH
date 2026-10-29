import type { Metadata } from "next";
import Sidebar from "@/components/Sidebar";
import "./globals.css";

export const metadata: Metadata = { title: "Panel Talleres - Municipalidad de Padre Hurtado" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <div className="app"><Sidebar /><main className="main">{children}</main></div>
      </body>
    </html>
  );
}
