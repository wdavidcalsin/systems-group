import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { ImLocation2 } from "react-icons/im";
import { Box, Flex, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex justifyContent={"space-around"} bgColor={"#051927"} py={"3rem"}>
      <Flex direction={"column"} gap={"10"}>
        <Box display={"flex"} flexDirection={"column"} gap={"2"}>
          <Text fontSize="xl" as={"b"}>
            GRUPO SISTEMAS
          </Text>
          <p>Profesionales en tecnologias de informacion</p>
        </Box>
        <p>© 1998 - 2023 GRUPOSISTEMAS S.A.C.</p>
      </Flex>
      <Flex direction={"column"} gap={"2"}>
        <Text fontSize="xl" as={"b"}>
          Contactos
        </Text>
        <Flex flexDirection={"column"} gap={"4"}>
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
