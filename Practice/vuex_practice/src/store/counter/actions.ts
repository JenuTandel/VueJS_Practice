export default {
  increment(context: any) {
    setTimeout(() => {
      context.commit("increment");
    }, 2000);
  },
  increase(context: any, payload: any) {
    setTimeout(() => {
      context.commit("increase", payload);
    }, 2000);
  },
};
