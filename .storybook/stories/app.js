import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import App from '@components/decorators/App';

storiesOf('App', module)
  .add('default', () => (
    <App/>
  )); 