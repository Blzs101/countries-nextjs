import { cache } from "react";

export const fetchData = cache(async () => {
  const response: elementType[] = await fetch(
    "https://restcountries.com/v3.1/all",
  ).then((res) => res.json());
  return response;
});

export type elementType = {
  flags: {
    svg: string;
    alt: string;
  };
  name: {
    common: string;
    nativeName: object;
  };
  population: number;
  region: string;
  capital: string[];
  subregion: string;
  tld: string[];
  languages: string;
  currencies: {
    name: string;
    symbol: string;
  }[];
  borders: string[];
};
