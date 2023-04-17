import axios from "axios";
export default {
  async contactCoach(context, payload) {
    const newRequest = {
      id: new Date().toISOString,
      userEmail: payload.email,
      message: payload.message,
    };
    await axios
      .post(
        `https://for-a-coach-default-rtdb.firebaseio.com/requests/${payload.coachId}.json`,
        newRequest
      )
      .then((response) => {
        newRequest.id = response.data.name;
        newRequest.coachId = payload.coachId;
      })
      .catch((err) => {
        console.log(err);
      });
    context.commit("addRequest", newRequest);
  },
  async fetchRequests(context) {
    const coachId = context.rootGetters.userId;
    const requests = [];
    const token = context.rootGetters.token;
    await axios
      .get(
        `https://for-a-coach-default-rtdb.firebaseio.com/requests/${coachId}.json?auth=` +
          token
      )
      .then((res) => {
        return res.data;
      })
      .then((res) => {
        for (let key in res) {
          const request = {
            id: key,
            coachId: coachId,
            userEmail: res[key].userEmail,
            message: res[key].message,
          };
          requests.push(request);
        }
      })
      .catch((err) => {
        throw err;
      });
    context.commit("setRequests", requests);
  },
};
