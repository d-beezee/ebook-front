import { startFetching, finishFetching } from "./slice";
import { AppDispatch } from "@/App/store";
import { setTitle } from "../PageData/slice";
export const fetchPdf = (dispatch: AppDispatch, id: number) => {
  dispatch(startFetching());
  dispatch(setTitle("Loading..."));

  fetch("http://localhost:3001/list/" + id)
    .then((response) => response.json())
    .then((item) => {
      dispatch(finishFetching({ item }));
      dispatch(setTitle(item.path.split('\\').pop().split('/').pop()));
    });
};
