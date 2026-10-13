import type { Metadata } from "next";
import ProductHome from "./components/ProductHome";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  description: "UNO+ prepara presupuestos, organiza documentos y recuerda tareas desde un mini PC configurado para tu negocio. Solicita una demostración y una propuesta personalizada.",
};

export default function Home() {
  return <ProductHome />;
}
