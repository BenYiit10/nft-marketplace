import React from 'react'

export default function AuctionCardContainer({children}) {
  return (
    <div className='section-content grid grid-cols-4 gap-4 max-xl:grid-cols-3 max-[860px]:grid-cols-2 max-[520px]:grid-cols-1 max-[520px]:justify-items-center'>
        {children}
    </div>
  )
}
