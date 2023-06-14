export type PokedexResponse = {
    count: number,
    next: string,
    previous: string,
    results: PokemonEntity[]
}

export type PokemonEntity = {
    name: string, url: string
}

export type PokemonDetailsResponse = {
    id: number,
    name: string,
    order: number,
    height: number,
    weight: number,
    baseExperience: number,
    types: { slot: number, type: { name: string, url: string } }[],
    sprites: {
        frontDefault: string,
        backDefault: string,
        other: { dreamWorld: { frontDefault: string }, home: { frontDefault: string } }
    }
}