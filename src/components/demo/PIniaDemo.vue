<template>
  <div class="p-6">
    <h1 class="text-xl font-bold mb-4">Shopping Cart</h1>

    <!-- Loop through available items -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div
        v-for="item in items"
        :key="item.id"
        class="p-4 border rounded shadow-lg"
      >
        <h2 class="text-lg font-semibold">{{ item.name }}</h2>
        <p class="text-gray-500">Price: ${{ item.price }}</p>
        <button
          @click="addToCart(item)"
          class="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Add to Cart
        </button>
      </div>
    </div>

    <!-- Display cart items -->
    <div class="mt-8">
      <h2 class="text-lg font-bold">Cart Items:</h2>
      <ul>
        <li v-for="cartItem in cartStore.cart" :key="cartItem.id" class="mt-2">
          {{ cartItem.name }} - ${{ cartItem.price }} qty:
          {{ cartItem.quantity }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { useTaskStore } from "@/stores/taskStore"; // Import the store

export default {
  name: "PiniaDemo",
  setup() {
    const cartStore = useTaskStore(); // Use the Pinia store

    // Sample items to be added to the cart
    const items = [
      { id: 1, name: "Item 1", price: 10 },
      { id: 2, name: "Item 2", price: 20 },
      { id: 3, name: "Item 3", price: 30 },
    ];

    // Method to add items to the cart
    const addToCart = (item) => {
      cartStore.addToCart(item); // Calls Pinia store action to add the item
      console.log("Item added to cart:", item); // Log the added item
      console.log("Current Cart:", cartStore.cart); // Log current state of the cart
    };

    return {
      items,
      addToCart,
      cartStore, // Pass cartStore to the template for accessing the cart
    };
  },
};
</script>
