import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

jest.mock('../src/navigation/root.navigator', () => 'navigator');
it('renders correctly', () => {
  renderer.create(<App />);
});
