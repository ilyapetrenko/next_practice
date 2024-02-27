import {SearchCharsResponse} from "@/app/api/types";
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const ramApi = createApi({
    reducerPath: 'ram/api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://rickandmortyapi.com/api/'
    }),
    endpoints: build => ({
        searchChars: build.query<SearchCharsResponse, number>({
            query: () => `character`
        })
    })
})

export const {useSearchCharsQuery, useLazySearchCharsQuery} = ramApi
