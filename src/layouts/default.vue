<template>
  <ModalChangeUserInfo/>
  <v-main>
    <router-view />
  </v-main>
  <v-snackbar
    v-model="isSnackbarVisible"
    color="red"
  >
    {{ store.error }}
    <template v-slot:actions>
      <v-btn
        color="blue"
        variant="text"
        @click="clearError"
      >
        Закрыть
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script setup>
  import { computed } from "vue";
  import {useStore} from "@/stores/app.js";

  const store = useStore();

  const isSnackbarVisible = computed({
    get: () => !!store.error,
    set: (value) => {
      if (!value) {
        store.error = null;
      }
    }
  });

  const clearError = () => {
    store.error = null;
  };

import ModalChangeUserInfo from "@/components/ModalChangeUserInfo.vue";
</script>
