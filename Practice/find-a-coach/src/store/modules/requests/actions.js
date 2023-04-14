// import axios from "axios";

export default {
  contactCoach(context, payload) {
    const newRequest = {
      id: new Date().toISOString,
      coachId: payload.coachId,
      userEmail: payload.email,
      message: payload.message,
    };
    // await axios
    //   .post(
    //     `https://for-a-coach-default-rtdb.firebaseio.com/requests/${payload.coachId}.json`,
    //     newRequest
    //   )
    //   .then((response) => {
    //     console.log(response);
    //     newRequest.id = response.name;
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    context.commit("contactCoach", newRequest);
  },
};
