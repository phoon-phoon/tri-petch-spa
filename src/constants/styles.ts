import { ContentStyleType, ContentStylesType } from "@/interfaces/content";

export const defaultSliderContentStyle: ContentStyleType = {
    marginTop: 0,
    marginBottom: 0,
    width: '100%', // 302 (Content 3: Lost)
    backgroundColor: 'transparent',
    titleUnderline: {
        marginTop: 2,
        width: 17,
        height: 4
    },
    numberText: {
        fontSize: 14,
        lineHeight: 16.41,
        letterSpacing: 1.5
    },
    titleText: {
        fontSize: 28,
        lineHeight: 32.81,
        letterSpacing: 1.5
    },
    description: {
        fontSize: 15,
        lineHeight: 17.58,
        letterSpacing: 0.74
    }
}

export const ATHELETS_STYLES: ContentStylesType = {
    '1': {
        mobile: {
            ...defaultSliderContentStyle,
            titleUnderline: {
                ...defaultSliderContentStyle.titleUnderline,
                width: 15
            }
        },
        tablet: {
            marginTop: 34,
            marginBottom: 38,
            width: 457,
            description: {
                fontSize: 18,
                lineHeight: 28
            }
        },
        desktop: {
            marginTop: 59,
            marginBottom: 56,
            description: {
                marginTop: 31
            }
        }
    },
    '2': {
        mobile: defaultSliderContentStyle,
        tablet: {
            backgroundColor: '#F5F4F9',
            marginTop: 30,
            marginBottom: 30,
            width: 446.2,
            titleUnderline: {
                width: 22
            },
            description: {
                fontSize: 18,
                lineHeight: 28,
                letterSpacing: 0.84,
            }
        },
        desktop: {
            backgroundColor: '#F5F4F9',
            marginTop: 53,
            marginBottom: 51,
            titleUnderline: {
                width: 22
            },
            description: {
                letterSpacing: 0.93
            }
        }
    },
    '3': {
        mobile: defaultSliderContentStyle,
        tablet: {
            backgroundColor: '#5E3DB3',
            marginTop: 30,
            marginBottom: 30,
            width: 446.2,
            titleUnderline: {
                backgroundColor: '#fff',
                width: 22
            },
            description: {
                fontSize: 18,
                lineHeight: 28,
                letterSpacing: 0.84,
                color: '#fff',
            }
        },
        desktop: {
            backgroundColor: '#5E3DB3',
            marginTop: 85,
            marginBottom: 98,
            titleUnderline: {
                marginLeft: 1,
                backgroundColor: '#fff',
                width: 22
            },
            description: {
                letterSpacing: 0.93,
                color: '#fff'
            }
        }
    }
}

const defaultSliderContentStyleForPlayer = {
    ...defaultSliderContentStyle,
    width: 283
}
export const PLAYER_STYLES: ContentStylesType = {
    '1': {
        mobile: {
            ...defaultSliderContentStyleForPlayer,
            titleUnderline: {
                ...defaultSliderContentStyleForPlayer.titleUnderline,
                width: 15
            }
        },
        tablet: {
            marginTop: 34,
            marginBottom: 10,
            width: 432,
            description: {
                fontSize: 18,
                lineHeight: 28,
            }
        },
        desktop: {
            marginTop: 68,
            marginBottom: 69,
            width: 571
        }
    },
    '2': {
        mobile: defaultSliderContentStyleForPlayer,
        tablet: {
            backgroundColor: '#F5F4F9',
            marginTop: 51,
            marginBottom: 65,
            width: 432,
            titleUnderline: {
                width: 22
            },
            description: {
                fontSize: 18,
                lineHeight: 28,
                letterSpacing: 0.93,
            }
        },
        desktop: {
            backgroundColor: '#F5F4F9',
            marginTop: 52,
            marginBottom: 102,
            titleUnderline: {
                width: 22
            },
            description: {
                letterSpacing: 0.65,
            }
        }
    },
    '3': {
        mobile: defaultSliderContentStyleForPlayer,
        tablet: {
            backgroundColor: '#090C35',
            marginTop: 60,
            marginBottom: 28,
            width: 455,
            titleUnderline: {
                marginLeft: 1,
                backgroundColor: '#fff',
                color: '#8F6BE8',
                width: 22
            },
            description: {
                fontSize: 18,
                lineHeight: 28,
                letterSpacing: 0.93,
                color: '#fff'
            }
        },
        desktop: {
            backgroundColor: '#090C35',
            marginTop: 87,
            marginBottom: 66, // 95 (lost 29px)
            titleUnderline: {
                marginLeft: 1,
                backgroundColor: '#fff',
                color: '#8F6BE8',
                width: 22
            },
            description: {
                lineHeight: 23.44,
                letterSpacing: 0.65,
                color: '#fff'
            }
        }
    }
}