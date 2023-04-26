const getValueFromKeys = (styles: any, keys: Array<string>): string | undefined => {
    var values = styles[keys[0]]
    keys.shift()
    if (values !== undefined && keys.length > 0) return getValueFromKeys(values, keys)

    return values
}

export const getStyled = (styles: any, keys: Array<string>, defaultValue: any): string => {
    var value = undefined
    value = getValueFromKeys(styles, keys)

    if (value === undefined) return defaultValue

    if (typeof value === 'number')
        value = `${value}px`
    else value

    console.log('getStyled', keys, defaultValue, value)

    return value
}