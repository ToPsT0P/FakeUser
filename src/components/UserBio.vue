<template>
  <div v-if="bio">
    <v-card-text class="w-100 text-center text-h6">Биография</v-card-text>
    <v-card-text class="w-100 text-center text-h7">{{ bio }}</v-card-text>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "@/stores/app.js";

const store = useStore();

const bio = computed(() => store.userData?.Bio);


</script>

<style lang="scss" scoped>

</style>
