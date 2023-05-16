import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { FC, useState } from "react";

interface imageSlider {
  img: string;
}

interface PropsCarrousel {
  imageSlider: imageSlider[];
}

const CustomCarrousel: FC<PropsCarrousel> = ({
  imageSlider = [
    {
      img: "https://images.pexels.com/photos/2599537/pexels-photo-2599537.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
      img: "https://images.pexels.com/photos/2714581/pexels-photo-2714581.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
  ],
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesCount = imageSlider.length;

  const prevSlide = () => {
    setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
  };

  const carouselStyle = {
    transition: "all .5s",
    ml: `-${currentSlide * 100}%`,
  };
  return (
    <Flex
      w="full"
      bg="#edf3f8"
      // border={"4px solid red"}
      // _dark={{
      //   bg: "#3e3e3e",
      // }}
      // p={10}
      alignItems="center"
      justifyContent="center"
      overflow={"hidden"}
    >
      <Flex w="full" overflow="hidden" pos="relative">
        <Flex h="400px" w="full" {...carouselStyle}>
          {imageSlider.map((slide, sid) => (
            <Box key={`slide-${sid}`} boxSize="full" shadow="md" flex="none">
              <Text
                color="white"
                fontSize="xs"
                p="8px 12px"
                pos="absolute"
                top="0"
                bg={"rgba(0,0,0, .5)"}
                rounded="lg"
                m={2}
              >
                {sid + 1} / {slidesCount}
              </Text>
              <Image
                src={slide.img}
                alt="carousel image"
                boxSize="full"
                backgroundSize="cover"
              />
            </Box>
          ))}
        </Flex>
        <Text
          cursor={"pointer"}
          position="absolute"
          top={"50%"}
          w="auto"
          mt={"-22px"}
          p="16px"
          color={"white"}
          fontWeight="bold"
          fontSize={"18px"}
          transition="0.6s ease"
          borderRadius={"0 3px 3px 0"}
          userSelect="none"
          _hover={{
            opacity: 0.8,
            bg: "black",
          }}
          left="0"
          onClick={prevSlide}
        >
          &#10094;
        </Text>
        <Text
          cursor={"pointer"}
          position="absolute"
          top={"50%"}
          w="auto"
          mt={"-22px"}
          p="16px"
          color={"white"}
          fontWeight="bold"
          fontSize={"18px"}
          transition="0.6s ease"
          borderRadius={"0 3px 3px 0"}
          userSelect="none"
          _hover={{
            opacity: 0.8,
            bg: "black",
          }}
          right="0"
          onClick={nextSlide}
        >
          &#10095;
        </Text>
      </Flex>
    </Flex>
  );
};

export default CustomCarrousel;
