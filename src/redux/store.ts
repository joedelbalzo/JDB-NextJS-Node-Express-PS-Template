import { configureStore } from "@reduxjs/toolkit";
import usersSlice, { fetchUsers } from "./features/users-slice";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import thunk from "redux-thunk";
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: usersSlice.reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(thunk),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export { fetchUsers };
