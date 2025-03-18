<template>
  <v-row class="d-flex flex-column justify-center align-center ma-0">
    <v-col cols="11" md="7" lg="6" class="mt-16 mb-16 ">
      <v-card variant="tonal" class="pa-6">
        <v-container class="d-flex w-100 flex-wrap gap-6 align-start justify-center">

          <v-avatar size="130">
            <img :src="url" alt="User" width="130px">
          </v-avatar>

          <UserContact/>

          <UserInfo/>

          <UserBio/>

        </v-container>

        <UserStats/>

        <v-card-actions class="mt-7 w-100 d-flex justify-end">
          <v-btn @click="store.changeVisability()">Изменить</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>


const url = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.t1-t9FzCErAaW4X93_nIUgHaHa%26pid%3DApi&f=1&ipt=cb3101a6aa735a9cc7eb330d64573569af7c898ffc69caffc9b83e6914387afc&ipo=images'

import { useVisability } from "@/stores/app.js";

import UserBio from "@/components/UserBio.vue";
import UserInfo from "@/components/UserInfo.vue";
import UserContact from "@/components/UserContact.vue";
import UserStats from "@/components/UserStats.vue";

const store = useVisability()

onMounted(() => {
  console.log("Идет запрос на бд")
  store.fetchUserData()
})
</script>
