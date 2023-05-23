import {
  Box,
  Button,
  Flex,
  FormControl,
  Icon,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { Inter } from "next/font/google";
import { MdEmail } from "react-icons/md";
import {
  BsAndroid,
  BsDatabaseFillCheck,
  BsGoogle,
  BsWordpress,
  BsGlobe,
} from "react-icons/bs";
import { GiDatabase } from "react-icons/gi";
import { BiCopyAlt, BiCloudUpload } from "react-icons/bi";

const inter = Inter({ subsets: ["latin"] });

const listOptionSoporte = [
  {
    icon: MdEmail,
    title: "Eliminar emails antiguos de cuentas de CPanel",
  },
  {
    icon: BsAndroid,
    title: "Configurar email en Android",
  },
  {
    icon: MdEmail,
    title: "Configuración general de email",
  },
  {
    icon: BsDatabaseFillCheck,
    title: "Revisar uso de espacio en disco",
  },
  {
    icon: BsGoogle,
    title: "Integrar a Google Analytics",
  },
  {
    icon: BsWordpress,
    title: "Instalar WordPress",
  },
  {
    icon: GiDatabase,
    title: "Configurar base de datos MySQL",
  },
  {
    icon: BsGlobe,
    title: "Agregar dominio adicional",
  },
  {
    icon: BiCopyAlt,
    title: "Generar copia de seguridad",
  },
  {
    icon: BiCloudUpload,
    title: "Configurar cuenta FTP en FileZilla",
  },
];

const Soporte = () => {
  return (
    <main className={`min-h-screen ${inter.className} bg-white`}>
      <Box
        display={"grid"}
        placeItems="center"
        // gap={"10"}
        pt="20"
        bg={"white"}
        color={"white"}
      >
        <Flex
          w="full"
          display={"grid"}
          placeItems="center"
          px={"5"}
          py={20}
          className=" bg-[url('https://www.bbva.com/wp-content/uploads/2018/06/fintech-tecnologia-innovacion-digital-blockchain-bbva_opt.jpg')] backdrop-blur-md backdrop-contrast-125"
        >
          <Flex
            width={["100%", "100%", "100%", "100%", "5xl"]}
            direction="column"
            gap={20}
          >
            <form
              action=""
              className="flex rounded-full overflow-hidden border-[6px] border-black"
            >
              <Input
                type="text"
                placeholder="¿Como podemos ayudarte?"
                textColor={"black"}
                bgColor="white"
                border={0}
                roundedBottomRight={0}
                roundedTopRight={0}
              />
              <Button
                roundedBottomLeft={0}
                roundedTopLeft={0}
                colorScheme="blue"
                bgColor={"#1D68FB"}
                textColor="white"
                _hover={{
                  transform: "scale(1.1)",
                }}
              >
                Show
              </Button>
            </form>
          </Flex>
        </Flex>
        <Flex
          w={"full"}
          display={"grid"}
          placeItems="center"
          bgColor={"#F7F7F7"}
          py="20"
          px={"5"}
        >
          <Flex
            width={["100%", "100%", "100%", "100%", "5xl"]}
            direction="column"
            gap={20}
          >
            <Flex
              flexWrap={"wrap"}
              gap={"10"}
              color={"#353E44"}
              justifyContent="center"
            >
              {listOptionSoporte.map((option, index) => (
                <Flex
                  key={index}
                  direction={"column"}
                  gap="2"
                  w={"13rem"}
                  bgColor="white"
                  alignItems={"center"}
                  color="#1192EE"
                  transition={"all .2s"}
                  p={5}
                  rounded="md"
                  cursor={"pointer"}
                  _hover={{
                    bgColor: "#1192EE",
                    color: "white",
                  }}
                  role="group"
                >
                  {/* <MdEmail className="text-6xl" /> */}
                  <Icon as={option.icon} className="text-6xl" />
                  <Text textAlign={"center"} fontSize="sm">
                    {option.title}
                  </Text>
                </Flex>
              ))}
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </main>
  );
};

export default Soporte;
