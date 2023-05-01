import { createRouter, createWebHashHistory } from "vue-router";
import Home from "./components/Home.vue";
import Room from "./components/Room.vue";
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "index",
      component: () => Home,
      meta: {
        title: "top",
      },
    },
    {
      path: "/room/:id",
      name: "room",
      component: () => Room,
      meta: {
        title: "room",
      },
    },
  ],
});

export default router;
