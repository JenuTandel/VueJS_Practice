export default {
  registerCoach(context, payload) {
    // let i = 3;
    const coachData = {
      id: context.rootGetters.userId,
      firstName: payload.first,
      lastName: payload.last,
      hourlyRate: payload.rate,
      areas: payload.areas,
    };
    context.commit("registerCoach", coachData);
    // i++;
  },
};
