<template>

  <v-container width="100%" class="justify-center pb-2">
    <v-card-text class="text-center text-h6 py-1">{{ store.userData.Name }}</v-card-text>
    <v-card-text class="text-center text-h8 pt-3 pb-1" style="color: #b5b5b5">Какая-нибудь специальность</v-card-text>
    <v-card-text class="text-center text-h8 py-1" style="color: #b5b5b5">testEmail@gmail.com</v-card-text>
  </v-container>
</template>

<script setup>

import { useStore } from "@/stores/app.js";

const store = useStore();

</script>

<style lang="scss" scoped>

</style>
