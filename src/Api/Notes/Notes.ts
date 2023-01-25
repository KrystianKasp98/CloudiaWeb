import ApiBase from "../ApiBase";

export default class NotesApi extends ApiBase {
  static url = `${this.backendUrl}/notes`;
  constructor() {
    super();
  }

  static async getAll() {
    return await this.ajax.
      get(this.url).
      then(res => res.body).
      catch(this.getErrorFromResponse);    
  }
}