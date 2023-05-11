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
import { GiCheckMark } from "react-icons/gi";

const inter = Inter({ subsets: ["latin"] });

const hostingServices = [
  {
    especificaciones: "Certificado SSL gratis",
    emprendedor: true,
    estandar: true,
    profesional: true,
    premium: true,
    institucional: true,
  },
  {
    especificaciones: "Panel de Control, Estadísticas",
    emprendedor: true,
    estandar: true,
    profesional: true,
    premium: true,
    institucional: true,
  },
  {
    especificaciones: "Acceso FTP",
    emprendedor: true,
    estandar: true,
    profesional: true,
    premium: true,
    institucional: true,
  },
  {
    especificaciones: "Copias de seguridad	",
    emprendedor: true,
    estandar: true,
    profesional: true,
    premium: true,
    institucional: true,
  },
  {
    especificaciones: "Dominios adicionales",
    emprendedor: true,
    estandar: true,
    profesional: true,
    premium: true,
    institucional: true,
  },
  {
    especificaciones: "MySQL, phpMyAdmin	",
    emprendedor: true,
    estandar: true,
    profesional: true,
    premium: true,
    institucional: true,
  },
  {
    especificaciones: "PHP, Ruby on Rails, Python	",
    emprendedor: true,
    estandar: true,
    profesional: true,
    premium: true,
    institucional: true,
  },
  {
    especificaciones: "Joomla, WordPress, Moodle, Drupal",
    emprendedor: true,
    estandar: true,
    profesional: true,
    premium: true,
    institucional: true,
  },
  {
    especificaciones: "Auto Instaladores",
    emprendedor: true,
    estandar: true,
    profesional: true,
    premium: true,
    institucional: true,
  },
  {
    especificaciones: "Video tutoriales",
    emprendedor: true,
    estandar: true,
    profesional: true,
    premium: true,
    institucional: true,
  },
  {
    especificaciones: "Soporte 24×7",
    emprendedor: true,
    estandar: true,
    profesional: true,
    premium: true,
    institucional: true,
  },
  {
    especificaciones: "Precio por año (incluye IGV)",
    emprendedor: "S/. 150.00",
    estandar: "S/. 200.00",
    profesional: "S/. 300.00",
    premium: "S/. 400.00",
    institucional: "S/. 700.00",
  },
];

const WebHosting = () => {
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
        <Flex width={"6xl"} direction="column" gap={10}>
          <Flex
            direction={"column"}
            alignItems="center"
            gap={"5"}
            color={"#353E44"}
          >
            <Text fontSize={["3xl", "4xl"]} as="b">
              Web Hosting
            </Text>
            <Text fontSize={["md", "md"]} fontWeight="light">
              La información de su empresa debe contar con un mayor respaldo,
              utilizar espacios gratuitos puede ocasionar la pérdida de su
              información en cualquier momento o cuando más lo necesite.
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
                  <Th color="white">Especificaciones</Th>
                  <Th color="white">Emprendedor</Th>
                  <Th color="white" isNumeric>
                    Estandar
                  </Th>
                  <Th color="white" isNumeric>
                    Profesional
                  </Th>
                  <Th color="white" isNumeric>
                    Premium
                  </Th>
                  <Th color="white" isNumeric>
                    Institucional
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
                  <Td fontWeight="bold">Espacio en disco</Td>
                  <Td>400 MB</Td>
                  <Td>700MB</Td>
                  <Td>1GB</Td>
                  <Td>2GB</Td>
                  <Td>No Medido*</Td>
                </Tr>
                <Tr
                  transition={"all .3s"}
                  _hover={{
                    // transform: "scale(1.001)",
                    opacity: "2",
                    bgColor: "rgba(0,0,0,.02)",
                  }}
                >
                  <Td>Ancho de banda mensual</Td>
                  <Td>4GB</Td>
                  <Td>7GB</Td>
                  <Td>10GB</Td>
                  <Td>20GB</Td>
                  <Td>No Medido*</Td>
                </Tr>
                {hostingServices.map((service, index) => (
                  <Tr
                    key={index}
                    transition={"all .3s"}
                    _hover={{
                      // transform: "scale(1.001)",
                      opacity: "2",
                      bgColor: "rgba(0,0,0,.02)",
                    }}
                  >
                    <Td>{service.especificaciones}</Td>
                    <Td>
                      {typeof service.emprendedor === "boolean" ? (
                        service.emprendedor ? (
                          <GiCheckMark />
                        ) : (
                          "NO"
                        )
                      ) : (
                        service.emprendedor
                      )}
                    </Td>
                    <Td>
                      {typeof service.estandar === "boolean" ? (
                        service.estandar ? (
                          <GiCheckMark />
                        ) : (
                          "NO"
                        )
                      ) : (
                        service.estandar
                      )}
                    </Td>
                    <Td>
                      {typeof service.profesional === "boolean" ? (
                        service.profesional ? (
                          <GiCheckMark />
                        ) : (
                          "NO"
                        )
                      ) : (
                        service.profesional
                      )}
                    </Td>
                    <Td>
                      {typeof service.premium === "boolean" ? (
                        service.premium ? (
                          <GiCheckMark />
                        ) : (
                          "NO"
                        )
                      ) : (
                        service.premium
                      )}
                    </Td>
                    <Td>
                      {typeof service.institucional === "boolean" ? (
                        service.institucional ? (
                          <GiCheckMark />
                        ) : (
                          "NO"
                        )
                      ) : (
                        service.institucional
                      )}
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </Flex>
      </Box>
    </main>
  );
};

export default WebHosting;
