
import React from 'react'
import { useSelector } from 'react-redux'

export default function TodaysPickTabIndexTabContainer({children}) {
    const todaysPickTabIndex = useSelector(state => state.reducer.todaysPickTabIndex)

    return (
        <div className='relative'>
            {children?.[todaysPickTabIndex]}
        </div>
    )
}
