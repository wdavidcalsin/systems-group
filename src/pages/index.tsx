import * as React from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import { Menu, Transition } from "@headlessui/react";
import {
  Box,
  Button,
  Flex,
  IconButton,
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
import Slider from "react-slick";

const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [slider, setSlider] = React.useState<Slider | null>(null);

  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "10px" });

  const cards = [
    "https://www.seiu1000.org/sites/main/files/main-images/camera_lense_0.jpeg",
    "https://images.unsplash.com/photo-1627875764093-315831ac12f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
    "https://images.unsplash.com/photo-1571432248690-7fd6980a1ae2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
  ];

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
          px={["1rem", "8rem"]}
          gap={[5, 20]}
          pt={["10rem", "10rem", "10rem", "0"]}
        >
          <Flex flex={1} direction={"column"} gap={5}>
            <Box>
              <Text fontSize={"lg"} fontWeight={"light"}>
                Bienvenido a
              </Text>
              <Text
                fontSize={["5xl", "5xl", "5xl", "5xl", "7xl", "7xl"]}
                fontFamily={"serif"}
              >
                Grupo Sistemas
              </Text>
            </Box>
            <Text fontSize={"lg"} fontWeight={"light"}>
              Nos encargamos de que tu proyecto se haga realidad gracias a
              nuestro equipo profesional en Tecnologías de la Información.
            </Text>
            <Box>
              <Button>Contactenos</Button>
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
        <Text fontSize={["3xl", "4xl"]} color={"#353E44"} as="b">
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
          gap={""}
          flexWrap="wrap"
          justifyContent={"center"}
          alignItems="center"
        >
          <Flex
            direction={"column"}
            bgColor="white"
            // color={"#353E44"}
            color={"black"}
            w="20rem"
            minH={"25rem"}
            p={5}
            rounded="2xl"
            alignItems={"center"}
            gap="10"
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
            shadow={"2xl"}
            // color={"#353E44"}
            color={"black"}
            w="20rem"
            minH={"27rem"}
            p={5}
            rounded="2xl"
            alignItems={"center"}
            gap="10"
            position={"relative"}
            zIndex="50"
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
            w="20rem"
            minH={"25rem"}
            p={5}
            rounded="2xl"
            alignItems={"center"}
            gap="10"
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
    </main>
  );
}
