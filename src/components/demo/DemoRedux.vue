<template>
  <div class="p-6">
    <div
      class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 justify-start items-center gap-6 border rounded-lg p-4"
    >
      <!-- Product Image -->
      <div>
        <img
          src="https://eda.yandex/images/1463280/e1c9a4c6334943d4840a16425a08440e-400x400nocrop.jpeg"
          alt="product-image"
          class="rounded-lg w-full object-cover"
        />
      </div>

      <!-- Product Details -->
      <div class="w-full">
        <article class="w-full">
          <div class="border-b w-full pb-4">
            <h1 class="font-semibold text-xl md:text-3xl">
              {{ data?.name }}
            </h1>
            <div class="flex items-center justify-start mt-3">
              <h3 class="text-2xl font-medium text-gray-800">
                {{ formatPrice(price) }}
              </h3>
            </div>
          </div>

          <!-- Quantity Controls -->
          <div class="mt-4 flex items-center gap-4">
            <button
              class="px-3 py-1 bg-gray-200 rounded-lg hover:bg-gray-300"
              @click="decreaseQuantity"
            >
              <svg
                width="64px"
                height="64px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0" />

                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />

                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M6 12L18 12"
                    stroke="#000000"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </svg>
            </button>
            <span class="text-lg font-medium">{{ quantity }}</span>
            <button
              class="px-3 py-1 bg-gray-200 rounded-lg hover:bg-gray-300"
              @click="increaseQuantity"
            >
              <svg
                width="64px"
                height="64px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0" />

                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />

                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M4 12H20M12 4V20"
                    stroke="#000000"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </svg>
            </button>
          </div>

          <!-- Total Price -->
          <div class="mt-4">
            <h3 class="text-lg font-semibold text-gray-700">
              Total: {{ formatPrice(totalPrice) }}
            </h3>
          </div>

          <!-- Add to Cart Button -->
          <div class="mt-6">
            <button
              class="w-full py-3 bg-yellow-500 rounded-lg text-white font-medium hover:bg-yellow-600"
              @click="addToCart"
            >
              Add to Cart
            </button>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CartDesign",
  data() {
    return {
      price: 350, // Single product price
      quantity: 1, // Default quantity
      totalPrice: 350, // Calculated total price
    };
  },
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  watch: {
    data(newValue) {
      console.log("Updated data in CartDesign:", newValue);
      return newValue;
    },
  },
  mounted() {
    console.log("Drink from cart design:", this.data);
  },
  methods: {
    increaseQuantity() {
      this.quantity += 1;
      this.updateTotalPrice();
    },
    decreaseQuantity() {
      if (this.quantity > 1) {
        this.quantity -= 1;
        this.updateTotalPrice();
      }
    },
    updateTotalPrice() {
      this.totalPrice = this.price * this.quantity;
    },
    addToCart() {
      alert(`Added ${this.quantity} item(s) to the cart!`);
    },
    formatPrice(value) {
      return `$${value.toFixed(2)}`;
    },
  },
};
</script>

<style>
/* Add any additional custom styles here */
</style>
