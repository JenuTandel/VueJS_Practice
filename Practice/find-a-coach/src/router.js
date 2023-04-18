import { createRouter, createWebHistory } from "vue-router";

import CoachesList from "./pages/coaches/CoachesList";
// import CoachDetails from "./components/coaches/CoachDetails";
// import CoachRegistration from "./components/coaches/CoachRegistration";
// import ContactCoach from "./components/requests/ContactCoach";
// import RequestsReceived from "./components/requests/RequestsReceived";
// import UserAuth from "./components/auth/UserAuth";
import NotFound from "./components/NotFound.vue";
import store from "./store/index";

const CoachDetails = () => import("./pages/coaches/CoachDetails");
const ContactCoach = () => import("./pages/requests/ContactCoach");
const CoachRegistration = () => import("./pages/coaches/CoachRegistration");
const RequestsReceived = () => import("./pages/requests/RequestsReceived");
const UserAuth = () => import("./pages/auth/UserAuth");

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
      meta: { requireAuth: true },
    },
    {
      path: "/requests",
      component: RequestsReceived,
      meta: { requireAuth: true },
    },
    {
      path: "/auth",
      component: UserAuth,
      meta: { requireUnAuth: true },
    },
    {
      path: "/:notFound(.*)",
      component: NotFound,
    },
  ],
});
router.beforeEach((to, _, next) => {
  if (to.meta.requireAuth && !store.getters.isAuthenticated) {
    next("/auth");
  } else if (to.meta.requireUnAuth && store.getters.isAuthenticated) {
    next("/coaches");
  } else {
    next();
  }
});
export default router;
