import React from 'react'

export default function TabButton({children}) {

    //const sectionTitleTimeActive = useSelector(state => state.reducer.sectionTitleTimeActive)

    
    return (
        <div className='flex justify-center items-center text-xs font-semibold py-[7px] px-5 border border-1 border-purple-600 rounded-full'>
            {children}
        </div>
    )
}