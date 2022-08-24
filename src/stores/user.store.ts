/* eslint-disable @typescript-eslint/no-explicit-any */
import {action, observable} from 'mobx';
import {persist} from 'mobx-persist';

import {request, Storage} from '~/services';
import {flashMessage} from '~/utils';

class UserStore {
  @observable
  @persist('object')
  data = {};

  @action
  setUserData = (value: any): void => {
    this.data = value;
  };

  @action
  clearUserData = (): void => {
    this.data = {};
  };

  @action
  login = async (values: any): Promise<boolean> => {
    try {
      const response = await request.post('/list', values);

      const {user, token} = response.data;

      this.setUserData(user);
      Storage.setToken(token);

      return true;
    } catch (error) {
      flashMessage({
        type: 'danger',
        title: 'Ocorreu um erro...',
        description: 'Por favor, tente novamente!',
      });
      return false;
    }
  };

  @action
  logout = async (): Promise<void> => {
    Storage.logout();
  };
}

export default UserStore;
