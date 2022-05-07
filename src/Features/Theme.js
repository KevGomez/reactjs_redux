import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = ""

export const themeSlice = createSlice({
    // one state
    name: "theme",
    initialState: {value: initialStateValue},
    reducers: {
        changeColor: (state, action) => {
            // state is values of the current state
            state.value = action.payload;
        }
    },
})

export const {changeColor} = themeSlice.actions;
export default themeSlice.reducer;