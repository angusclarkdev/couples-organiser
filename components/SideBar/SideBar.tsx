import React from "react";
import { Box, Container, Stack, StackDivider } from "@chakra-ui/react";

export function Sidebar() {
  return (
    <Container maxW="10%" centerContent bgColor="blue.500" margin={0}>
      <Stack spacing={8} divider={<StackDivider />}>
        <Box as="button">Dashboard</Box>
        <Box as="button">Calendar</Box>
        <Box as="button">Notes</Box>
        <Box as="button">Photos</Box>
        <Box as="button">To do list</Box>
        <Box as="button">Bucket list</Box>
      </Stack>
    </Container>
  );
}
