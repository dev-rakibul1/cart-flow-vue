<template>
  <div>
    <!-- Loading state -->
    <div v-if="loading" class="flex justify-center items-center h-screen">
      <p class="text-lg font-semibold text-primary">
        <span class="loading loading-spinner loading-sm"></span>
      </p>
    </div>

    <!-- Drinks Grid -->
    <div
      v-else
      class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 p-4"
    >
      <ProductCart v-for="drink in cart" :key="drink.id" :drink="drink" />
    </div>
  </div>
</template>

<script>
import { gql } from "@apollo/client/core";
import { useQuery } from "@vue/apollo-composable";
import { ref, watch } from "vue";
import ProductCart from "../cart/ProductCart.vue";

// GraphQL Query
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

export default {
  name: "BurgerView",

  components: {
    ProductCart,
  },

  setup() {
    // Query drinks data
    const { result, loading } = useQuery(GET_BURGERS);
    const cart = ref([]);

    // Watch for changes in fetched data and update the cart
    watch(result, (newResult) => {
      if (newResult && newResult.burgers) {
        cart.value = newResult.burgers;
        console.log("Cart updated:", cart.value);
      }
    });

    return { cart, loading };
  },
};
</script>

<style scoped>
.text-primary {
  color: #7cb305;
}

.h-screen {
  height: 100vh;
}

.flex {
  display: flex;
}

.justify-center {
  justify-content: center;
}

.items-center {
  align-items: center;
}

.text-lg {
  font-size: 1.125rem;
}

.font-semibold {
  font-weight: 600;
}

.p-4 {
  padding: 1rem;
}
</style>
