import { useRouter } from "next/router";
import React from "react";
import { FormType, SearcherForm } from "./form";

export const Searcher = () => {
  const { push } = useRouter();
  async function onSubmit(values: FormType) {
    push({ pathname: "/items", query: { search: values.search } });
  }

  return <SearcherForm onSubmit={onSubmit} />;
};
