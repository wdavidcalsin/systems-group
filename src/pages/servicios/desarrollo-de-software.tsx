import { client } from "@/lib";
import { gql } from "@apollo/client";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import htmlReactParser, {
  DOMNode,
  Element,
  domToReact,
} from "html-react-parser";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

interface Page {
  id: string;
  title: string;
  content: string;
}

const typesDevSoftware = [
  {
    title: "Desarrollo de aplicaciones Web.",
    pathImg: "web.png",
  },
  {
    title: "Desarrollo de aplicaciones móviles para Android.",
    pathImg: "android.png",
  },
  {
    title: "Desarrollo de aplicaciones de escritorio para Windows.",
    pathImg: "windows.png",
  },
  {
    title:
      "Elaboración de términos de referencia para adquisiciones o licitaciones de software a medida.",
    pathImg: "licitaciones.png",
  },
];

const DesarrolloSoftware = ({ page }: { page: Page }) => {
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
              Desarrollo de Software
            </Text>
            <Text fontSize={["md", "md"]} fontWeight="light">
              Desarrollamos software a medida para empresas e instituciones que
              quieran mejorar sus procesos.
            </Text>
          </Flex>
          <Flex gap={10} wrap="wrap" justifyContent={"center"}>
            {typesDevSoftware.map((typeDesing, index) => (
              <Flex
                key={index}
                direction={"column"}
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
                <Image
                  width={"40%"}
                  src={`/img-page-services-software/${typeDesing.pathImg}`}
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
      pageBy(uri: "desarrollo-de-software") {
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

export default DesarrolloSoftware;
