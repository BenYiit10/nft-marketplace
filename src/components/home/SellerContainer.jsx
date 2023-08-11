import React from 'react'

export default function SellerContainer({children}) {
  return (
    <div className='section-content grid grid-cols-4 gap-4 max-lg:grid-cols-3 max-sm:grid-cols-2 max-xs:grid-cols-1'>
        {children}
    </div>
  )
}
