import {getStatusBarHeight} from '~/utils';

import {showMessage} from '../modules';

declare type PositionAlertMessage = 'top' | 'bottom' | 'center';

declare type MessageTypeIcon =
  | 'none'
  | 'default'
  | 'info'
  | 'success'
  | 'danger'
  | 'warning';

declare type AlertMessageType =
  | 'none'
  | 'default'
  | 'info'
  | 'success'
  | 'danger'
  | 'warning';

type Props = {
  open?: boolean;
  title?: string;
  position?: PositionAlertMessage;
  autoHide?: boolean;
  type?: AlertMessageType;
  description?: string;
  onPress?(): void;
  onLongPress?(): void;
  duration?: number;
  icon?: MessageTypeIcon;
  floating?: boolean;
  hideOnPress?: boolean;
};

export default ({
  duration = 8000,
  position = 'top',
  autoHide = true,
  type = 'success',
  title = '',
  description = '',
  onPress,
  onLongPress,
  icon,
  floating,
  hideOnPress = true,
}: Props): void => {
  showMessage({
    hideOnPress,
    floating,
    icon,
    duration,
    onPress,
    onLongPress,
    position,
    autoHide,
    description,
    type,
    message: title,
    hideStatusBar: false,
    animated: true,
    animationDuration: 250,
    statusBarHeight: 26,
    style: {
      marginTop: getStatusBarHeight() + 26,
      marginHorizontal: 16,
      borderRadius: 8,
      paddingTop: 0,
    },
    textStyle: {
      fontSize: 14,
    },
    titleStyle: {
      fontSize: 18,
    },
  });
};
