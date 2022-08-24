import Reactotron from 'reactotron-react-native';

import * as yup from 'yup';

export {CommonActions, StackActions} from '@react-navigation/native';

export {default as AlertMessage} from 'react-native-flash-message';
export {showMessage} from 'react-native-flash-message';

export {
  getTheme,
  ifStyle,
  toOnlyNumbers,
  currencyParser,
  currencyToNumber,
} from '@platformbuilders/helpers';
export {isIOS} from '@platformbuilders/helpers/native';

export {isEmpty, nth} from 'lodash';
export {default as styled, ThemeProvider} from 'styled-components/native';

export {NavigationContainer, useRoute} from '@react-navigation/native';
export {createStackNavigator} from '@react-navigation/stack';

export {inject, observer} from 'mobx-react';
export {getStatusBarHeight} from 'react-native-iphone-x-helper';
export {Formik, FormikHelpers, FormikProps, useFormikContext} from 'formik';

export {default as moment} from 'moment';
export {Provider} from 'mobx-react';

export {yup, Reactotron};
