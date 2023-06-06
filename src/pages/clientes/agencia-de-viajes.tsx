import { GET_POSTS } from "@/lib";
import { client } from "@/lib/apollo-client";
import { IPost } from "@/types";
import { gql } from "@apollo/client";
import {
  Box,
  Card,
  CardBody,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const listClients = [
  {
    path: "horizonte-del-titicaca.png",
    title: "Horizonte del Titicaca",
    description: "Tour Agency",
  },
  {
    path: "servicios-miranda.png",
    title: "Servicios Miranda",
    description: "Tour Agency",
  },
  {
    path: "viveandes.png",
    title: "Viveandes",
    description: "Tour Agency",
  },
  {
    path: "andean-ways.png",
    title: "Andean Ways",
    description: "Tour Agency",
  },
  {
    path: "puno-tours.png",
    title: "Puno tours",
    description: "Tour Agency",
  },
  {
    path: "sol-peru-reisen.png",
    title: "Sol Peru Reisen",
    description: "Tour Agency",
  },
  {
    path: "titicaca-for-you.png",
    title: "Titicaca For you",
    description: "Tour Agency",
  },
  {
    path: "titicaca-travel-peru.png",
    title: "Titicaca Travel Peru",
    description: "Tour Agency",
  },
];

export default function AgenciaDeViajes({ posts }: { posts: IPost[] }) {
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
          direction={"column"}
          alignItems="center"
          gap={"5"}
          color={"#353E44"}
        >
          <Text fontSize={["3xl", "4xl"]} as="b">
            Agencia de Viajes
          </Text>
          <Text fontSize={["md", "md"]} fontWeight="light">
            La confianza es muy importante en nuestra empresa, nosotros
            confiamos en nuestros clientes y ellos también confian en nosotros.
          </Text>
        </Flex>
        <Flex gap={10} wrap="wrap" justifyContent={"center"}>
          {/* {listClients.map((client, index) => (
            <Card
            maxW="sm"
              key={index}
              bgColor="white"
              color={"#353E44"}
              shadow="base"
              rounded={"2xl"}
              transition="all .25s ease"
              _hover={{
                transform: "scale(1.01)",
                shadow: "xl",
              }}
            >
              <CardBody>
                <Image
                  width={"15rem"}
                  src={`/img-page-clients/${client.path}`}
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                <Heading size="md">{client.title}</Heading>
                <Text fontWeight={"light"}>{client.description}</Text>
                </Stack>
                </CardBody>
                </Card>
              ))} */}
          {posts.map((client, index) => (
            <Card
              maxW="xs"
              key={index}
              bgColor="white"
              color={"#353E44"}
              shadow="base"
              rounded={"2xl"}
              transition="all .25s ease"
              _hover={{
                transform: "scale(1.01)",
                shadow: "xl",
              }}
            >
              <CardBody>
                <Image
                  width={"100%"}
                  // src={`/img-page-clients/horizonte-del-titicaca.png`}
                  src={
                    client.featuredImage === null
                      ? "/img-page-clients/horizonte-del-titicaca.png"
                      : client.featuredImage.node.sourceUrl
                  }
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">{client.title}</Heading>
                  <Text fontWeight={"light"}>Tour Agency</Text>
                </Stack>
              </CardBody>
            </Card>
          ))}
          {/* {posts.map((client, index) => (
            <div
              key={index}
              dangerouslySetInnerHTML={{ __html: client.title }}
              className="text-black"
            ></div>
          ))} */}
        </Flex>
      </Box>
    </main>
  );
}

export async function getStaticProps() {
  const response = await client.query({
    query: GET_POSTS,
    variables: { categoryName: "Agencias de viaje" },
  });

  const posts = response?.data?.posts?.nodes as IPost[];
  return {
    props: {
      posts,
    },
  };
}
