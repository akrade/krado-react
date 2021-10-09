import kradoColors from './colors';

const space = [0, 4, 8, 16, 32, 64, 128, 256, 512];

const sizes = {
  small: '40rem',
  medium: '52rem',
  large: '90rem',
  extraLarge: '120rem'
};

const breakpoints = ['40em', '52em', '90em', '120rem'];

const fontSizes = [12, 14, 16, 18, 20, 22, 24, 32, 42, 52, 62, 84];

const colors = {
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
};

const fonts = {
  body: "'Source Sans Pro', Arial, sans-serif",
  heading: "'Source Sans Pro', Arial, sans-serif",
  display: "'Source Serif Pro', Georgia, serif"
};

const fontWeights = {
  body: 500,
  heading: 400,
  bold: 700
};

const lineHeights = {
  body: 1.5,
  heading: 1.125
};

const letterSpacings = {
  normal: 'normal',
  display: '-0.05em',
  pretext: '0.22em'
};

const radii = [0, 4, 8, 12, 99999];
radii.round = radii[4]; // Alias

const shadows = [
  'none',
  '0px 3px 7px rgba(0, 0, 0, 0.15)',
  '0px 4px 24px rgba(0, 0, 0, 0.1)',
  '0 11px 27px -6px rgba(0, 0, 0, 0.39)'
];

const borders = ['none', `2px solid ${colors.black}`];

const buttons = {
  primary: {
    color: colors.white,
    backgroundColor: colors.black,
    '&:active': {
      backgroundColor: colors.darkGray
    }
  },
  outline: {
    light: {
      color: colors.black,
      backgroundColor: 'transparent',
      border: borders[1],
      '&:hover, &:focus': {
        color: colors.black,
        backgroundColor: colors.white,
        borderColor: colors.white
      },
      '&:active': {
        color: colors.black,
        backgroundColor: colors.muted,
        borderColor: colors.muted
      }
    },
    dark: {
      color: colors.white,
      backgroundColor: 'transparent',
      border: borders[1],
      borderColor: colors.white,
      '&:hover, &:focus': {
        color: colors.black,
        backgroundColor: colors.white,
        borderColor: colors.white
      },
      '&:active': {
        color: colors.black,
        backgroundColor: colors.muted,
        borderColor: colors.muted
      }
    }
  },
  clear: {
    color: colors.black,
    backgroundColor: 'transparent',
    '&:active': {
      backgroundColor: colors.muted
    }
  },
  success: {
    color: colors.white,
    backgroundColor: colors.success
  },
  danger: {
    color: colors.white,
    backgroundColor: colors.danger
  }
};

const buttonSizes = {
  small: {
    fontSize: fontSizes[2],
    margin: space[2],
    padding: '0.5rem 3.5rem'
  },
  large: {
    fontSize: fontSizes[2],
    margin: space[2],
    padding: '1rem 4.6rem'
  }
};

const buttonShapes = {
  square: { borderRadius: radii[0] },
  round: { borderRadius: radii[1] },
  pill: { borderRadius: radii.round }
};

const images = {
  avatar: {
    width: 42,
    height: 42
  }
};

const styles = {
  root: {
    fontFamily: 'body',
    fontWeight: 'body'
  }
};

const theme = {
  space,
  sizes,
  breakpoints,
  fontSizes,
  colors,
  fonts,
  fontWeights,
  lineHeights,
  letterSpacings,
  radii,
  shadows,
  borders,
  buttons,
  buttonSizes,
  buttonShapes,
  images,
  styles
};

export { theme };
