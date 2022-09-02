import { configureStore } from "@reduxjs/toolkit";
import settingSlice from "../stateSlice/settingSlice";


export default configureStore({
    reducer:{
        settings:settingSlice
    }
})