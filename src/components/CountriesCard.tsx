import Image from "next/image";

type propsType = {
    img: string,
    alt: string,
    name: string,
    population: number,
    region: string,
    capital: string[]
}
export default function CountriesCard({ img, alt, name, population, region, capital }: propsType) {

    return (
        <div className=" dark:text-white dark:bg-dark-blue-element text-black bg-very-dark-grey-bg rounded-lg h-full">
            <div className="w-full h-1/2">
                <Image src={img} alt={alt ?? "country flag"} width={300} height={300} className="object-cover w-full h-full rounded-t-lg" />
            </div>
            <div className="p-6">
                <h2 className="py-4 text-xl font-extrabold">{name}</h2>
                <p><span className="font-semibold">Population: </span>{population.toLocaleString("en-US")}</p>
                <p><span className="font-semibold">Region:</span> {region}</p>
                <p><span className="font-semibold">Capital: </span>{capital?.map(element => { return `${element}` }).toLocaleString() ?? "Data not found"}</p>
            </div>
        </div>
    )
}
