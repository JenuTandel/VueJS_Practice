import { createApp } from "vue";
import router from "./router";
import App from "./App.vue";

import BaseCard from "./components/UI/BaseCard";
import BaseTable from "./components/UI/BaseTable";

const app = createApp(App);
app.component("base-card", BaseCard);
app.component("base-table", BaseTable);
app.use(router);
app.mount("#app");
