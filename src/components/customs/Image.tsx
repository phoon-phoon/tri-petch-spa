import Image, { ImageProps } from 'next/image'
import { CSSProperties, FC } from 'react'
import styled from 'styled-components'

interface CustomImagePropsType {
    image: ImageProps
    width?: number
    height?: number
    background?: JSX.Element
    styles?: CSSProperties
}

const CustomImageStyled = styled.div<CustomImagePropsType>`
    position: relative;
    width: ${props => props.width ? props.width + 'px' : 'fit-content'};
    height: ${props => props.height ? props.height + 'px' : 'fit-content'};

    > img {
        max-width: none;
    }
`

const CustomImageBackgroundStyled = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;

    > div {
        position: absolute;
    }
`

const CustomImage: FC<CustomImagePropsType> = (props) =>
    <CustomImageStyled {...props} style={props.styles ?? {}}>
        {props.background ? <CustomImageBackgroundStyled>{props.background}</CustomImageBackgroundStyled> : null}
        <Image {...props.image} width={props.width ?? undefined} style={{ position: 'relative', zIndex: 1 }} />
    </CustomImageStyled>

export default CustomImage