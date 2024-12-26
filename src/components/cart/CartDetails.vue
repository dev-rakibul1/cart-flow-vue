<template>
  <div>
    <h1>Product Details</h1>
    <p v-if="item">Product Name: {{ item.name }}</p>
    <p v-else>Loading...</p>
  </div>
</template>

<script>
import { gql } from "@apollo/client/core";
import { useQuery } from "@vue/apollo-composable";
import { ref, watch } from "vue"; // Proper imports

const GET_DRINKS = gql`
  query getDrinks {
    drinks {
      id
      name
      price
      image
      category
      isStock
      user {
        password
      }
    }
  }
`;

export default {
  name: "CartDetails",
  props: ["id"],
  setup(props) {
    // Fetch data with Apollo Client
    const { result, loading, error } = useQuery(GET_DRINKS);

    // Reactive item state
    const item = ref(null);

    // Watch for the result data and filter by id when it changes
    watch(result, (newResult) => {
      if (newResult && newResult.drinks) {
        // Find the drink that matches the ID prop
        item.value = newResult.drinks.find((drink) => drink.id === props.id);
      }
    });

    return {
      item,
      loading,
      error,
    };
  },
};
</script>
