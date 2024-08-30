import { getCountryNameByCode } from "@/util/countriesCode";
import { elementType, fetchData } from "@/util/countriesFetch";
import Image from "next/image";
import Link from "next/link";

export async function generateMetadata({ params: { id } }: { params: { id: string } }) {
    const countries = await fetchData();
    const country = countries.find((c) => c.name.common.toLowerCase().replace(/\s/g, '') === id);
    return {
        title: country?.name.common,
        description: `Find more information about ${country?.name.common}.`,
        icons: {
            icon: country?.flags.svg,
        },
    };
}
export default async function page({ params }: { params: { id: string } }) {
    const countries = await fetchData()
    const country = countries.find((country: elementType) => country.name.common.toLowerCase().replace(/\s/g, '') === params.id);
    return (

        <main className="w-auto h-auto mx-4 mb-4 overflow-hidden md:mx-8">
            {country ?
                <>
                    <Link href="/" className="dark:text-white dark:bg-dark-blue-element text-black bg-very-dark-grey-bg my-8 px-12 py-2 flex w-32 justify-center content-center rounded-md ">
                        <Image alt={"arrow"} width={50} height={50} src="/arrow-darkmode.svg" className="mr-2 dark:block hidden" />
                        <Image alt={"arrow"} width={50} height={50} src="/arrow-lightmode.svg" className="mr-2 dark:hidden block" />
                        Back
                    </Link>
                    <div className="inset-0 grid w-auto h-auto md:grid-cols-2 md:gap-8">
                        <div className="md:h-2/3">
                            <Image src={country?.flags.svg} alt={country?.flags.alt} width={50} height={50} className="object-fill w-auto h-auto ml-auto mr-auto" />
                        </div>
                        <div className="flex flex-col items-start md:h-full">
                            <h1 className="my-4 text-3xl font-extrabold">{country?.name.common}</h1>
                            <div>
                                <p className="mb-2 font-bold">Native Name: <span className="text-dark-grey-input">{country?.name.nativeName === undefined ? "Data not found" : Object.values(country?.name.nativeName)[0].common}</span></p>
                                <p className="mb-2 font-bold">Populaton: <span className="text-dark-grey-input">{country?.population.toLocaleString("en-US") ?? "Data not found"}</span></p>
                                <p className="mb-2 font-bold">Region: <span className="text-dark-grey-input">{country?.region ?? "Data not found"}</span></p>
                                <p className="mb-2 font-bold">Sub Region: <span className="text-dark-grey-input">{country?.subregion ?? "Data not found"}</span></p>
                                <p className="mb-2 font-bold">Capital:<span className="text-dark-grey-input"> {country?.capital ?? "Data not found"}</span></p>
                                <p className="mb-2 font-bold">Top Level Domain: <span className="text-dark-grey-input">{country?.tld[0] ?? "Data not found"}</span></p>
                                <p className="mb-2 font-bold">Currencies: <span className="text-dark-grey-input"> {country.currencies === undefined ? "Data not found" : Object.values(country?.currencies).map((currencies: { name: string }) => currencies.name).toLocaleString()}</span></p>
                                <p className="mb-2 font-bold">Languages: <span className="text-dark-grey-input">{country.languages === undefined ? "Data not found" : Object.values(country?.languages).map((name: string) => ` ${name}`).toLocaleString()}</span></p>
                            </div>
                            <div className={`${country?.borders ? "block" : "hidden"}  grid grid-cols-3 xl:flex flex-wrap  gap-2 h-auto`}>
                                <div className="flex content-center justify-start col-span-3 py-2 font-bold xl:justify-center">Border Countries: </div>
                                {country?.borders ? country?.borders.map((element) => {
                                    return <Link href={`/${getCountryNameByCode(element)?.toLocaleLowerCase().replace(/\s/g, "")}`} key={element} className="dark:text-white dark:bg-dark-blue-element text-black bg-very-dark-grey-bg p-2 flex w-auto justify-center content-center rounded-md">{getCountryNameByCode(element)}</Link>
                                }) : null}
                            </div>
                        </div>
                    </div>
                </>
                :
                <main className="flex w-full min-h-dvh fixed items-center justify-center">
                    <h1 className="mr-4">Country not found</h1>
                    <Link href={"/"} className="dark:text-white dark:bg-dark-blue-element text-black bg-very-dark-grey-bg p-2 flex w-auto justify-center content-center rounded-md">Back</Link>
                </main>}
        </main >
    )
}

