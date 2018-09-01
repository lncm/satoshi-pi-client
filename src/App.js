import React from 'react';
import { View } from 'react-native';

import { C } from 'common';
import { Text } from 'components';
import styles from './App.style';

export default () => (
  <View style={styles.container}>
    <Text title style={styles.text}>{C.NAME}</Text>
    <Text style={styles.text}>{C.VERSION}</Text>
  </View>
);
