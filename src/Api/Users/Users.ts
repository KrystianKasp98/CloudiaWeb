import ApiBase from '../ApiBase';

import { CredentialsI } from './types';

export default class UsersApi extends ApiBase {
  static url = `${this.backendUrl}/users`;

  static async login(credentials: CredentialsI): Promise<any | boolean> {
    return this.ajax
      .post(`${this.url}/login`)
      .send(credentials)
      .then(res => res.body)
      .catch(this.getErrorFromResponse);
  }
}
