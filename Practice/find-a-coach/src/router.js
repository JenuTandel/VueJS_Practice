import { createRouter, createWebHistory } from "vue-router";

import CoachesList from "./components/coaches/CoachesList";
import CoachDetails from "./components/coaches/CoachDetails";
import CoachRegistration from "./components/coaches/CoachRegistration";

import ContactCoach from "./components/requests/ContactCoach";
import RequestsReceived from "./components/requests/RequestsReceived";
import NotFound from "./components/NotFound.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "",
      redirect: "/coaches",
    },
    {
      path: "/coaches",
      component: CoachesList,
    },
    {
      path: "/coaches/:id",
      component: CoachDetails,
      props: true,
      children: [
        {
          path: "contact",
          component: ContactCoach,
        },
      ],
    },
    {
      path: "/register",
      component: CoachRegistration,
    },
    {
      path: "/requests",
      component: RequestsReceived,
    },
    {
      path: "/:notFound(.*)",
      component: NotFound,
    },
  ],
});
export default router;
