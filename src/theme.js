import swatch from './colors';

const space = [0, 4, 8, 16, 32, 64, 128, 256, 512];

const fontSizes = [12, 14, 16, 18, 20, 22, 24, 32, 42, 52, 62, 84];

const colors = {
  // UI Colors
  text: swatch.black,
  background: swatch.white,
  primary: swatch.blue,
  secondary: swatch.black,
  accent: swatch.blue,
  muted: swatch.grays[5],
  highlight: swatch.blue
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
  display: '-0.05em'
};

// Rounded radius.
const round = '50%';
const radii = [0, 4, 8, 12, round];

const theme = {
  space,
  fontSizes,
  colors,
  fonts,
  fontWeights,
  lineHeights,
  letterSpacings,
  radii
};

export { theme };
