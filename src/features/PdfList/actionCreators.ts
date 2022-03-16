import { startFetching, finishFetching } from "./slice";
import { AppDispatch } from "@/App/store";
import { setTitle } from "../PageData/slice";
export const fetchPdfs = (dispatch: AppDispatch,folder : false | number= false) => {
  dispatch(startFetching());
  let url = "http://localhost:3001/list?orderBy=updatedAt&order=DESC&limit=3"
  if (folder !== false) {
    url = "http://localhost:3001/list?orderBy=createdAt&order=DESC&parent=" + folder
  }
  fetch(url)
    .then((response) => response.json())
    .then((list) => {
      dispatch(finishFetching({ list }));

      dispatch(setTitle("PDF list"));
    });
};
