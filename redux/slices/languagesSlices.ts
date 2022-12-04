import { createSlice } from '@reduxjs/toolkit'
import { pages } from '../../listPages/listPages'

//type string
export interface languageState {
  value: string
}

const initialState: languageState = {
  value: '',
}

export const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    es: (state, action) => {
      state.value = action.payload
    },
    en: (state, action) => {
      state.value = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { es, en } = languageSlice.actions

export default languageSlice.reducer