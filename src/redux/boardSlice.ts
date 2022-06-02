import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    board: 
    ["", "", "", "", "",
    "", "", "", "", "",
    "", "", "", "", "",
    "", "", "", "", "",
    "", "", "", "", "",
    "", "", "", "", ""],
    pos: 0,
    row: 0,
    correctWord: "CONES"
}

export const boardSlice = createSlice({
    name: "board",
    initialState,
    reducers: {
        setBoard: (state, action) => {
            state.board = action.payload;
        },
        incPos: (state) => {
            state.pos++;
        },
        decPos: (state) => {
            state.pos--;
        },
        incRow:(state) => {
            state.row++;
        },
    }
});

export const {
    setBoard,
    incPos,
    decPos,
    incRow,
} = boardSlice.actions;

export default boardSlice.reducer;