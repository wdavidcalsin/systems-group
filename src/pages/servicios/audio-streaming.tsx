import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const typesAudioStreaming = [
  {
    title: "Audio Stereo AAC Plus.",
    pathImg: "test1.png",
  },
  {
    title: "10GB de espacio para el auto DJ.",
    pathImg: "test1.png",
  },
  {
    title: "Panel de control y estadísticas.",
    pathImg: "test1.png",
  },
  {
    title: "Control de reproducción personalizado.",
    pathImg: "test1.png",
  },
  {
    title: "Multiplataforma: PC, Android, IOS, etc.",
    pathImg: "test1.png",
  },
  {
    title: "Ayuda técnica presencial, teléfono, chat y/o email.",
    pathImg: "test1.png",
  },
  {
    title: "Aplicación móvil para Android e iOS.",
    pathImg: "test1.png",
  },
];

const AudioStreaming = () => {
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
          alignItems={"center"}
          gap={10}
        >
          <Flex
            direction={"column"}
            alignItems="center"
            gap={"5"}
            color={"#353E44"}
          >
            <Text fontSize={["3xl", "4xl"]} as="b">
              Audio Streaming con AutoDJ
            </Text>
            <Text fontSize={["md", "md"]} fontWeight="light">
              El servicio de audio streaming te permite emitir tu señal de radio
              a todo el mundo mediante la web, Grupo Sistemas, además te ofrece
              un panel de control con auto DJ para tener presencia las 24 horas
              del día en caso de corte por programación u otro evento.
            </Text>
          </Flex>
          <Text fontSize={["xl", "xl"]} as="b" color={"#353E44"}>
            Caracteristicas
          </Text>
          <Flex gap={10} wrap="wrap" justifyContent={"center"}>
            {typesAudioStreaming.map((typeDesing, index) => (
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
                {/* <Image
                  width={"40%"}
                  src={`/img-page-services-firma/${typeDesing.pathImg}`}
                  alt=""
                /> */}
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

export default AudioStreaming;
