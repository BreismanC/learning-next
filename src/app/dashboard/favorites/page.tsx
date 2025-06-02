import { PokemonsGrid } from "@/pokemons/components";
import { SimplePokemon } from "@/pokemons/interfaces";

export const metadata = {
    title: "Favorites Pokemons",
    description: "Lista de Pokemons favoritos",
};

export default async function PokemonPage() {
    const pokemons: SimplePokemon[] = [];
    return (
        <div className="flex flex-col">
            <h1 className="text-5xl my-2">Lista de Pokemons favoritos <small className="text-blue-500">Global context</small></h1>
            <PokemonsGrid pokemons={pokemons} />
        </div>
    );
}
