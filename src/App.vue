<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <div>
    <header>
      <nav>
        <MenuVue />
      </nav>
    </header>

    <main>
      <RouterView />
    </main>
  </div>
</template>

<script>
import MenuVue from "@/components/shared/MenuVue.vue";

export default {
  components: {
    MenuVue,
  },
};
</script>

<style scoped></style>
