import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./slice/app-slice";
import searchQueryCacheSlice from "./slice/search-query-cache-slice";
import chatSlice from "./slice/chat-slice";

const store = configureStore({
    reducer: {
        app: appSlice,
        searchQueryCache: searchQueryCacheSlice,
        chat: chatSlice
    }
});

export default store;