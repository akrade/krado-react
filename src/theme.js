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
    primary: kradoColors.ptah500,
    secondary: kradoColors.ash1000,
    accent: kradoColors.ptah500,
    muted: kradoColors.ash300,
    highlight: kradoColors.ptah500,

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
  shadows: [
    'none',
    '0px 3px 7px rgba(0, 0, 0, 0.15)',
    '0px 4px 24px rgba(0, 0, 0, 0.1)',
    '0 11px 27px -6px rgba(0, 0, 0, 0.39)'
  ],
  borders: ['none', `2px solid black`],
  buttons: {
    primary: {
      color: 'white',
      backgroundColor: 'black',
      '&:active': {
        backgroundColor: 'darkGray'
      }
    },
    outline: {
      light: {
        color: 'black',
        backgroundColor: 'transparent',
        border: 1,
        '&:hover, &:focus': {
          color: 'black',
          backgroundColor: 'white',
          borderColor: 'white'
        },
        '&:active': {
          color: 'black',
          backgroundColor: 'muted',
          borderColor: 'muted'
        }
      },
      dark: {
        color: 'white',
        backgroundColor: 'transparent',
        border: 1,
        borderColor: 'white',
        '&:hover, &:focus': {
          color: 'black',
          backgroundColor: 'white',
          borderColor: 'white'
        },
        '&:active': {
          color: 'black',
          backgroundColor: 'muted',
          borderColor: 'muted'
        }
      }
    },
    clear: {
      color: 'black',
      backgroundColor: 'transparent',
      '&:active': {
        backgroundColor: 'muted'
      }
    },
    success: {
      color: 'white',
      backgroundColor: 'success'
    },
    danger: {
      color: 'white',
      backgroundColor: 'danger'
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
