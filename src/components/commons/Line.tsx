import { FC } from 'react'
import styled from 'styled-components'

interface LinePropsType {
    width?: number
    height?: number
    stoke?: number
    stokecolor?: string
}

const LineStyled = styled.div<LinePropsType>`
    position:relative;
    width: ${props => props.width ?? 265.62}px;
    height: ${props => props.height ?? 311.16}px;

    svg {
        width: ${props => props.width ? props.width + 'px' : '100%'};
        height: ${props => props.height ? props.height + 'px' : '100%'};
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        line {
            stroke: ${props => props.stokecolor ?? '#936EEA'}};
            stroke-width: ${props => props.stoke ?? 6}}px;
        }
    }
`

const Line: FC<LinePropsType> = (props) =>
    <LineStyled {...props}>
        <svg>
            <line x1='5' y1={`calc(${props.height ? props.height + 'px' : '100%'} - 5px)`} x2={`calc(${props.width ? props.width + 'px' : '100%'} - 5px)`} y2='5' />
            {/* <line x1='5' y1='calc(100% - 5px)' x2='calc(100% - 5px)' y2='5' /> */}
        </svg>
    </LineStyled>

export default Line