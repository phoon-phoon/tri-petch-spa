import { ImageProps, StaticImageData } from "next/image"
import { ContentsType } from "./content"

export interface MainContentType {
    title: string
    image: StaticImageData
    contents: ContentsType
}