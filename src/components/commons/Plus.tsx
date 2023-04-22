import { FC } from 'react'
import styled from 'styled-components'

import XYSVG from '/public/xy.svg'

interface PlusPropsType {
    size?: number
    stoke?: number
    color?: string
    borderColor?: string
    opacity?: number
}

const PlusStyled = styled.div<PlusPropsType>`
    width: ${props => props.size ?? 15}px;
    height: ${props => props.size ?? 15}px;
    opacity: ${props => props.opacity ?? 1};
`

const Plus: FC<PlusPropsType> = (props) =>
    <PlusStyled {...props}>
        <XYSVG />
    </PlusStyled>

export default Plus