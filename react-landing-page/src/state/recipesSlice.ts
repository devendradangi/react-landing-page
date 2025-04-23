import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface RecipeState {
    recipes: any[];
    totalCount: number;
    currentPage: number;
}

const initialState: RecipeState = {
    recipes: [],
    totalCount: 0,
    currentPage: 1,
};

const recipesSlice = createSlice({
    name: "recipes",
    initialState,
    reducers: {

        setRecipes(state, action: PayloadAction<any[]>) {
            state.recipes = action.payload;
        },

        setTotalCount(state, action: PayloadAction<number>) {
            state.totalCount = action.payload;
        },

        setCurrentPage(state, action: PayloadAction<number>) {
            state.currentPage = action.payload;
        },
    },
});

export const { setRecipes, setTotalCount, setCurrentPage } = recipesSlice.actions;

export default recipesSlice.reducer;
