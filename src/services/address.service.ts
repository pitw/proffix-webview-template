import axios from 'axios';
import {store} from "../store/store";

class AdressService {
  getAdressNrByName(customername: string) {
      return axios
        .get(store.getters.getPxUrl + 'ADR/Adresse', {
          params: {
           // filter: "Name@='"+customername+"'",
            fields: "AdressNr,Name",
            limit: "1",
            suche: customername
          },
          headers: {
            PxSessionId: store.getters.getPxSessionId,
          },
        })
  }
}
export default new AdressService();
