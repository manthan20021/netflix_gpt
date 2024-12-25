import { createSlice } from "@reduxjs/toolkit";

const getUsers = createSlice({
    name: "users",
    initialState: null,
    reducers:{
        addUser: (state, action) => {
            return action.payload
        },
        removeUser: (state, action) => {
            return null;
        }
    }
})

export const {addUser, removeUser} =  getUsers.actions;
export default getUsers.reducer;