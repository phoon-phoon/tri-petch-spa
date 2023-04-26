import { SizeKeyType } from "@/constants/breakpoints"
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

export type ContentBoxStartType = { [Key in SizeKeyType]: number | string }
export type ContentBoxBackgroundColorType = { [Key in SizeKeyType]: string | undefined }

export interface TitleStyleType extends FontStyle {
    marginTop?: number
    marginLeft?: number
    marginBottom?: number
}