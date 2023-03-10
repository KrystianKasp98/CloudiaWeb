import ApiBase from '../ApiBase';
import { API_KEY } from '../../consts';

export default class NotesApi extends ApiBase {
  static url = `${this.backendUrl}/notes`;

  static async getAll() {
    return this.ajax
      .get(this.url)
      .set('apikey', API_KEY)
      .then(res => res.body)
      .catch(this.getErrorFromResponse);
  }
}
