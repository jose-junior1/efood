import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Restaurants } from '../pages/Home'

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
        })
    })
})

export const {
    useGetOnRestaurantsQuery,
    useGetRestaurantMenuQuery
} = api

export default api
