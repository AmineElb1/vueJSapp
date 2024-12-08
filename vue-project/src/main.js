import { createApp } from "vue";
import App from "./App.vue";
import router from "./router"; // Zorg ervoor dat dit klopt

const app = createApp(App);

app.use(router); // Gebruik de router in je app
app.mount("#app");
