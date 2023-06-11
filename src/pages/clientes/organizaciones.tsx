import * as React from "react";
import { Inter } from "next/font/google";

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
import { GET_POSTS, client } from "@/lib";
import { IPost } from "@/types";

const inter = Inter({ subsets: ["latin"] });

const listMediosDeComunicacion = [
  {
    path: "sumamarka.jpg",
    title: "Sumamarka",
    description: "Institutions",
  },
  {
    path: "kantu.jpg",
    title: "K'antu",
    description: "Institutions",
  },
  {
    path: "auditores-ambientales.jpg",
    title: "C&A Ecoeficiencia S.R.L",
    description: "Institutions",
  },
  {
    path: "cooperativa-de-ahorro.jpg",
    title: "La Cooperativa de Ahorro y Credito del Artesano",
    description: "Institutions",
  },
  {
    path: "artesanias-textiles.jpg",
    title: "Artesanias Textiles Alpaca Suri Nuñoa",
    description: "Institutions",
  },
];

export default function Organizaciones({ posts }: { posts: IPost[] }) {
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
            Organizaciones
          </Text>
          <Text fontSize={["md", "md"]} fontWeight="light">
            La confianza es muy importante en nuestra empresa, nosotros
            confiamos en nuestros clientes y ellos también confian en nosotros.
          </Text>
        </Flex>
        <Flex gap={10} wrap="wrap" justifyContent={"center"}>
          {posts.map((organizacion, index) => (
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
                  // src={`/img-page-organizaciones/${organizacion.path}`}
                  src={
                    organizacion.featuredImage === null
                      ? "/img-page-organizaciones/sumamarka.jpg"
                      : organizacion.featuredImage.node.sourceUrl
                  }
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">{organizacion.title}</Heading>
                  <Text fontWeight={"light"}>Institucion</Text>
                </Stack>
              </CardBody>
            </Card>
          ))}
        </Flex>
      </Box>
    </main>
  );
}

export async function getStaticProps() {
  const response = await client.query({
    query: GET_POSTS,
    variables: { categoryName: "Organizaciones" },
  });

  const posts = response?.data?.posts?.nodes as IPost[];
  return {
    props: {
      posts,
    },
  };
}
