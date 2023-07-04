import * as React from "react";
import { Inter } from "next/font/google";
import {
  Box,
  Button,
  Flex,
  Grid,
  Image,
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

const typesDesingWeb = [
  {
    title: "Diseño Web para agencias de viaje, restaurantes y hoteles.",
    pathImg: "agencia-de-viajes.png",
  },
  {
    title:
      "Diseño Web para municipios, ministerios, ONGs, colegios profesionales.",
    pathImg: "municipios.png",
  },
  {
    title:
      "Diseño Web para medios de comunicación (TV, radio, prensa escrita).",
    pathImg: "medios-de-comunicacion.png",
  },
  {
    title: "Diseño Web para instituciones educativas.",
    pathImg: "instituciones.png",
  },
  {
    title: "Implementación de tienda virtual (WooCommerce).",
    pathImg: "woocommerce.png",
  },
  {
    title: "Implementación de aula virtual (Moodle).",
    pathImg: "aula-virtual.png",
  },
  {
    title: "Implementación de blog personal (WordPress).",
    pathImg: "blog-personal.png",
  },
  {
    title: "Diseño de Landing Pages (Para anuncios en redes sociales).",
    pathImg: "landing-page.png",
  },
];

const DesingWeb = ({ page }: { page: Page }) => {
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
        color={"white"}
      >
        <Flex
          width={["100%", "100%", "100%", "100%", "5xl"]}
          direction="column"
          gap={10}
        >
          <Flex
            direction={"column"}
            alignItems="center"
            gap={"5"}
            color={"#353E44"}
          >
            <Text fontSize={["3xl", "4xl"]} as="b">
              {page.title}
            </Text>
            {contentParser}
          </Flex>
        </Flex>
        {/* <Flex
          width={["100%", "100%", "100%", "100%", "5xl"]}
          direction="column"
          gap={10}
        >
          <Flex
            direction={"column"}
            alignItems="center"
            gap={"5"}
            color={"#353E44"}
          >
            <Text fontSize={["3xl", "4xl"]} as="b">
              Diseño Web
            </Text>
            <Text fontSize={["md", "md"]} fontWeight="light">
              Diseñamos sitios web innovadores con las últimos estándares y
              tecnologías para que su empresa obtenga alcance mundial.
            </Text>
          </Flex>
          <Flex gap={10} wrap="wrap" justifyContent={"center"}>
            {typesDesingWeb.map((typeDesing, index) => (
              <Flex
                key={index}
                direction={"column"}
                gap="5"
                color={"black"}
                alignItems="center"
                w="60"
                border="1px solid"
                borderColor="#3679FB"
                rounded={"lg"}
                padding="1rem"
                shadow={"0 -8px 0 0 #3679FB"}
                transition="all .2s"
                _hover={{
                  transform: "scale(1.05)",
                }}
              >
                <Image
                  width={"40%"}
                  src={`/img-page-services/${typeDesing.pathImg}`}
                  alt=""
                />
                <Text fontSize={"small"} fontWeight="bold">
                  {typeDesing.title}
                </Text>
              </Flex>
            ))}
          </Flex>
        </Flex> */}
      </Box>
    </main>
  );
};

export async function getStaticProps() {
  const GET_PAGES = gql`
    query GetPage {
      pageBy(uri: "diseno-web") {
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

export default DesingWeb;
