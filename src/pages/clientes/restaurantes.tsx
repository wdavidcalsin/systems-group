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

const listRestaurants = [
  {
    path: "la-casona.jpg",
    title: "La Casona Restaurant",
    description: "Institutions",
  },
  {
    path: "qhantati-ururi.jpg",
    title: "Qhantati Ururi",
    description: "Institutions",
  },
  {
    path: "mojsa.jpg",
    title: "Mojsa Restaurant",
    description: "Institutions",
  },
  {
    path: "cafe-bar.jpg",
    title: "Cafe Bar",
    description: "Institutions",
  },
];

export default function Restaurantes() {
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
            Restaurantes
          </Text>
          <Text fontSize={["md", "md"]} fontWeight="light">
            La confianza es muy importante en nuestra empresa, nosotros
            confiamos en nuestros clientes y ellos también confian en nosotros.
          </Text>
        </Flex>
        <Flex gap={10} wrap="wrap" justifyContent={"center"}>
          {listRestaurants.map((restaurante, index) => (
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
                  src={`/img-page-restaurants/${restaurante.path}`}
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">{restaurante.title}</Heading>
                  <Text fontWeight={"light"}>{restaurante.description}</Text>
                </Stack>
              </CardBody>
            </Card>
          ))}
        </Flex>
      </Box>
    </main>
  );
}
