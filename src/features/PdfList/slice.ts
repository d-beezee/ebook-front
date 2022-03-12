import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '@/App/store'

// Define a type for the slice state
interface PdfListState {
  list: {
    id: number,
    path: string,
    preview?:string
  }[],
  loading: boolean,
}

// Define the initial state using that type
const initialState: PdfListState = {
  list: [],
  loading: true,
}

export const pdflistSlice = createSlice({
  name: 'pdflist',
  initialState,
  reducers: {
    startFetching: (state) => {
      state.loading = true
    },
    finishFetching: (state, action: PayloadAction<{ list: PdfListState["list"] }>) => {
      state.loading = false
      if (action.payload.list) {
        state.list = action.payload.list
      }
    }
  }
})

export const { startFetching, finishFetching } = pdflistSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectList = (state: RootState) => state.pdflist.list

export default pdflistSlice.reducer