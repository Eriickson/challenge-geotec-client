import { useRouter } from "next/router";
import React from "react";
import { FormType, SearcherForm } from "./form";

export const Searcher = () => {
  const { query, push } = useRouter();
  async function onSubmit(values: FormType) {
    console.log(values);

    push({ pathname: "/items", query: { search: values.search } });
  }

  return <SearcherForm onSubmit={onSubmit} />;
};
