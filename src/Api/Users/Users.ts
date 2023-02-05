import ApiBase from '../ApiBase';

import { CredentialsI } from './types';

export default class UsersApi extends ApiBase {
  static url = `${this.backendUrl}/users`;

  constructor() {
    super();
  }

  static async login(credentials: CredentialsI): Promise<boolean> {
    return this.ajax
      .post(`${this.url}/login`)
      .send(credentials)
      .then(res => res.body)
      .catch(this.getErrorFromResponse);
  }
}
