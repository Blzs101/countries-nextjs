import Image from "next/image";

type propsType = {
  img: string;
  alt: string;
  name: string;
  population: number;
  region: string;
  capital: string[];
};
export default function CountriesCard({
  img,
  alt,
  name,
  population,
  region,
  capital,
}: propsType) {
  return (
    <div className="h-full rounded-lg bg-very-dark-grey-bg text-black dark:bg-dark-blue-element dark:text-white">
      <div className="h-1/2 w-full">
        <Image
          src={img}
          alt={alt ?? "country flag"}
          width={300}
          height={300}
          className="h-full w-full rounded-t-lg object-cover"
        />
      </div>
      <div className="p-6">
        <h2 className="py-4 text-xl font-extrabold">{name}</h2>
        <p>
          <span className="font-semibold">Population: </span>
          {population.toLocaleString("en-US")}
        </p>
        <p>
          <span className="font-semibold">Region:</span> {region}
        </p>
        <p>
          <span className="font-semibold">Capital: </span>
          {capital
            ?.map((element) => {
              return `${element}`;
            })
            .toLocaleString() ?? "Data not found"}
        </p>
      </div>
    </div>
  );
}
