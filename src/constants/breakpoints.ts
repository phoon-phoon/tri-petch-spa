export type SizeKeyType = 'mobile' | 'tablet' | 'desktop'
export const sizeKeys: Array<SizeKeyType> = ['mobile', 'tablet', 'desktop']

export const size: { [Key in SizeKeyType]: number } = {
    mobile: 320,
    tablet: 768,
    desktop: 1200
}

export const device: { [Key in SizeKeyType]: string } = {
    mobile: `(min-width: ${size.mobile}px)`,
    tablet: `(min-width: ${size.tablet}px)`,
    desktop: `(min-width: ${size.desktop}px)`
}
