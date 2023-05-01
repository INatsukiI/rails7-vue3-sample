import { createApp } from "vue";
import router from "./router";
import App from "./App.vue";

async function main() {
  const app = createApp(App);
  app.use(router);
  app.mount("#app");
}

main();
