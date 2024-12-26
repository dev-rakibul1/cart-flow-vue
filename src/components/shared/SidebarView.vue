<template>
  <div class="p-3 min-h-screen bg-gray-100">
    <router-link to="/">
      <button
        class="flex items-center justify-center bg-white py-1 w-full sidebar-back-btn font-semibold"
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
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11.7071 4.29289C12.0976 4.68342 12.0976 5.31658 11.7071 5.70711L6.41421 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H6.41421L11.7071 18.2929C12.0976 18.6834 12.0976 19.3166 11.7071 19.7071C11.3166 20.0976 10.6834 20.0976 10.2929 19.7071L3.29289 12.7071C3.10536 12.5196 3 12.2652 3 12C3 11.7348 3.10536 11.4804 3.29289 11.2929L10.2929 4.29289C10.6834 3.90237 11.3166 3.90237 11.7071 4.29289Z"
              fill="#000000"
            />
          </g>
        </svg>
        <span class="ml-3"> All Restaurants </span>
      </button>
    </router-link>

    <!-- menu -->
    <div class="text-center mt-7">
      <h2 class="font-semibold text-xl">Menu</h2>
    </div>
    <ul class="space-y-3 mt-3">
      <li class="hover:bg-gray-200 p-2 rounded bg-white block">
        <a href="#" class="text-gray-800 font-medium text-base">What's New</a>
      </li>
      <li class="hover:bg-gray-200 p-2 rounded bg-white block">
        <a href="#" class="text-gray-800 font-medium text-base">Drinking</a>
      </li>
      <li class="hover:bg-gray-200 p-2 rounded bg-white block">
        <router-link to="/burger" class="text-gray-800 font-medium text-base"
          >Burger</router-link
        >
      </li>
      <li class="hover:bg-gray-200 p-2 rounded bg-white block">
        <router-link to="/pizza" class="text-gray-800 font-medium text-base"
          >Pizza</router-link
        >
      </li>
      <li class="hover:bg-gray-200 p-2 rounded bg-white block">
        <router-link to="/starters" class="text-gray-800 font-medium text-base"
          >Starters</router-link
        >
      </li>
      <li class="hover:bg-gray-200 p-2 rounded bg-white block">
        <router-link to="/sauces" class="text-gray-800 font-medium text-base"
          >Sauces</router-link
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "SidebarView",
};
</script>

<style></style>
