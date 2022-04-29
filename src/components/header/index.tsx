import { Box, Input } from "@chakra-ui/react";
import React from "react";
import { Searcher } from "./searcher";

export const Header = () => {
  return (
    <header>
      <Box bgColor="pri.500" p="5" display="flex" justifyContent="center">
        <Searcher />
      </Box>
    </header>
  );
};
