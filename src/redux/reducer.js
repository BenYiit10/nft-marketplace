import { createSlice } from '@reduxjs/toolkit'

export const mainReducer = createSlice({
    name: 'main',
    initialState:{
        isThere:true
    },
    reducers: {
        setIsThere: (state,action) => {state.isThere = action.payload},
    },
})

export const { setIsThere } = mainReducer.actions

export default mainReducer.reducer

