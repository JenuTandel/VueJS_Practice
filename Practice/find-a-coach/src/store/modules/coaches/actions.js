import axios from "axios";
export default {
  //register a coach
  async registerCoach(context, payload) {
    const userId = context.rootGetters.userId;
    const coachData = {
      firstName: payload.first,
      lastName: payload.last,
      hourlyRate: payload.rate,
      areas: payload.areas,
    };
    const response = await axios.put(
      `https://for-a-coach-default-rtdb.firebaseio.com/coaches/${userId}.json`,
      coachData
    );
    // const responseData = await response.json();

    if (!response.ok) {
      //error
    }
    context.commit("registerCoach", { ...coachData, id: userId });
    // console.log({ ...coachData, id: userId });
  },

  //Get coaches
  async loadCoaches(context, payload) {
    if (!payload.forceRefresh && !context.getters.shouldUpdate) {
      return;
    }
    await axios
      .get(`https://for-a-coach-default-rtdb.firebaseio.com/coaches.json`)
      .then((response) => {
        const responseData = response.data;
        const coaches = [];

        for (const key in responseData) {
          const coach = {
            id: key,
            firstName: responseData[key].firstName,
            lastName: responseData[key].lastName,
            hourlyRate: responseData[key].hourlyRate,
            areas: responseData[key].areas,
          };
          coaches.push(coach);
        }
        context.commit("setCoaches", coaches);
        context.commit("setFetchTimestamp");
      })
      .catch((err) => {
        throw err;
      });
  },
};
