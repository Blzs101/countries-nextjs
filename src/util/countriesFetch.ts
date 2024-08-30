import { cache } from "react";

export const fetchData = cache(async () => {
	const response = await fetch("https://restcountries.com/v3.1/all");
	const data: elementType[] = await response.json();

	return data;
});

type elementType = {
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
	subRegion: string;
	tld: string[];
	languages: string;
	currencies: {
		name: string;
		symbol: string;
	}[];
	borders: string[];
};
