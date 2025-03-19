<template>
  <div class="pa-4 text-center">
    <v-dialog
      v-if="store.isVisible"
      v-model="dialog"
      max-width="600"
      @click:outside="closeDialog"
    >
      <v-card prepend-icon="mdi-account" title="Изменение профиля">
        <v-card-text>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-row dense>
              <v-col cols="12" md="12" sm="12">
                <v-text-field
                  label="Имя, Фамилия*"
                  v-model="names"
                  :rules="nameRules"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="12">
                <v-text-field
                  label="Возраст"
                  v-model="age"
                  :rules="ageRules"
                  type="number"
                ></v-text-field>
                <v-textarea
                  label="Биография"
                  v-model="bio"
                  :rules="bioRules"
                  counter="200"
                ></v-textarea>
              </v-col>
            </v-row>
            <small class="text-caption text-medium-emphasis">
              *Значок обозначает обязательные поля
            </small>
          </v-form>
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
            @click="saveChanges"
          ></v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useStore } from '@/stores/app.js';

const store = useStore();
const dialog = ref(store.isVisible);

watch(() => store.isVisible, (newValue) => {
  dialog.value = newValue;
});

watch(dialog, (newValue) => {
  if (!newValue) {
    store.isVisible = false;
  }
});


const valid = ref(false);
const form = ref(null);

const names = ref('');
const age = ref('');
const bio = ref('');

const nameRules = [
  v => !!v || 'Поле обязательно'
];

const ageRules = [
  v => !!v || 'Возраст обязателен',
  v => parseInt(v) >= 18 || 'Возраст должен быть не менее 18 лет'
];

const bioRules = [
  v => (v.length <= 200) || 'Биография не должна превышать 200 символов'
];

const closeDialog = () => {
  dialog.value = false;
  store.isVisible = false;
};

const saveChanges = async () => {
  const { valid } =  await form.value.validate()
  if (valid) {
    dialog.value = false;
    store.isVisible = false;
    store.changeUserData(names.value, age.value, bio.value)
  }
};
</script>

<style lang="scss" scoped>

</style>
