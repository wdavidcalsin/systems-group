import * as React from "react";
import { Inter } from "next/font/google";
import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spinner,
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
  useDisclosure,
} from "@chakra-ui/react";
import { BiSearchAlt } from "react-icons/bi";
import { useGetDomain, useGetWhoIs } from "@/store";
import { serviceGetWhoIs } from "@/services";

const inter = Inter({ subsets: ["latin"] });

const RegistrarDominio = () => {
  const { isLoading, setDomain, handleChangeInputDomain, domain, inputDomain } =
    useGetDomain();
  const getWhoIs = useGetWhoIs();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleClickWhoIs = () => {
    onOpen();
    getWhoIs.setWhoIs(domain.domain);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setDomain();
  };

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
        as="div"
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
            <Text fontSize={["3xl", "5xl"]} as="b" fontFamily={"serif"}>
              Registrar Dominio
            </Text>
            <Text fontSize={["md", "md"]} fontWeight="light">
              Un dominio es tu marca en internet, además podrás crear correos
              electrónicos corporativos que te darán seriedad y confianza ante
              tus clientes y/o usuarios.
            </Text>
          </Flex>

          <TableContainer
            color="#353E44"
            width={"100%"}
            gap="20"
            borderColor="#C2C2C2"
            overflow={"auto"}
            // bgColor={"red"}
          >
            <Table
              overflow={"auto"}
              // bgColor={"blue"}
              variant="simple"
              size={"lg"}
              colorScheme="twitter"
              borderColor="#051C2C"
            >
              <Thead bgColor={"#3679FB"}>
                <Tr>
                  <Th color="white">Servicio</Th>
                  <Th color="white">Descripcion</Th>
                  <Th color="white" isNumeric>
                    Precio anual
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr
                  transition={"all .3s"}
                  _hover={{
                    // transform: "scale(1.01)",
                    opacity: "2",
                    bgColor: "rgba(0,0,0,.02)",
                  }}
                >
                  <Td rowSpan={2} fontWeight="bold">
                    Registro de Dominio
                  </Td>
                  <Td>Internacionales(.com, .net o .org)</Td>
                  <Td isNumeric>(Solo Dominio) S/. 75.00</Td>
                </Tr>
                <Tr
                  transition={"all .3s"}
                  _hover={{
                    opacity: "2",
                    bgColor: "rgba(0,0,0,.02)",
                  }}
                >
                  <Td>Nacionales(.pe, .com.pe, .gob.pe, .edu.pe)</Td>
                  <Td isNumeric>S/. 150.00</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
          <Grid
            // bg={"rgba(0,0,0,0.02)"}
            bg={"#033082"}
            placeItems="center"
            py={20}
            rounded="xl"
            gap={8}
          >
            <Text fontSize={["3xl", "4xl"]} as="b">
              Busque su nombre de Dominio
            </Text>
            <form onSubmit={handleSubmit}>
              <Flex gap={3} bgColor="#F6F6F6" p="3" rounded={"xl"} as="div">
                <Input
                  placeholder="mysite"
                  bgColor={"white"}
                  color="black"
                  roundedTopRight={0}
                  roundedBottomRight={0}
                  width="30rem"
                  onChange={handleChangeInputDomain}
                />
                <Button
                  type="submit" // Cambiar el tipo de botón a "submit"
                  bgColor={"#0EAC40"}
                  variant="solid"
                  fontSize={"1.5rem"}
                  rounded="xl"
                  _hover={{
                    bgColor: "#0EAC40",
                  }}
                >
                  {isLoading ? <Spinner size="sm" /> : <BiSearchAlt />}
                </Button>
              </Flex>
            </form>
            {/* <Flex gap={3} bgColor="#F6F6F6" p="3" rounded={"xl"} as="div">
              <Input
                placeholder="mysite"
                bgColor={"white"}
                color="black"
                roundedTopRight={0}
                roundedBottomRight={0}
                width="30rem"
                onChange={handleChangeInputDomain}
              />
              <Button
                bgColor={"#0EAC40"}
                variant="solid"
                fontSize={"1.5rem"}
                rounded="xl"
                onClick={setDomain}
                type="button"
                _hover={{
                  bgColor: "#0EAC40",
                }}
              >
                {isLoading ? <Spinner size="sm" /> : <BiSearchAlt />}
              </Button>
            </Flex> */}

            {domain.code === "UNSUPPORTED_TLD" ? (
              <Flex direction="column" alignItems="center" gap={5} as="div">
                <Text fontSize={["xl", "xl"]} as="b">
                  TLD Invalid
                </Text>
              </Flex>
            ) : domain.domain === "" ? null : domain && domain.available ? (
              <Flex
                direction="row"
                alignItems="center"
                justifyContent={"space-between"}
                gap={5}
                as="div"
                bgColor={"rgba(0,0,0,.22)"}
                rounded={15}
                width={["full", "xl", "xl"]}
                py={8}
                px={8}
                // wrap={"wrap"}
              >
                <Text fontSize={["xl", "xl"]} fontWeight={"medium"}>
                  {domain.domain}
                </Text>
                <Text
                  fontSize={["xl", "xl"]}
                  color={"#8C8C8C"}
                  fontWeight={"medium"}
                >
                  1st year sale
                </Text>

                <Text fontSize={["xl", "sm"]} fontWeight={"medium"}>
                  S/.
                  {domain.currency === "SOL"
                    ? domain.price
                    : Math.round((domain.price / Math.pow(10, 6)) * 3.63)}
                  .00 /year
                </Text>
              </Flex>
            ) : (
              <Flex
                direction="row"
                alignItems="center"
                justifyContent={"space-between"}
                gap={5}
                as="div"
                bgColor={"rgba(0,0,0,.22)"}
                rounded={15}
                width={["full", "xl", "xl"]}
                py={8}
                px={8}
                // wrap={"wrap"}
              >
                <Text fontSize={["xl", "xl"]} fontWeight={"medium"}>
                  {domain.domain}
                </Text>
                <Text
                  fontSize={["xl", "xl"]}
                  color={"#8C8C8C"}
                  fontWeight={"medium"}
                >
                  No está disponible
                </Text>

                <Button onClick={handleClickWhoIs}>Who is?</Button>
              </Flex>
            )}

            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader color={"#3679FB"}> {inputDomain}</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <TableContainer
                    color="#353E44"
                    width={"100%"}
                    gap="20"
                    borderColor="#C2C2C2"
                    overflow={"auto"}
                    // bgColor={"red"}
                    css={{
                      "&::-webkit-scrollbar": {
                        width: 0,
                        color: "transparent transparent",
                      },
                    }}
                  >
                    <Table
                      overflow={"auto"}
                      // bgColor={"blue"}
                      variant="simple"
                      size={"lg"}
                      colorScheme="twitter"
                      borderColor="#051C2C"
                    >
                      {getWhoIs.isLoading ? (
                        <Tbody color={"white"}>
                          <Tr>
                            <Td
                              display={"flex"}
                              alignItems={"center"}
                              justifyContent={"center"}
                            >
                              <Spinner size="sm" />
                            </Td>
                          </Tr>
                        </Tbody>
                      ) : (
                        <Tbody color={"white"}>
                          <Tr
                            transition={"all .3s"}
                            _hover={{
                              // transform: "scale(1.01)",
                              opacity: "2",
                              bgColor: "rgba(0,0,0,.02)",
                            }}
                            border={"none"}
                          >
                            <Td fontWeight="bold">Name:</Td>
                            <Td> {getWhoIs.whoIs["Registrant Name"]}</Td>
                          </Tr>
                          {/* <Tr
                            transition={"all .3s"}
                            _hover={{
                              opacity: "2",
                              bgColor: "rgba(0,0,0,.02)",
                            }}
                          >
                            <Td fontWeight="bold">Created Date:</Td>
                            <Td>{getWhoIs.whoIs.WhoisRecord.createdDate}</Td>
                          </Tr> */}
                          {/* <Tr
                            transition={"all .3s"}
                            _hover={{
                              opacity: "2",
                              bgColor: "rgba(0,0,0,.02)",
                            }}
                          >
                            <Td fontWeight="bold">Expires Date:</Td>
                            <Td>{getWhoIs.whoIs.WhoisRecord.expiresDate}</Td>
                          </Tr> */}
                          <Tr
                            transition={"all .3s"}
                            _hover={{
                              opacity: "2",
                              bgColor: "rgba(0,0,0,.02)",
                            }}
                          >
                            <Td fontWeight="bold">Contact email:</Td>
                            <Td>
                              {getWhoIs.whoIs["Registrar Abuse Contact Email"]}
                            </Td>
                          </Tr>
                          <Tr
                            transition={"all .3s"}
                            _hover={{
                              opacity: "2",
                              bgColor: "rgba(0,0,0,.02)",
                            }}
                          >
                            <Td fontWeight="bold">Admin Name:</Td>
                            <Td>{getWhoIs.whoIs["Admin Name"]}</Td>
                          </Tr>
                          <Tr
                            transition={"all .3s"}
                            _hover={{
                              opacity: "2",
                              bgColor: "rgba(0,0,0,.02)",
                            }}
                          >
                            <Td fontWeight="bold">Admin Email:</Td>
                            <Td>{getWhoIs.whoIs["Admin Email"]}</Td>
                          </Tr>
                          <Tr
                            transition={"all .3s"}
                            _hover={{
                              opacity: "2",
                              bgColor: "rgba(0,0,0,.02)",
                            }}
                          >
                            <Td fontWeight="bold">Sponsoring Registrar:</Td>
                            <Td>{getWhoIs.whoIs["Sponsoring Registrar"]}</Td>
                          </Tr>
                          <Tr
                            transition={"all .3s"}
                            _hover={{
                              opacity: "2",
                              bgColor: "rgba(0,0,0,.02)",
                            }}
                          >
                            <Td fontWeight="bold">Registros DNS:</Td>
                            <Td display={"flex"} flexDirection={"column"}>
                              {getWhoIs.whoIs["Name Server"] ? (
                                getWhoIs.whoIs["Name Server"].map(
                                  (hostName, index) => (
                                    <span key={index}>{hostName}</span>
                                  )
                                )
                              ) : (
                                <span>Not Found</span>
                              )}
                            </Td>
                          </Tr>
                          {/* <Tr
                            transition={"all .3s"}
                            _hover={{
                              opacity: "2",
                              bgColor: "rgba(0,0,0,.02)",
                            }}
                          >
                            <Td fontWeight="bold">Estimated Domain Age:</Td>
                            {getWhoIs.whoIs.WhoisRecord.estimatedDomainAge ? (
                              <Td>
                                {getWhoIs.whoIs.WhoisRecord.estimatedDomainAge}{" "}
                                day
                              </Td>
                            ) : (
                              <Td>Null</Td>
                            )}
                          </Tr> */}
                        </Tbody>
                      )}
                    </Table>
                  </TableContainer>
                </ModalBody>

                <ModalFooter>
                  {/* <Button colorScheme="blue" mr={3} onClick={onClose}>
                    Close
                  </Button> */}
                  {/* <Button variant="ghost">Secondary Action</Button> */}
                </ModalFooter>
              </ModalContent>
            </Modal>
          </Grid>
        </Flex>
      </Box>
    </main>
  );
};

export default RegistrarDominio;
