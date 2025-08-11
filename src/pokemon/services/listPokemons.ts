import axios from "axios";
import { getPokemonDetails } from "./getPokemonDetails";
import { PokemonDetail } from "../interfaces/PokemonDetail";

export interface PokemonListInterface{
    name: string;
    url: string;
}

interface ListPokemonInterface{
    count: number;
    next: string | null;
    previous: string | null;
    results: PokemonDetail[]
}

export async function listPokemons(): Promise<ListPokemonInterface> {
    const endpoint = `${process.env.REACT_APP_POKEAPI}/pokemon`;

    const response = await axios.get<ListPokemonInterface>(endpoint);

    const promiseArr = response.data.results.map(({ name }) => getPokemonDetails(name))
    const resultsPromise = await Promise.all(promiseArr)

    return {
        ... response.data,
        results: resultsPromise
    };
}