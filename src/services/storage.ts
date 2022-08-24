/* eslint-disable @typescript-eslint/no-explicit-any */
import {default as AsyncStorage} from '@react-native-async-storage/async-storage';

export default class Storage {
  static clear(): void {
    AsyncStorage.clear();
  }

  static async getAllStorage(): Promise<any> {
    return AsyncStorage.getAllKeys();
  }

  static async setToken(token: string): Promise<void> {
    await AsyncStorage.setItem('TOKEN', token);
  }

  static async setData(storageKey: string, value: string): Promise<void> {
    await AsyncStorage.setItem(storageKey, value);
  }

  static async clearToken(): Promise<void> {
    await AsyncStorage.setItem('TOKEN', '');
    await AsyncStorage.setItem('USER_ID', '');
  }

  static async getToken(): Promise<string | null> {
    try {
      const token = await AsyncStorage.getItem('TOKEN');
      return token || null;
    } catch (error) {
      return null;
    }
  }

  static async getData(storageKey: string): Promise<string | null> {
    try {
      const token = await AsyncStorage.getItem(storageKey);
      return token || null;
    } catch (error) {
      return null;
    }
  }

  static async logout(): Promise<void> {
    await AsyncStorage.removeItem('TOKEN');
  }
}
