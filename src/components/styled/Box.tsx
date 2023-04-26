import { FC, PropsWithChildren } from "react";
import styled, { css } from "styled-components";

import { ContentBoxStartType, ContentBoxBackgroundColorType } from "@/interfaces/style";
import { sizeKeys, device } from "@/constants/breakpoints";
import { getStyled } from '@/utils/styled-components';

interface BoxStyledType {
    start?: ContentBoxStartType
    backgroundColor?: ContentBoxBackgroundColorType
}

const BoxStyled = styled.div<BoxStyledType>`
    width: 100vw;
    position: relative;

    ${sizeKeys.map((size) => css`
        @media ${device[size]} {
            background-color: ${props => getStyled(props, ['backgroundColor', size], 'transparent')};
        }
    `)}
`

const BoxInnerStyled = styled.div<BoxStyledType>`
    ${sizeKeys.map((size) => css`
        @media ${device[size]} {
            margin-left: ${props => getStyled(props, ['start', size], '0px')};
        }
    `)}
`

const Box: FC<PropsWithChildren<BoxStyledType>> = (props) =>
    <BoxStyled backgroundColor={props.backgroundColor}>
        <BoxInnerStyled start={props.start}>{props.children}</BoxInnerStyled>
    </BoxStyled>

export default Box

