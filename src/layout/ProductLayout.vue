<template>
  <div class="box-container lg:pt-24">
    <!-- sidebar trigger menu -->
    <div class="drawer" style="z-index: 100">
      <input id="my-drawer" type="checkbox" class="drawer-toggle" />

      <div class="drawer-side">
        <label
          for="my-drawer"
          aria-label="close sidebar"
          class="drawer-overlay"
        ></label>
        <ul class="menu bg-base-200 text-base-content min-h-full w-80 p-4">
          <!-- Sidebar content here -->
          <!-- Sidebar -->
          <div class="w-full">
            <div class="p-3 min-h-screen bg-white">
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
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11.7071 4.29289C12.0976 4.68342 12.0976 5.31658 11.7071 5.70711L6.41421 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H6.41421L11.7071 18.2929C12.0976 18.6834 12.0976 19.3166 11.7071 19.7071C11.3166 20.0976 10.6834 20.0976 10.2929 19.7071L3.29289 12.7071C3.10536 12.5196 3 12.2652 3 12C3 11.7348 3.10536 11.4804 3.29289 11.2929L10.2929 4.29289C10.6834 3.90237 11.3166 3.90237 11.7071 4.29289Z"
                      fill="#000000"
                    />
                  </svg>
                  <span class="ml-3"> All Restaurants </span>
                </button>
              </router-link>

              <!-- Menu -->
              <div class="text-center mt-7">
                <h2 class="font-semibold text-xl">Menu</h2>
              </div>
              <ul class="space-y-1">
                <li
                  v-for="item in menuItems"
                  :key="item.id"
                  class="hover:bg-gray-100 p-2 rounded block"
                >
                  <a
                    :href="'#' + item.id"
                    :class="[
                      'text-gray-800 font-medium text-base',
                      activeSection === item.id ? 'active-menu' : '',
                    ]"
                    @click.prevent="scrollToSection(item.id)"
                  >
                    {{ item.name }}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </ul>
      </div>
    </div>

    <!-- Trigger menu -->
    <TriggerMenu />

    <div class="flex flex-col md:flex-row h-screen">
      <!-- Sidebar -->
      <div class="w-full md:w-[25%] sticky top-0 bg-white hidden md:block">
        <div class="p-3 min-h-screen bg-white">
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
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.7071 4.29289C12.0976 4.68342 12.0976 5.31658 11.7071 5.70711L6.41421 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H6.41421L11.7071 18.2929C12.0976 18.6834 12.0976 19.3166 11.7071 19.7071C11.3166 20.0976 10.6834 20.0976 10.2929 19.7071L3.29289 12.7071C3.10536 12.5196 3 12.2652 3 12C3 11.7348 3.10536 11.4804 3.29289 11.2929L10.2929 4.29289C10.6834 3.90237 11.3166 3.90237 11.7071 4.29289Z"
                  fill="#000000"
                />
              </svg>
              <span class="ml-3"> All Restaurants </span>
            </button>
          </router-link>

          <!-- Menu -->
          <div class="text-center mt-4">
            <h2 class="font-semibold text-xl">Menu</h2>
          </div>
          <ul class="space-y-3 mt-3">
            <li
              v-for="item in menuItems"
              :key="item.id"
              class="hover:bg-gray-100 p-2 rounded block"
            >
              <a
                :href="'#' + item.id"
                :class="[
                  'text-gray-800 font-medium text-base',
                  activeSection === item.id ? 'active-menu' : '',
                ]"
                @click.prevent="scrollToSection(item.id)"
              >
                {{ item.name }}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <!-- Content -->
      <RouterView />
    </div>
  </div>
</template>

<script>
import TriggerMenu from "@/components/trigger/TriggerMenu.vue";

export default {
  name: "ProductLayout",
  components: {
    TriggerMenu,
  },
  data() {
    return {
      activeSection: "",
      menuItems: [
        { id: "whatsANewProduct", name: "What's New" },
        { id: "drinkingView", name: "Drinking" },
        { id: "burgerView", name: "Burger" },
        { id: "pizzaView", name: "Pizza" },
      ],
    };
  },
  methods: {
    onScroll() {
      const contentContainer = this.$el.querySelector(".md\\:w-\\[75%\\]");
      if (!contentContainer) return;

      const sections = this.menuItems.map((item) => item.id);
      let active = "";

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Adjust the active trigger thresholds as needed
          if (
            rect.top <= contentContainer.offsetTop + 100 &&
            rect.bottom >= contentContainer.offsetTop + 100
          ) {
            active = section;
          }
        }
      });

      this.activeSection = active;
    },

    scrollToSection(sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      this.activeSection = sectionId; // Update active section after scroll
    },
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.onScroll);
  },
};
</script>

<style></style>
