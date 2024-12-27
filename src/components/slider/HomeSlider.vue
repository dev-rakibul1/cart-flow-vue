<template>
  <div class="box-container mx-auto">
    <swiper
      :slidesPerView="4"
      :spaceBetween="30"
      :autoplay="{ delay: 3000, disableOnInteraction: false }"
      :navigation="true"
      :modules="modules"
      :breakpoints="{
        0: { slidesPerView: 1, spaceBetween: 10 },
        320: { slidesPerView: 1, spaceBetween: 10 },
        768: { slidesPerView: 3, spaceBetween: 20 },
        1024: { slidesPerView: 4, spaceBetween: 30 },
        1280: { slidesPerView: 4, spaceBetween: 30 },
      }"
      class="mySwiper"
    >
      <swiper-slide v-for="(slide, index) in slides" :key="index" class="">
        <router-link to="/products">
          <div class="relative slider-parent">
            <img
              :src="slide.image"
              :alt="slide.title"
              class="w-full rounded-lg"
            />
            <article class="slider-content">
              <h2>{{ slide.title }}</h2>
              <button class="py-1 px-4 border rounded-md cursor-pointer">
                {{ slide.buttonText }}
              </button>
            </article>
          </div>
        </router-link>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import required modules
import { Autoplay, Navigation } from "swiper/modules";

export default {
  name: "HomeSlider",
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Navigation, Autoplay],
      slides: [
        {
          image:
            "https://eda.yandex/images/1327512/a56b708c4cf14d119d488b503b805ec9-648x312.jpg",
          title: "Free delivery for burger sale",
          buttonText: "Order Now",
        },
        {
          image:
            "https://eda.yandex/images/3472725/c3893293ec096a19a2b7d4f07fcf0be8-648x312.jpg",
          title: "Get 50% off on pizza",
          buttonText: "Grab Offer",
        },
        {
          image:
            "https://eda.yandex/images/1380157/bdb5fa3d0cc446bada526687b0e90386-648x312.jpg",
          title: "New arrival: Sushi combo",
          buttonText: "View Menu",
        },
        {
          image:
            "https://eda.yandex/images/3569651/3f161dc0cb3638d00b4ccada38210964-648x312.jpg",
          title: "Order now and save big!",
          buttonText: "Shop Now",
        },
        {
          image:
            "https://eda.yandex/images/2415806/7f8beaf897d2d13937ae9c6f19bd6f17-648x312.jpg",
          title: "Order now and save big!",
          buttonText: "Shop Now",
        },
        {
          image:
            "https://eda.yandex/images/3378693/049e8232c93c3ce2b19dc94a1da9ba26-648x312.jpg",
          title: "Special discount on beverages",
          buttonText: "Explore",
        },
        {
          image:
            "https://eda.yandex/images/1380157/1cf0cfee822196d9203fda5365e67917-648x312.jpg",
          title: "Special discount on beverages",
          buttonText: "Explore",
        },
        {
          image:
            "https://eda.yandex/images/3583862/5de5583bc7d247c7b8530fd4124feb6b-648x312.jpg",
          title: "Exclusive deals on desserts",
          buttonText: "Order Today",
        },
        {
          image:
            "https://eda.yandex/images/3534679/659b94dd2ccfc85eae36588be1965f82-648x312.jpg",
          title: "Exclusive deals on desserts",
          buttonText: "Order Today",
        },
      ],
    };
  },
};
</script>

<style scoped>
.slider-parent {
  position: relative;
}
.slider-parent::before {
  position: absolute;
  content: "";
  width: 100%;
  height: 100%;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    180deg,
    rgba(2, 0, 36, 0) 0%,
    rgba(0, 0, 0, 1) 100%
  );
  top: 0;
  left: 0;
}
.slider-content {
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  bottom: 0;
  text-align: center;
}
</style>
