import { configureStore } from "@reduxjs/toolkit";
import pdflist  from "@/features/PdfList/slice";
import pdf  from "@/features/SinglePdf/slice";
import pagedata  from "@/features/PageData/slice";

export const store = configureStore({
  reducer: {
    pdflist,
    pdf,
    pagedata
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
