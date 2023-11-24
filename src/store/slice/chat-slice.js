import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
    name: "chat",
    initialState: {
        chatList: []
    },
    reducers: {
        addChat: (state, action) => {
            if(state.chatList.length > 100) {
                state.chatList.pop();
            }

            state.chatList.unshift(action.payload);
        }
    }
});

export const { addChat } = chatSlice.actions;
export default chatSlice.reducer;