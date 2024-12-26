<template>
  <div
    class="relative bg-cover bg-center rounded-lg overflow-hidden shadow-lg w-full md:min-h-[50%]"
    style="
      background-image: url('https://res.cloudinary.com/dd7uhuhan/image/upload/v1735060013/product_baner_dt7tvk.jpg');
    "
  >
    <!-- Overlay -->
    <div class="absolute inset-0 bg-black bg-opacity-40"></div>

    <!-- Content -->
    <div
      class="absolute bottom-0 z-10 p-6 flex flex-col items-start justify-end"
    >
      <!-- Title -->
      <h2 class="text-2xl md:text-5xl font-bold text-white">Salam Bro</h2>

      <!-- Details -->
      <div class="flex items-center mt-4">
        <!-- Time -->
        <div
          class="cursor-pointer p-banner-svg px-2 flex justify-center items-center space-x-5 bg-white bg-opacity-800 py-0 text-gray-800 rounded-lg"
        >
          <svg
            width="64px"
            height="64px"
            viewBox="0 0 16 16"
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
                d="M16 16H13L10.9897 13.5258L10 16H8L7 9L0 8V6L3.67925 4.5283L0 0H3L16 16Z"
                fill="#000000"
              />
              <path
                d="M16 1L15 0L8.20755 2.71698L12.9691 8.57732L16 1Z"
                fill="#000000"
              />
            </g>
          </svg>

          <div class="mr-5 inline-block">
            <p class="py-0 font-semibold">30–40</p>
            <p class="font-light mt-[-10px]">min</p>
          </div>
        </div>

        <!-- Rating -->
        <div
          class="cursor-pointer ml-3 flex items-center space-x-2 bg-white text-gray-800 px-3 py-0 rounded-lg"
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
                d="M11.245 4.174C11.4765 3.50808 11.5922 3.17513 11.7634 3.08285C11.9115 3.00298 12.0898 3.00298 12.238 3.08285C12.4091 3.17513 12.5248 3.50808 12.7563 4.174L14.2866 8.57639C14.3525 8.76592 14.3854 8.86068 14.4448 8.93125C14.4972 8.99359 14.5641 9.04218 14.6396 9.07278C14.725 9.10743 14.8253 9.10947 15.0259 9.11356L19.6857 9.20852C20.3906 9.22288 20.743 9.23007 20.8837 9.36432C21.0054 9.48051 21.0605 9.65014 21.0303 9.81569C20.9955 10.007 20.7146 10.2199 20.1528 10.6459L16.4387 13.4616C16.2788 13.5829 16.1989 13.6435 16.1501 13.7217C16.107 13.7909 16.0815 13.8695 16.0757 13.9507C16.0692 14.0427 16.0982 14.1387 16.1563 14.3308L17.506 18.7919C17.7101 19.4667 17.8122 19.8041 17.728 19.9793C17.6551 20.131 17.5108 20.2358 17.344 20.2583C17.1513 20.2842 16.862 20.0829 16.2833 19.6802L12.4576 17.0181C12.2929 16.9035 12.2106 16.8462 12.1211 16.8239C12.042 16.8043 11.9593 16.8043 11.8803 16.8239C11.7908 16.8462 11.7084 16.9035 11.5437 17.0181L7.71805 19.6802C7.13937 20.0829 6.85003 20.2842 6.65733 20.2583C6.49056 20.2358 6.34626 20.131 6.27337 19.9793C6.18915 19.8041 6.29123 19.4667 6.49538 18.7919L7.84503 14.3308C7.90313 14.1387 7.93218 14.0427 7.92564 13.9507C7.91986 13.8695 7.89432 13.7909 7.85123 13.7217C7.80246 13.6435 7.72251 13.5829 7.56262 13.4616L3.84858 10.6459C3.28678 10.2199 3.00588 10.007 2.97101 9.81569C2.94082 9.65014 2.99594 9.48051 3.11767 9.36432C3.25831 9.23007 3.61074 9.22289 4.31559 9.20852L8.9754 9.11356C9.176 9.10947 9.27631 9.10743 9.36177 9.07278C9.43726 9.04218 9.50414 8.99359 9.55657 8.93125C9.61593 8.86068 9.64887 8.76592 9.71475 8.57639L11.245 4.174Z"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </svg>

          <div class="mr-5 inline-block">
            <p class="py-0 font-semibold">4.7</p>
            <p class="font-light mt-[-10px]">200+</p>
          </div>
        </div>

        <!-- Info -->
        <div
          class="cursor-pointer ml-3 pro-banner-info flex items-center space-x-2 bg-white text-gray-800 px-3 py-0 rounded-lg"
        >
          <svg
            width="64px"
            height="64px"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0" />

            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            />

            <g id="SVGRepo_iconCarrier">
              <title />
              <g id="Complete">
                <g id="info-circle">
                  <g>
                    <circle
                      cx="12"
                      cy="12"
                      data-name="--Circle"
                      fill="none"
                      id="_--Circle"
                      r="10"
                      stroke="#000000"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    />
                    <line
                      fill="none"
                      stroke="#000000"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      x1="12"
                      x2="12"
                      y1="12"
                      y2="16"
                    />
                    <line
                      fill="none"
                      stroke="#000000"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      x1="12"
                      x2="12"
                      y1="8"
                      y2="8"
                    />
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </div>
      </div>
    </div>

    <!-- Favorite Icon -->
    <div class="absolute top-4 right-4">
      <button
        class="p-2 bg-white bg-opacity-80 text-gray-800 rounded-full shadow-md hover:bg-opacity-100"
      >
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
            d="M16.5 3a5.625 5.625 0 00-4.5 2.25A5.625 5.625 0 007.5 3 5.625 5.625 0 003 8.625c0 7.155 9 12.375 9 12.375s9-5.22 9-12.375A5.625 5.625 0 0016.5 3z"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "BannerBanner",
};
</script>

<style>
/* Add custom styles if needed */
</style>
