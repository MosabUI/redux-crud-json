import {configureStore} from '@reduxjs/toolkit'
import { ContactsApi } from './services/ContactsApi'

export const store = configureStore({
    reducer:{
        [ContactsApi.reducerPath]:ContactsApi.reducer
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(ContactsApi.middleware)
})