import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Image,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const typesFirmaDigital = [
  {
    title: "Facturas y sus respectivas notas de crédito y debito",
    pathImg: "facturas.png",
  },
  {
    title: "Resumen de contingencia de comprobantes.",
    pathImg: "resumen-comprobantes.png",
  },
  {
    title: "Boletas y sus respectivas notas de crédito y debito",
    pathImg: "boletas.png",
  },
  {
    title: "Resumen diario de boletas de venta",
    pathImg: "resumen-de-boletas.png",
  },
  {
    title: "Comunicación de Baja",
    pathImg: "comunicacion-baja.png",
  },
];

const Contactenos = () => {
  return (
    <main className={`min-h-screen ${inter.className} bg-white`}>
      <Box
        display={"grid"}
        placeItems="center"
        gap={"10"}
        py="20"
        px={"5"}
        bg={"white"}
        color={"white"}
      >
        <Flex
          width={["100%", "100%", "100%", "100%", "5xl"]}
          direction="column"
          gap={20}
        >
          <Flex
            direction={"column"}
            alignItems="center"
            gap={"5"}
            color={"#353E44"}
          >
            <Text fontSize={["3xl", "4xl"]} as="b">
              Formulario de Contacto
            </Text>
            <Flex direction={"column"} gap="5">
              <Text fontSize={["md", "md"]} fontWeight="light">
                Si prefieres puedes escribirnos a info@gruposistemas.com.
              </Text>
              {/* <Text fontSize={["md", "md"]} fontWeight="light">
                Desde el año 2003, Grupo Sistemas viene impulsando el desarrollo
                de las tecnologías de la información en la región y el país,
                siendo un excelente equipo profesional en el área de ingeniería
                de sistemas, computación e informática.
              </Text> */}
            </Flex>
          </Flex>
          <Flex
            direction={"column"}
            gap="10"
            color={"#353E44"}
            // bgColor="black"
            p={10}
          >
            <form className="flex flex-col gap-10">
              <Flex gap="10">
                <label
                  htmlFor=""
                  className="text-xl flex flex-col gap-2 flex-1"
                >
                  <Text>
                    Nombres <span className="text-red-600">*</span>
                  </Text>
                  <input
                    type="text"
                    className="bg-[#F5F8FA] rounded-md py-4 px-2 border border-[#CBD6E2] outline-none "
                    placeholder="Nombres"
                  />
                </label>
                <label
                  htmlFor=""
                  className="text-xl flex flex-col gap-2 flex-1"
                >
                  <Text>
                    Email <span className="text-red-600">*</span>
                  </Text>
                  <input
                    type="email"
                    className="bg-[#F5F8FA] rounded-md py-4 px-2 border border-[#CBD6E2] outline-none "
                    placeholder="example@example.com"
                  />
                </label>
              </Flex>
              <Flex gap="10">
                <label
                  htmlFor=""
                  className="text-xl flex flex-col gap-2 flex-1"
                >
                  <Text>
                    Empresa o Institucion{" "}
                    <span className="text-red-600">*</span>
                  </Text>
                  <input
                    type="text"
                    className="bg-[#F5F8FA] rounded-md py-4 px-2 border border-[#CBD6E2] outline-none "
                    placeholder="Empresa"
                  />
                </label>
                <label
                  htmlFor=""
                  className="text-xl flex flex-col gap-2 flex-1"
                >
                  <Text>
                    Numero de Telefono <span className="text-red-600">*</span>
                  </Text>
                  <input
                    type="text"
                    className="bg-[#F5F8FA] rounded-md py-4 px-2 border border-[#CBD6E2] outline-none "
                    placeholder="Telefono"
                  />
                </label>
              </Flex>
              <Flex gap="10">
                <label
                  htmlFor=""
                  className="text-xl flex flex-col gap-2 flex-1"
                >
                  <Text>
                    Mensaje <span className="text-red-600">*</span>
                  </Text>
                  <textarea
                    className="bg-[#F5F8FA] rounded-md py-4 px-2 border border-[#CBD6E2] outline-none "
                    placeholder="Mensaje"
                  />
                </label>
              </Flex>
              <Flex gap="10" justifyContent="center">
                {/* <label
                  htmlFor=""
                  className="text-xl flex flex-col gap-2 flex-1"
                >
                  <Text>
                    Mensaje <span className="text-red-600">*</span>
                  </Text>
                  <textarea
                    className="bg-[#F5F8FA] rounded-md py-4 px-2 border border-[#CBD6E2] outline-none "
                    placeholder="Nombres"
                  />
                </label> */}
                <button className="bg-[#FF7A59] text-white px-10 py-3 font-bold rounded-md hover:opacity-90">
                  Enviar
                </button>
              </Flex>
            </form>
          </Flex>
        </Flex>
      </Box>
    </main>
  );
};

export default Contactenos;
