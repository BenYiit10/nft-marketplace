import React from 'react'
import { useSelector } from 'react-redux'

export default function TabContainer({children}) {
    const clicked = useSelector(state => state.reducer.clicked)

    return (
        <div className='relative'>
            {children[clicked]}
        </div>
    )
}
