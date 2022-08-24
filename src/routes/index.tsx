import React from 'react';

import {NavigationContainer, useRoute} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {inject, observer} from 'mobx-react';

import routing, {setTopLevelNavigator} from './actions';
import PrivateStack from './private.stack';
import PublicStack from './public.stack';
import {RoutesPrivate, RoutesPublic, StacksRoutes} from './routing';

const MainStack = createStackNavigator();

type Props = {
  token: boolean;
};

const Navigation = ({token}: Props): React.ReactElement => {
  return (
    <NavigationContainer ref={setTopLevelNavigator}>
      <MainStack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={token ? StacksRoutes.PRIVATE : StacksRoutes.PUBLIC}>
        <MainStack.Screen
          name={StacksRoutes.PRIVATE}
          component={PrivateStack}
        />
        <MainStack.Screen name={StacksRoutes.PUBLIC} component={PublicStack} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};
export {routing, RoutesPrivate, RoutesPublic, useRoute};
export default inject('app')(observer(Navigation));
