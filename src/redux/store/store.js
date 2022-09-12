import { configureStore } from "@reduxjs/toolkit";
import profileSlice from "../stateSlice/profileSlice";
import settingSlice from "../stateSlice/settingSlice";
import summerySlice from "../stateSlice/summerySlice";
import taskSlice from "../stateSlice/taskSlice";

export default configureStore({
  reducer: {
    settings: settingSlice,
    task: taskSlice,
    summery: summerySlice,
    profile: profileSlice,
  },
});
