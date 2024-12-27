<template>
  <div
    class="border-b min-h-[70px] fixed top-0 left-0 w-full bg-white"
    style="z-index: 99"
  >
    <div class="box-container flex items-center justify-between min-h-[70px]">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <router-link to="/">
          <div class="flex items-center">
            <h2>Cart Flow</h2>
          </div>
        </router-link>

        <!-- Search Bar -->
        <div class="hidden lg:block">
          <div class="flex mx-4">
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
        </div>

        <!-- Location Dropdown -->
        <div class="hidden lg:block">
          <div class="flex items-center space-x-2">
            <button
              class="flex items-center bg-gray-100 px-4 py-2 rounded-full hover:bg-gray-200"
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
              Dhaka 1212, Street 2
            </button>
          </div>
        </div>
      </div>

      <!-- Notifications and Profile -->
      <div class="flex items-center space-x-4">
        <!-- Notification -->
        <div class="dropdown bg-white">
          <button
            class="flex items-center flex-col"
            role="button"
            tabIndex="{0}"
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
                <g clip-path="url(#clip0_15_159)">
                  <rect width="24" height="24" fill="white" />
                  <path
                    d="M9.5 19C8.89555 19 7.01237 19 5.61714 19C4.87375 19 4.39116 18.2177 4.72361 17.5528L5.57771 15.8446C5.85542 15.2892 6 14.6774 6 14.0564C6 13.2867 6 12.1434 6 11C6 9 7 5 12 5C17 5 18 9 18 11C18 12.1434 18 13.2867 18 14.0564C18 14.6774 18.1446 15.2892 18.4223 15.8446L19.2764 17.5528C19.6088 18.2177 19.1253 19 18.382 19H14.5M9.5 19C9.5 21 10.5 22 12 22C13.5 22 14.5 21 14.5 19M9.5 19C11.0621 19 14.5 19 14.5 19"
                    stroke="#000000"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12 5V3"
                    stroke="#000000"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_15_159">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </g>
            </svg>
            <p class="mt-[-20px] text-[13px]">Notification</p>
          </button>
          <ul
            tabIndex="{0}"
            className="bg-white rounded-lg dropdown-content menu absolute right-[-100%]  w-64   z-[1]  p-5 shadow"
          >
            <div class="  ">
              <h1 class="text-xl font-bold">Notification</h1>

              <div class="mt-12 text-center">
                <p class="">No Notification</p>
              </div>
            </div>
          </ul>
        </div>
        <!--Add To Cart -->
        <div class="dropdown w-full">
          <div class="badge badge-primary badge-sm cart-count">
            {{ store.products.length > 0 ? store.products.length : 0 }}
          </div>
          <button
            class="flex items-center flex-col"
            role="button"
            tabIndex="{0}"
          >
            <svg
              width="64px"
              height="64px"
              viewBox="0 0 32 32"
              id="svg5"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:svg="http://www.w3.org/2000/svg"
              fill="#000000"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0" />

              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              />

              <g id="SVGRepo_iconCarrier">
                <defs id="defs2" />
                <g id="layer1" transform="translate(36,-244)">
                  <path
                    d="m -31.371094,255.00586 c -1.625564,0 -2.864805,1.51618 -2.589843,3.10351 l 2.27539,13.13477 c 0.27851,1.60776 1.701467,2.76172 3.314453,2.76172 h 16.767578 c 1.6146248,0 3.0129936,-1.16108 3.3105472,-2.74805 a 1.0001,1.0001 0 0 0 0.00195,-0.0137 l 2.2734375,-13.12109 v -0.002 c 0.2984384,-1.59859 -0.9594241,-3.11523 -2.5859375,-3.11523 z m 0,2 h 22.7675784 c 0.4158021,0 0.6977222,0.33936 0.6210937,0.74805 a 1.0001,1.0001 0 0 0 -0.00195,0.0137 l -2.2753911,13.12695 c -0.124292,0.65116 -0.680335,1.11133 -1.34375,1.11133 h -16.767578 c -0.666611,0 -1.23316,-0.46316 -1.34375,-1.10156 l -2.27539,-13.13672 c -0.07374,-0.42569 0.201707,-0.76172 0.61914,-0.76172 z"
                    id="rect40272"
                    style="
                      color: #000000;
                      fill: #000000;
                      fill-rule: evenodd;
                      stroke-linecap: round;
                      stroke-linejoin: round;
                      stroke-miterlimit: 4.1;
                      -inkscape-stroke: none;
                    "
                  />
                  <path
                    d="m -24.695312,246.07227 a 1,1 0 0 0 -0.556641,0.52734 l -4,9 a 1,1 0 0 0 0.507812,1.32031 1,1 0 0 0 1.320313,-0.50781 l 4,-9 a 1,1 0 0 0 -0.507813,-1.32031 1,1 0 0 0 -0.763671,-0.0195 z"
                    id="path41727"
                    style="
                      color: #000000;
                      fill: #000000;
                      fill-rule: evenodd;
                      stroke-linecap: round;
                      stroke-linejoin: round;
                      stroke-miterlimit: 4.1;
                      -inkscape-stroke: none;
                    "
                  />
                  <path
                    d="m -15.279297,246.07227 a 1,1 0 0 0 -0.763672,0.0195 1,1 0 0 0 -0.507812,1.32031 l 4,9 a 1,1 0 0 0 1.318359,0.50781 1,1 0 0 0 0.507813,-1.32031 l -4,-9 a 1,1 0 0 0 -0.554688,-0.52734 z"
                    id="path41729"
                    style="
                      color: #000000;
                      fill: #000000;
                      fill-rule: evenodd;
                      stroke-linecap: round;
                      stroke-linejoin: round;
                      stroke-miterlimit: 4.1;
                      -inkscape-stroke: none;
                    "
                  />
                  <path
                    d="m -20,259.00586 a 1,1 0 0 0 -1,1 v 8 a 1,1 0 0 0 1,1 1,1 0 0 0 1,-1 v -8 a 1,1 0 0 0 -1,-1 z"
                    id="path43195"
                    style="
                      color: #000000;
                      fill: #000000;
                      fill-rule: evenodd;
                      stroke-linecap: round;
                      stroke-linejoin: round;
                      stroke-miterlimit: 4.1;
                      -inkscape-stroke: none;
                    "
                  />
                  <path
                    d="m -24,259.00586 a 1,1 0 0 0 -1,1 v 8 a 1,1 0 0 0 1,1 1,1 0 0 0 1,-1 v -8 a 1,1 0 0 0 -1,-1 z"
                    id="path43243"
                    style="
                      color: #000000;
                      fill: #000000;
                      fill-rule: evenodd;
                      stroke-linecap: round;
                      stroke-linejoin: round;
                      stroke-miterlimit: 4.1;
                      -inkscape-stroke: none;
                    "
                  />
                  <path
                    d="m -16,259.00586 a 1,1 0 0 0 -1,1 v 8 a 1,1 0 0 0 1,1 1,1 0 0 0 1,-1 v -8 a 1,1 0 0 0 -1,-1 z"
                    id="path43245"
                    style="
                      color: #000000;
                      fill: #000000;
                      fill-rule: evenodd;
                      stroke-linecap: round;
                      stroke-linejoin: round;
                      stroke-miterlimit: 4.1;
                      -inkscape-stroke: none;
                    "
                  />
                </g>
              </g>
            </svg>
            <p class="mt-[-20px] text-[13px]">Cart</p>
          </button>
          <ul
            tabIndex="{0}"
            className="bg-white  overflow-y-scroll h-screen rounded-lg dropdown-content menu absolute right-[-100%] block z-[1] p-5 shadow"
            style="min-width: 50vh"
          >
            <div>
              <h1 className="text-xl font-bold ">Cart</h1>
              <span>Total price: $ {{ formattedTotalAmount }}</span>
            </div>

            <!-- Display cart items -->
            <div class="mt-3">
              <div
                v-if="store.products.length === 0"
                class="flex items-center justify-center"
                style="height: 20vh"
              >
                Cart is empty
              </div>
              <div v-else>
                <AddCard
                  v-for="product in store.products"
                  :key="product.id"
                  :product="product"
                />
              </div>
            </div>
          </ul>
        </div>

        <!-- Language -->
        <div class="dropdown">
          <button
            class="flex items-center flex-col"
            role="button"
            tabIndex="{0}"
          >
            <svg
              fill="#000000"
              width="64px"
              height="64px"
              viewBox="-1 0 19 19"
              xmlns="http://www.w3.org/2000/svg"
              class="cf-icon-svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0" />

              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              />

              <g id="SVGRepo_iconCarrier">
                <path
                  d="M16.417 9.57a7.917 7.917 0 1 1-8.144-7.908 1.758 1.758 0 0 1 .451 0 7.913 7.913 0 0 1 7.693 7.907zM5.85 15.838q.254.107.515.193a11.772 11.772 0 0 1-1.572-5.92h-3.08a6.816 6.816 0 0 0 4.137 5.727zM2.226 6.922a6.727 6.727 0 0 0-.511 2.082h3.078a11.83 11.83 0 0 1 1.55-5.89q-.249.083-.493.186a6.834 6.834 0 0 0-3.624 3.622zm8.87 2.082a14.405 14.405 0 0 0-.261-2.31 9.847 9.847 0 0 0-.713-2.26c-.447-.952-1.009-1.573-1.497-1.667a8.468 8.468 0 0 0-.253 0c-.488.094-1.05.715-1.497 1.668a9.847 9.847 0 0 0-.712 2.26 14.404 14.404 0 0 0-.261 2.309zm-.974 5.676a9.844 9.844 0 0 0 .713-2.26 14.413 14.413 0 0 0 .26-2.309H5.903a14.412 14.412 0 0 0 .261 2.31 9.844 9.844 0 0 0 .712 2.259c.487 1.036 1.109 1.68 1.624 1.68s1.137-.644 1.623-1.68zm4.652-2.462a6.737 6.737 0 0 0 .513-2.107h-3.082a11.77 11.77 0 0 1-1.572 5.922q.261-.086.517-.194a6.834 6.834 0 0 0 3.624-3.621zM11.15 3.3a6.82 6.82 0 0 0-.496-.187 11.828 11.828 0 0 1 1.55 5.89h3.081A6.815 6.815 0 0 0 11.15 3.3z"
                />
              </g>
            </svg>
            <p class="mt-[-20px] text-[13px]">Language</p>
          </button>
          <ul
            tabIndex="{0}"
            className="bg-white rounded-lg dropdown-content menu absolute right-[-100%] w-64 z-[1] p-5 shadow"
          >
            <div>
              <h1 className="text-xl font-bold ">Languages</h1>
            </div>

            <li className="mt-3">
              <a href="#">English</a>
            </li>
            <li className="mt-3">
              <a href="#">Spanish (Español)</a>
            </li>
            <li className="mt-3">
              <a href="#">French (Français)</a>
            </li>
            <li className="mt-3">
              <a href="#">German (Deutsch)</a>
            </li>
            <li className="mt-3">
              <a href="#">Chinese (中文)</a>
            </li>
            <li className="mt-3">
              <a href="#">Japanese (日本語)</a>
            </li>
            <li className="mt-3">
              <a href="#">Russian (Русский)</a>
            </li>
            <li className="mt-3">
              <a href="#">Portuguese (Português)</a>
            </li>
            <li className="mt-3">
              <a href="#">Arabic (العربية)</a>
            </li>
            <li className="mt-3">
              <a href="#">Hindi (हिन्दी)</a>
            </li>
          </ul>
        </div>
        <!-- dropdown -->
        <div class="dropdown">
          <button
            class="flex items-center flex-col"
            role="button"
            tabIndex="{0}"
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
                  d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M20.5899 22C20.5899 18.13 16.7399 15 11.9999 15C7.25991 15 3.40991 18.13 3.40991 22"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
            </svg>
            <p class="mt-[-20px] text-[13px]">Profile</p>
          </button>
          <ul
            tabIndex="{0}"
            className="bg-white rounded-lg dropdown-content menu absolute right-[-100%]  w-64 z-[1]  p-5 shadow"
          >
            <div>
              <h1 class="text-xl font-bold">User name</h1>
            </div>

            <li class="mt-3"><a>My information</a></li>
            <li class="mt-3"><a>My address</a></li>
            <li class="mt-3"><a>My Order</a></li>
            <li class="mt-3"><a>Logout</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useTaskStore } from "@/stores/taskStore";
import { computed } from "vue";
import AddCard from "../addCard/AddCard.vue";

export default {
  name: "MenuVue",
  components: { AddCard },

  setup() {
    const store = useTaskStore();
    const formattedTotalAmount = computed(() => {
      if (store.totalAmount === undefined || store.totalAmount === null) {
        return "0.00"; // Handle cases where totalAmount is null or undefined
      }
      return Number(store.totalAmount).toFixed(2);
    });
    return { store, formattedTotalAmount };
  },
};
</script>

<style scoped>
.cart-count {
  background: #eab308;
  position: absolute;
  top: 13px;
  left: 17px;
  border: 1px solid #fff;
  padding: 9px;
  color: #000;
}
</style>
