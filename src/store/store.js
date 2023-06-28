import AuthService from "../services/auth.service";
import { createStore } from "vuex";

export const store = createStore({
  state: {
    pxsessionid: "",
    pxurl: "",
    pxlogintoken: "",
    pxerror: "",
    config: {},
  },
  getters: {
    getPxSessionId: (state) => {
      return state.pxsessionid;
    },
    getPxLoginToken: (state) => {
      return state.pxlogintoken;
    },
    getConfig: (state) => {
      return state.config;
    },
    getPxUrl: (state) => {
      return state.pxurl;
    },
    getPxError: (state) => {
      return state.pxerror;
    },
  },
  mutations: {
    setPxSessionId(state, value) {
      state.pxsessionid = value;
    },
    setConfigJson(state, value) {
      state.config = value;
    },
    setPxLoginToken(state, value) {
      state.pxlogintoken = value;
    },
    setPxUrl(state, value) {
      state.pxurl = value;
    },
    setPxError(state, value) {
      state.pxerror = value;
    },
  },
  actions: {
    login(
      { commit },
      {
        pxtoken,
        pxurl,
        pxdatabase,
        module,
        volliz,
        pxversion,
        pxuser,
        pxpassword,
      }
    ) {
      const isTokenAuth = pxuser == undefined && pxpassword == undefined;

      if ((pxtoken == undefined || pxtoken == "") && isTokenAuth) {
        var errMsg = "Der Parameter 'pxtoken' fehlt";

        commit("setPxError", errMsg);
        return errMsg;
      }
      if (
        (pxuser == undefined || pxuser == "") &&
        (pxpassword == undefined || pxpassword == "") &&
        !isTokenAuth
      ) {
        var errMsg = "Der Parameter 'pxuser' / 'pxpassword' fehlt";

        commit("setPxError", errMsg);
        return errMsg;
      }
      if (volliz == undefined) {
        volliz = false;
      }
      if (pxversion == undefined || pxversion == "") {
        pxversion = "v4";
      }

      if (!isTokenAuth) {
        pxtoken = pxpassword;
      }

      if (pxurl == undefined || pxurl == "") {
        var errMsg = "Der Parameter 'pxurl' fehlt";
        commit("setPxError", errMsg);
        return errMsg;
      } else {
        //Build pxurl
        pxurl = pxurl + "/pxapi/" + pxversion + "/";
        commit("setPxUrl", pxurl);
      }
      if (pxdatabase == undefined || pxdatabase == "") {
        var errMsg = "Der Parameter 'pxdatabase' fehlt";
        commit("setPxError", errMsg);
        return errMsg;
      }
      return AuthService.login({
        token: pxtoken,
        url: pxurl,
        database: pxdatabase,
        pxuser: pxuser,
        module: module,
        pxversion: pxversion,
        vollicence: volliz,
      }).then(
        (pxsessionid) => {
          commit("setPxSessionId", pxsessionid);
          return Promise.resolve(pxsessionid);
        },
        (error) => {
          commit("setPxError", error);
          return Promise.reject(error);
        }
      );
    },
    logout({ commit }) {
      AuthService.logout(this.state.pxurl), this.state.pxsessionid;
      commit("setPxSessionId", "");
    },
  },
});

export default store;
