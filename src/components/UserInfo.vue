<template>

  <v-container class="d-flex flex-nowrap justify-space-around">
    <v-container>
      <v-card-text class="text-center pa-1">
        Возраст
      </v-card-text>
      <v-card-text class="text-center pa-1">
        {{ store.userData.Age }}
      </v-card-text>
    </v-container>
    <v-container>
      <v-card-text class="text-center pa-1">
        Город
      </v-card-text>
      <v-card-text class="text-center pa-1">
        {{ store.userData.City }}
      </v-card-text>
    </v-container>

  </v-container>

</template>

<script setup>
import { useStore } from '@/stores/app.js';

const store = useStore();


</script>

<style lang="scss" scoped>

</style>
