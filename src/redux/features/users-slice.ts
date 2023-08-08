import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import axios from "axios";
import { AppDispatch } from "../store";
import { API_BASE_URL } from "../../config/config";

type UsersState = {
  users: any[];
};

const initialState: UsersState = {
  users: [],
};

const usersSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<any[]>) => {
      state.users = action.payload;
    },
  },
});

export const { setUsers } = usersSlice.actions;

export const fetchUsers = () => async (dispatch: AppDispatch) => {
  console.log("you're in the store!");
  const response = await axios.get(`${API_BASE_URL}/api/users`);
  dispatch(setUsers(response.data));
};

export default usersSlice;
