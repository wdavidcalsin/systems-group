import * as React from "react";
import { Inter } from "next/font/google";
import { Text } from "@chakra-ui/react";

const inter = Inter({ subsets: ["latin"] });

export default function Hoteles() {
  return (
    <main className={`min-h-screen ${inter.className} bg-white`}>
      <Text color={"black"}>Hoteles</Text>
    </main>
  );
}
