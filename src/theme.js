import swatch from './colors';

const space = [0, 4, 8, 16, 32, 64, 128, 256, 512];

const sizes = {
  small: '24rem',
  medium: '52rem',
  large: '90rem',
  extraLarge: '120rem'
};

const fontSizes = [12, 14, 16, 18, 20, 22, 24, 32, 42, 52, 62, 84];

const colors = {
  // UI Colors
  text: swatch.black,
  textDark: swatch.white,
  background: swatch.white,
  primary: swatch.blue,
  secondary: swatch.black,
  accent: swatch.blue,
  muted: swatch.grays[5],
  highlight: swatch.blue,

  // Utility
  success: swatch.green,
  danger: swatch.red,

  // Basic Colors
  black: swatch.black,
  white: swatch.white,
  gray: swatch.grays[3],
  lightGray: swatch.grays[4],
  darkGray: swatch.grays[2]
};

const fonts = {
  body: "'proxima-nova', Arial, sans-serif",
  heading: "'proxima-nova', Arial, sans-serif",
  display: "'gimlet-text', Arial, sans-serif"
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

// Rounded radius.
const radii = [0, 4, 8, 12, 99999];
// Alias
radii.round = radii[4];

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
    '&:active, &:focus': {
      backgroundColor: colors.darkGray
    }
  },
  outline: {
    light: {
      color: colors.black,
      backgroundColor: 'transparent',
      border: borders[1],
      '&:hover': {
        color: colors.black,
        backgroundColor: colors.white,
        borderColor: colors.white
      },
      '&:active, &:focus': {
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
      '&:hover': {
        color: colors.black,
        backgroundColor: colors.white,
        borderColor: colors.white
      },
      '&:active, &:focus': {
        color: colors.black,
        backgroundColor: colors.muted,
        borderColor: colors.muted
      }
    }
  },
  clear: {
    color: colors.black,
    backgroundColor: 'transparent',
    '&:active, &:focus': {
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

const theme = {
  space,
  sizes,
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
  buttonShapes
};

export { theme };
