import axios from 'axios';
import type { PxMandant, PxSettings, PxUser, PxWebViewLogin } from '../types/index';

const
  API_LOGIN = 'PRO/Login';

class AuthService {
  login(pxwebviewlogin : PxWebViewLogin) {
    return new Promise((resolve, reject) => {
      // Set Vollicence
      if(pxwebviewlogin.vollicence){
        pxwebviewlogin.module = ['VOL'];
      }
      if(pxwebviewlogin.module == undefined){
        pxwebviewlogin.module = []
      }
      return axios
        .post(pxwebviewlogin.url + API_LOGIN, {
          Benutzer: pxwebviewlogin.pxuser,
          Passwort: pxwebviewlogin.token,
          Datenbank: { Name: pxwebviewlogin.database },
          Module: pxwebviewlogin.module,
        })
        .then((res) => {
          resolve(res.headers.pxsessionid);
        })
        .catch((error) => {
          if(error.response.data.Message){
            reject(error.response.data.Message)
          } else {
            reject(error);

          }
        });
    });
  }

  async logout(url : string,pxsessionid : string) {
    try {
      const res = await axios
        .delete(url + API_LOGIN, {
          headers: { PxSessionId: pxsessionid },
        });
      return await Promise.resolve(res);
    } catch (error) {
      return await Promise.reject(error);
    }
  }
  async getCurrentUser(pxLogin: PxMandant) {
    if(pxLogin && pxLogin.pxSessionId){
    try {
        const res = await axios
          .get(pxLogin.url + API_LOGIN, {
            headers: {
              PxSessionId: pxLogin.pxSessionId,
            },
          });
        return await Promise.resolve(res.data);
      } catch (error) {
        return await Promise.reject(error);
      }
    } else {
      return Promise.resolve({} as PxUser);
    }
  }

  async getPxSettings(pxLogin: PxMandant) {
    if(pxLogin && pxLogin.pxSessionId){
    try {
        const res = await axios
          .get(pxLogin.url + 'PRO/Einstellung/pxStunden/BemZwang', {
            headers: {
              PxSessionId: pxLogin.pxSessionId,
            },
          });
        return await Promise.resolve(res.data as PxSettings);
      } catch (error) {
        return await Promise.reject(error);
      }
    } else {
      return Promise.resolve({} as PxSettings);
    }
  }
}
export default new AuthService();
