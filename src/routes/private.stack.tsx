import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import {Home} from '~/scenes';

import {RoutesPrivate} from './routing';

const PrivateStackNavigator = createStackNavigator();

const PrivateStack = (): React.ReactElement => (
  <PrivateStackNavigator.Navigator
    headerMode="none"
    initialRouteName={RoutesPrivate.HOME}>
    <PrivateStackNavigator.Screen name={RoutesPrivate.HOME} component={Home} />
  </PrivateStackNavigator.Navigator>
);

export default PrivateStack;
