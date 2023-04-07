export default {
  setAuth(state: any, payload: any) {
    state.isLoggedIn = payload.isAuth;
  },
};
