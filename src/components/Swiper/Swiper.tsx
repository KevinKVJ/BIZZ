/* eslint-disable react/display-name */
import 'slick-carousel/slick/slick-theme.scss';
import 'slick-carousel/slick/slick.scss';

import {
    forwardRef,
    PropsWithChildren,
    Ref,
    useImperativeHandle,
    useMemo,
    useRef,
} from 'react';
import type { Settings } from 'react-slick';
/* Component, forwardRef, useImperativeHandle */
import Slider from 'react-slick';

import type { SwiperRefTypes } from './SwiperType';

/* Really appreciate the react-slick dev group */
interface SwiperProps extends PropsWithChildren<Settings> {
    currentSlide?: number;
    setCurrentPage?: (pageVal: number) => void;
    setCurrentSlide?: (SlideVal: number) => void;
}

const Swiper = forwardRef<SwiperRefTypes, SwiperProps>(
    (
        { children, slidesToShow, setCurrentPage, setCurrentSlide, ...swiperSettings },
        ref: Ref<SwiperRefTypes>
    ) => {
        const swiperRef = useRef<Slider>(null);

        useImperativeHandle(ref, () => ({
            nextSlide: swiperRef.current?.slickNext,
            prevSlide: swiperRef.current?.slickPrev,
        }));

        const settings = useMemo<Settings>(
            () => ({
                speed: 500,
                afterChange: curr => {
                    const currPage = Math.floor(curr / (slidesToShow as number) + 1);
                    setCurrentSlide?.(curr);
                    setCurrentPage?.(currPage);
                },
                slidesToShow,
                ...swiperSettings,
                // infinite: true,
                // slidesToShow: 3,
                // slidesToScroll: 3,
            }),
            [swiperSettings]
        );
        return (
            <div>
                <Slider {...settings} ref={swiperRef}>
                    {children}
                </Slider>
            </div>
        );
    }
);

export default Swiper;
