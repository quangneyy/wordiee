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
    key: ""
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
        setKey: (state, action) => {
            state.key = action.payload;
        }
    }
});

export const {
    setBoard,
    incPos,
    decPos,
    incRow,
    setKey
} = boardSlice.actions;

export default boardSlice.reducer;