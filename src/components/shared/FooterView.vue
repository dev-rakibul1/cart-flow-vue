<template>
  <footer class="bg-gray-50 text-gray-600 text-sm border-t pt-12 mt-12">
    <div class="box-container">
      <!-- Main Section -->
      <div
        class="mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
      >
        <!-- Column 1: About the Shop -->
        <div>
          <div class="mb-4">
            <img src="" alt="Food Shop Logo" class="w-24 mb-3" />
            <p class="text-gray-700">
              Welcome to FreshFoods, your one-stop destination for fresh and
              organic delights! Explore a wide range of high-quality products to
              satisfy your taste buds.
            </p>
          </div>
          <!-- Social Media Icons -->
          <div class="flex space-x-4 mt-4">
            <a href="#" class="text-gray-600 hover:text-gray-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M22.23 0H1.77A1.77 1.77 0 000 1.77v20.46A1.77 1.77 0 001.77 24h20.46A1.77 1.77 0 0024 22.23V1.77A1.77 1.77 0 0022.23 0zM7.16 18.56H4.55v-8.61h2.61zm-1.3-9.8A1.5 1.5 0 115 7.26a1.51 1.51 0 011.86 1.5zm12.49 9.8h-2.58v-4.15c0-1-.35-1.69-1.22-1.69-.66 0-1.06.45-1.24.88-.06.15-.08.36-.08.57v4.39H11.8s.03-7.12 0-7.86h2.57v1.11c.34-.52.95-1.26 2.31-1.26 1.69 0 2.96 1.1 2.96 3.47zm0 0"
                />
              </svg>
            </a>
            <a href="#" class="text-gray-600 hover:text-gray-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M24 4.557a9.939 9.939 0 01-2.828.775A4.916 4.916 0 0023.337 3c-.948.564-1.995.974-3.112 1.197A4.92 4.92 0 0016.846 3a4.923 4.923 0 00-4.917 4.917c0 .385.045.76.126 1.117A13.978 13.978 0 011.671 3.149a4.828 4.828 0 00-.665 2.475 4.92 4.92 0 002.188 4.1 4.895 4.895 0 01-2.228-.616v.062a4.928 4.928 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.928 4.928 0 004.604 3.415 9.874 9.874 0 01-6.102 2.104c-.397 0-.79-.023-1.174-.067a13.9 13.9 0 007.548 2.213c9.054 0 14-7.496 14-14 0-.213-.005-.426-.014-.637A9.936 9.936 0 0024 4.557z"
                />
              </svg>
            </a>
          </div>
        </div>

        <!-- Column 2: Shop -->
        <div>
          <h3 class="text-gray-900 font-semibold mb-3">Shop</h3>
          <ul>
            <li>
              <a href="#" class="hover:text-gray-800">Fresh Vegetables</a>
            </li>
            <li><a href="#" class="hover:text-gray-800">Organic Fruits</a></li>
            <li><a href="#" class="hover:text-gray-800">Dairy Products</a></li>
            <li><a href="#" class="hover:text-gray-800">Bakery Items</a></li>
          </ul>
        </div>

        <!-- Column 3: Customer Care -->
        <div>
          <h3 class="text-gray-900 font-semibold mb-3">Customer Care</h3>
          <ul>
            <li><a href="#" class="hover:text-gray-800">Order Tracking</a></li>
            <li>
              <a href="#" class="hover:text-gray-800">Returns & Refunds</a>
            </li>
            <li><a href="#" class="hover:text-gray-800">Shipping Policy</a></li>
            <li><a href="#" class="hover:text-gray-800">FAQ</a></li>
          </ul>
        </div>

        <!-- Column 4: Contact Us -->
        <div>
          <h3 class="text-gray-900 font-semibold mb-3">Contact Us</h3>
          <ul>
            <li>
              <a href="#" class="hover:text-gray-800"
                >Email: support@freshfoods.com</a
              >
            </li>
            <li>
              <a href="#" class="hover:text-gray-800">Phone: +1 123 456 789</a>
            </li>
            <li><a href="#" class="hover:text-gray-800">Live Chat</a></li>
            <li><a href="#" class="hover:text-gray-800">Store Locator</a></li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Footer Bottom Section -->
    <div class="bg-gray-100 py-4">
      <div
        class="mx-auto px-4 flex flex-col md:flex-row justify-between items-center"
      >
        <p class="text-gray-500">
          &copy; 2024 FreshFoods. All Rights Reserved.
        </p>
        <div class="flex space-x-4">
          <a href="#" class="hover:text-gray-800">Terms & Conditions</a>
          <a href="#" class="hover:text-gray-800">Privacy Policy</a>
          <a href="#" class="hover:text-gray-800">Cookie Policy</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterView",
};
</script>

<style scoped></style>
