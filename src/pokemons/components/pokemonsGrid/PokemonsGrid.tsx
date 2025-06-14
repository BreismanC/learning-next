import { SimplePokemon } from "../../interfaces"
import { PokemonCard } from "../pokemonCard/PokemonCard"

interface Props {
  pokemons: SimplePokemon[]
}

export const PokemonsGrid = ({pokemons}: Props) => {
  return (
    <div className="flex flex-wrap gap-10 items-center justify-center">
      {pokemons.map(pokemon=><PokemonCard key={pokemon.id} pokemon={pokemon} />)}
    </div>
  )
}
