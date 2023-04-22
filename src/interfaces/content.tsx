export interface ContentType {
    key: string
    title: string
    description: string
}

export type ContentsType = Array<ContentType>

export type ContentStyleType = {
    titleUnderline?: {
        marginTop?: number | string
        marginLeft?: number | string
        backgroundColor?: string
        color?: string
        width?: number | string
        height?: number | string
    },
    numberText?: {
        fontSize?: number | string
        lineHeight?: number | string
        letterSpacing?: number | string
    }
    titleText?: {
        fontSize?: number | string
        lineHeight?: number | string
        letterSpacing?: number | string
    }
    description?: {
        marginTop?: number | string
        fontSize?: number | string
        lineHeight?: number | string
        letterSpacing?: number | string
        color?: string
    }
    backgroundColor?: string
    marginTop?: number | string
    marginBottom?: number | string
    width?: number | string
}

export type ContentStylesType = { [Key in string]: ContentStyleType }
