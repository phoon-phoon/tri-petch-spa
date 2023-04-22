import { ContentStylesType, ContentsType } from '@/interfaces/content'
import { ContentStartAtType } from '@/interfaces/style'
import React, { FC } from 'react'
import Content from './Content'

interface ContentsPropsType {
    contents: ContentsType
    contentStartAt: ContentStartAtType
    styles?: ContentStylesType
}

const Contents: FC<ContentsPropsType> = (props) =>
    <>
        {
            props.contents.map(content =>
                <React.Fragment key={`${content.key}-${content.title}`}>
                    <Content
                        content={content}
                        contentStartAt={props.contentStartAt}
                        style={props.styles && props.styles[content.key] ? props.styles[content.key] : undefined}
                    />
                </React.Fragment>
            )
        }
    </>

export default Contents