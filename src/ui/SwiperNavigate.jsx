import React from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

const SwiperNavigate = ({ left, right, className }) => {

  return (
    <>
      {left && (
        <div
          className={`absolute -translate-x-1/2 -translate-y-1/2 top-1/2 -left-[6.5%] max-1xl:-left-[4.5%] max-mdd:left-[6%] max-sm:left-[5%] w-12 h-12 bg-white shadow-xl shadow-white rounded-full grid place-items-center z-10 cursor-pointer max-xs:w-10 max-xs:h-10 max-mdd:shadow-lg max-mdd:shadow-white hover:bg-slate-200 hover:shadow-slate-200 ${className}`}
        >
          <HiChevronLeft className='text-black text-xl' strokeWidth={0.5} />
        </div>
      )}
      {right && (
        <div
          className={`absolute translate-x-1/2 -translate-y-1/2 top-1/2 -right-[6.5%] max-1xl:-right-[4.5%] max-mdd:right-[6%] max-sm:right-[5%] w-12 h-12 bg-white shadow-xl shadow-white rounded-full grid place-items-center z-10 cursor-pointer max-xs:w-10 max-xs:h-10 max-mdd:shadow-lg max-mdd:shadow-white hover:bg-slate-200 hover:shadow-slate-200 ${className}`}
        >
          <HiChevronRight className='text-black text-xl' strokeWidth={0.5} />
        </div>
      )}
    </>
  );
};

export default SwiperNavigate;