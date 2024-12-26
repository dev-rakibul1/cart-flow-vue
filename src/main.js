import "./assets/main.css";
// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { DefaultApolloClient } from "@vue/apollo-composable"; // Modern Apollo integration for Vue 3
import { createApp, h, provide } from "vue";
import apolloClient from "./apollo-client/apollo-client";

import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";

const app = createApp({
  setup() {
    // Provide Apollo Client globally
    provide(DefaultApolloClient, apolloClient);
  },
  render: () => h(App),
});

const pinia = createPinia();

app.use(pinia);

app.use(router);

app.mount("#app");
