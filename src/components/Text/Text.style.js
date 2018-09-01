import { StyleSheet } from 'react-native';

import { STYLE } from 'common';

const {
  REGULAR, TITLE, SIZE, WEIGHT,
} = STYLE.FONT;

export default StyleSheet.create({
  default: {
    fontFamily: REGULAR,
    fontSize: SIZE.REGULAR,
    fontWeight: WEIGHT.REGULAR,
  },

  title: {
    fontFamily: TITLE,
    fontSize: SIZE.TITLE,
    fontWeight: WEIGHT.BOLD,
  },
});
