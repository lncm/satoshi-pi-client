import { Platform } from 'react-native';

const UNIT = 10;

export default {
  UNIT,
  OFFSET: UNIT * 1.6,

  COLOR: {
    ACCENT: 'black',
    PRIMARY: 'grey',
    WHITE: 'white',
  },

  FONT: {
    DEFAULT: Platform.OS === 'web' ? 'Google Sans,Helvetica,sans-serif;' : undefined,

    TITLE: Platform.OS === 'web' ? 'Product Sans,Helvetica,sans-serif;' : undefined,

    SIZE: {
      REGULAR: UNIT * 1.6,
      TITLE: UNIT * 1.8,
    },

    WEIGHT: {
      REGULAR: '400',
      BOLD: '700',
    },
  },
};
