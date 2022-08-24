import {action, observable} from 'mobx';
import {persist} from 'mobx-persist';

import {RoutesPrivate} from '~/routes/routing';

class AppStore {
  @persist
  @observable
  loading = 0;

  @observable
  navigation: Partial<AppNavigationType> = {
    route: RoutesPrivate.HOME,
  };

  @observable
  refreshing = false;

  @action
  setNavigationParams = (params: Partial<AppNavigationType>): void => {
    this.navigation = {...this.navigation, ...params};
  };
}

export default AppStore;
