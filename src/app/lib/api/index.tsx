import {SearchCharsResponse} from "@/app/lib/api/types";

export async function fetchCharacters(page: number = 1, name:string, status: string): Promise<SearchCharsResponse> {
    let url = `https://rickandmortyapi.com/api/character/?page=${page}`
    if (name){
        url += `&name=${name}`
    }
    if (status){
        url += `&status=${status}`
    }
    const response = await fetch(url)

    if (response.status === 404 && response.statusText === "There is nothing here") {
        return { error: "No characters found" };
    }

    // if (!response.ok) {
    //     throw new Error(`Failed to fetch characters: ${response.status} - ${response.statusText}`);
    // }

    return response.json();
}
