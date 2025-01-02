import { configureStore } from "@reduxjs/toolkit";
import getUsers from "./getUsersSlice"
import moveReducer from "./movesSlice"

const AppStore = configureStore({
    reducer:{
       user: getUsers,
       moves: moveReducer,
    }
})

export default AppStore