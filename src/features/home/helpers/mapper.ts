
import { getColorByPokemonType } from "../../../util/pokemonUtil";
import { Pokemon, PokemonType } from "../data/pokemon";
import { PokemonDetailsResponse } from "../data/response";

export function mapToPokemonDetails(from: PokemonDetailsResponse): Pokemon {
    return {
        id: from.id,
        name: from.name,
        order: from.order,
        height: from.height,
        weight: from.weight,
        types: from.types.map<PokemonType>(value => ({ name: value.type.name, color: getColorByPokemonType(value.type.name) })),
        image: from.sprites.other.home.frontDefault,
        icon: from.sprites.frontDefault
    }
}