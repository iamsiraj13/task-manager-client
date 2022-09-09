import { configureStore } from "@reduxjs/toolkit";
import settingSlice from "../stateSlice/settingSlice";
import summerySlice from "../stateSlice/summerySlice";
import taskSlice from "../stateSlice/taskSlice";


export default configureStore({
    reducer:{
        settings:settingSlice,
        task:taskSlice,
        summery:summerySlice
    }
})