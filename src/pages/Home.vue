<script setup>
import Modal from "../components/Modal.vue";
import {computed, ref} from "vue";
import TextField from "../components/fields/TextField.vue";
import TextArea from "../components/fields/TextArea.vue";
import Button from "../components/buttons/Button.vue";
import {helpers, minLength, maxLength, numeric, email, sameAs, required} from '@vuelidate/validators'
import useVuelidate from "@vuelidate/core";

const showModal = ref(false);
const nameField = ref('');
const fioField = ref('');
const phoneField = ref('');
const emailField = ref('');
const messageField = ref('');


const rules = computed(() => ({
  nameField: {
    required: helpers.withMessage(`Обязательное поле`, required)
  },
  phoneField: {
    required: helpers.withMessage(`Обязательное поле`, required),
  },
  emailField: {
    required: helpers.withMessage(`Обязательное поле`, required),
    email: helpers.withMessage('Вы ввели неверный email', email),
  },
}))


const validate = useVuelidate(rules, {nameField, phoneField, emailField})

const submitForm = () => {
  validate.value.$touch()
  if (validate.value.$error) return
  alert('Form submitted')
}

function closeModal(val) {
  if (val) {
    submitForm()
    if (validate.value.$error) return


    //some code
  }
  clearFields()
  validate.value.$reset();
  showModal.value = false;
}

function clearFields() {
  nameField.value = ''
  fioField.value = ''
  phoneField.value = ''
  emailField.value = ''
  messageField.value = ''
}
</script>

<template>
  <div class="home-container">
    <h1>
      Модальное окно
    </h1>
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
        <form class="form" @submit.prevent="submitForm">
          <text-field
              v-model:value="validate.nameField.$model"
              required
              label="Имя"
              placeholder="Имя"
              :max-length="100"
              name="name"
              :error="validate.nameField.$errors"
          />
          <text-field
              v-model:value="fioField"
              label="Фамилия"
              placeholder="Фамилия"
              :max-length="100"
              name="fio"
          />
          <text-field
              v-model:value="validate.phoneField.$model"
              required
              label="Телефон"
              placeholder="Телефон"
              :error="validate.phoneField.$errors"
              type="phone"
              name="phone"
          />
          <text-field
              v-model:value="validate.emailField.$model"
              required
              label="Почта"
              placeholder="Почта"
              :error="validate.emailField.$errors"
              name="email"
          />
          <text-area
              v-model:value="messageField"
              label="Сообщение"
              placeholder="Сообщение"
              :max-length="500"
              name="message"
          />
        </form>
      </template>
    </modal>
  </div>
</template>

<style scoped lang="scss">
.home-container {
  text-align: center;
  .form {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
  }
}
</style>
