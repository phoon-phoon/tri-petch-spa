import { FC, PropsWithChildren } from "react";
import styled, { css } from "styled-components";

import { ContentBoxColorType, ContentStartAtType } from "@/interfaces/style";

interface BoxStyledType {
    start?: ContentStartAtType
    backgroundColor?: ContentBoxColorType
}

const BoxStyled = styled.div<BoxStyledType>`
    width: 100%;
    position: relative;
    background-color: ${props => props.backgroundColor ? props.backgroundColor : 'transparent'};
`

const BoxInnerStyled = styled.div<BoxStyledType>`
    margin-left: ${props => props.start && typeof props.start === 'string' ? props.start : `${(props.start || 0)}px`};
`

const Box: FC<PropsWithChildren<BoxStyledType>> = (props) =>
    <BoxStyled backgroundColor={props.backgroundColor}>
        <BoxInnerStyled start={props.start}>{props.children}</BoxInnerStyled>
    </BoxStyled>

export default Box

