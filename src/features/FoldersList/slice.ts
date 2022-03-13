import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '@/App/store'

// Define a type for the slice state
interface FolderListState {
  list: {
    id: number,
    name: string,
    children: number,
    files:number
  }[],
  loading: boolean,
}

// Define the initial state using that type
const initialState: FolderListState = {
  list: [],
  loading: true,
}

export const folderlistSlice = createSlice({
  name: 'folderlist',
  initialState,
  reducers: {
    startFetching: (state) => {
      state.loading = true
    },
    finishFetching: (state, action: PayloadAction<{ list: FolderListState["list"] }>) => {
      state.loading = false
      if (action.payload.list) {
        state.list = action.payload.list
      }
    }
  }
})

export const { startFetching, finishFetching } = folderlistSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectList = (state: RootState) => state.pdflist.list

export default folderlistSlice.reducer