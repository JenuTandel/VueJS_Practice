import { createRouter, createWebHistory } from "vue-router";

import TheHome from "./components/TheHome";
import TheEmployee from "./components/employee/TheEmployee";
import EmployeeDetails from "./components/employee/EmployeeDetails";
import EmployeeList from "./components/employee/EmployeeList";
import EmployeeForm from "./components/employee/EmployeeForm";
import TheContact from "./components/TheContact";
import PageNotFound from "./components/PageNotFound";
import EmployeeFooter from "./components/layout/EmployeeFooter";
import TheFooter from "./components/layout/TheFooter";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/home" },
    // { path: "/home", component: TheHome },
    { path: "/home", components: { default: TheHome, footer: TheFooter } },
    {
      path: "/contact-us",
      meta: { auth: true },
      component: TheContact,
      beforeEnter(to, from, next) {
        console.log("Contact");
        console.log(to, from);
        next();
      },
    },
    {
      name: "employee",
      path: "/employee",
      components: { default: TheEmployee, footer: EmployeeFooter },
      //   component: TheEmployee,
      children: [
        {
          path: "",
          redirect: "employee/employee-list",
        },
        {
          path: "employee-list",
          component: EmployeeList,
        },
        {
          name: "employee-form",
          path: "employee-form",
          component: EmployeeForm,
        },
        {
          path: "employee-form/:empid",
          component: EmployeeForm,
          props: true,
        },
        {
          path: "employee-details",
          component: EmployeeDetails,
        },
      ],
    },
    {
      path: "/:notfound(.*)",
      component: PageNotFound,
    },
  ],
  linkActiveClass: "active",
  linkExactActiveClass: "bg-success",

  scrollBehavior(to, from, savedPosition) {
    console.log(to, from, savedPosition);
    if (savedPosition) {
      return savedPosition;
    }
    return { left: 0, top: 530 };
  },
});

router.beforeEach((to, from, next) => {
  console.log("Before Each");
  console.log(to, from);
  if (to.meta.auth) {
    console.log("Need Authentication");
    next();
  } else {
    next();
  }
  // if (to.path == "/employee/employee-list") {
  //   next();
  // }
});
router.afterEach((to, from) => {
  console.log("After Each");
  console.log(to, from);
});

export default router;
