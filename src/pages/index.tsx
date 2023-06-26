import * as React from "react";

import { Inter } from "next/font/google";
import { Menu, Transition } from "@headlessui/react";
import Slider from "react-slick";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Flex,
  Heading,
  IconButton,
  Image,
  Img,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import { AiOutlineStar } from "react-icons/ai";
import { BiPlus } from "react-icons/bi";
import Link from "next/link";
import { getAllPosts } from "@/lib/post";
import { gql } from "@apollo/client";
import { client } from "@/lib/apollo-client";
import { splitTitle } from "@/utils";
import HTMLReactParser from "html-react-parser";

const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 2,
  slidesToScroll: 1,
};

const inter = Inter({ subsets: ["latin"] });

interface Page {
  __typename: string;
  title: string;
  slug: string;
  content: string;
}

interface ICustomPage {
  __typename: string;
  title: {
    firstTitle: string;
    secondTitle: string;
  };
  slug: string;
  content: string;
}

// export default function Home({ page }: { page: ICustomPage }) {
export default function Home() {
  const [slider, setSlider] = React.useState<Slider | null>(null);

  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "10px" });

  const cards = [
    {
      path: "viveandes.png",
      title: "Viveandes",
      description:
        "Viveandes Works since 2009 to provide top quality tours in Peru & Bolivia to tours companies that search from quality and personalize.",
    },
    {
      path: "travel-and-tour.png",
      title: "Travel and Tour",
      description:
        "Tours en Perú y Paquetes de Viaje a Machu Picchu. Expertos en viajes y profesionales en turismo. Servicio 24/7",
    },
    {
      path: "titicaca-travel.png",
      title: "Titicaca Travel",
      description:
        "Titicaca Travel is a travel agency that offers tours in Peru and Bolivia.",
    },
    {
      path: "inka.png",
      title: "Inka Expeditions",
      description:
        "Inka Expeditions Puno, Puno, Peru. 692 likes · 1 was here. Agencia de viajes y turismo profesionales en turismo operador directo garantia seguridad.",
    },
    {
      path: "electro-puno.png",
      title: "Electro Puno",
      description:
        "Empresa Regional de Servicio Publico de Electricidad de Puno S.A.A.. Somos una empresa de distribución y comercialización de energía eléctrica.",
    },
    {
      path: "amarutours.png",
      title: "Amaru Tours",
      description:
        "Somos un Operador Turístico en el Sur del Perú | Arequipa - Cañón de Colca, Puno - Lago Titicaca, Cusco - Machu Picchu, Bolivia - Salar de Uyuni.",
    },
  ].map((card) => {
    const maxChars = 80;
    if (card.description.length > maxChars) {
      card.description = card.description.substring(0, maxChars) + "...";
    }
    return card;
  });

  const containerRef = useRef(null);

  // const parsedContent = ReactHtmlParser(filteredPages?.content as string);

  return (
    <main className={`min-h-screen ${inter.className} bg-white`}>
      <Box
        position={"relative"}
        height={"100vh"}
        width={"full"}
        overflow={"hidden"}
        bgGradient="linear(to-br, #051927,  #051927,#051927, #03339C)"
        top={"-5rem"}
        zIndex={"10"}
      >
        <Box
          height={"100%"}
          width={"100%"}
          position={"absolute"}
          top={0}
          left={0}
          zIndex={5}
        >
          <Img
            objectFit="cover"
            src="/svg-background-gs.png"
            alt="Dan Abramov"
            height={"100%"}
            width={"100%"}
          />
        </Box>
        <Flex
          height={"100%"}
          width={"100%"}
          alignItems={"center"}
          justifyContent={"center"}
          direction={["column", "column", "row", "row"]}
          position={"relative"}
          zIndex={10}
          px={["1rem", "2rem", "8rem"]}
          gap={[5, 20]}
          pt={["10rem", "10rem", "10rem", "0"]}
        >
          <Flex flex={1} direction={"column"} gap={5}>
            <Box>
              <Text fontSize={"lg"} fontWeight={"light"}>
                Bienvenido a{/* {page.title.firstTitle} */}
              </Text>
              <Text
                fontSize={["5xl", "5xl", "5xl", "5xl", "7xl", "7xl"]}
                fontFamily={"serif"}
              >
                {/* {page.title.secondTitle} */}
                Grupo Sistemas
              </Text>
            </Box>
            {/* <Text fontSize={"lg"} fontWeight={"light"}> */}
            {/* {page.content} */}
            {/* {HTMLReactParser(page.content)} */}
            {/* </Text> */}
            {/* <p dangerouslySetInnerHTML={{ __html: page.content }}></p> */}
            {/* <Text
              as={"div"}
              dangerouslySetInnerHTML={{ __html: page.content }}
              fontSize={"lg"}
              fontWeight={"light"}
            ></Text> */}
            {/* <div  dangerouslySetInnerHTML={{ __html: page.content }} /> */}
            <Box>
              <Button as={Link} href="/contactenos">
                Contactenos
              </Button>
            </Box>
          </Flex>
          <Flex flex={1} justify={"center"}>
            <Img
              width={["10rem", "22rem"]}
              height={["10rem", "auto"]}
              src="/technology-home.png"
            />
          </Flex>
        </Flex>
      </Box>
      <Box
        display={"grid"}
        placeItems="center"
        gap={"10"}
        pb="20"
        px={"5"}
        color={"#353E44"}
      >
        <Text
          fontSize={["3xl", "4xl"]}
          color={"#353E44"}
          as="b"
          textAlign={"center"}
        >
          Soluciones y servicios en TIC
        </Text>
        <Flex gap={"20"} flexWrap="wrap" justifyContent={"center"}>
          <Flex
            direction={"column"}
            w="15rem"
            alignItems="center"
            justifyContent={"center"}
            boxShadow="xl"
            gap={"4"}
            p="6"
            rounded="md"
            bg="white"
            _hover={{
              boxShadow: "2xl",
            }}
          >
            <Img w={"28"} src={"/img/dev_web.png"} />
            <Text fontWeight="medium">Desarrollo de Software</Text>
          </Flex>
          <Flex
            direction={"column"}
            alignItems="center"
            justifyContent={"center"}
            w="15rem"
            boxShadow="xl"
            gap={"4"}
            p="6"
            rounded="md"
            bg="white"
            _hover={{
              boxShadow: "2xl",
            }}
          >
            <Img w={"28"} src={"/img/diseno_web.png"} />
            <Text fontWeight="medium">Diseño web</Text>
          </Flex>
          <Flex
            direction={"column"}
            alignItems="center"
            justifyContent={"center"}
            w="15rem"
            boxShadow="xl"
            gap={"4"}
            p="6"
            rounded="md"
            bg="white"
            _hover={{
              boxShadow: "2xl",
            }}
          >
            <Img w={"28"} src={"/img/dominio.png"} />
            <Text fontWeight="medium">Registro de Dominio</Text>
          </Flex>
          <Flex
            direction={"column"}
            alignItems="center"
            justifyContent={"center"}
            w="15rem"
            boxShadow="xl"
            gap={"4"}
            p="6"
            rounded="md"
            bg="white"
            _hover={{
              boxShadow: "2xl",
            }}
          >
            <Img w={"28"} src={"/img/hosting.png"} />
            <Text fontWeight="medium" textAlign={"center"}>
              Web Hosting y Servidores
            </Text>
          </Flex>
        </Flex>
      </Box>
      <Box
        display={"grid"}
        placeItems="center"
        gap={"10"}
        py="20"
        px={"5"}
        bg={"#051927"}
        color={"white"}
      >
        <Flex direction={"column"} alignItems="center" gap={"5"}>
          <Text fontSize={["3xl", "4xl"]} as="b">
            Servidores Web
          </Text>
          <Text fontSize={["xl", "md"]} fontWeight="light">
            Tenemos las mejores soluciones para tu requerimiento de alojamiento
            web
          </Text>
        </Flex>
        <Flex
          gap={["10", "10", "0"]}
          justifyContent={"center"}
          alignItems="center"
          flexDirection={["column", "column", "row"]}
        >
          <Flex
            direction={"column"}
            bgColor="white"
            color={"black"}
            w={["33.3", "33.3", "33.3", "33.3", "20rem"]}
            minH={"25rem"}
            p={5}
            rounded="2xl"
            alignItems={"center"}
            gap="10"
            transition={"all .2s"}
            _hover={{
              zIndex: 60,
              transform: "scale(1.02)",
              shadow: "lg",
            }}
          >
            <Text fontSize={"2xl"} fontWeight="bold">
              Emprendedores
            </Text>
            <Flex gap={"2"} alignItems="end">
              S/.
              <Text fontSize={"3xl"} fontWeight="bold">
                99
              </Text>
              /anual
            </Flex>
            <Box>
              <Button colorScheme={"orange"} color="white">
                Ver Mas
              </Button>
            </Box>
            <Flex w={"100%"} direction="column" gap={"5"}>
              <Flex alignItems={"center"} gap="5">
                <Text color={"#3679FB"}>
                  <AiOutlineStar />
                </Text>
                <Flex gap={"2"}>
                  400MB <Text color={"#3679FB"}>to</Text> 4GB
                </Flex>
              </Flex>
              <Flex alignItems={"center"} gap="5">
                <Text color={"#3679FB"}>
                  <BiPlus />
                </Text>
                <Flex gap={"2"}>
                  Bases de datos MySQL, Soporte 24x7, Lenguaje PHP
                </Flex>
              </Flex>
            </Flex>
          </Flex>
          <Flex
            direction={"column"}
            bgColor="white"
            shadow={"2xl"}
            // color={"#353E44"}
            color={"black"}
            w={["33.3", "33.3", "33.3", "33.3", "20rem"]}
            minH={"27rem"}
            p={5}
            rounded="2xl"
            alignItems={"center"}
            gap="10"
            position={"relative"}
            zIndex="50"
            transition={"all .2s"}
            _hover={{
              zIndex: 60,
              transform: "scale(1.02)",
            }}
          >
            <Text fontSize={"2xl"} fontWeight="bold">
              Estandar
            </Text>
            <Flex gap={"2"} alignItems="end">
              S/.
              <Text fontSize={"3xl"} fontWeight="bold">
                200
              </Text>
              /anual
            </Flex>
            <Box>
              <Button colorScheme={"orange"} color="white">
                Ver Mas
              </Button>
            </Box>
            <Flex w={"100%"} direction="column" gap={"5"}>
              <Flex alignItems={"center"} gap="5">
                <Text color={"#3679FB"}>
                  <AiOutlineStar />
                </Text>
                <Flex gap={"2"}>
                  700MB <Text color={"#3679FB"}>to</Text> 7GB
                </Flex>
              </Flex>
              <Flex alignItems={"center"} gap="5">
                <Text color={"#3679FB"}>
                  <BiPlus />
                </Text>
                <Flex gap={"2"}>
                  Bases de datos MySQL, Soporte 24x7, Lenguaje PHP
                </Flex>
              </Flex>
            </Flex>
          </Flex>
          <Flex
            direction={"column"}
            bgColor="white"
            // color={"#353E44"}
            color={"black"}
            w={["33.3", "33.3", "33.3", "33.3", "20rem"]}
            minH={"25rem"}
            p={5}
            rounded="2xl"
            alignItems={"center"}
            gap="10"
            transition={"all .2s"}
            _hover={{
              zIndex: 60,
              transform: "scale(1.02)",
              shadow: "lg",
            }}
          >
            <Text fontSize={"2xl"} fontWeight="bold">
              Profesional
            </Text>
            <Flex gap={"2"} alignItems="end">
              S/.
              <Text fontSize={"3xl"} fontWeight="bold">
                300
              </Text>
              /anual
            </Flex>
            <Box>
              <Button colorScheme={"orange"} color="white">
                Ver Mas
              </Button>
            </Box>
            <Flex w={"100%"} direction="column" gap={"5"}>
              <Flex alignItems={"center"} gap="5">
                <Text color={"#3679FB"}>
                  <AiOutlineStar />
                </Text>
                <Flex gap={"2"}>
                  1GB <Text color={"#3679FB"}>to</Text> 10GB
                </Flex>
              </Flex>
              <Flex alignItems={"center"} gap="5">
                <Text color={"#3679FB"}>
                  <BiPlus />
                </Text>
                <Flex gap={"2"}>
                  Bases de datos MySQL, Soporte 24x7, Lenguaje PHP
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Box>
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
            Nuestros Clientes
          </Text>
          <Text fontSize={["xl", "md"]} fontWeight="light">
            La confianza es muy importante en nuestra empresa, nosotros
            confiamos en nuestros clientes y ellos también confian en nosotros.
          </Text>
        </Flex>
        <Box
          position={"relative"}
          height={"250px"}
          width={["100%", "80%"]}
          overflow={"hidden"}
        >
          {/* CSS files for react-slick */}
          <link
            rel="stylesheet"
            type="text/css"
            charSet="UTF-8"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
          />
          {/* Left Icon */}
          <IconButton
            aria-label="left-arrow"
            colorScheme="messenger"
            bgColor={"#3679FB"}
            borderRadius="full"
            position="absolute"
            left={side}
            top={top}
            transform={"translate(0%, -50%)"}
            zIndex={2}
            onClick={() => slider?.slickPrev()}
          >
            <BiLeftArrowAlt />
          </IconButton>
          {/* Right Icon */}
          <IconButton
            aria-label="right-arrow"
            colorScheme="messenger"
            bgColor={"#3679FB"}
            borderRadius="full"
            position="absolute"
            right={side}
            top={top}
            transform={"translate(0%, -50%)"}
            zIndex={2}
            onClick={() => slider?.slickNext()}
          >
            <BiRightArrowAlt />
          </IconButton>
          {/* Slider */}
          <Slider {...settings} ref={(slider) => setSlider(slider)}>
            {cards.map(
              (item, index) =>
                index % 2 == 0 && (
                  <Box
                    key={index}
                    height={"220px"}
                    width={["100%", "50%"]}
                    position="relative"
                    color={"black"}
                    overflow="hidden"
                  >
                    <Flex
                      alignItems="center"
                      gap={"4"}
                      height="100%"
                      direction={["column", "row"]}
                    >
                      <Card
                        direction={{ base: "column", sm: "row" }}
                        overflow="hidden"
                        variant="outline"
                        width={["100%", "50%"]}
                      >
                        <Flex bgColor={"white"} alignItems="center">
                          <Image
                            // objectFit="cover"
                            maxW={{ base: "100%", sm: "200px" }}
                            src={`img-clients/${item.path}`}
                            alt="Caffe Latte"
                          />
                        </Flex>

                        <Stack>
                          <CardBody>
                            <Heading size="md">{item.title}</Heading>

                            <Text py="2" fontWeight={"light"}>
                              {item.description}
                            </Text>
                          </CardBody>
                        </Stack>
                      </Card>
                      <Card
                        direction={{ base: "column", sm: "row" }}
                        overflow="hidden"
                        variant="outline"
                        width={["100%", "50%"]}
                      >
                        <Flex bgColor={"white"} alignItems="center">
                          <Image
                            // objectFit="cover"
                            maxW={{ base: "100%", sm: "200px" }}
                            src={`img-clients/${cards[index + 1].path}`}
                            alt="Caffe Latte"
                          />
                        </Flex>

                        <Stack>
                          <CardBody>
                            <Heading size="md">
                              {cards[index + 1].title}
                            </Heading>

                            <Text py="2" fontWeight={"light"}>
                              {cards[index + 1].description}
                            </Text>
                          </CardBody>
                        </Stack>
                      </Card>
                      {/* <Text flex={"1"}>Hola</Text> */}
                    </Flex>
                  </Box>
                )
            )}
          </Slider>
        </Box>
      </Box>
    </main>
  );
}

// export async function getStaticProps() {
//   const GET_PAGES = gql`
//     query GetAllPages {
//       pages {
//         nodes {
//           title
//           slug
//           content
//         }
//       }
//     }
//   `;

//   const response = await client.query({
//     query: GET_PAGES,
//     variables: { slug: "home" },
//   });

//   const pages = response?.data?.pages?.nodes as Page[];
//   const filteredPages = pages.find((page) => page.slug === "home");

//   const page = {
//     ...filteredPages,
//     title: splitTitle(filteredPages?.title as string),
//   };

//   return {
//     props: {
//       page,
//     },
//   };
// }
