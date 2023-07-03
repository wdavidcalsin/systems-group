import * as React from "react";
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
import Link from "next/link";
import { Inter } from "next/font/google";
import { CustomCarrousel } from "@/components";
import { gql } from "@apollo/client";
import { client } from "@/lib";
import htmlReactParser, {
  DOMNode,
  Element,
  domToReact,
} from "html-react-parser";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

interface Page {
  id: string;
  title: string;
  content: string;
}

interface IImageState {
  img: string;
}

const caracteristicas = [
  {
    title: "Módulos de Ventas y Compras",
    pathImg: "facturas.png",
  },
  {
    title: "Administración de Productos",
    pathImg: "resumen-comprobantes.png",
  },
  {
    title: "Administración de Servicios",
    pathImg: "boletas.png",
  },
  {
    title: "Plantillas para impresión Matricial",
    pathImg: "resumen-de-boletas.png",
  },
  {
    title: "Consulta de RUC online",
    pathImg: "comunicacion-baja.png",
  },
  {
    title: "Control de almacenes",
    pathImg: "comunicacion-baja.png",
  },
  {
    title: "Conversión de tipos de cambios",
    pathImg: "comunicacion-baja.png",
  },
  {
    title: "Privilegios de usuarios",
    pathImg: "comunicacion-baja.png",
  },
];

const imageSlider = [
  { img: "/img-productos-tramite-documentario/tramite-documentario-1.jpg" },
  { img: "/img-productos-tramite-documentario/tramite-documentario-2.jpg" },
];

const SistemaDeTramiteDocumentario = ({ page }: { page: Page }) => {
  const [imageState, setImageState] = useState<IImageState[]>([]);

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
          // setImageState((prev) => [...prev, { img: src }]);

          return <></>;
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

  React.useEffect(() => {
    const images: string[] = [];

    htmlReactParser(page.content, {
      replace: (domNode: DOMNode) => {
        if (domNode instanceof Element && domNode.tagName === "img") {
          const { src } = domNode.attribs;
          images.push(src);
          return <></>; // Retorna un fragmento vacío para eliminar la imagen del contenido
        }
        return null;
      },
    });

    setImageState((prev) => [...prev, ...images.map((img) => ({ img }))]);
  }, [page.content]);

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
          alignItems={"center"}
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
          <Flex
            gap={10}
            columnGap={20}
            justifyContent={"center"}
            width={["100%", "100%", "100%", "100%", "2xl"]}
          >
            <CustomCarrousel imageSlider={imageState} />
          </Flex>
        </Flex>
        {/* <Flex
          width={["100%", "100%", "100%", "100%", "5xl"]}
          direction="column"
          alignItems={"center"}
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
                Sistema de Tramite Documentario
              </Text>
              <Flex direction={"column"} gap="5">
                <Text fontSize={["md", "md"]} fontWeight="light">
                  Solución en la nube que facilita la gestión de su negocio en
                  tiempo real desde cualquier lugar que tenga una conexión a
                  internet.
                </Text>
                <Text fontSize={["md", "md"]} fontWeight="light">
                  Con este sistema usted tendrá el control de sus ventas
                  (imprimir comprobantes de pago, facturas, boletas), compras,
                  almacén, caja, clientes, productos, cuentas por cobrar,
                  cuentas por pagar, reportes y otros.
                </Text>
              </Flex>
            </Flex>
          </Flex>
          <Flex
            gap={10}
            columnGap={20}
            justifyContent={"center"}
            width={["100%", "100%", "100%", "100%", "2xl"]}
          >
            <CustomCarrousel imageSlider={imageSlider} />
          </Flex>
        </Flex> */}
      </Box>
    </main>
  );
};

export async function getStaticProps() {
  const GET_PAGES = gql`
    query GetPage {
      pageBy(uri: "sistema-de-tramite-documentario") {
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

export default SistemaDeTramiteDocumentario;
