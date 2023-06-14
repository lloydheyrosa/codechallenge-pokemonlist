import { POKEMON_TYPE_COLORS } from "../lib/constants";

export const getColorByPokemonType = (type: string) => {
    return POKEMON_TYPE_COLORS[type.toLowerCase()];
};