let cachedResponse: elementType[] | null = null;

export const fetchData = async () => {
  if (cachedResponse) {
    // Return the cached response if it exists
    return cachedResponse;
  }

  // If no cache exists, fetch the data
  const response: elementType[] = await fetch(
    "https://restcountries.com/v3.1/all",
  ).then((res) => res.json());

  // Cache the response for future calls
  cachedResponse = response;
  return response;
};

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
