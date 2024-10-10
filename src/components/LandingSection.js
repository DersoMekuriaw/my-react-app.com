import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Derso Mekuriaw!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={4}>
      <Avatar name="Pete" src="https://i.pravatar.cc/150?img=7" size="2xl" />
      <Heading as="h1" size="xl" color="white">
        {greeting}
      </Heading>
      <Heading as="h2" size="md" color="gray.300">
        {bio1}
      </Heading>
      <Heading as="h3" size="md" color="gray.300">
        {bio2}
      </Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
