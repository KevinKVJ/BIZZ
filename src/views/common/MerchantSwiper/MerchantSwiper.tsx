import { css } from '@emotion/react';
// import lodash from 'lodash';
/* Children,
Ref,
useCallback,
 */
import { Children, PropsWithChildren, useEffect, useMemo, useRef, useState } from 'react';
import type { Settings } from 'react-slick';

import FlexLayout from '@/components/FlexLayout/FlexLayout';
import SvgIcon from '@/components/SvgIcon';
import Swiper from '@/components/Swiper/Swiper';
import { SwiperRefTypes } from '@/components/Swiper/SwiperType';

interface swiperProps extends PropsWithChildren {
    title?: string;
    showSlides?: number;
    // showSpeed?: number;
    initialSlide?: number;
}

const MerchantInfoSwiper = ({
    title,
    children,
    showSlides = 3,
    initialSlide = 0,
}: // ...props
swiperProps) => {
    const [prevValid, setPrevValid] = useState(true);
    const [nextValid, setNextValid] = useState(true);
    const swiper1Ref = useRef<SwiperRefTypes>(null);
    const [currentSlide, setCurrentSlide] = useState(initialSlide);
    const [currentPage, setCurrentPage] = useState(
        Math.floor(initialSlide / (showSlides as number) + 1)
    );

    const setting: Settings = {
        // initialSlide: 0,
        slidesToShow: showSlides,
        slidesToScroll: showSlides,
        infinite: false,
        dots: false,
        speed: 500,
        swipe: false,
        focusOnSelect: false,
        // ...props,
        // centerMode: true,
    };

    const swiperButton = useMemo(
        () => css`
            width: 34px;
            height: 34px;
            border: 1px solid #e9e9ea;
            border-radius: 1000px;

            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;

            cursor: pointer;
            user-select: none;
        `,
        []
    );
    const swiper1Wrapper = useMemo(() => css``, []);
    const swiper1TitleButton = useMemo(
        () => css`
            padding: 0 20px;
            /* border-bottom: 2px solid #e9e9ea; */
        `,
        []
    );

    const swiperButtonBanned = css`
        background-color: rgb(247, 247, 247);
        cursor: not-allowed;
        > svg {
            fill: rgb(178, 178, 178);
        }
    `;

    const childrenLength = useMemo(() => Children.toArray(children).length, [children]);

    // useEffect(() => {
    //     // console.log(Children.toArray(children).length);
    //     console.log('父组件init');
    // }, []);

    useEffect(() => {
        console.log(`currSlide : ${currentSlide}`);
        currentSlide <= 0 ? setPrevValid(false) : setPrevValid(true);
        currentSlide + showSlides >= childrenLength - 1
            ? setNextValid(false)
            : setNextValid(true);
    }, [currentSlide]);

    // const slideChange = useCallback(
    //     lodash.debounce(
    //         (setValue: typeof currentSlide) => {
    //             setValue >= 0 &&
    //                 setValue <= childrenLength - 1 &&
    //                 setCurrentSlide(setValue);
    //         },
    //         showSpeed + 10,
    //         {
    //             leading: true,
    //             trailing: false,
    //         }
    //     ),
    //     [showSpeed]
    // );
    // const slideChange = useCallback(
    //     (setValue: typeof currentSlide) =>
    //         setValue >= 0 && setValue <= childrenLength - 1 && setCurrentSlide(setValue),
    //     [showSpeed]
    // );

    useEffect(() => {
        console.log(currentPage);
    }, [currentPage]);

    return (
        <div css={swiper1Wrapper}>
            <div className='swiper1_title_button' css={swiper1TitleButton}>
                <FlexLayout justifyContent='space-between'>
                    <h2>{title}</h2>
                    <FlexLayout className='swiper1_buttons' spacing='small'>
                        <div
                            className='swiper1_prev'
                            css={[swiperButton, prevValid ? null : swiperButtonBanned]}
                            onClick={() => swiper1Ref.current?.prevSlide?.()}
                        >
                            <SvgIcon name='previous' width={15} height={15}></SvgIcon>
                        </div>
                        <div
                            className='swiper1_next'
                            css={[swiperButton, nextValid ? null : swiperButtonBanned]}
                            onClick={() => swiper1Ref.current?.nextSlide?.()}
                        >
                            <SvgIcon name='next' width={15} height={15}></SvgIcon>
                        </div>
                    </FlexLayout>
                </FlexLayout>
            </div>
            <Swiper
                ref={swiper1Ref}
                {...setting}
                setCurrentPage={(pageVal: number) => setCurrentPage(pageVal)}
                setCurrentSlide={(slideVal: number) => setCurrentSlide(slideVal)}
            >
                {children}
            </Swiper>
        </div>
    );
};

export default MerchantInfoSwiper;
