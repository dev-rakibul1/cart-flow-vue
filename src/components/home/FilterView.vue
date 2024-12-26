<template>
  <div
    class="bg-gray-50 p-4 rounded-lg flex flex-wrap items-center justify-between gap-4"
  >
    <!-- Categories -->
    <div class="flex flex-wrap items-center gap-4">
      <button
        v-for="(filter, index) in filters"
        :key="index"
        @click="selectFilter(filter)"
        :class="[
          'px-4 py-2 rounded-lg font-medium transition border-none',
          selectedFilter === filter
            ? ' text-yellow-500'
            : 'bg-white text-gray-800 border border-gray-300',
        ]"
      >
        {{ filter }}
      </button>
    </div>

    <!-- Sorting -->
    <div class="flex items-center gap-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-5 h-5"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M6 8l6-6m0 0l6 6m-6-6v18"
        />
      </svg>
      <span class="font-medium text-gray-800">Sorting</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "FilterView",
  data() {
    return {
      filters: [
        "All",
        "Carry-out",
        "Burgers",
        "Sushi",
        "Pizza",
        "Wok",
        "Pasta",
        "Breakfasts",
      ],
      selectedFilter: "All", // Default selected filter
    };
  },
  methods: {
    selectFilter(filter) {
      this.selectedFilter = filter;
      // Emit the selected filter to parent or handle it here
      console.log("Selected filter:", filter);
    },
  },
};
</script>

<style scoped>
/* Custom styles for mobile responsiveness */
@media (max-width: 768px) {
  .flex-wrap {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
