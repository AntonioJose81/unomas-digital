import type { Metadata } from "next";
import ServiceHome from "./components/ServiceHome";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};
export default function Home() { return <ServiceHome />; }
