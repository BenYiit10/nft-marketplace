import { createSlice } from '@reduxjs/toolkit'

export const mainReducer = createSlice({
    name: 'main',
    initialState:{
        clicked:0,
        todaysPickTabIndex:0,
        selectBorder:true
    },
    reducers: {
        setClicked: (state,action) => {state.clicked = action.payload},
        setSelectBorder: (state,action) => {state.selectBorder = action.payload},
        setTodaysPickTabIndex: (state,action) => {state.todaysPickTabIndex = action.payload},
    },
})

export const { setIsThere, setClicked, setTodaysPickTabIndex, setSelectBorder} = mainReducer.actions

export default mainReducer.reducer

