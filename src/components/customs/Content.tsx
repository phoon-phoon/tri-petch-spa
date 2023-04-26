import { FC } from 'react';
import styled, { css } from 'styled-components';

import { ContentType, ContentWithSize } from '@/interfaces/content';
import { ContentBoxStartType } from '@/interfaces/style';

import Box from '../styled/Box'
import { sizeKeys, device } from '@/constants/breakpoints';
import { getStyled } from '@/utils/styled-components';

interface ContentPropsType {
    content: ContentType
    contentStartAt: ContentBoxStartType
    style?: ContentWithSize
}


const ContentBoxStyled = styled.div<ContentWithSize | {}>`
    display: none;
    @media ${device.tablet} {
        display: block;
    }

    ${sizeKeys.map((size) => css`
        @media ${device[size]} {
            margin-top: ${props => getStyled(props, [size, 'marginTop'], '0px')};
            margin-bottom: ${props => getStyled(props, [size, 'marginBottom'], '0px')};
            width: ${props => getStyled(props, [size, 'width'], '717px')};
        }
    `)}
`

const ContentTitleStyled = styled.div`
    display: flex;
    flex-direction: row;
`

const ContentNumberStyled = styled.div<ContentWithSize | {}>`
    margin-top: 5px;
    font-weight: 400;

    ${sizeKeys.map((size) => css`
        @media ${device[size]} {
            margin-left: ${props => getStyled(props, [size, 'titleUnderline', 'marginLeft'], '0px')};
            font-size: ${props => getStyled(props, [size, 'numberText', 'fontSize'], '18px')};
            line-height: ${props => getStyled(props, [size, 'numberText', 'lineHeight'], '21.09px')};
            letter-spacing: ${props => getStyled(props, [size, 'numberText', 'letterSpacing'], '1.5px')};
            color: ${props => getStyled(props, [size, 'titleUnderline', 'color'], '#000')};

            :after {
                content: '';
                display: block;
                margin-top: ${props => getStyled(props, [size, 'titleUnderline', 'marginTop'], '4px')};
                height: ${props => getStyled(props, [size, 'titleUnderline', 'height'], '5px')};
                width: ${props => getStyled(props, [size, 'titleUnderline', 'width'], '19px')};
                background-color: ${props => getStyled(props, [size, 'titleUnderline', 'backgroundColor'], '#603EBE')};
                border-radius: 2.5px;
            }
        }
    `)}    
`

const ContentTextStyled = styled.div<ContentWithSize | {}>`
    margin-left: 10px;
    font-weight: 400;
    color: #C2C2C2;

    ${sizeKeys.map((size) => css`
        @media ${device[size]} {
            font-size: ${props => getStyled(props, [size, 'titleText', 'fontSize'], '36px')};
            line-height: ${props => getStyled(props, [size, 'titleText', 'lineHeight'], '42.19px')};
            letter-spacing: ${props => getStyled(props, [size, 'titleText', 'letterSpacing'], '1.5px')};
        }
    `)}
`

const ContentDescriptionStyled = styled.div<ContentWithSize | {}>`
    max-width: 100%;
    font-weight: 400;

    ${sizeKeys.map((size) => css`
        @media ${device[size]} {
            margin-top: ${props => getStyled(props, [size, 'description', 'marginTop'], '21px')};
            font-size: ${props => getStyled(props, [size, 'description', 'fontSize'], '20px')};
            line-height: ${props => getStyled(props, [size, 'description', 'lineHeight'], '28px')};
            letter-spacing: ${props => getStyled(props, [size, 'description', 'letterSpacing'], '0px')};
            color: ${props => getStyled(props, [size, 'description', 'color'], '#000')};
        }
    `)}

    
`

const Content: FC<ContentPropsType> = (props) => {
    // console.log('Content.props', props.style?.desktop)

    return (
        <Box
            start={props.contentStartAt}
            backgroundColor={{
                mobile: props.style?.mobile?.backgroundColor || undefined,
                tablet: props.style?.tablet?.backgroundColor || undefined,
                desktop: props.style?.desktop?.backgroundColor || undefined
            }}>
            <ContentBoxStyled {...props.style}>
                <ContentTitleStyled>
                    <ContentNumberStyled {...props.style}>{props.content.key.padStart(2, '0')}</ContentNumberStyled>
                    <ContentTextStyled {...props.style}>{props.content.title}</ContentTextStyled>
                </ContentTitleStyled>
                <ContentDescriptionStyled {...props.style}>{props.content.description}</ContentDescriptionStyled>
            </ContentBoxStyled>
        </Box>
    )
}


export default Content