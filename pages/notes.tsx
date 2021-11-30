import { Container, Box, Heading, Flex } from "@chakra-ui/layout";
import { Sidebar } from "../components/SideBar";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
export default function Home() {
  return (
    <Container maxW="full" width="100%" padding={0}>
      <Flex>
        <Sidebar />
        <Box centerContent flexGrow={1}>
          <Heading textAlign="center" size="lg" padding={2}>
            {" "}
            Notes{" "}
          </Heading>
        </Box>
      </Flex>
    </Container>
  );
}
