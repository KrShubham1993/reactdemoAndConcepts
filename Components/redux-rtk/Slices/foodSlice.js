import {createSlice} from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const foodSlice = createSlice({
    name: 'foodSlice',
    initialState: {num: 3},
    reducers: {
        addFood(state) {
            state.num++;
        },
        // addFoodAsync()

        setFood(state, action) {
            state.num = action.payload.num;
        }
    }
});

export const foodApi = createApi({
    reducerPath: 'foodApi',
    baseQuery: fetchBaseQuery({baseUrl: window.origin}),
    endpoints: (builder) => ({
        getAllFoods: builder.query({ query: () => '/getfoods' }) 
        // return object instead of string for POST : {url: '/posts', method: 'POST', body: newPost} with  bulder.mutation
    })
})

export const {addFood, setFood} = foodSlice.actions;
export const {useGetAllFoodsQuery} = foodApi;
export default foodSlice.reducer;
