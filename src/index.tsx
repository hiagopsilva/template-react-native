import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {StatusBar, View} from 'react-native';

import './utils/config/reactotron';

import Navigation, {routing} from './routes';
import Started from './Started';
import store from './stores';
import {
  AlertMessage,
  Provider,
  ThemeProvider,
  colors,
  radius,
  spacings,
} from './utils';

const theme = {...colors, ...spacings, ...radius};
const stores = {...store, routing};

export default function App() {
  const [token, setToken] = useState<boolean>(false);

  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor="#FFF" barStyle="dark-content" />

      <Provider {...stores}>
        <ThemeProvider theme={theme}>
          <Started setToken={value => setToken(value)} />
          <Navigation token={token} />
          <AlertMessage />
        </ThemeProvider>
      </Provider>
    </View>
  );
}
