import React from 'react'
import { setClicked } from '../redux/reducer'
import { useDispatch, useSelector } from 'react-redux'

export default function SectionTitle({title, more, tab, tabText}) {

  const dispatch = useDispatch()

  const clicked = useSelector(state => state.reducer.clicked)

  return (
    <div className='sectionTitle relative flex justify-between items-end gap-4 mb-8'>
        <h2 className='font-rubik font-bold text-[30px] max-xs:text-[25px] 2xl:text-4xl 5xl:text-5xl '>
            {title}
        </h2>
        {
          more && 
          <p className='text-purple-600 max-xs:text-sm 2xl:text-lg 5xl:text-xl' >Explore More</p>        
        } 

        {
          tab &&
          <div className='flex gap-2'>
          {
            tabText.map((item,index) => {
                return (
                    <button key={index} onClick={() => dispatch(setClicked(index))} className={`rounded-full px-5 py-1 max-sm:text-xs max-sm:px-3 max-sm:py-1 border border-1 border-purple-600
                      ${clicked===index && "bg-purple-600"}
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
