import React, {FC} from 'react';
import {View} from 'react-native';

import {Home} from '~/scenes';

type Props = {};

const App: FC<Props> = () => {
  return (
    <View>
      <Home />
    </View>
  );
};

export default App;
