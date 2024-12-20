import { elementType } from "./countresType";

export async function fetchCountries() {
    const res = await fetch("https://restcountries.com/v3.1/all",{
        next:{
            revalidate: 60 * 60 * 24
        },
        mode: "cors",
        method: "GET"
    });
    const data = await res.json();
    return data as elementType[]; 
}