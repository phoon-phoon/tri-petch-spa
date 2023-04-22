import { FC } from 'react'
import styled from 'styled-components'

import { ContentStyleType, ContentType } from '@/interfaces/content'
import { ContentStartAtType } from '@/interfaces/style'

import Box from '../styled/Box'

interface ContentPropsType {
    content: ContentType
    contentStartAt: ContentStartAtType
    style?: ContentStyleType
}


const ContentBoxStyled = styled.div<ContentStyleType>`
    margin-top: ${props => props.marginTop && typeof props.marginTop === 'string' ? props.marginTop : `${(props.marginTop || 0)}px`};
    margin-bottom: ${props => props.marginBottom && typeof props.marginBottom === 'string' ? props.marginBottom : `${(props.marginBottom || 0)}px`};
    width: ${props => props?.width && typeof props.width === 'string' ? props.width : `${(props?.width || 717)}px`};
`

const ContentTitleStyled = styled.div<ContentStyleType>`
 
`

const ContentNumberStyled = styled.div<ContentStyleType>`
    margin-top: 5px;
    margin-left: ${props => props.titleUnderline?.marginLeft && typeof props.titleUnderline.marginLeft === 'string' ? props.titleUnderline.marginLeft : `${(props.titleUnderline?.marginLeft || 0)}px`};
    font-size: ${props => props.numberText?.fontSize && typeof props.numberText?.fontSize === 'string' ? props.numberText?.fontSize : `${(props.numberText?.fontSize || 18)}px`};
    font-weight: 400;
    line-height: ${props => props.numberText?.lineHeight && typeof props.numberText?.lineHeight === 'string' ? props.numberText?.lineHeight : `${(props.numberText?.lineHeight || 21.09)}px`};
    letter-spacing: ${props => props.numberText?.letterSpacing && typeof props.numberText?.letterSpacing === 'string' ? props.numberText?.letterSpacing : `${(props.numberText?.letterSpacing || 1.5)}px`};
    color: ${props => props.titleUnderline?.color ? props.titleUnderline.color : '#000'};

    :after {
        content: '';
        margin-top: ${props => props.titleUnderline?.marginTop && typeof props.titleUnderline.marginTop === 'string' ? props.titleUnderline.marginTop : `${(props.titleUnderline?.marginTop || 4)}px`};
        display: block;
        height: ${props => props.titleUnderline?.height && typeof props.titleUnderline.height === 'string' ? props.titleUnderline.height : `${(props.titleUnderline?.height || 5)}px`};
        width: ${props => props.titleUnderline?.width && typeof props.titleUnderline.width === 'string' ? props.titleUnderline.width : `${(props.titleUnderline?.width || 19)}px`};
        background-color: ${props => props.titleUnderline?.backgroundColor ? props.titleUnderline.backgroundColor : '#603EBE'};
        border-radius: 2.5px;
    }
`

const ContentTextStyled = styled.div<ContentStyleType>`
    margin-left: 10px;
    font-size: ${props => props.titleText?.fontSize && typeof props.titleText?.fontSize === 'string' ? props.titleText?.fontSize : `${(props.titleText?.fontSize || 36)}px`};
    font-weight: 400;
    line-height: ${props => props.titleText?.lineHeight && typeof props.titleText?.lineHeight === 'string' ? props.titleText?.lineHeight : `${(props.titleText?.lineHeight || 42.19)}px`};
    letter-spacing: ${props => props.titleText?.letterSpacing && typeof props.titleText?.letterSpacing === 'string' ? props.titleText?.letterSpacing : `${(props.titleText?.letterSpacing || 1.5)}px`};
    color: #C2C2C2;
`

const ContentDescriptionStyled = styled.div<ContentStyleType>`
    margin-top: ${props => props.description?.marginTop && typeof props.description.marginTop === 'string' ? props.description.marginTop : `${(props.description?.marginTop || 21)}px`};
    max-width: 100%;
    font-size: ${props => props.description?.fontSize && typeof props.description?.fontSize === 'string' ? props.description?.fontSize : `${(props.description?.fontSize || 20)}px`};
    font-weight: 400;
    line-height: ${props => props.description?.lineHeight && typeof props.description?.lineHeight === 'string' ? props.description?.lineHeight : `${(props.description?.lineHeight || 28)}px`};
    color: ${props => props.description?.color ?? '#000'};
    letter-spacing: ${props => props.description?.letterSpacing && typeof props.description.letterSpacing === 'string' ? props.description.letterSpacing : `${(props.description?.letterSpacing || 1)}px`};
`

const Content: FC<ContentPropsType> = (props) => {
    // console.log('Content.props', props)
    return (
        <Box start={props.contentStartAt} backgroundColor={props.style?.backgroundColor || undefined}>
            <ContentBoxStyled {...props.style}>
                <ContentTitleStyled className='flex flex-row' {...props.style}>
                    <ContentNumberStyled {...props.style}>{props.content.key.padStart(2, '0')}</ContentNumberStyled>
                    <ContentTextStyled {...props.style}>{props.content.title}</ContentTextStyled>
                </ContentTitleStyled>
                <ContentDescriptionStyled {...props.style}>{props.content.description}</ContentDescriptionStyled>
            </ContentBoxStyled>
        </Box>
    )
}


export default Content