import { createApp } from "vue";
import App from "./App.vue";
import BaseCard from "./components/BaseCard";

const app = createApp(App);
app.component(BaseCard, "base-card");
app.mount("#app");
