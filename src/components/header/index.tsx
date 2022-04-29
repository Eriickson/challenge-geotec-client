import { Box, Container, GridItem, SimpleGrid, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { Searcher } from "./searcher";

export const Header = () => {
  return (
    <header>
      <Box bgColor="pri.500" p="5">
        <Container px="5" maxW="container.lg">
          <SimpleGrid mx="auto" columns={12}>
            <GridItem colSpan={3}>
              <Link href="/">
                <a>
                  <Text fontWeight="semibold" color="white" fontSize="2xl">
                    Inicio
                  </Text>
                </a>
              </Link>
            </GridItem>
            <GridItem colSpan={6}>
              {" "}
              <Searcher />
            </GridItem>
            <GridItem colSpan={3}></GridItem>
          </SimpleGrid>
        </Container>
      </Box>
    </header>
  );
};
