import { createSlice } from '@reduxjs/toolkit'

export const mainReducer = createSlice({
    name: 'main',
    initialState:{
        isThere:true,
        clicked:0
    },
    reducers: {
        setIsThere: (state,action) => {state.isThere = action.payload},
        setClicked: (state,action) => {state.clicked = action.payload},
    },
})

export const { setIsThere, setClicked } = mainReducer.actions

export default mainReducer.reducer

