import 'react-native';

import React from 'react';
import renderer from 'react-test-renderer';

import { App } from '../src';

// Note: test renderer must be required after react-native.
jest.mock('../src/navigation/root.navigator', () => 'navigator');
it('renders correctly', () => {
  renderer.create(<App />);
});
