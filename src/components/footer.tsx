import * as React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { ImLocation2 } from "react-icons/im";
import { Box, Flex, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex
      justifyContent={"space-around"}
      bgColor={"#051927"}
      py={"3rem"}
      px="1rem"
    >
      <Flex direction={"column"} gap={"10"}>
        <Box display={"flex"} flexDirection={"column"} gap={"2"}>
          <Text fontSize={["md", "md", "xl"]} as={"b"}>
            GRUPO SISTEMAS
          </Text>
          <Text fontSize={["sm", "sm", "md"]}>
            Profesionales en tecnologias de informacion
          </Text>
        </Box>
        <Text fontSize={["sm", "sm", "md"]}>
          © 1998 - 2023 GRUPOSISTEMAS S.A.C.
        </Text>
      </Flex>
      <Flex direction={"column"} gap={"2"}>
        <Text fontSize={["md", "md", "xl"]} as={"b"}>
          Contactos
        </Text>
        <Flex flexDirection={"column"} gap={"4"} fontSize={["sm", "sm", "md"]}>
          <Flex alignItems={"center"} gap={"3"}>
            <BsFillTelephoneFill />
            <p>+ 51-51-367533</p>
          </Flex>
          <Flex alignItems={"center"} gap={"3"}>
            <AiOutlineMail />
            <p>info@gruposistemas.com</p>
          </Flex>
          <Flex alignItems={"center"} gap={"3"}>
            <ImLocation2 />
            <p>Av. Floral 1128 Puno - Peru</p>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Footer;
