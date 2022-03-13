import { startFetching, finishFetching } from "./slice";
import { AppDispatch } from "@/App/store";
import { setTitle } from "../PageData/slice";
export const fetchPdfs = (dispatch: AppDispatch) => {
  dispatch(startFetching());
  fetch("http://localhost:3001/list?orderBy=updatedAt&order=DESC&limit=3")
    .then((response) => response.json())
    .then((list) => {
      dispatch(finishFetching({ list }));

      dispatch(setTitle("PDF list"));
    });
};
