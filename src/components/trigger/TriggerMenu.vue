<template>
  <!-- trigger menu -->
  <div class="lg:hidden lg:mt-24" style="z-index: 99; margin-top: 100px">
    <div class="lg:flex justify-between items-center">
      <div class="lg:flex items-center justify-between h-[70px]">
        <div
          class="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-3"
        >
          <!-- Search Bar -->
          <div class="flex lg:mx-4 w-full justify-center items-center">
            <div class="relative flex w-full">
              <span
                class="absolute inset-y-0 left-3 flex items-center text-gray-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.325 4.317l3.387 3.387a1 1 0 01-1.414 1.414l-3.387-3.387A6 6 0 012 8z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
              <input
                type="text"
                placeholder="Search for restaurants, food or products"
                class="w-full pl-10 pr-20 py-2 border rounded-l-full border-yellow-500 focus:outline-none"
              />
              <button
                class="bg-yellow-400 text-white px-6 rounded-r-full hover:bg-yellow-500"
              >
                Search
              </button>
            </div>
          </div>

          <!-- Location Dropdown -->
          <div class="flex items-center space-x-2 w-full">
            <button
              class="text-center w-full flex items-center bg-gray-100 px-4 py-2 rounded-full hover:bg-gray-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16.862 9.587A5 5 0 1115 4m5 5a5 5 0 11-9.17 2.587M9.75 21h.5m3-2v1a2 2 0 11-4 0v-1m3-2a5 5 0 11-6 6m1-6h7"
                />
              </svg>
              Street...
            </button>
          </div>
        </div>
      </div>

      <div class="drawer-content text-center">
        <!-- Page content here -->
        <label
          for="my-drawer"
          class="drawer-button w-full bg-slate-100 my-4 p-2 rounded-full mt-7 inline-block"
        >
          Trigger menu</label
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TriggerMenu",
};
</script>

<style scoped></style>
