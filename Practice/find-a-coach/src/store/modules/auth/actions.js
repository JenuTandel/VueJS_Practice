import axios from "axios";
let timer;
export default {
  login(context, payload) {
    return context.dispatch("auth", {
      ...payload,
      mode: "login",
    });
  },
  signUp(context, payload) {
    return context.dispatch("auth", {
      ...payload,
      mode: "signUp",
    });
  },
  auth(context, payload) {
    const mode = payload.mode;
    let url =
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAhWRLaIZ8kZeVQfZ-aMrcHcCNhM3ehx88";

    if (mode === "signUp") {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAhWRLaIZ8kZeVQfZ-aMrcHcCNhM3ehx88";
    }
    axios
      .post(url, {
        email: payload.email,
        password: payload.password,
        returnSecureToken: true,
      })
      .then((res) => {
        const user = {
          userId: res.data.localId,
          token: res.data.idToken,
          // tokenExpiration: res.data.expiresIn,
        };
        const expireIn = +res.data.expiresIn * 1000;
        // const expireIn = 5000;
        const expirationDate = new Date().getTime() + expireIn;

        localStorage.setItem("token", res.data.idToken);
        localStorage.setItem("userId", res.data.localId);
        localStorage.setItem("tokenExpiration", expirationDate);
        localStorage.setItem("currentTime", new Date().getTime());

        timer = setTimeout(() => {
          context.dispatch("autoLogout");
        }, expireIn);

        context.commit("setUser", user);
      })
      .catch((err) => {
        throw err;
      });
  },
  tryLogin(context) {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    const tokenExpiration = localStorage.getItem("tokenExpiration");

    const expireIn = +tokenExpiration - new Date().getTime();

    if (expireIn < 0) {
      return;
    } else {
      timer = setTimeout(() => {
        context.dispatch("autoLogout");
      }, expireIn);
    }

    if (token && userId) {
      context.commit("setUser", {
        token: token,
        userId: userId,
        // tokenExpiration: null,
      });
    }
  },
  logout(context) {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("tokenExpiration");

    clearTimeout(timer);
    context.commit("setUser", {
      token: null,
      userId: null,
      // tokenExpiration: null,
    });
  },
  autoLogout(context) {
    context.dispatch("logout");
    context.commit("setAutoLogout");
  },
};
