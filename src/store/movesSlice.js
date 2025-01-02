import { createSlice } from "@reduxjs/toolkit";

const moveSlice = createSlice({
    name: "move",
    initialState:{ 
        playMove: null,
    },
    reducers:{
        getMoves:(state, action) => {
            state.playMove = action.payload
        }
    }
})


export const {getMoves} = moveSlice.actions
export default moveSlice.reducer