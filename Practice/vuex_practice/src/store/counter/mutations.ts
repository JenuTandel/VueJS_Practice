export default {
  increment(state: any) {
    state.counter++;
  },
  increase(state: any, payload: any) {
    state.counter = state.counter + payload.value;
  },
};
