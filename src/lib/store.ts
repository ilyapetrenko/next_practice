import { configureStore } from '@reduxjs/toolkit'
import {ramApi} from "@/app/api";

export const makeStore = () => {
    return configureStore({
        reducer: {
            [ramApi.reducerPath]: ramApi.reducer,
        },
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(ramApi.middleware),
    })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
