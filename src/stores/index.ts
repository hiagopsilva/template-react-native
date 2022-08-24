import AsyncStorage from '@react-native-async-storage/async-storage';
import {create} from 'mobx-persist';

import AppStore from './app.store';
import UserStore from './user.store';

class RootStore {
  user: UserStore;

  app: AppStore;

  constructor() {
    this.user = new UserStore();
    this.app = new AppStore();
  }
}

const hydrate = create({storage: AsyncStorage});

const store = new RootStore();

hydrate('user', store.user);

export {UserStore, AppStore, RootStore};

export default store;
