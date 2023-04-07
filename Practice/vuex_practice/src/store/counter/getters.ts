export default {
  finalCounter(state: any) {
    return state.counter * 3;
  },
  normalizedCounter(_: any, getters: any) {
    const finalCounter = getters.finalCounter;
    if (finalCounter < 0) {
      return 0;
    }
    if (finalCounter > 100) {
      return 100;
    }
    return finalCounter;
  },
};
