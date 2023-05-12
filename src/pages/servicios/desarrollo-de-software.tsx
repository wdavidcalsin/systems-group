import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const typesFirmaDigital = [
  {
    title: "Desarrollo de aplicaciones Web.",
    pathImg: "web.png",
  },
  {
    title: "Desarrollo de aplicaciones móviles para Android.",
    pathImg: "android.png",
  },
  {
    title: "Desarrollo de aplicaciones de escritorio para Windows.",
    pathImg: "windows.png",
  },
  {
    title:
      "Elaboración de términos de referencia para adquisiciones o licitaciones de software a medida.",
    pathImg: "licitaciones.png",
  },
];

const FirmaDigital = () => {
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
              Desarrollo de Software
            </Text>
            <Text fontSize={["md", "md"]} fontWeight="light">
              Desarrollamos software a medida para empresas e instituciones que
              quieran mejorar sus procesos.
            </Text>
          </Flex>
          <Flex gap={10} wrap="wrap" justifyContent={"center"}>
            {typesFirmaDigital.map((typeDesing, index) => (
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
                  src={`/img-page-services-software/${typeDesing.pathImg}`}
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

export default FirmaDigital;
