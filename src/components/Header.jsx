import { Box, Flex, Heading, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Header = () => {
  return (
    <Flex as="header" width="full" padding="4" borderBottom="1px" borderColor="gray.200" justifyContent="space-between" alignItems="center">
      <Heading as="h1" size="lg">
        John Doe
      </Heading>
      <Box>
        <Link as={RouterLink} to="#skills" marginRight="4">
          Skills
        </Link>
        <Link as={RouterLink} to="#contact">
          Contact
        </Link>
      </Box>
    </Flex>
  );
};

export default Header;
