import { createSlice} from "@reduxjs/toolkit";

const searchQueryCacheSlice = createSlice({
    name: "searchQueryCache",
    initialState: {
        cache: {}
    },
    reducers: {
        addToCache: (state, action) => {
            state.cache[action.payload.searchText] = action.payload.searchResult;
        }
    }
});

export const { addToCache } = searchQueryCacheSlice.actions;
export default searchQueryCacheSlice.reducer;