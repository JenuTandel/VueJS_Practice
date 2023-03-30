import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import App from "./App.vue";
import TheHome from "./components/TheHome";
import TheEmployee from "./components/employee/TheEmployee";
import EmployeeDetails from "./components/employee/EmployeeDetails";
import EmployeeList from "./components/employee/EmployeeList";
import EmployeeForm from "./components/employee/EmployeeForm";
import TheContact from "./components/TheContact";
import PageNotFound from "./components/PageNotFound";
import EmployeeFooter from "./components/layout/EmployeeFooter";
import TheFooter from "./components/layout/TheFooter";
import BaseCard from "./components/UI/BaseCard";
import BaseTable from "./components/UI/BaseTable";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/home" },
    // { path: "/home", component: TheHome },
    { path: "/home", components: { default: TheHome, footer: TheFooter } },
    { path: "/contact-us", component: TheContact },
    {
      name: "employee",
      path: "/employee",
      components: { default: TheEmployee, footer: EmployeeFooter },
      //   component: TheEmployee,
      children: [
        {
          path: "",
          redirect: "/employee/employee-list",
        },
        {
          path: "/employee/employee-list",
          component: EmployeeList,
        },
        {
          name: "/employee/employee-form",
          path: "/employee/employee-form",
          component: EmployeeForm,
        },
        {
          path: "/employee/employee-form/:empid",
          component: EmployeeForm,
        },
        {
          path: "/employee/employee-details",
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
});
const app = createApp(App);
app.component("base-card", BaseCard);
app.component("base-table", BaseTable);
app.use(router);
app.mount("#app");
