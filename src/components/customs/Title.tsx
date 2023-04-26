import { ContentBoxStartType, TitleStyleType } from '@/interfaces/style'
import { FC } from 'react'
import styled from 'styled-components'
import Box from '../styled/Box'

interface TitlePropsType {
    title: string
    contentStartAt: ContentBoxStartType
    customStyles: TitleStyleType
}

const TitleStyled = styled.h1<TitleStyleType>`
    margin-top: ${props => props.marginTop && typeof props.marginTop === 'string' ? props.marginTop : `${(props.marginTop || 0)}px`};
    margin-left: ${props => props.marginLeft && typeof props.marginLeft === 'string' ? props.marginLeft : `${(props.marginLeft || 0)}px`};
    margin-bottom: ${props => props.marginBottom && typeof props.marginBottom === 'string' ? props.marginBottom : `${(props.marginBottom || 0)}px`};
    font-size: ${props => props.fontSize && typeof props.fontSize === 'string' ? props.fontSize : `${(props.fontSize || 90)}px`};
    font-weight: ${props => props.fontWeight && typeof props.fontWeight === 'string' ? props.fontWeight : `${(props.fontWeight || 400)}`};
    line-height: ${props => props.lineHeight && typeof props.lineHeight === 'string' ? props.lineHeight : `${(props.lineHeight || 105.47)}px`};
    color: #E7E7E7;
`

const Title: FC<TitlePropsType> = (props) =>
    <Box start={props.contentStartAt}>
        <TitleStyled {...props.customStyles}>{props.title}</TitleStyled>
    </Box>

export default Title