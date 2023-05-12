import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const typesDevSoftware = [
  {
    title: "Emisión de certificados digitales.",
    pathImg: "emision-certificados.png",
  },
  {
    title: "Autoridad de certificación.",
    pathImg: "autoridad-de-certificado.png",
  },
  {
    title: "Certificados raíz e intermedios.",
    pathImg: "certificados-raiz.png",
  },
  {
    title: "DNI electrónico, Tokens USB, Smartcards, Microsoft CryptoAPI.",
    pathImg: "dni-electronico.png",
  },
  {
    title: "Certificados para agente automatizado y SSL/TLS.",
    pathImg: "certificado-tls.png",
  },
  {
    title: "Identidad digital y autenticación electrónica.",
    pathImg: "identidad-digital.png",
  },
  {
    title: "Firma digital móvil (TEE).",
    pathImg: "firma-movil.png",
  },
  {
    title: "TSA y sellado de tiempo.",
    pathImg: "tsa.png",
  },
  {
    title: "CRL y OCSP.",
    pathImg: "ocsp.png",
  },
];

const DesarrolloDeSoftware = () => {
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
          gap={10}
        >
          <Flex
            direction={"column"}
            alignItems="center"
            gap={"5"}
            color={"#353E44"}
          >
            <Text fontSize={["3xl", "4xl"]} as="b">
              Firma Digital
            </Text>
            <Text fontSize={["md", "md"]} fontWeight="light">
              Realizamos consultoría en sistemas de firma digital para que su
              empresa obtenga confiabilidad en el mundo virtual.
            </Text>
          </Flex>
          <Flex gap={10} wrap="wrap" justifyContent={"center"}>
            {typesDevSoftware.map((typeDesing, index) => (
              <Flex
                key={index}
                direction={"column"}
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
                <Image
                  width={"40%"}
                  src={`/img-page-services-firma/${typeDesing.pathImg}`}
                  alt=""
                />
                <Text fontSize={"small"} fontWeight="bold">
                  {typeDesing.title}
                </Text>
              </Flex>
            ))}
          </Flex>
        </Flex>
      </Box>
    </main>
  );
};

export default DesarrolloDeSoftware;
