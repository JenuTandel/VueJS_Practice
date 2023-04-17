import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

export default {
  namespaced: true,
  state() {
    return {
      lastFetch: null,
      coaches: [
        {
          id: 1,
          firstName: "Jinal",
          lastName: "Tandel",
          areas: ["frontend", "backend", "database"],
          hourlyRate: 500,
        },
        {
          id: 2,
          firstName: "Vishwani",
          lastName: "Patel",
          areas: ["security", "database"],
          hourlyRate: 1000,
        },
      ],
    };
  },
  mutations,
  actions,
  getters,
};
