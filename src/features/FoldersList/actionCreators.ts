import { startFetching, finishFetching } from "./slice";
import { AppDispatch } from "@/App/store";
export const fetchFolders = (dispatch: AppDispatch, parent = 0) => {
  dispatch(startFetching());
  fetch(process.env.REACT_APP_API_URL + "/paths/" + parent)
    .then((response) => response.json())
    .then((list) => {
      dispatch(finishFetching({ list }));
    });
};
