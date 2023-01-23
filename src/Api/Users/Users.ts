import ApiBase from "../ApiBase";
import { CredentialsI } from "./types";


export default class UsersApi extends ApiBase {
  static url: string = `${this.backendUrl}/users`;
  constructor() {
    super();
  }

  static login(credentials: CredentialsI): Promise<boolean> {
    return this.ajax.
      post(`${this.url}/login`).
      send(credentials).
      then(res => res.body).
      catch(this.getErrorFromResponse);
  }
}
