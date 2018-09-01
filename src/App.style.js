import { Platform, StyleSheet } from 'react-native';

import { STYLE } from 'common';

const { COLOR, OFFSET } = STYLE;

export default StyleSheet.create({
  container: {
    paddingVertical: OFFSET * 2,
    paddingHorizontal: OFFSET,
    ...Platform.select({
      web: { backgroundColor: COLOR.PRIMARY },
      ios: { backgroundColor: COLOR.ACCENT },
      android: { backgroundColor: COLOR.ACCENT },
    }),
  },

  text: {
    color: COLOR.WHITE,
  },
});
