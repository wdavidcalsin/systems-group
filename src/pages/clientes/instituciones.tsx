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
import { gql } from "@apollo/client";
import { client } from "@/lib/apollo-client";
import { IPost } from "@/types";
import { GET_POSTS } from "@/lib";

const inter = Inter({ subsets: ["latin"] });

const listInstituciones = [
  {
    path: "instituto-de-las-culturas-andinas.png",
    title: "Instituto de Estudios de las Culturas Andinas",
    description: "Institutions",
  },
  {
    path: "universidad-privada-san-carlos.jpg",
    title: "Universidad Privada San Carlos",
    description: "Institutions",
  },
  {
    path: "travel-and-tour.jpg",
    title: "Travel and Tour",
    description: "Institutions",
  },
  {
    path: "municipalidad-de-carabaya.jpg",
    title: "Municipalidad de Carabaya",
    description: "Institutions",
  },
  {
    path: "electro-puno.jpg",
    title: "Electro Puno",
    description: "Institutions",
  },
  {
    path: "direccion-regional-de-comercio-exterior.jpg",
    title: "Direccion Regional de Comercio Exterior y Turismo",
    description: "Institutions",
  },
  {
    path: "colegio-de-biologos-del-peru.jpg",
    title: "El Colegio de Biologos del Peru",
    description: "Institutions",
  },
  {
    path: "camara-hotelera.jpg",
    title: "Camara Hotelera",
    description: "Institutions",
  },
];

export default function Instituciones({ posts }: { posts: IPost[] }) {
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
            Instituciones
          </Text>
          <Text fontSize={["md", "md"]} fontWeight="light">
            La confianza es muy importante en nuestra empresa, nosotros
            confiamos en nuestros clientes y ellos también confian en nosotros.
          </Text>
        </Flex>
        <Flex gap={10} wrap="wrap" justifyContent={"center"}>
          {/* {listInstituciones.map((hotel, index) => (
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
                  width={"100%"}
                  src={`/img-page-instituciones/${hotel.path}`}
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">{hotel.title}</Heading>
                  <Text fontWeight={"light"}>{hotel.description}</Text>
                </Stack>
              </CardBody>
            </Card>
          ))} */}
          {posts.map((institucion, index) => (
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
                  // src={`/img-page-instituciones/instituto-de-las-culturas-andinas.png`}
                  src={
                    institucion.featuredImage === null
                      ? "/img-page-instituciones/instituto-de-las-culturas-andinas.png"
                      : institucion.featuredImage.node.sourceUrl
                  }
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">{institucion.title}</Heading>
                  <Text fontWeight={"light"}>Institutions</Text>
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
    variables: { categoryName: "Instituciones" },
  });

  const posts = response?.data?.posts?.nodes as IPost[];
  return {
    props: {
      posts,
    },
  };
}
