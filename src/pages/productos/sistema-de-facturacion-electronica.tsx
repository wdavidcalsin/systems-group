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

const SistemaDeFacturacionElectronica = () => {
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
              Sistema de Facturacion Electronica
            </Text>
            <Flex direction={"column"} gap="5">
              <Text fontSize={["md", "md"]} fontWeight="light">
                Emita una factura electrónicamente con la misma legalidad que
                los impresos, con nuestro sistemas solo es necesario registrar
                el certificado electrónico y homologar el sistema el cual
                podemos ayudarle.
              </Text>
              <Text fontSize={["md", "md"]} fontWeight="light">
                Puede imprimir la versión electrónica, enviarla por correo, o a
                un servidor para su consulta, el formato es completamente
                personalizable. Con una interfaz moderna y adaptable a
                dispositivos móviles, usted puede administrar sus comprobantes.
              </Text>
            </Flex>
          </Flex>
          <Flex gap={10} columnGap={20} wrap="wrap" justifyContent={"center"}>
            {typesFirmaDigital.map((typeDesing, index) => (
              <Flex
                key={index}
                // direction={"column"}
                gap="5"
                color={"black"}
                alignItems="center"
                justifyContent={"center"}
                w="60"
                border="1px solid"
                borderColor="#3679FB"
                rounded={"lg"}
                padding="1rem"
                shadow={"0 -8px 0 0 #3679FB"}
                transition="all .2s"
                _hover={{
                  transform: "scale(1.05)",
                }}
              >
                <Flex flex={1} justifyContent="center">
                  <Image
                    width={"90%"}
                    src={`/img-page-productos-facturacion/${typeDesing.pathImg}`}
                    alt=""
                  />
                </Flex>
                <Text fontSize={"small"} fontWeight="bold" flex={3}>
                  {typeDesing.title}
                </Text>
              </Flex>
            ))}
          </Flex>
          <Text fontSize={["md", "md"]} fontWeight="light" color={"#353E44"}>
            Empiece ahora mismo, y este al mismo nivel que las grandes empresas,
            ya que el futuro todo es electrónico.
          </Text>
        </Flex>
      </Box>
    </main>
  );
};

export default SistemaDeFacturacionElectronica;