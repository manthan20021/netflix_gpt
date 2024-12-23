import { configureStore } from "@reduxjs/toolkit";
import getUsers from "./getUsersSlice"

const AppStore = configureStore({
    reducer:{
       user: getUsers
    }
})

export default AppStore