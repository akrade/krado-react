import kradoColors from './colors';

const theme = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  sizes: {
    small: '40rem',
    medium: '52rem',
    large: '90rem',
    extraLarge: '120rem'
  },
  breakpoints: ['40em', '52em', '90em', '120rem'],
  fontSizes: [12, 14, 16, 18, 20, 22, 24, 32, 42, 52, 62, 84],
  colors: {
    // UI colors
    text: kradoColors.ash900,
    textDark: kradoColors.ash000,
    background: kradoColors.ash000,
    primary: kradoColors.taweret700,
    secondary: kradoColors.taweret600,
    accent: kradoColors.ptah500,
    muted: kradoColors.ash100,
    highlight: kradoColors.taweret500,

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
    body: "'Source Sans Pro', Arial, sans-serif",
    heading: "'Source Sans Pro', Arial, sans-serif",
    display: "'Source Serif Pro', Georgia, serif"
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
    onFocus: `0px 0px 10px 5px ${kradoColors.ptah500}`
  },
  borders: ['none', `2px solid black`],
  buttons: {
    primary: {
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
      '&:focus': {
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
  buttonSizes: {
    small: {
      fontSize: 2,
      margin: 2,
      padding: '0.5rem 3.5rem'
    },
    large: {
      fontSize: 2,
      margin: 2,
      padding: '1rem 4.6rem'
    }
  },
  buttonShapes: {
    square: { borderRadius: 0 },
    round: { borderRadius: 1 },
    pill: { borderRadius: 'round' }
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
    }
  }
};

export default theme;
