import { Box, Flex, Image, Text } from "@chakra-ui/react";
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

const Empresa = () => {
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
              Grupo Sistemas
            </Text>
            <Flex direction={"column"} gap="5">
              <Text fontSize={["md", "md"]} fontWeight="light">
                Grupo Sistemas es una empresa peruana que desarrolla soluciones
                innovadoras en tecnologías de la información ejecutando
                proyectos de software y web para empresas y emprededores.
              </Text>
              <Text fontSize={["md", "md"]} fontWeight="light">
                Desde el año 2003, Grupo Sistemas viene impulsando el desarrollo
                de las tecnologías de la información en la región y el país,
                siendo un excelente equipo profesional en el área de ingeniería
                de sistemas, computación e informática.
              </Text>
            </Flex>
          </Flex>
          <Flex direction={"column"} gap="10" color={"#353E44"}>
            <Flex direction={"column"} gap="5">
              <Text fontSize={["xl", "xl"]} as="b" color={"#353E44"}>
                Vision
              </Text>

              <Flex
                // direction={"column"}

                color={"#353E44"}
                alignItems="center"
                justifyContent={"center"}
                w="full"
                border="1px solid"
                borderColor="#3679FB"
                rounded={"lg"}
                padding="1rem"
                shadow={"0 -8px 0 0 #3679FB"}
                transition="all .2s"
                _hover={{
                  transform: "scale(1.01)",
                }}
              >
                <Text fontSize={"small"} fontWeight="bold" flex={3}>
                  Ser una empresa líder e innovadora en brindar soluciones
                  haciendo uso de las tecnologías de información para el
                  desarrollo empresarial de la región.
                </Text>
              </Flex>
            </Flex>
            <Flex direction={"column"} gap="5">
              <Text fontSize={["xl", "xl"]} as="b" color={"#353E44"}>
                Mision
              </Text>

              <Flex
                // direction={"column"}

                color={"#353E44"}
                alignItems="center"
                justifyContent={"center"}
                w="full"
                border="1px solid"
                borderColor="#3679FB"
                rounded={"lg"}
                padding="1rem"
                shadow={"0 -8px 0 0 #3679FB"}
                transition="all .2s"
                _hover={{
                  transform: "scale(1.01)",
                }}
              >
                <Text fontSize={"small"} fontWeight="bold" flex={3}>
                  Somos una empresa que investiga y desarrolla servicios de
                  tecnologías de la información con compromiso y orientación al
                  cliente.
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </main>
  );
};

export default Empresa;
