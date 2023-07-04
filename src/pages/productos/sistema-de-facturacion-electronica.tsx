import * as React from "react";
import { client } from "@/lib";
import { gql, parser } from "@apollo/client";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { html2json } from "html2json";
import { Inter } from "next/font/google";
import htmlReactParser, {
  DOMNode,
  Element,
  domToReact,
} from "html-react-parser";
import { CustomCarrousel } from "@/components";

const inter = Inter({ subsets: ["latin"] });

interface Page {
  id: string;
  title: string;
  content: string;
}
interface Node {
  node: string;
  tag?: string;
  child?: Node[];
  text?: string;
}

interface IImageState {
  img: string;
}

const typesFirmaDigital = [
  {
    title: "Facturas y sus respectivas notas de crédito y debito",
    pathImg: "facturas.png",
  },
  {
    title: "Resumen de contingencia de comprobantes.",
    pathImg: "resumen-comprobantes.png",
  },
  {
    title: "Boletas y sus respectivas notas de crédito y debito",
    pathImg: "boletas.png",
  },
  {
    title: "Resumen diario de boletas de venta",
    pathImg: "resumen-de-boletas.png",
  },
  {
    title: "Comunicación de Baja",
    pathImg: "comunicacion-baja.png",
  },
];

// const renderNode = (node: Node): JSX.Element => {
//   if (node.node === "element") {
//     return React.createElement(node.tag!, null, node.child?.map(renderNode));
//   } else if (node.node === "text") {
//     return <>{node.text}</>;
//   }
//   throw new Error(`Invalid node type: ${node.node}`);
// };

const SistemaDeFacturacionElectronica = ({ page }: { page: Page }) => {
  const [imageState, setImageState] = React.useState<IImageState[]>([]);

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
    <main className={`min-h-screen  ${inter.className}  bg-white`}>
      <Box
        display={"grid"}
        placeItems="center"
        gap={"10"}
        py="20"
        px={"5"}
        bg={"white"}
        color={"black"}
        as="div"
      >
        <Flex
          width={["100%", "100%", "100%", "100%", "5xl"]}
          direction="column"
          gap={20}
        >
          <Flex
            direction={"column"}
            alignItems="center"
            gap={"5"}
            color={"#353E44"}
          >
            <Text
              fontSize={["3xl", "4xl"]}
              as="b"
              fontFamily={"serif"}
              textAlign={"center"}
            >
              {page.title}
            </Text>
            <Flex direction={"column"} gap="5">
              {contentParser}
            </Flex>
          </Flex>
          <Flex
            width={["100%", "100%", "100%", "100%", "5xl"]}
            justifyContent={"center"}
            // gap={20}
          >
            <Flex
              gap={10}
              columnGap={20}
              justifyContent={"center"}
              width={["100%", "100%", "100%", "100%", "2xl"]}
              bgColor={"orange.600"}
            >
              <CustomCarrousel imageSlider={imageState} />
            </Flex>
          </Flex>
        </Flex>
        {/* <Flex
          width={["100%", "100%", "100%", "100%", "5xl"]}
          direction="column"
          gap={20}
        >
          <Flex
            direction={"column"}
            alignItems="center"
            gap={"5"}
            color={"#353E44"}
          >
            <Text
              fontSize={["3xl", "4xl"]}
              as="b"
              fontFamily={"serif"}
              textAlign={"center"}
            >
              {page.title}
            </Text>
            <Flex direction={"column"} gap="5">
              <Text fontSize={["md", "md"]} fontWeight="light">
                Emita una factura electrónicamente con la misma legalidad que
                los impresos, con nuestro sistemas solo es necesario registrar
                el certificado electrónico y homologar el sistema el cual
                podemos ayudarle.
              </Text>
              <Text fontSize={["md", "md"]} fontWeight="light">
                Puede imprimir la versión electrónica, enviarla por correo, o a
                un servidor para su consulta, el formato es completamente
                personalizable. Con una interfaz moderna y adaptable a
                dispositivos móviles, usted puede administrar sus comprobantes.
              </Text>
            </Flex>
          </Flex>
          <Flex gap={10} columnGap={20} wrap="wrap" justifyContent={"center"}>
            {typesFirmaDigital.map((typeDesing, index) => (
              <Flex
                key={index}
                // direction={"column"}
                gap="5"
                color={"black"}
                alignItems="center"
                justifyContent={"center"}
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
                <Flex flex={1} justifyContent="center">
                  <Image
                    width={"90%"}
                    src={`/img-page-productos-facturacion/${typeDesing.pathImg}`}
                    alt=""
                  />
                </Flex>
                <Text fontSize={"small"} fontWeight="bold" flex={3}>
                  {typeDesing.title}
                </Text>
              </Flex>
            ))}
          </Flex>
          <Text fontSize={["md", "md"]} fontWeight="light" color={"#353E44"}>
            Empiece ahora mismo, y este al mismo nivel que las grandes empresas,
            ya que el futuro todo es electrónico.
          </Text>
        </Flex> */}
      </Box>
    </main>
  );
};

export async function getStaticProps() {
  const GET_PAGES = gql`
    query GetPage {
      pageBy(uri: "sistema-de-facturacion-electronica") {
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

export default SistemaDeFacturacionElectronica;
