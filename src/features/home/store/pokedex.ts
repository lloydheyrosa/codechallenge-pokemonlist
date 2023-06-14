import { create } from "zustand";
import { getPokedex } from "../api/pokemonApi";
import { Pokemon } from "../data/pokemon";

type PokedexStoreTypes = {
    isLoading: boolean,
    isRefresh: boolean,
    isLoadingNext: boolean,
    pokedex: Pokemon[]
    nextUrl: string,
    total: number,

    getPokedex: (isInitial: boolean) => void
}

const usePokedexStore = create<PokedexStoreTypes>((set, get) => ({
    isLoading: false,
    isRefresh: false,
    isLoadingNext: false,
    pokedex: [],
    nextUrl: "",
    total: 0,

    getPokedex: async function (isInitial: boolean) {
        try {

            let query = get().nextUrl.split('?')[1]

            if (isInitial) {
                query = ""
                set({ pokedex: [] })
            }

            if (query) {
                set({ isLoadingNext: true })
            }
            else {
                set({ isLoading: true })
            }

            const data = await getPokedex(query)
            set({
                pokedex: get().pokedex.concat(data.list),
                nextUrl: data.nextUrl,
                total: data.total
            })
        }
        catch (err) {
            console.log('Get Pokedex: ' + err)
        }
        finally {
            set({ isLoading: false, isLoadingNext: false })
        }
    }
}))

export default usePokedexStore