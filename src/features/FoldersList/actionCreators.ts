import { startFetching, finishFetching } from "./slice";
import { AppDispatch } from "@/App/store";
export const fetchFolders = (dispatch: AppDispatch, parent = 0) => {
  dispatch(startFetching());
  fetch("http://localhost:3001/paths/" + parent)
    .then((response) => response.json())
    .then((list) => {
      dispatch(finishFetching({ list }));
    });
};
