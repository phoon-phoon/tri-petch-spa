import { CSSProperties } from "react"

export interface PositionStyle {
    top?: number
    right?: number
    left?: number
    bottom?: number
}

export interface FontStyle {
    fontSize?: number | string
    fontWeight?: number | string
    lineHeight?: number | string
}

export type ContentStartAtType = number | string
export type ContentBoxColorType = string

export interface TitleStyleType extends FontStyle {
    marginTop?: number
    marginLeft?: number
    marginBottom?: number
}