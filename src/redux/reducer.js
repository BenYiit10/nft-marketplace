import { createSlice } from '@reduxjs/toolkit'

export const mainReducer = createSlice({
    name: 'main',
    initialState:{
        isThere:true,
        clicked:0,
        todaysPickTabIndex:0
    },
    reducers: {
        setIsThere: (state,action) => {state.isThere = action.payload},
        setClicked: (state,action) => {state.clicked = action.payload},
        setTodaysPickTabIndex: (state,action) => {state.todaysPickTabIndex = action.payload},
    },
})

export const { setIsThere, setClicked, setTodaysPickTabIndex } = mainReducer.actions

export default mainReducer.reducer

