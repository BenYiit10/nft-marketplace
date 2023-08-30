import React from 'react'
import { useSelector } from 'react-redux'

export default function DetailTabIndexTabContainer({children}) {

  const clicked = useSelector(state => state.reducer.clicked)

  return (
    <div className='border-t border-slate-500 h-full '>
        {children[clicked]}
    </div>
  )
}
