import { configureStore } from "@reduxjs/toolkit";
import anecdoteReducer, { setAnecdotes } from "./anecdoteReducer";
import filterReducer from "./filterReducer";
import notificationReducer from "./notificationReducer";
import anecdoteService from "../services/anecdote";

const store = configureStore({
  reducer: {
    anecdotes: anecdoteReducer,
    filter: filterReducer,
    notification: notificationReducer
  }
})

export default store