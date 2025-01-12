import CartDetails from "@/components/cart/CartDetails.vue";
import HomeCom from "@/components/home/HomeCom.vue";
import ProductLayout from "@/layout/ProductLayout.vue";
import LoginView from "@/views/login/LoginView.vue";
import NotFound from "@/views/NotFound.vue";
import ProductView from "@/views/ProductView.vue";
import UserRegister from "@/views/register/UserRegister.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: HomeCom,
      children: [
        {
          path: "/",
          name: "home",
          component: HomeCom,
        },
      ],
    },
    {
      path: "/products",
      component: ProductLayout, // Product layout wrapper
      children: [
        {
          path: "/products",
          name: "products",
          component: ProductView,
        },

        {
          path: "/products/details/:id",
          name: "CartDetails",
          component: CartDetails,
        },
        { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
      ],
    },
    {
      path: "/auth/login/",
      name: "login",
      component: LoginView,
    },
    {
      path: "/auth/register/",
      name: "register",
      component: UserRegister,
    },
    { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
  ],
});

export default router;
