import {
  Box,
  Flex,
  Image,
  List,
  ListItem,
  Stack,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

export const ResultsList = () => {
  return (
    <List spacing={4}>
      {[1, 2, 3, 4, 5].map((item) => (
        <ListItem
          bgColor="white"
          key={item}
          shadow="md"
          borderWidth="1px"
          p="4"
        >
          <Flex>
            <Box mr="6" flex="1">
              <Stack h="full" justifyContent="space-between">
                <Box mb="3">
                  <Box mb="1">
                    <Link href="/items/1">
                      <a>
                        <Text
                          fontSize="2xl"
                          fontWeight="semibold"
                          lineHeight="6"
                        >
                          Lorem ipsum dolor sit amet.
                        </Text>
                      </a>
                    </Link>
                    <Text fontSize="sm" color="gray.400">
                      Talle Extra Large $30,000
                    </Text>
                  </Box>
                  <Text lineHeight="5">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Dolore, expedita culpa natus aliquam quaerat quo facilis,
                    rerum excepturi dolorem voluptatem, omnis fugit quod facere
                    ipsam saepe sint atque minima quam?
                  </Text>
                </Box>
                <Link href="">
                  <a>
                    <Box fontSize="sm" fontWeight="semibold">
                      Ver Detalles
                    </Box>
                  </a>
                </Link>
              </Stack>
            </Box>
            <Link href="">
              <a>
                <Image
                  w="48"
                  src="https://cecomsite.files.wordpress.com/2017/04/basicos-de-otoncc83o-moda-para-hombre-ropa-de-hombre-ropa-para-hombre-chamarras-bufandas-suecc81teres-guantes-botas-para-hombre-zapatos-para-hombre-moda-para-caballero-12-500x500.jpg"
                  alt=""
                />
              </a>
            </Link>
          </Flex>
        </ListItem>
      ))}
    </List>
  );
};
