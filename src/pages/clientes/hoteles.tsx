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

const inter = Inter({ subsets: ["latin"] });

const listClients = [
  {
    path: "castillo-del-titicaca.jpg",
    title: "Castillo del Titicaca",
    description: "Hotel",
  },
  {
    path: "conde-de-lemos.jpg",
    title: "Conde de Lemos",
    description: "Hotel",
  },
  {
    path: "hotel-italia.jpg",
    title: "Hotel Italia",
    description: "Hotel",
  },
  {
    path: "kantuta-lodge.jpg",
    title: "Kantuta Lodge",
    description: "Hotel",
  },
];

export default function Hoteles() {
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
            Hoteles
          </Text>
          <Text fontSize={["md", "md"]} fontWeight="light">
            La confianza es muy importante en nuestra empresa, nosotros
            confiamos en nuestros clientes y ellos también confian en nosotros.
          </Text>
        </Flex>
        <Flex gap={10} wrap="wrap" justifyContent={"center"}>
          {listClients.map((hotel, index) => (
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
                  src={`/img-page-hoteles/${hotel.path}`}
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">{hotel.title}</Heading>
                  <Text fontWeight={"light"}>{hotel.description}</Text>
                </Stack>
              </CardBody>
            </Card>
          ))}
        </Flex>
      </Box>
    </main>
  );
}
