<script setup>
import Modal from "../components/Modal.vue";
import {ref} from "vue";
import TextField from "../components/fields/TextField.vue";
import TextArea from "../components/fields/TextArea.vue";
import Button from "../components/buttons/Button.vue";

let showModal = ref(false);

function closeModal(val) {
  showModal.value = false;
  if (val) {
    // some code
  }
}

function checkInput(e) {
  console.log(e)
}
</script>

<template>
  <div class="home-container">

    <Button @click="showModal = true">
      Открыть
    </Button>
    <modal
        v-if="showModal"
        @closeModal="closeModal"
    >
      <template v-slot:header>
        Модальное окно
      </template>
      <template v-slot:body>
        <text-field
            required
            label="Имя"
            helper-text="Обязательное поле"
        />
        <text-field
            label="Фамилия"
        />
        <text-field
            required
            label="Телефон"
        />
        <text-field
            required
            label="Почта"
        />
        <text-area/>
      </template>
    </modal>
  </div>
</template>

<style scoped lang="scss">

</style>
