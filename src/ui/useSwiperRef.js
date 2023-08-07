import { useRef } from 'react';

const useSwiperRef = () => {
    const swiperRef = useRef(null);

    return swiperRef;
};

export default useSwiperRef;