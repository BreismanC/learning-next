import { PokemonsGrid } from "@/pokemons/components";
import { PokemonResponse, SimplePokemon } from "@/pokemons/interfaces";

export const metadata = {
  title: "151 Pokemons",
  description: "Lista de 151 Pokemons",
};

export const getPokemons = async (
  limit: number = 20,
  offset: number = 0
): Promise<SimplePokemon[]> => {
  const data: PokemonResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  ).then((response) => response.json());
  const pokemons: SimplePokemon[] = data.results.map(({ url, name }) => ({
    id: url.split("/").at(-2)!,
    name: name,
  }));

  // throw new Error("Esto es un error que no debería suceder"); //^Manejo de errores con archivo error.tsx
  return pokemons;
};

export default async function PokemonPage() {
  const pokemons = await getPokemons(151);
  return (
    <div className="flex flex-col">
      <PokemonsGrid pokemons={pokemons} />
    </div>
  );
}
