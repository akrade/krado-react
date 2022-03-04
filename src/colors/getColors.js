import colors from './colors';

export function getColors(colorName, weight) {
  return colors[`${colorName}${weight}`];
}

export function buildColorTheme(
  colorNames = {
    secondary: 'oshun',
    accent: 'oshun',
    error: 'asset',
    warning: 'oshun',
    success: 'usir',
    info: 'ptah',
    surface: 'nsoWarm',
    action: 'asset',
    text: 'nsoWarm',
    background: 'nso',
    divider: 'nso'
  }
) {
  return {
    primary: {
      regular: getColors(colorNames.primary, '400'),
      contrast: colors.nso000
    },
    secondary: {
      light: getColors(colorNames.secondary, '300'),
      regular: getColors(colorNames.secondary, '600'),
      bold: getColors(colorNames.secondary, '800'),
      contrast: colors.nso000
    },
    accent: {
      light: getColors(colorNames.accent, '000'),
      regular: getColors(colorNames.accent, '200'),
      medium: getColors(colorNames.accent, '100'),
      bold: getColors(colorNames.accent, '300'),
      contrast: colors.nso000
    },
    error: {
      light: getColors(colorNames.error, '000'),
      regular: getColors(colorNames.error, '400'),
      medium: getColors(colorNames.error, '600'),
      bold: getColors(colorNames.error, '800'),
      contrast: colors.nso000
    },
    warning: {
      light: getColors(colorNames.warning, '000'),
      regular: getColors(colorNames.warning, '500'),
      medium: getColors(colorNames.warning, '600'),
      bold: getColors(colorNames.warning, '800'),
      contrast: colors.nso000
    },
    success: {
      light: getColors(colorNames.success, '000'),
      regular: getColors(colorNames.success, '400'),
      medium: getColors(colorNames.success, '600'),
      bold: getColors(colorNames.success, '800'),
      contrast: colors.nso000
    },
    info: {
      light: getColors(colorNames.info, '000'),
      regular: getColors(colorNames.info, '500'),
      medium: getColors(colorNames.info, '600'),
      bold: getColors(colorNames.info, '800'),
      contrast: colors.nso000
    },
    surface: {
      extrathin: getColors(colorNames.surface, '000'),
      thin: getColors(colorNames.surface, '100'),
      extralight: getColors(colorNames.surface, '200'),
      light: getColors(colorNames.surface, '300'),
      regular: getColors(colorNames.surface, '400'),
      medium: getColors(colorNames.surface, '500'),
      semibold: getColors(colorNames.surface, '600'),
      bold: getColors(colorNames.surface, '700'),
      semiblack: getColors(colorNames.surface, '800'),
      black: getColors(colorNames.surface, '900'),
      heavy: getColors(colorNames.surface, '1000'),
      extraheavy: colors.nso1000
    },
    action: {
      active: getColors(colorNames.action, '700'),
      hover: getColors(colorNames.action, '500'),
      selected: getColors(colorNames.action, '500'),
      disabled: getColors(colorNames.action, '300'),
      contrast: getColors(colorNames.action, '100')
    },
    text: {
      primary: getColors(colorNames.text, '700'),
      secondary: getColors(colorNames.text, '400'),
      placeholder: getColors(colorNames.text, '200'),
      disabled: getColors(colorNames.text, '100')
    },
    background: getColors(colorNames.background, '000'),
    divider: getColors(colorNames.divider, '200')
  };
}
