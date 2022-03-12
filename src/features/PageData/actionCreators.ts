import { setTitle } from "./slice";
import { AppDispatch } from "@/App/store";
export const updateTitle = (dispatch:AppDispatch, title: string) => {
  dispatch(setTitle(title));
};
