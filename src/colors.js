const colors = {
  // The "Ptah" color swatch.
  blues: ['#E2EEFA', '#A8D3FF', '#2562BC', '#18407B', '#000033'],

  // The "Sekmet" color swatch.
  reds: ['#FFD4D4', '#F98888', '#C02626', '#801919', '#4B0707'],

  // The "Usir" color swatch.
  greens: ['#DAECC8', '#ADD189', '#5D7C00', '#3D4E0B', '#253006'],

  // The "Taweret" color swatch.
  pinks: ['#E9D0ED', '#D392DD', '#7F2669', '#541945', '#3A1130'],

  // The "Het Heru" color swatch.
  oranges: ['#FFD6BE', '#FF8F51', '#CC4D16', '#AB3807', '#611D00'],

  // The "Oshun" color swatch.
  yellows: ['#FBEAC7', '#FFE49F', '#F6B100', '#966C00', '#725200'],

  // The gray color swatches.

  grays: [
    '#262626',
    '#333333',
    '#585858',
    '#C4C4C4',
    '#E8E8E8',
    '#F5F5F5',
    '#FFFFFF'
  ]

  // // The utility colors swatches.
  // boneUy: '#EDE7DE',
  // tissueUy: '#F4F3F1',
  // goldUy: '#B49E5E',
  // ironUy: '#614F36',
  // fleshUy: '#FF6161',
  // transparentUY: 'rgba(255,255,255,0)'
};

colors.blue = colors.blues[2];
colors.red = colors.reds[2];
colors.green = colors.greens[2];
colors.pink = colors.pinks[2];
colors.orange = colors.oranges[2];
colors.yellow = colors.yellows[2];

colors.black = colors.grays[0];
colors.white = colors.grays[6];

colors.darkGray = colors.grays[2];
colors.lightGray = colors.grays[1];
colors.gray = colors.grays[3];

export default colors;
