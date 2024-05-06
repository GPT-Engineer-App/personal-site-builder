import { Container, Text, VStack, Box, Heading, List, ListItem, ListIcon, Link, Image } from "@chakra-ui/react";
import { FaCode, FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" padding={4}>
      <VStack spacing={8} align="stretch">
        <Box textAlign="center">
          <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxkZXZlbG9wZXIlMjBwb3J0cmFpdHxlbnwwfHx8fDE3MTUwMDc1NDB8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Developer Portrait" />
          <Heading as="h1" size="xl" marginTop="4">
            John Doe
          </Heading>
          <Text fontSize="lg" color="gray.600">
            Full Stack Developer
          </Text>
        </Box>

        <Box>
          <Heading as="h2" size="lg">
            Skills
          </Heading>
          <List spacing={2} marginTop="2">
            <ListItem>
              <ListIcon as={FaCode} color="green.500" />
              JavaScript, React, Node.js
            </ListItem>
            <ListItem>
              <ListIcon as={FaCode} color="green.500" />
              Python, Django
            </ListItem>
            <ListItem>
              <ListIcon as={FaCode} color="green.500" />
              HTML, CSS, Bootstrap
            </ListItem>
          </List>
        </Box>

        <Box>
          <Heading as="h2" size="lg">
            Contact
          </Heading>
          <List spacing={2} marginTop="2">
            <ListItem>
              <ListIcon as={FaEnvelope} color="blue.500" />
              <Link href="mailto:john.doe@example.com" isExternal>
                john.doe@example.com
              </Link>
            </ListItem>
            <ListItem>
              <ListIcon as={FaLinkedin} color="blue.500" />
              <Link href="https://www.linkedin.com/in/johndoe" isExternal>
                LinkedIn/johndoe
              </Link>
            </ListItem>
            <ListItem>
              <ListIcon as={FaGithub} color="gray.600" />
              <Link href="https://github.com/johndoe" isExternal>
                GitHub/johndoe
              </Link>
            </ListItem>
          </List>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
