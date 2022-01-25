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
      regular: '#9C264B',
      contrast: '#FFFFFF'
    },
    secondary: {
      light: '#AB4666',
      regular: '#6E1B35',
      bold: '#3E0F1E',
      contrast: '#FFFFFF'
    },
    accent: {
      light: '#F5E9ED',
      regular: '#D7A8B7',
      medium: '#E1BDC9',
      bold: '#C47D93',
      contrast: '#FFFFFF'
    },
    error: {
      light: '#FAF4F6',
      regular: '#9C264B',
      medium: '#6E1B35',
      bold: '#3E0F1E',
      contrast: '#FFFFFF'
    },
    warning: {
      light: '#F3E8CC',
      regular: '#C18B01',
      medium: '#876201',
      bold: '#4D3800',
      contrast: '#FFFFFF'
    },
    success: {
      light: '#DCE4D4',
      regular: '#52792A',
      medium: '#97AF7F',
      bold: '#213011',
      contrast: '#FFFFFF'
    },
    info: {
      light: '#F3F7FB',
      regular: '#1661AB',
      medium: '#0F4478',
      bold: '#092744',
      contrast: '#FFFFFF'
    },
    surface: {
      extrathin: '#F4F4F3',
      thin: '#DEDEDD',
      extralight: '#B2B1AF',
      light: '#868481',
      regular: '#65625E',
      medium: '#44403B',
      semibold: '#393530',
      bold: '#2E2A25',
      semiblack: '#242220',
      black: '#1A1816',
      heavy: '#050403',
      extraheavy: '#000000'
    },
    action: {
      active: '#6E1B35',
      hover: '#9C264B',
      selected: '#9C264B',
      disabled: '#E1BDC9',
      contrast: '#F5E9ED'
    },
    text: {
      primary: '#2E2A25',
      secondary: '#5A5753',
      placeholder: '#9C9A97',
      disabled: '#C8C7C5'
    },
    background: '#FFFFFF',
    divider: '#DEDEDD'
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
        bg: 'action.contrast'
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
    },
    hr: {
      color: 'divider'
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
