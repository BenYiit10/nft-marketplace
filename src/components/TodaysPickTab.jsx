import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setTodaysPickTabIndex } from '../redux/reducer';

export default function TodaysPickTab({icon,content}) {

    const dispatch = useDispatch();
    const todaysPickTabIndex = useSelector(state => state.reducer.todaysPickTabIndex)

    function changeTab() {
        dispatch(setTodaysPickTabIndex(content[0].index))
    }

    return (
        <div onClick={changeTab} className={`flex items-center gap-4 px-4 py-[5px] rounded-full border border-1 border-purple-600 ${content[0].index === todaysPickTabIndex && "bg-purple-600"}`}>
            {icon}
            <p className='font-semibold'>{content[0].title}</p>
        </div>
    )
}
