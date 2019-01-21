// @flow

import React from 'react';
import { ReduxProviderMock } from '../../../../mocks/ReduxProviderMock';
import Auth from '..';

export default (
  <ReduxProviderMock state={{ jsReady: true }}>
    <Auth onAuth={() => console.log('Auth started...')} />
  </ReduxProviderMock>
);