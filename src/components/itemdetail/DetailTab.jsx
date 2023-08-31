import React from 'react'
import { setClicked } from '../../redux/reducer'
import { useDispatch, useSelector } from 'react-redux'

export default function DetailTab({ tabText}) {

  const dispatch = useDispatch()

  const clicked = useSelector(state => state.reducer.clicked)

  return (
    <div className='relative'>

        {
          <div className='grid grid-cols-8  '>
          {
            tabText.map((item,index) => {
                return (
                    <button key={index} onClick={() => dispatch(setClicked(index))} className={`w-full justify-self-center text-xs 3xl:text-sm 4xl:text-base 5xl:text-lg border-b border-1 pb-2 outline-none
                      ${clicked===index ? "border-purple-600 text-purple-600" : "border-transparent"}
                    `}>
                      {item}
                    </button>

                )
              })
          }
          </div>
        }
        
    </div>
  )
}
