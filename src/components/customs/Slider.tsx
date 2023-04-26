import { CSSProperties, FC } from 'react'
import styled from 'styled-components'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import { ContentStylesType, ContentsType } from '@/interfaces/content';
import { ContentBoxStartType } from '@/interfaces/style';
import Content from './Content';
import { device } from '@/constants/breakpoints';

interface WrapperStyleType {
    padding?: string
    height?: string | number
    bottom?: string | number
}

interface SliderPropsType {
    contents: ContentsType
    contentStartAt: ContentBoxStartType
    styles?: ContentStylesType
    wrapperStyle?: WrapperStyleType
}

const SliderBoxStyled = styled.div<WrapperStyleType>`
    display: block;
    @media ${device.tablet} {
        display: none;
    }

    background-color: #F5F4F9;

    .swiper-slide {
        padding: ${props => props.padding ? props.padding : '72px 1px 69px 19px'};
        height: ${props => props.height && typeof props.height === 'string' ? props.height : props.height ? props.height + 'px' : 'unset'};
    }

    .swiper-pagination.swiper-pagination-clickable.swiper-pagination-bullets.swiper-pagination-horizontal {
        top: unset;
        bottom: ${props => props.bottom && typeof props.bottom === 'string' ? props.bottom : `${(props.bottom || 21)}px`};

        .swiper-pagination-bullet {
            width: 10px;
            height: 10px;
            margin: 0 6px;
            opacity: 1;
            background-color: #D8D8D8;

            &.swiper-pagination-bullet-active {
                background-color: #5C3CAF;
            }
        }
    }
`

const Slider: FC<SliderPropsType> = (props) =>
    <SliderBoxStyled {...props.wrapperStyle}>
        <Swiper
            className="mySwiper swiper-h"
            spaceBetween={0}
            pagination={{ clickable: true }}
            modules={[Pagination]}
        >
            {
                props.contents.map((content) =>
                    <SwiperSlide key={`slider-${content.key}-${content.title}`}>
                        <Content
                            content={content}
                            contentStartAt={props.contentStartAt}
                            style={props.styles && props.styles[content.key] ? props.styles[content.key] : undefined}
                        />
                    </SwiperSlide>
                )
            }
        </Swiper>
    </SliderBoxStyled>

export default Slider