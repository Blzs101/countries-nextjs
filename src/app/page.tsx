import { fetchData } from "@/util/countriesFetch";
export default async function Home() {
  const data = await fetchData()
  console.log(data)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {data &&
        data.map((country) => (
          <h1 key={country.name.common}>{country.name.common}</h1>
        ))
      }
    </main>
  );
}
