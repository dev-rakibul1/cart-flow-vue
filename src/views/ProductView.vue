<template>
  <div class="md:px-2 w-full md:w-[75%] md:min-h-screen md:overflow-y-scroll">
    <BannerBanner />

    <!-- Whats new food -->
    <div id="whatsANewProduct" class="py-2">
      <div class="border-b mb-4 lg:pt-24">
        <h1 class="text-xl md:text-2xl font-semibold">New foods</h1>
      </div>
      <WhatsNew />
    </div>

    <!-- Drinking food -->
    <div id="drinkingView" class="py-2 pt-20">
      <div class="border-b mb-4">
        <h1 class="text-xl md:text-2xl font-semibold">Drinking foods</h1>
      </div>
      <DrinkingView />
    </div>

    <!-- Burger food -->
    <div id="burgerView" class="py-2 pt-20">
      <div class="border-b mb-4">
        <h1 class="text-xl md:text-2xl font-semibold">Burger foods</h1>
      </div>
      <BurgerView />
    </div>

    <!-- Pizza food -->
    <div id="pizzaView" class="py-2 pt-20">
      <div class="border-b mb-4">
        <h1 class="text-xl md:text-2xl font-semibold">Pizza foods</h1>
      </div>
      <PizzaView />
    </div>
  </div>
</template>

<script>
import BannerBanner from "@/components/banner/ProductBanner.vue";
import BurgerView from "@/components/Burger/BurgerView.vue";
import DrinkingView from "@/components/Drinking/DrinkingView.vue";
import PizzaView from "@/components/Pizza/PizzaView.vue";
import WhatsNew from "@/components/whatsNew/WhatsNew.vue";

export default {
  name: "ProductView",
  components: {
    BannerBanner,
    WhatsNew,
    DrinkingView,
    BurgerView,
    PizzaView,
  },
};
</script>

<style></style>
