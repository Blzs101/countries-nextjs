import { getCountryNameByCode } from "@/util/countriesCode";
import { elementType } from "@/util/countresType";
import Image from "next/image";
import Link from "next/link";
import { fetchCountries } from "@/util/countresFetch";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  const countries = await fetchCountries()
  const country = countries.find(
    (c) => c.name.common.toLowerCase().replace(/\s/g, "") === id,
  );
  return {
    title: country?.name.common,
    description: `Find more information about ${country?.name.common}.`,
    icons: {
      icon: country?.flags.svg,
    },
  };
}
export default async function page({ params }: { params: { id: string } }) {
  const { id } = await params;
  const countries = await fetchCountries()
  const country = countries.find(
     (country: elementType) =>
      country.name.common.toLowerCase().replace(/\s/g, "") === id,
  );
  return (
    <main className="mx-4 mb-4 h-auto w-auto overflow-hidden md:mx-8">
      {country ? (
        <>
          <Link
            href="/"
            className="my-8 flex w-32 content-center justify-center rounded-md bg-very-dark-grey-bg px-12 py-2 text-black dark:bg-dark-blue-element dark:text-white"
          >
            <Image
              alt={"arrow"}
              width={50}
              height={50}
              src="/arrow-darkmode.svg"
              className="mr-2 hidden dark:block"
            />
            <Image
              alt={"arrow"}
              width={50}
              height={50}
              src="/arrow-lightmode.svg"
              className="mr-2 block dark:hidden"
            />
            Back
          </Link>
          <div className="inset-0 grid h-auto w-auto md:grid-cols-2 md:gap-8">
            <div className="md:h-2/3">
              <Image
                src={country?.flags.svg}
                alt={country?.flags.alt ?? "country flag"}
                width={50}
                height={50}
                className="ml-auto mr-auto h-auto w-auto object-fill"
              />
            </div>
            <div className="flex flex-col items-start md:h-full">
              <h1 className="my-4 text-3xl font-extrabold">
                {country?.name.common}
              </h1>
              <div>
                <p className="mb-2 font-bold">
                  Native Name:{" "}
                  <span className="text-dark-grey-input">
                    {country?.name.nativeName === undefined
                      ? "Data not found"
                      : Object.values(country?.name.nativeName)[0].common}
                  </span>
                </p>
                <p className="mb-2 font-bold">
                  Populaton:{" "}
                  <span className="text-dark-grey-input">
                    {country?.population.toLocaleString("en-US") ??
                      "Data not found"}
                  </span>
                </p>
                <p className="mb-2 font-bold">
                  Region:{" "}
                  <span className="text-dark-grey-input">
                    {country?.region ?? "Data not found"}
                  </span>
                </p>
                <p className="mb-2 font-bold">
                  Sub Region:{" "}
                  <span className="text-dark-grey-input">
                    {country?.subregion ?? "Data not found"}
                  </span>
                </p>
                <p className="mb-2 font-bold">
                  Capital:
                  <span className="text-dark-grey-input">
                    {" "}
                    {country?.capital ?? "Data not found"}
                  </span>
                </p>
                <p className="mb-2 font-bold">
                  Top Level Domain:{" "}
                  <span className="text-dark-grey-input">
                    {country?.tld[0] ?? "Data not found"}
                  </span>
                </p>
                <p className="mb-2 font-bold">
                  Currencies:{" "}
                  <span className="text-dark-grey-input">
                    {" "}
                    {country.currencies === undefined
                      ? "Data not found"
                      : Object.values(country?.currencies)
                          .map(
                            (currencies: { name: string }) => currencies.name,
                          )
                          .toLocaleString()}
                  </span>
                </p>
                <p className="mb-2 font-bold">
                  Languages:{" "}
                  <span className="text-dark-grey-input">
                    {country.languages === undefined
                      ? "Data not found"
                      : Object.values(country?.languages)
                          .map((name: string) => ` ${name}`)
                          .toLocaleString()}
                  </span>
                </p>
              </div>
              <div
                className={`${country?.borders ? "block" : "hidden"} grid h-auto grid-cols-3 flex-wrap gap-2 xl:flex`}
              >
                <div className="col-span-3 flex content-center justify-start py-2 font-bold xl:justify-center">
                  Border Countries:{" "}
                </div>
                {country?.borders
                  ? country?.borders.map((element) => {
                      return (
                        <Link
                          href={`/${getCountryNameByCode(element)?.toLocaleLowerCase().replace(/\s/g, "")}`}
                          key={element}
                          className="flex w-auto content-center justify-center rounded-md bg-very-dark-grey-bg p-2 text-black dark:bg-dark-blue-element dark:text-white"
                        >
                          {getCountryNameByCode(element)}
                        </Link>
                      );
                    })
                  : null}
              </div>
            </div>
          </div>
        </>
      ) : (
        <main className="fixed flex min-h-dvh w-full items-center justify-center">
          <h1 className="mr-4">Country not found</h1>
          <Link
            href={"/"}
            className="flex w-auto content-center justify-center rounded-md bg-very-dark-grey-bg p-2 text-black dark:bg-dark-blue-element dark:text-white"
          >
            Back
          </Link>
        </main>
      )}
    </main>
  );
}
