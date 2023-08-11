import React, { createContext, useContext } from 'react';
const SwiperContext = createContext();

export const useSwiper = () => {
  return useContext(SwiperContext);
};

export const SwiperProvider = ({ children, swiperRef }) => {
  return (
    <SwiperContext.Provider value={swiperRef}>
      {children}
    </SwiperContext.Provider>
  );
};