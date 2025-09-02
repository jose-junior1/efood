import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Restaurants } from '../pages/Home'
import { PurchasePayload } from '../types'

const api = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://ebac-fake-api.vercel.app/api/efood'
    }),
    endpoints: (builder) => ({
        getOnRestaurants: builder.query<Restaurants[], void>({
            query: () => 'restaurantes'
        }),
        getRestaurantMenu: builder.query<Restaurants, number>({
            query: (id) => `restaurantes/${id}`
        }),
        purchase: builder.mutation<any, PurchasePayload>({
            query: (body) => ({
                url: 'checkout',
                method: 'POST',
                body
            })
        })
    })
})

export const {
    useGetOnRestaurantsQuery,
    useGetRestaurantMenuQuery,
    usePurchaseMutation
} = api

export default api
