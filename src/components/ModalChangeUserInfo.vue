<template>
  <div class="pa-4 text-center">
    <v-dialog
      v-if="store.isVisible"
      v-model="dialog"
      max-width="600"
    >

      <v-card
        prepend-icon="mdi-account"
        title="User Profile"
      >
        <v-card-text>
          <v-row dense>
            <v-col
              cols="12"
              md="12"
              sm="12"
            >
              <v-text-field
                label="First name*"
                required
              ></v-text-field>
            </v-col>



            <v-col
              cols="12"
              md="12"
              sm="12"
            >
              <v-text-field
                label="Last name*"
                persistent-hint
                required
              ></v-text-field>
            </v-col>

            <v-col
              cols="12"
              sm="12"
            >
              <v-text-field

                label="Age*"
                required
              ></v-text-field>
            </v-col>
          </v-row>

          <small class="text-caption text-medium-emphasis">*indicates required field</small>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            text="Close"
            variant="plain"
            @click="closeDialog"
          ></v-btn>

          <v-btn
            color="primary"
            text="Save"
            variant="tonal"
            @click="dialog = false"
          ></v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>


<script setup>
import { ref, watch } from 'vue';
import { useVisability } from '@/stores/app.js';

const store = useVisability();
const dialog = ref(store.isVisible);

watch(() => store.isVisible, (newValue) => {
  dialog.value = newValue;
});

const closeDialog = () => {
  store.changeVisability();
};

const saveChanges = () => {
  store.changeVisability();
};
</script>



<style lang="scss" scoped>

</style>
