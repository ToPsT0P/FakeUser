<template>
  <v-row class="d-flex flex-column justify-center align-center ma-0 ">
    <v-col cols="11" md="7" lg="6" class="mt-16 mb-16">
      <v-card variant="tonal" class="pa-6" style="min-height: 740px">
        <v-container class="d-flex w-100 flex-wrap gap-6 align-start justify-center">


          <!--        Loader при загрузке данных          -->
          <v-progress-circular
            v-if="store.isLoading"
            color="primary"
            indeterminate
            :size="66"
            :width="5"
          ></v-progress-circular>

          <v-avatar size="130" v-if="!store.isLoading">
            <img :src="store.userData.ImgURL" alt="User" width="130px">
          </v-avatar>

          <UserContact v-if="!store.isLoading"/>

          <UserInfo v-if="!store.isLoading"/>

          <UserBio v-if="!store.isLoading"/>

        </v-container>

        <UserStats v-if="!store.isLoading"/>

        <v-card-actions class="mt-7 w-100 d-flex justify-end">
          <v-btn v-if="!store.isLoading" @click="store.changeVisability()">Изменить</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>


import {onMounted} from "vue";


import {useStore} from "@/stores/app.js";


import UserBio from "@/components/UserBio.vue";
import UserInfo from "@/components/UserInfo.vue";
import UserContact from "@/components/UserContact.vue";
import UserStats from "@/components/UserStats.vue";


const store = useStore()

onMounted(() => {
  store.fetchUserData()
})

</script>
