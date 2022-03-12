import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '@/App/store'

// Define a type for the slice state
interface PageState {
  title: string
}

// Define the initial state using that type
const initialState: PageState = {
  title: "Pdf App",
}

export const pageDataSlice = createSlice({
  name: 'pagedata',
  initialState,
  reducers: {
    setTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload
    }
  }
})

export const { setTitle } = pageDataSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectTitle = (state: RootState) => state.pagedata.title

export default pageDataSlice.reducer