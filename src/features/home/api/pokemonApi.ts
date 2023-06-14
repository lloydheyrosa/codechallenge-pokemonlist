import { pokemonApi } from "../../../lib/axios-instance";
import { Pokemon } from "../data/pokemon";
import { PokedexResponse, PokemonDetailsResponse } from "../data/response";
import { mapToPokemonDetails } from "../helpers/mapper";

type PokedexModel = {
    list: Pokemon[],
    nextUrl: string,
    total: number
}

export async function getPokedex(query: string = ''): Promise<PokedexModel> {
    let pokedexUrl = `pokemon`
    if (query) {
        pokedexUrl = `${pokedexUrl}?${query}`
    }
    const response = await pokemonApi.get<PokedexResponse>(pokedexUrl)
    const result = response.data
    const entities = result.results

    // Get pokemon details
    const pokemons = await Promise.all(
        entities.map(async ({ name }): Promise<Pokemon> => {
            const originalDetail = await pokemonApi.get<PokemonDetailsResponse>(`pokemon/${name}`);
            return mapToPokemonDetails(originalDetail.data);
        })
    );

    return {
        list: pokemons,
        nextUrl: result.next,
        total: result.count
    }
}