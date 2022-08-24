import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import {Welcome} from '~/scenes';

import {RoutesPublic} from './routing';

const Public = createStackNavigator();

const PublicStack = (): React.ReactElement => (
  <Public.Navigator headerMode="none" initialRouteName={RoutesPublic.WELCOME}>
    <Public.Screen name={RoutesPublic.WELCOME} component={Welcome} />
  </Public.Navigator>
);

export default PublicStack;
