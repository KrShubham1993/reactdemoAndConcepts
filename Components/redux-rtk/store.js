import { configureStore } from "@reduxjs/toolkit";
import foodReducer, {foodApi} from "./Slices/foodSlice";

const store = configureStore({
    reducer: {
        food: foodReducer,
        [foodApi.reducerPath]: foodApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(foodApi.middleware),
});
export default store;