import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack
      border="1px"
      borderColor="gray.200"
      borderRadius="md"
      overflow="hidden"
      align="start"
      bg="white"
    >
      <Image src={imageSrc} alt={title} boxSize="100%" objectFit="cover" />
      <VStack align="start" p={4}>
        <Heading as="h3" size="md">{title}</Heading>
        <Text color="gray.600">{description}</Text>
        <HStack justify="space-between" w="full" pt={2}>
          <Text color="teal.500">Read More</Text>
          <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </HStack>
      </VStack>
    </VStack>
  );
};


export default Card;
