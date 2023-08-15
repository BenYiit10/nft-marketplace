
import React from 'react'
import { useSelector } from 'react-redux'

export default function AuctionPickTabIndexTabContainer({children}) {
    const AuctionPickTabIndex = useSelector(state => state.reducer.todaysPickTabIndex)
    
    return (
        <div className='relative'>
            {children?.[AuctionPickTabIndex]}
        </div>
    )
}
