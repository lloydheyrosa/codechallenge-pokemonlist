export type Pokemon = {
    id: number,
    name: string,
    order: number,
    height: number,
    weight: number,
    types: PokemonType[],
    image: string,
    icon: string
}

export type PokemonType = {
    name: string,
    color: string
}