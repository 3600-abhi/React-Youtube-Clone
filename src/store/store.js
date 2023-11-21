import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./slice/app-slice";
import searchQueryCacheSlice from "./slice/search-query-cache-slice";

const store = configureStore({
    reducer: {
        app: appSlice,
        searchQueryCache: searchQueryCacheSlice
    }
});

export default store;