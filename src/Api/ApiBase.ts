import request from 'superagent';
import { BACKEND_URL } from '../consts';

class ApiBase {
  ajax = request;
  url = BACKEND_URL;

  getErrorFromResponse(res: Response) {
    if (res) {
      throw new Error(res.body?.message || res.body || res.message);
    }

    throw new Error('An unknown error occurred.');
  }
}

export default ApiBase;