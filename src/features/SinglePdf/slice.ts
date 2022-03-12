import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '@/App/store'

// Define a type for the slice state
interface PdfState {
  item?: {
    id: number,
    path: string,
    base64: string,
    current: number,
  },
  loading: boolean,
}

// Define the initial state using that type
const initialState: PdfState = {
  loading: true,
}

export const pdfSlice = createSlice({
  name: 'pdf',
  initialState,
  reducers: {
    startFetching: (state) => {
      state.loading = true
    },
    finishFetching: (state, action: PayloadAction<{ item: { id: number, path: string,base64:string,current: number } }>) => {
      state.loading = false
      if (action.payload.item) {
        state.item = action.payload.item
      }
    }
  }
})

export const { startFetching, finishFetching } = pdfSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectList = (state: RootState) => state.pdf.item

export default pdfSlice.reducer