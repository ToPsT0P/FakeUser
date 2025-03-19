<template>
  <v-container width="100%" class="d-flex justify-center pb-2">
    <v-card-text class="d-flex flex-nowrap text-h8 pa-0 justify-center" style="color: #b5b5b5">
      <img alt="friends" :src="friendIco" width="20" height="20" class="mr-1"/> {{ store.userData.UserStats?.Friends }}
    </v-card-text>
    <v-card-text class="d-flex flex-nowrap text-h8 pa-0 justify-center" style="color: #b5b5b5">
      <img alt="posts" :src="postsIco" width="20" height="20" class="mr-1"/> {{ store.userData.UserStats?.Posts }}
    </v-card-text>
    <v-card-text class="d-flex flex-nowrap text-h8 pa-0 justify-center" style="color: #b5b5b5">
      <img alt="subs" :src="subscribersIco" width="20" height="20" class="mr-1"/> {{ store.userData.UserStats?.Subscribers }}
    </v-card-text>
  </v-container>
</template>

<script setup>

import friendIco from "../../public/ico/friends.png";
import postsIco from "../../public/ico/posts.png";
import subscribersIco from "../../public/ico/subscribe.png";
import { useStore } from "@/stores/app.js";

const store = useStore()

</script>

<style lang="scss" scoped>

</style>
