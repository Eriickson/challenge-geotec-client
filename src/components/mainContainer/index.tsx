import { Box, Container } from "@chakra-ui/react";
import React, { FC, ReactNode } from "react";
import { Header } from "../header";

interface MainContainerProps {
  children: ReactNode;
}

export const MainContainer: FC<MainContainerProps> = ({ children }) => {
  return (
    <Box bgColor="gray.100">
      <Box mb="5">
        <Header />
      </Box>
      <Container maxW="container.lg">{children}</Container>
    </Box>
  );
};
