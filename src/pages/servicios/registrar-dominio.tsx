import * as React from "react";
import { Inter } from "next/font/google";
import {
  Box,
  Button,
  Flex,
  Grid,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Stack,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { BiSearchAlt } from "react-icons/bi";

const inter = Inter({ subsets: ["latin"] });

const ReginstrarDominio = () => {
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
        <Flex width={"5xl"} direction="column" gap={10}>
          <Flex
            direction={"column"}
            alignItems="center"
            gap={"5"}
            color={"#353E44"}
          >
            <Text fontSize={["3xl", "5xl"]} as="b" fontFamily={"serif"}>
              Registrar Dominio
            </Text>
            <Text fontSize={["md", "md"]} fontWeight="light">
              Un dominio es tu marca en internet, además podrás crear correos
              electrónicos corporativos que te darán seriedad y confianza ante
              tus clientes y/o usuarios.
            </Text>
          </Flex>

          <TableContainer
            color="#353E44"
            width={"100%"}
            gap="20"
            borderColor="#C2C2C2"
          >
            <Table
              variant="simple"
              size={"lg"}
              colorScheme="twitter"
              borderColor="#051C2C"
            >
              <Thead bgColor={"#3679FB"}>
                <Tr>
                  <Th color="white">Servicio</Th>
                  <Th color="white">Descripcion</Th>
                  <Th color="white" isNumeric>
                    Precio anual
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr
                  transition={"all .3s"}
                  _hover={{
                    // transform: "scale(1.01)",
                    opacity: "2",
                    bgColor: "rgba(0,0,0,.02)",
                  }}
                >
                  <Td rowSpan={2} fontWeight="bold">
                    Registro de Dominio
                  </Td>
                  <Td>Internacionales(.com, .net o .org)</Td>
                  <Td isNumeric>(Solo Dominio) S/. 75.00</Td>
                </Tr>
                <Tr
                  transition={"all .3s"}
                  _hover={{
                    // transform: "scale(1.001)",
                    opacity: "2",
                    bgColor: "rgba(0,0,0,.02)",
                  }}
                >
                  <Td>Nacionales(.pe, .com.pe, .gob.pe, .edu.pe)</Td>
                  <Td isNumeric>S/. 150.00</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
          <Grid
            // bg={"rgba(0,0,0,0.02)"}
            bg={"#033082"}
            placeItems="center"
            py={20}
            rounded="xl"
            gap={8}
          >
            <Text fontSize={["3xl", "4xl"]} as="b">
              Busque su Nombre de Dominio
            </Text>
            <Flex gap={3} bgColor="#F6F6F6" p="3" rounded={"xl"}>
              <Input
                placeholder="mysite"
                bgColor={"white"}
                color="black"
                roundedTopRight={0}
                roundedBottomRight={0}
                width="30rem"
              />
              <Button
                // colorScheme="green"
                bgColor={"#0EAC40"}
                variant="solid"
                fontSize={"1.5rem"}
                rounded="xl"
              >
                <BiSearchAlt />
              </Button>
            </Flex>
          </Grid>
        </Flex>
      </Box>
    </main>
  );
};

export default ReginstrarDominio;
