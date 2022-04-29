import {
  Box,
  Button,
  Flex,
  IconButton,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { ArrowLeft, ShoppingCart } from "react-feather";
import { MainContainer } from "../../../../components";

export const ItemDetailsPage = () => {
  return (
    <MainContainer>
      <Link href="/items">
        <a>
          <IconButton
            colorScheme="pri"
            rounded="full"
            aria-label=""
            icon={<ArrowLeft size="1.25rem" />}
            size="sm"
            mb="2"
          />
        </a>
      </Link>
      <Box p="5" shadow="md" bgColor="white">
        <Box>
          <Text fontSize="xl" fontWeight="semibold" lineHeight="6">
            Abrigo de cuello redondo
          </Text>
          <Text fontSize="sm" color="gray.400">
            Talle Extra Large $30,000
          </Text>
        </Box>
        <Flex alignItems="center">
          <Image
            w="96"
            src="https://cecomsite.files.wordpress.com/2017/04/basicos-de-otoncc83o-moda-para-hombre-ropa-de-hombre-ropa-para-hombre-chamarras-bufandas-suecc81teres-guantes-botas-para-hombre-zapatos-para-hombre-moda-para-caballero-12-500x500.jpg"
            alt=""
          />
          <Box>
            <Stack mb="10">
              <Text fontSize="xl" fontWeight="semibold" lineHeight="6">
                Descripción
              </Text>
              <Text lineHeight="5">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Dolore, expedita culpa natus aliquam quaerat quo facilis, rerum
                excepturi dolorem voluptatem, omnis fugit quod facere ipsam
                saepe sint atque minima quam?
              </Text>
              <Text
                fontSize="xl"
                color="yellow.500"
                fontWeight="semibold"
                lineHeight="6"
              >
                Precio 25,000
              </Text>
            </Stack>
            <Button
              rounded="sm"
              w="max"
              px="4"
              colorScheme="pri"
              leftIcon={
                <Box mr="0.5">
                  <ShoppingCart size="1.25rem" />
                </Box>
              }
            >
              Comprar
            </Button>
          </Box>
        </Flex>
      </Box>
    </MainContainer>
  );
};
