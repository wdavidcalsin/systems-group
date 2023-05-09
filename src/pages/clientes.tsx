import * as React from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`min-h-screen ${inter.className} bg-orange-500`}>
      Clientes
    </main>
  );
}
