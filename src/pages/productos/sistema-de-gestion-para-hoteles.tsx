import {
  Box,
  Flex,
  Image,
  List,
  ListIcon,
  ListItem,
  Text,
} from "@chakra-ui/react";
import { AiFillCheckCircle } from "react-icons/ai";
import { Inter } from "next/font/google";
import Link from "next/link";
import { gql } from "@apollo/client";
import { client } from "@/lib";
import htmlReactParser, {
  DOMNode,
  domToReact,
  Element,
} from "html-react-parser";

const inter = Inter({ subsets: ["latin"] });

interface Page {
  id: string;
  title: string;
  content: string;
}

const caracteristicas = [
  {
    title: "Gestión de reservas",
    pathImg: "facturas.png",
  },
  {
    title: "Ventas y Facturación",
    pathImg: "resumen-comprobantes.png",
  },
  {
    title: "Control de almacenes",
    pathImg: "boletas.png",
  },
  {
    title:
      "Privilegios de usuarios (Administrador, Recepcionista, Reservas y Auditoría)",
    pathImg: "resumen-de-boletas.png",
  },
  {
    title: "Registro de huéspedes",
    pathImg: "comunicacion-baja.png",
  },
  {
    title: "Control de caja",
    pathImg: "comunicacion-baja.png",
  },
  {
    title:
      "Configurabilidad (Monedas, Tarifas, Impuestos, Plantillas de factura, etc)",
    pathImg: "comunicacion-baja.png",
  },
];

const SistemaDeGestionParaHoteles = ({ page }: { page: Page }) => {
  const replaceListItem = (domNode: DOMNode) => {
    if (domNode instanceof Element && domNode.tagName === "li") {
      return (
        <ListItem>
          <ListIcon as={AiFillCheckCircle} color="blue.500" />
          {domToReact(domNode.children)}
        </ListItem>
      );
    }
  };

  const contentParser = htmlReactParser(page.content, {
    replace: (domNode: DOMNode) => {
      if (domNode instanceof Element) {
        if (domNode.tagName === "p") {
          return (
            <Text fontSize={["md", "md"]} fontWeight="light" as={"p"}>
              {domToReact(domNode.children)}
            </Text>
          );
        } else if (domNode.tagName === "ul") {
          return (
            <List
              spacing={3}
              display="grid"
              gridTemplateColumns="repeat(2, 1fr)"
              columnGap={20}
            >
              {domToReact(domNode.children, { replace: replaceListItem })}
            </List>
          );
        } else if (domNode.tagName === "h3") {
          return (
            <Flex py={10} justifyContent={"left"}>
              <Text
                fontSize={["xl", "2xl"]}
                textAlign={"left"}
                as="b"
                color={"#1192EE"}
              >
                {domToReact(domNode.children, { replace: replaceListItem })}
              </Text>
            </Flex>
          );
        } else if (domNode.tagName === "img") {
          const { src, alt } = domNode.attribs;
          return (
            <Flex py={"16"} justifyContent={"center"} alignItems={"center"}>
              <Image
                src={src}
                alt={alt}
                rounded="lg"
                overflow={"hidden"}
                transition={"all .2s"}
                _hover={{
                  transform: "scale(1.05) ",
                  // transform: "scale(1.1) rotate(-1deg)",
                }}
              />
            </Flex>
          );
        } else if (domNode.tagName === "iframe") {
          const { src } = domNode.attribs;
          return (
            <Flex
              direction={"column"}
              justifyContent="center"
              alignItems={"center"}
              gap={10}
              py={10}
            >
              <iframe
                width="560"
                height="315"
                src={src}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen={true}
              ></iframe>
              <Link
                href="#"
                className="py-5 px-4 bg-[#FF7900] rounded-lg text-white"
              >
                Vea Nuestros Precios
              </Link>
            </Flex>
          );
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
        <Flex
          width={["100%", "100%", "100%", "100%", "5xl"]}
          direction="column"
          gap={20}
        >
          <Flex alignItems={"center"} gap="10">
            <Flex
              direction={"column"}
              alignItems="center"
              gap={"5"}
              color={"#353E44"}
              flex={1}
            >
              <Text fontSize={["3xl", "4xl"]} as="b">
                {page.title}
              </Text>
              <Flex direction={"column"} gap="5">
                {contentParser}
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        {/* <Flex
          width={["100%", "100%", "100%", "100%", "5xl"]}
          direction="column"
          gap={20}
        >
          <Flex alignItems={"center"} gap="10">
            <Flex
              direction={"column"}
              alignItems="center"
              gap={"5"}
              color={"#353E44"}
              flex={1}
            >
              <Text fontSize={["3xl", "4xl"]} as="b">
                Sistema de Gestión para Hoteles
              </Text>
              <Flex direction={"column"} gap="5">
                <Text fontSize={["md", "md"]} fontWeight="light">
                  Las empresas cada vez están usando las tecnologías de la
                  información para aumentar la rentabilidad de su negocio,
                  GSHotel es un sistema de gestión de hoteles, donde puede
                  Gestionar sus reservas, facturas, almacén y cuentas.Grandes y
                  pequeños hoteles pueden ser gestionados con con GSHotel, desde
                  cualquier lugar siempre que tenga una computadora con un
                  navegador web actualizado y acceso a internet.
                </Text>
              </Flex>
            </Flex>
            <Flex flex={1} justifyContent="center">
              <Box rounded="lg" overflow={"hidden"}>
                <Image
                  src="/img-page-productos-hoteles/sistema-de-hoteles.jpg"
                  alt=""
                  transition={"all .2s"}
                  _hover={{
                    transform: "scale(1.1) ",
                  }}
                />
              </Box>
            </Flex>
          </Flex>
          <Flex
            gap={10}
            columnGap={20}
            wrap="wrap"
            justifyContent={"center"}
          ></Flex>
        </Flex> */}
      </Box>
      {/* <Box
        display={"grid"}
        placeItems="center"
        gap={"10"}
        py="20"
        px={"5"}
        bg={"#E9EEF1"}
        color={"white"}
      >
        <Flex
          width={["100%", "100%", "100%", "100%", "5xl"]}
          direction="column"
          gap={20}
        >
          <Flex alignItems={"center"} gap="10">
            <Flex
              direction={"column"}
              alignItems="center"
              gap={"5"}
              color={"#353E44"}
              flex={1}
            >
              <Text fontSize={["xl", "2xl"]} as="b" color={"#1192EE"}>
                Características
              </Text>

              <List
                spacing={3}
                display="grid"
                gridTemplateColumns="repeat(2, 1fr)"
                columnGap={20}
              >
                {caracteristicas.map((caracteristica, index) => (
                  <ListItem key={index}>
                    <ListIcon as={AiFillCheckCircle} color="blue.500" />
                    {caracteristica.title}
                  </ListItem>
                ))}
              </List>
            </Flex>
          </Flex>
        </Flex>
      </Box> */}
      {/* <Box
        display={"grid"}
        placeItems="center"
        gap={"10"}
        py="20"
        px={"5"}
        bg={"white"}
        color={"white"}
      >
        <Flex
          width={["100%", "100%", "100%", "100%", "5xl"]}
          direction="column"
          gap={20}
        >
          <Flex alignItems={"center"} gap="10">
            <Flex
              direction={"column"}
              alignItems="center"
              gap={"5"}
              color={"#353E44"}
              flex={1}
            >
              <Text fontSize={["xl", "2xl"]} as="b" color={"#1192EE"}>
                Características
              </Text>

              <Flex
                direction={"column"}
                justifyContent="center"
                alignItems={"center"}
                gap={10}
              >
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/q5zyA2Uo0OE"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen={true}
                ></iframe>
                <Link
                  href="#"
                  className="py-5 px-4 bg-[#FF7900] rounded-lg text-white"
                >
                  Vea Nuestros Precios
                </Link>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Box> */}
    </main>
  );
};

export async function getStaticProps() {
  const GET_PAGES = gql`
    query GetPage {
      pageBy(uri: "sistema-de-hoteles") {
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
  // console.log(page);

  return {
    props: {
      page,
    },
  };
}

export default SistemaDeGestionParaHoteles;
