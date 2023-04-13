import { createStore } from "vuex";
import coachesModule from "./modules/coaches";
import requestsModule from "./modules/requests";

const store = createStore({
  state() {
    return {
      a: "Hello",
    };
  },
  modules: {
    coaches: coachesModule,
    requests: requestsModule,
  },
});

export default store;
