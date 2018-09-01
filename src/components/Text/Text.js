import React from 'react';
import { Text as TextNative } from 'react-native';

import styles from './Text.style';

const Text = ({ title, ...inherit }) => (
  <TextNative
    {...inherit}
    style={[styles.regular, title && styles.title, inherit.style]}
  />
);

export default Text;
