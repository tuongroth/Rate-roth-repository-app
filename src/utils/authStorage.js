import AsyncStorage from '@react-native-async-storage/async-storage';

class AuthStorage {
  constructor(namespace = 'auth') {
    this.namespace = namespace;
  }

  async getAccessToken() {
    try {
      return await AsyncStorage.getItem(`${this.namespace}:accessToken`);
    } catch (e) {
      console.error('Failed to get access token', e);
      return null;
    }
  }

  async setAccessToken(accessToken) {
    try {
      await AsyncStorage.setItem(`${this.namespace}:accessToken`, accessToken);
    } catch (e) {
      console.error('Failed to set access token', e);
    }
  }

  async removeAccessToken() {
    try {
      await AsyncStorage.removeItem(`${this.namespace}:accessToken`);
    } catch (e) {
      console.error('Failed to remove access token', e);
    }
  }
}

export default AuthStorage;
