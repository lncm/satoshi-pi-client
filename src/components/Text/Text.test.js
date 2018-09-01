import React from 'react';
import renderer from 'react-test-renderer';

import { C } from 'common';
import Text from './Text';

describe('<Text>', () => {
  it('renders', () => {
    const tree = renderer.create(<Text />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {children}', () => {
    const tree = renderer.create(<Text>{C.NAME}</Text>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {title}', () => {
    const tree = renderer.create(<Text title>{C.NAME}</Text>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

