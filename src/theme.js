import kradoColors from './colors';

const theme = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  sizes: {
    small: '40rem',
    medium: '52rem',
    large: '90rem',
    extraLarge: '120rem',
    container: '120rem'
  },
  breakpoints: ['40em', '52em', '90em', '120rem'],
  fontSizes: [12, 14, 16, 18, 20, 22, 24, 32, 42, 52, 62, 84],
  colors: {
    primary: {
      regular: kradoColors.oshun400,
      contrast: kradoColors.ash000
    },
    secondary: {
      light: kradoColors.oshun300,
      regular: kradoColors.oshun500,
      bold: kradoColors.oshun700,
      contrast: kradoColors.ash000
    },
    accent: {
      light: kradoColors.oshun000,
      regular: kradoColors.oshun100,
      medium: kradoColors.oshun200,
      bold: kradoColors.oshun300,
      contrast: kradoColors.ash000
    },
    error: {
      light: kradoColors.asset000,
      regular: kradoColors.asset400,
      medium: kradoColors.asset600,
      bold: kradoColors.asset700,
      contrast: kradoColors.ash000
    },
    warning: {
      light: kradoColors.oshun000,
      regular: kradoColors.oshun400,
      medium: kradoColors.oshun600,
      bold: kradoColors.oshun700,
      contrast: kradoColors.ash000
    },
    success: {
      light: kradoColors.usir000,
      regular: kradoColors.usir400,
      medium: kradoColors.usir600,
      bold: kradoColors.usir700,
      contrast: kradoColors.ash000
    },
    info: {
      light: kradoColors.ptah000,
      regular: kradoColors.ptah400,
      medium: kradoColors.ptah600,
      bold: kradoColors.ptah700,
      contrast: kradoColors.ash000
    },
    surface: {
      extrathin: kradoColors.ash000,
      thin: kradoColors.warmAsh100,
      extralight: kradoColors.warmAsh200,
      light: kradoColors.warmAsh300,
      regular: kradoColors.warmAsh400,
      medium: kradoColors.warmAsh500,
      semibold: kradoColors.warmAsh600,
      bold: kradoColors.warmAsh700,
      semiblack: kradoColors.warmAsh800,
      black: kradoColors.ash1000
    },
    action: {
      active: kradoColors.oshun400,
      hover: kradoColors.oshun500,
      selected: kradoColors.oshun400,
      disabled: kradoColors.warmAsh600,
      disabledBackground: kradoColors.warmAsh100
    },
    text: {
      primary: kradoColors.warmAsh800,
      secondary: kradoColors.warmAsh600,
      title: kradoColors.oshun400,
      placeholder: kradoColors.warmAsh500,
      disabled: kradoColors.warmAsh400
    },
    background: kradoColors.ash000,
    divider: kradoColors.warmAsh400
  },
  fonts: {
    body: 'Inter, Arial, sans-serif',
    heading: 'Inter, Arial, sans-serif',
    display: 'Merriweather, Georgia, serif'
  },
  fontWeights: {
    body: 500,
    heading: 400,
    bold: 700
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125
  },
  letterSpacings: {
    normal: 'normal',
    display: '-0.05em',
    pretext: '0.22em'
  },
  zIndices: [0, 10, 20, 30, 40, 50],
  radii: [0, 4, 8, 12, 99999],
  shadows: {
    soft: {
      low: '0px 4px 24px rgba(0, 0, 0, 0.1)',
      highMiddle: '0px 20px 64px rgba(0, 0, 0, 0.08)',
      highNorth: '0px -20px 114px rgba(0, 0, 0, 0.16)',
      highSouth: '0px 40px 114px rgba(0, 0, 0, 0.16)',
      highWest: '-40px 0px 114px rgba(0, 0, 0, 0.16)',
      highEast: '40px 0px 114px rgba(0, 0, 0, 0.16)'
    },
    hard: {
      low: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      high: '0px 9px 15px rgba(0, 0, 0, 0.13)'
    },
    onFocus: `0px 0px 10px 0.5px ${kradoColors.ptah500}`
  },
  borders: ['none', `2px solid black`],
  buttons: {
    solid: {
      color: 'primary.contrast',
      bg: 'primary.regular',
      '&:hover': {
        bg: 'action.hover'
      },
      '&:active': {
        bg: 'action.active'
      },
      '&:disabled': {
        color: 'action.disabled',
        bg: 'action.disabledBackground'
      },
      '&:focus-visible': {
        outline: 'none',
        boxShadow: 'onFocus'
      }
    },
    text: {
      color: 'primary.regular',
      bg: 'transparent',
      '&:hover': {
        color: 'action.hover'
      },
      '&:active': {
        color: 'action.active'
      },
      '&:disabled': {
        color: 'action.disabled'
      }
    },
    ghost: {
      color: 'primary.regular',
      bg: 'transparent',
      border: 1,
      borderColor: 'primary.regular',
      '&:hover': {
        color: 'action.hover',
        borderColor: 'transparent',
        bg: 'background',
        boxShadow: 'hard.high'
      },
      '&:active': {
        color: 'background',
        bg: 'action.active'
      },
      '&:disabled': {
        color: 'action.disabled',
        borderColor: 'action.disabled',
        boxShadow: 'none'
      }
    },
    sizes: {
      large: { paddingX: '55px', paddingY: '20px' },
      small: { paddingX: '35px', paddingY: '15px', fontSize: '13px' }
    },
    icon: {
      width: '32px',
      height: '32px',
      borderRadius: 2,
      backgroundColor: 'background'
    }
  },
  images: {
    avatar: {
      width: 42,
      height: 42
    }
  },
  styles: {
    root: {
      fontFamily: 'body',
      fontWeight: 'body'
    },
    a: {
      color: 'primary.regular',
      borderBottom: '3px solid',
      borderColor: 'primary.regular',
      textDecoration: 'none'
    }
  },
  text: {
    base: {
      color: 'text.primary'
    },
    default: {
      variant: 'text.base'
    },
    body: {
      h1: {
        variant: 'text.base',
        fontSize: 8,
        fontWeight: 400,
        lineHeight: 'heading'
      },
      h2: {
        variant: 'text.body.h1',
        fontSize: 7
      },
      h3: {
        variant: 'text.body.h1',
        fontSize: 6
      },
      h4: {
        variant: 'text.body.h1',
        fontSize: 5
      },
      h5: {
        variant: 'text.body.h1',
        fontWeight: 600,
        fontSize: 4
      },
      summary: {
        variant: 'text.base',
        fontSize: 6,
        lineHeight: '32px',
        letterSpacing: '-0.02em'
      },
      paragraph: {
        variant: 'text.base',
        fontSize: 4,
        lineHeight: '28px'
      },
      smallParagraph: {
        variant: 'text.base',
        fontSize: 2,
        lineHeight: '20px'
      },
      bold: {
        variant: 'text.base',
        fontWeight: 'bold',
        fontSize: 4,
        lineHeight: '28px'
      },
      callout: {
        variant: 'text.base',
        fontSize: 3,
        lineHeight: '20px'
      },
      caption: {
        variant: 'text.base',
        fontWeight: 600,
        fontSize: '15px',
        lineHeight: '19px'
      },
      footnote: {
        variant: 'text.base',
        fontWeight: 600,
        fontSize: '13px',
        lineHeight: '16px'
      },
      pretext: {
        variant: 'text.base',
        fontWeight: 'bold',
        fontSize: 1,
        lineHeight: '18px',
        letterSpacing: '0.22em',
        textTransform: 'uppercase',
        color: 'text.secondary'
      }
    },
    display: {
      display: {
        variant: 'text.base',
        fontFamily: 'display',
        fontSize: '104px',
        fontWeight: 400,
        lineHeight: '104px',
        letterSpacing: 'display'
      },
      h1: {
        variant: 'text.base',
        fontFamily: 'display',
        fontSize: 10,
        fontWeight: 400,
        lineHeight: '78px',
        letterSpacing: 'display'
      },
      h2: {
        variant: 'text.display.h1',
        fontSize: 9,
        lineHeight: '65px'
      },
      h3: {
        variant: 'text.display.h1',
        fontSize: 8,
        lineHeight: '44px'
      },
      h4: {
        variant: 'text.display.h1',
        fontSize: 7,
        lineHeight: '40px'
      },
      h5: {
        variant: 'text.display.h1',
        fontSize: 5,
        lineHeight: '28px'
      },
      quote: {
        variant: 'text.base',
        fontFamily: 'display',
        fontStyle: 'italic',
        fontSize: '25px',
        lineHeight: '31px'
      }
    }
  }
};

export default theme;
