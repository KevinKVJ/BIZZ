import { css } from '@emotion/react';
// import { min } from 'lodash';
import {
    Children,
    FC,
    PropsWithChildren,
    useEffect,
    useMemo,
    useRef,
    useState,
} from 'react';
import type { Settings } from 'react-slick';

import SVGIcon from '@/components/SvgIcon';
import Swiper from '@/components/Swiper/Swiper';
import { SwiperRefTypes } from '@/components/Swiper/SwiperType';

interface ICSwiperProps extends PropsWithChildren {
    showSlides?: number;
    initialSlide?: number;
}

const CategorySwiper: FC<ICSwiperProps> = ({
    showSlides = 10,
    initialSlide = 0,
    children,
}) => {
    const [prevValid, setPrevValid] = useState(true);
    const [nextValid, setNextValid] = useState(true);
    const [currentSlide, setCurrentSlide] = useState(initialSlide);
    /* currentPage */
    const [, setCurrentPage] = useState(
        Math.floor(initialSlide / (showSlides as number) + 1)
    );
    const swiper1Ref = useRef<SwiperRefTypes>(null);

    const csWrapper = css`
        /* box-sizing: content-box; */
        position: relative;
        padding: 0 40px;

        .cs-button {
            width: 32px;
            height: 32px;
            border: 1px solid #e9e9ea;
            border-radius: 1000px;

            background-color: #fff;
            box-shadow: rgb(0 0 0 / 20%) 0px 2px 8px;

            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            z-index: 500;

            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;

            user-select: none;
        }
        .icon-left {
            cursor: pointer;
            left: 0;
            ${prevValid
                ? null
                : `
                        background-color: rgb(247, 247, 247);
                        cursor: not-allowed;
                        > svg {
                            fill: rgb(178, 178, 178);
                        }
                    `};
        }
        .icon-right {
            cursor: pointer;
            right: 0;

            ${nextValid
                ? null
                : `
                    background-color: rgb(247, 247, 247);
                    cursor: not-allowed;
                    > svg {
                        fill: rgb(178, 178, 178);
                    }
                `};
        }
    `;

    useEffect(() => {
        // console.log(`currSlide : ${currentSlide}`);
        currentSlide <= 0 ? setPrevValid(false) : setPrevValid(true);
        currentSlide + showSlides >= childrenLength - 1
            ? setNextValid(false)
            : setNextValid(true);
    }, [currentSlide]);

    const childrenLength = useMemo(() => Children.toArray(children).length, [children]);

    const setting: Settings = {
        // initialSlide: 0,
        slidesToShow: showSlides,
        slidesToScroll: showSlides,
        infinite: false,
        dots: false,
        speed: 500,
        swipe: false,
        focusOnSelect: false,
        // centerMode: true,
    };

    return (
        <div className='cate-swiper-wrapper' css={csWrapper}>
            <div
                className='cs-button icon-left'
                onClick={() => swiper1Ref.current?.prevSlide?.()}
            >
                {/* <input type="text" onChange={} /> */}
                <SVGIcon name='previous' width={14} height={14} />
            </div>
            <div
                className='cs-button icon-right'
                onClick={() => swiper1Ref.current?.nextSlide?.()}
            >
                <SVGIcon name='next' width={14} height={14} />
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

export default CategorySwiper;
