import {
  Box,
  Flex,
  Image,
  List,
  ListIcon,
  ListItem,
  Text,
} from "@chakra-ui/react";
import { AiFillCheckCircle } from "react-icons/ai";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const caracteristicas = [
  {
    title: "Módulos de Ventas y Compras",
    pathImg: "facturas.png",
  },
  {
    title: "Administración de Productos",
    pathImg: "resumen-comprobantes.png",
  },
  {
    title: "Administración de Servicios",
    pathImg: "boletas.png",
  },
  {
    title: "Plantillas para impresión Matricial",
    pathImg: "resumen-de-boletas.png",
  },
  {
    title: "Consulta de RUC online",
    pathImg: "comunicacion-baja.png",
  },
  {
    title: "Control de almacenes",
    pathImg: "comunicacion-baja.png",
  },
  {
    title: "Conversión de tipos de cambios",
    pathImg: "comunicacion-baja.png",
  },
  {
    title: "Privilegios de usuarios",
    pathImg: "comunicacion-baja.png",
  },
];

const SistemaDeVentas = () => {
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
          <Flex alignItems={"center"} gap="10">
            <Flex
              direction={"column"}
              alignItems="center"
              gap={"5"}
              color={"#353E44"}
              flex={1}
            >
              <Text fontSize={["3xl", "4xl"]} as="b">
                Sistema de Ventas
              </Text>
              <Flex direction={"column"} gap="5">
                <Text fontSize={["md", "md"]} fontWeight="light">
                  Solución en la nube que facilita la gestión de su negocio en
                  tiempo real desde cualquier lugar que tenga una conexión a
                  internet.
                </Text>
                <Text fontSize={["md", "md"]} fontWeight="light">
                  Con este sistema usted tendrá el control de sus ventas
                  (imprimir comprobantes de pago, facturas, boletas), compras,
                  almacén, caja, clientes, productos, cuentas por cobrar,
                  cuentas por pagar, reportes y otros.
                </Text>
              </Flex>
            </Flex>
            <Flex flex={1} justifyContent="center">
              <Box rounded="lg" overflow={"hidden"}>
                <Image
                  src="/img-page-productos-ventas/sistema-de-ventas.jpg"
                  alt=""
                  transition={"all .2s"}
                  _hover={{
                    transform: "scale(1.1) ",
                    // transform: "scale(1.1) rotate(-1deg)",
                  }}
                />
              </Box>
            </Flex>
          </Flex>
          <Flex
            gap={10}
            columnGap={20}
            wrap="wrap"
            justifyContent={"center"}
          ></Flex>
        </Flex>
      </Box>
      <Box
        display={"grid"}
        placeItems="center"
        gap={"10"}
        py="20"
        px={"5"}
        bg={"#E9EEF1"}
        color={"white"}
      >
        <Flex
          width={["100%", "100%", "100%", "100%", "5xl"]}
          direction="column"
          gap={20}
        >
          <Flex alignItems={"center"} gap="10">
            <Flex
              direction={"column"}
              alignItems="center"
              gap={"5"}
              color={"#353E44"}
              flex={1}
            >
              <Text fontSize={["xl", "2xl"]} as="b" color={"#1192EE"}>
                Características
              </Text>
              <Flex gap="5">
                {caracteristicas.map((caracteristica, index) => (
                  <Flex key={index}></Flex>
                ))}
              </Flex>
              <List
                spacing={3}
                display="grid"
                gridTemplateColumns="repeat(2, 1fr)"
                columnGap={20}
              >
                {caracteristicas.map((caracteristica, index) => (
                  <ListItem key={index}>
                    <ListIcon as={AiFillCheckCircle} color="blue.500" />
                    {caracteristica.title}
                  </ListItem>
                ))}
              </List>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </main>
  );
};

export default SistemaDeVentas;
