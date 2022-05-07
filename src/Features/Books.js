import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    // one state
    name: "book",
    initialState: {value: {name: "Story of Kevin", pages: 400, author: "Kevin Gomez"}},
    reducers: {
        login: (state, action) => {
            // state is values of the current state
            state.value = action.payload;
        },

    }
})

export default userSlice.reducer