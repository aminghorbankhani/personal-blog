import { createSlice } from '@reduxjs/toolkit'

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    value: 'light',
  },
  reducers: {
    lighten: (state) => {
      state.value = 'light'
    },
    darken: (state) => {
      state.value = 'dark'
    },
  },
})

export const { darken, lighten } = themeSlice.actions
export const themeReducer = themeSlice.reducer
