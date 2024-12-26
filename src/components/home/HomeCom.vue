<template>
  <div class="pt-24">
    <!-- slider -->
    <div>
      <HomeSlider />
    </div>
    <div class="box-container border-b py-4 mb-7">
      <!-- filtering -->
      <h2 class="font-semibold text-xl">Filter your foods</h2>
      <FilterView />
    </div>
    <!-- Drinks Section -->
    <div class="box-container">
      <div class="flex items-center justify-between border-b py-4 mb-7">
        <h2 class="font-semibold text-xl">Drinks</h2>
        <router-link to="/products">
          <h2 class="font-semibold text-xl cursor-pointer">All</h2>
        </router-link>
      </div>
      <div v-if="loadingDrinks">Loading drinks...</div>
      <div v-else-if="errorDrinks">Failed to load drinks.</div>
      <div
        v-else
        class="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6"
      >
        <HomeCart v-for="drink in drinks" :key="drink.id" :item="drink" />
      </div>
    </div>

    <!-- Burgers Section -->
    <div class="box-container">
      <div class="flex items-center justify-between border-b py-4 mb-7">
        <h2 class="font-semibold text-xl">Burgers</h2>
        <router-link to="/products">
          <h2 class="font-semibold text-xl cursor-pointer">All</h2>
        </router-link>
      </div>
      <div v-if="loadingBurgers">Loading burgers...</div>
      <div v-else-if="errorBurgers">Failed to load burgers.</div>
      <div
        v-else
        class="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6"
      >
        <HomeCart v-for="burger in burgers" :key="burger.id" :item="burger" />
      </div>
    </div>

    <!-- Pizzas Section -->
    <div class="box-container">
      <div class="flex items-center justify-between border-b py-4 mb-7">
        <h2 class="font-semibold text-xl">Pizzas</h2>
        <router-link to="/products">
          <h2 class="font-semibold text-xl cursor-pointer">All</h2>
        </router-link>
      </div>

      <div v-if="loadingPizzas">Loading pizzas...</div>
      <div v-else-if="errorPizzas">Failed to load pizzas.</div>
      <div
        v-else
        class="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6"
      >
        <HomeCart v-for="pizza in pizzas" :key="pizza.id" :item="pizza" />
      </div>
    </div>
  </div>

  <FooterView />
</template>

<script>
// Importing required modules and components
import { gql } from "@apollo/client/core";
import { useQuery } from "@vue/apollo-composable";
import { computed } from "vue";
import FooterView from "../shared/FooterView.vue";
import HomeSlider from "../slider/HomeSlider.vue";
import FilterView from "./FilterView.vue";
import HomeCart from "./HomeCart.vue";

// GraphQL Queries
const GET_DRINKS = gql`
  query getDrinks {
    drinks {
      id
      name
      price
      image
      category
      isStock
    }
  }
`;

const GET_BURGERS = gql`
  query getBurger {
    burgers {
      id
      name
      price
      image
      category
      isStock
    }
  }
`;

const GET_PIZZAS = gql`
  query getPizza {
    pizzas {
      id
      name
      price
      image
      category
      isStock
    }
  }
`;

export default {
  name: "HomeComp",
  components: {
    HomeCart,
    FilterView,
    HomeSlider,
    FooterView,
  },
  setup() {
    // Drinks Query
    const {
      result: drinksResult,
      loading: loadingDrinks,
      error: errorDrinks,
    } = useQuery(GET_DRINKS);

    // Burgers Query
    const {
      result: burgersResult,
      loading: loadingBurgers,
      error: errorBurgers,
    } = useQuery(GET_BURGERS);

    // Pizzas Query
    const {
      result: pizzasResult,
      loading: loadingPizzas,
      error: errorPizzas,
    } = useQuery(GET_PIZZAS);

    // Computed properties to extract data
    const drinks = computed(() => drinksResult.value?.drinks || []);
    const burgers = computed(() => burgersResult.value?.burgers || []);
    const pizzas = computed(() => pizzasResult.value?.pizzas || []);

    return {
      drinks,
      loadingDrinks,
      errorDrinks,
      burgers,
      loadingBurgers,
      errorBurgers,
      pizzas,
      loadingPizzas,
      errorPizzas,
    };
  },
};
</script>
