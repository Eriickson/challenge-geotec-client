import {
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  chakra,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { FC, useMemo } from "react";
import { Search } from "react-feather";
import { useForm } from "react-hook-form";

export type FormType = { search?: string };

interface SearcherFormProps {
  onSubmit(data: FormType): void;
}

export const SearcherForm: FC<SearcherFormProps> = ({ onSubmit }) => {
  const { query } = useRouter();

  const defaultValues = useMemo<FormType>(
    () => (Object.keys(query).length ? { search: query.search as string } : {}),
    [query]
  );

  const { register, handleSubmit } = useForm<FormType>();

  return (
    <chakra.form onSubmit={handleSubmit(onSubmit)} w="lg">
      <InputGroup>
        <Input
          pr="10"
          variant="flushed"
          color="white"
          colorScheme="whiteAlpha"
          {...register("search")}
          defaultValue={defaultValues.search}
        />
        <InputRightElement>
          <IconButton
            type="submit"
            rounded="sm"
            size="sm"
            colorScheme="pri"
            aria-label=""
            variant="solid"
            icon={<Search size="1.25rem" />}
            _focus={{}}
          />
        </InputRightElement>
      </InputGroup>
    </chakra.form>
  );
};
