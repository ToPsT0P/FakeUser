<template>
  <div v-if="truncatedBio">
    <v-card-text class="w-100 text-center text-h6">Биография</v-card-text>
    <v-card-text class="w-100 text-center text-h7">{{ truncatedBio }}</v-card-text>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "@/stores/app.js";

const store = useStore();

const bio = computed(() => store.userData?.Bio);

const truncatedBio = computed(() => {
  if (!bio.value) return '';
  return bio.value.length > 200 ? bio.value.slice(0, 200) + "..." : bio.value;
});
</script>

<style lang="scss" scoped>

</style>
