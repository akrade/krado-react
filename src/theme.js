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
    // UI colors
    text: kradoColors.warmAsh800,
    background: kradoColors.ash000,
    primary: kradoColors.taweret700,
    secondary: kradoColors.taweret600,
    accent: kradoColors.ptah500,
    highlight: kradoColors.taweret500,
    muted: kradoColors.ash100,

    // Utility
    success: kradoColors.usir500,
    danger: kradoColors.sekmet500,

    // Basic colors
    white: kradoColors.ash000,
    lightGray: kradoColors.ash200,
    gray: kradoColors.ash300,
    darkGray: kradoColors.ash600,
    black: kradoColors.ash800
  },
  fonts: {
    body: 'Barlow, Arial, sans-serif',
    heading: 'Barlow, Arial, sans-serif',
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
      color: 'background',
      bg: 'primary',
      '&:hover': {
        bg: 'secondary'
      },
      '&:active': {
        bg: 'primary'
      },
      '&:disabled': {
        color: 'darkGray',
        bg: 'muted'
      },
      '&:focus-visible': {
        outline: 'none',
        boxShadow: 'onFocus'
      }
    },
    text: {
      color: 'primary',
      bg: 'transparent',
      '&:hover': {
        color: 'secondary'
      },
      '&:active': {
        color: 'primary'
      },
      '&:disabled': {
        color: 'darkGray'
      }
    },
    ghost: {
      color: 'primary',
      bg: 'transparent',
      border: 1,
      borderColor: 'primary',
      '&:hover': {
        color: 'secondary',
        borderColor: 'transparent',
        bg: 'background',
        boxShadow: 'hard.high'
      },
      '&:active': {
        color: 'background',
        bg: 'primary'
      },
      '&:disabled': {
        color: 'darkGray',
        borderColor: 'darkGray',
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
      color: 'highlight',
      borderBottom: '3px solid',
      borderColor: 'highlight',
      textDecoration: 'none'
    }
  },
  text: {
    body: {
      h1: {
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
        fontSize: 6,
        lineHeight: '32px',
        letterSpacing: '-0.02em'
      },
      paragraph: {
        fontSize: 4,
        lineHeight: '28px'
      },
      smallParagraph: {
        fontSize: 2,
        lineHeight: '20px'
      },
      bold: {
        fontWeight: 'bold',
        fontSize: 4,
        lineHeight: '28px'
      },
      callout: {
        fontSize: 3,
        lineHeight: '20px'
      },
      caption: {
        fontWeight: 600,
        fontSize: '15px',
        lineHeight: '19px'
      },
      footnote: {
        fontWeight: 600,
        fontSize: '13px',
        lineHeight: '16px'
      },
      pretext: {
        fontWeight: 'bold',
        fontSize: 1,
        lineHeight: '18px',
        letterSpacing: '0.22em',
        textTransform: 'uppercase',
        color: 'darkGray'
      }
    },
    display: {
      display: {
        fontFamily: 'display',
        fontSize: '104px',
        fontWeight: 400,
        lineHeight: '104px',
        letterSpacing: 'display'
      },
      h1: {
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
        fontFamily: 'display',
        fontStyle: 'italic',
        fontSize: '25px',
        lineHeight: '31px'
      }
    }
  }
};

export default theme;
