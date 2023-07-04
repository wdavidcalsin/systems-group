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
import { gql } from "@apollo/client";
import { client } from "@/lib";
import htmlReactParser, {
  DOMNode,
  Element,
  domToReact,
} from "html-react-parser";

const inter = Inter({ subsets: ["latin"] });

interface Page {
  id: string;
  title: string;
  content: string;
}

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

const WebHosting = ({ page }: { page: Page }) => {
  const replaceListItem = (domNode: DOMNode) => {
    if (domNode instanceof Element && domNode.tagName === "li") {
      return (
        <Flex
          key={Math.random().toString()} // Provide a unique key for each list item
          gap="5"
          color="black"
          alignItems="center"
          justifyContent="center"
          w="60"
          border="1px solid"
          borderColor="#3679FB"
          rounded="lg"
          padding="1rem"
          shadow="0 -8px 0 0 #3679FB"
          transition="all .2s"
          _hover={{
            transform: "scale(1.05)",
          }}
          fontSize="small"
          fontWeight="bold"
        >
          {domToReact(domNode.children)}
        </Flex>
      );
    }
  };

  const contentParser = htmlReactParser(page.content, {
    replace: (domNode: DOMNode) => {
      if (domNode instanceof Element) {
        if (domNode.tagName === "p") {
          const children = Array.isArray(domNode.children)
            ? domNode.children
            : [domNode.children];

          const imgChild = children.find(
            (child) => child instanceof Element && child.tagName === "img"
          );

          if (imgChild) {
            return <></>;
          }
          return (
            <Text fontSize={["md", "md"]} fontWeight="light" as={"p"}>
              {domToReact(domNode.children)}
            </Text>
          );
        } else if (domNode.type === "tag" && domNode.tagName === "img") {
          return null;
        } else if (domNode.tagName === "ul") {
          return (
            <Flex
              gap={10}
              columnGap={20}
              py={14}
              wrap="wrap"
              justifyContent={"center"}
            >
              {domToReact(domNode.children, { replace: replaceListItem })}
            </Flex>
          );
        } else if (domNode.tagName === "h2") {
          return (
            <Text fontSize={["3xl", "4xl"]} as="b">
              {domToReact(domNode.children)}
            </Text>
          );
        } else if (domNode.tagName === "table") {
          return (
            <TableContainer
              color="#353E44"
              width={"100%"}
              gap="20"
              borderColor="#C2C2C2"
              py={10}
            >
              <Table
                variant="simple"
                size={"lg"}
                colorScheme="twitter"
                borderColor="#051C2C"
              >
                {domToReact(domNode.children, {
                  replace: (domNode: DOMNode) => {
                    if (
                      domNode instanceof Element &&
                      domNode.tagName === "thead"
                    ) {
                      return (
                        <Thead bgColor={"#3679FB"}>
                          {domToReact(domNode.children, {
                            replace: (domNode: DOMNode) => {
                              if (
                                domNode instanceof Element &&
                                domNode.tagName === "tr"
                              ) {
                                return (
                                  <Tr>
                                    {domToReact(domNode.children, {
                                      replace: (domNode: DOMNode) => {
                                        if (
                                          domNode instanceof Element &&
                                          domNode.tagName === "th"
                                        ) {
                                          return (
                                            <Th color="white">
                                              {domToReact(domNode.children)}
                                            </Th>
                                          );
                                        }
                                      },
                                    })}
                                  </Tr>
                                );
                              }
                            },
                          })}
                        </Thead>
                      );
                    }
                    if (
                      domNode instanceof Element &&
                      domNode.tagName === "tbody"
                    ) {
                      return (
                        <Tbody>
                          {domToReact(domNode.children, {
                            replace: (domNode: DOMNode) => {
                              if (
                                domNode instanceof Element &&
                                domNode.tagName === "tr"
                              ) {
                                return (
                                  <Tr
                                    transition={"all .3s"}
                                    _hover={{
                                      opacity: "2",
                                      bgColor: "rgba(0,0,0,.02)",
                                    }}
                                  >
                                    {domToReact(domNode.children, {
                                      replace: (domNode: DOMNode) => {
                                        if (
                                          domNode instanceof Element &&
                                          domNode.tagName === "td"
                                        ) {
                                          return (
                                            <Td>
                                              {domToReact(domNode.children, {
                                                replace: (domNode: DOMNode) => {
                                                  if (
                                                    domNode instanceof
                                                      Element &&
                                                    domNode.tagName === "span"
                                                  ) {
                                                    if (
                                                      domNode.attribs &&
                                                      domNode.attribs.class ===
                                                        "glyphicon glyphicon-ok"
                                                    ) {
                                                      return <GiCheckMark />;
                                                    }
                                                  }
                                                },
                                              })}
                                            </Td>
                                          );
                                        }
                                      },
                                    })}
                                  </Tr>
                                );
                              }
                            },
                          })}
                        </Tbody>
                      );
                    }
                  },
                })}
              </Table>
            </TableContainer>
          );
        } else if (domNode.tagName === "thead") {
          return (
            <Thead bgColor={"#3679FB"}>
              <Tr>{domToReact(domNode.children)}</Tr>
            </Thead>
          );
        } else if (domNode.tagName === "th") {
          return <Th color="white">{domToReact(domNode.children)}</Th>;
        }
      }
    },
  });

  return (
    <main className={`min-h-screen ${inter.className} bg-white`}>
      <Box
        display={"grid"}
        placeItems="center"
        gap={"10"}
        py="20"
        px={"5"}
        bg={"white"}
        color={"black"}
      >
        <Flex width={"6xl"} direction="column" gap={10}>
          <Flex
            direction={"column"}
            alignItems="center"
            gap={"5"}
            color={"#353E44"}
          >
            {contentParser}
          </Flex>
        </Flex>
        {/* <Flex width={"6xl"} direction="column" gap={10}>
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
        </Flex> */}
      </Box>
    </main>
  );
};

export async function getStaticProps() {
  const GET_PAGES = gql`
    query GetPage {
      pageBy(uri: "web-hosting-servidores") {
        id
        title
        content
      }
    }
  `;

  const response = await client.query({
    query: GET_PAGES,
    variables: { slug: "home" },
  });

  const page = response?.data?.pageBy as Page;

  return {
    props: {
      page,
    },
  };
}

export default WebHosting;
