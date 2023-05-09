import * as React from "react";
import { Inter } from "next/font/google";
import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Flex,
  Heading,
  Image,
  scaleFadeConfig,
  Stack,
  Text,
} from "@chakra-ui/react";

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
];

export default function AgenciaDeViajes() {
  return (
    <main className={`min-h-screen ${inter.className} bg-white`}>
      <Text color={"black"}>
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
            <Text fontSize={["xl", "md"]} fontWeight="light">
              La confianza es muy importante en nuestra empresa, nosotros
              confiamos en nuestros clientes y ellos también confian en
              nosotros.
            </Text>
          </Flex>
          <Flex gap={10}>
            {listClients.map((client, index) => (
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
            ))}
          </Flex>
        </Box>
      </Text>
    </main>
  );
}
