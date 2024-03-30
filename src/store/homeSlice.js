import { createSlice } from "@reduxjs/toolkit";

export const homeSlice = createSlice({
    name: "home",
    initialState: {
        url: {},
        genres: {},            
    },
    reducers: {
        getApiConfiguration: (state, action) => {
            state.url = action.payload;              //state=initial state  accesing theb url wahtever action we will ne passing it gets updated in the state
        },
        getGenres: (state, action) => {
            state.genres = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { getApiConfiguration, getGenres } = homeSlice.actions;

export default homeSlice.reducer;
