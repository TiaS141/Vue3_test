<script setup>
import {computed, ref} from "vue";
import {maska} from "maska";


const props = defineProps({
  value: {
    type: String,
    default: ''
  },
  required: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  rules: {
    type: Array,
    default: []
  },
  label: {
    type: String,
    default: 'Text field'
  },
  placeholder: {
    type: String,
    default: 'Text field'
  },
  helperText: {
    type: String,
    default: ''
  },
  name: {
    type: String,
    required: true
  },
  maxLength: {
    type: Number,
    default: null,
  },
  type: {
    type: String,
    default: 'text',
  },
  error: {
    type: Array,
    required: false
  },
})

const emits = defineEmits(['update:value'])

let maxLength = ref(props.maxLength)

const updateValue = (e) => {
  emits('update:value', e.target.value)
}

</script>

<template>

  <div class="text-field__wrapper">
    <div class="text-field text-field_floating">
      <input
          @input="updateValue"
          :value="value"
          :class="`text-field__input ${error?.length > 0 ? 'text-field__input_invalid' : ''}`"
          :type="type"
          :name="name"
          :maxlength="maxLength"
          :placeholder="placeholder"
          v-maska="type === 'phone' ? '+7 (###)-###-##-##' : ''"
      >
      <label class="text-field__label" :for="name">{{label}}</label>
    </div>
    <div :class="error?.length > 0 ? 'text-field__helper-invalid' : ''">
      <div v-if="error?.length > 0" class="text-field__helper-message text-field__helper-message_invalid">{{error[0]?.$message}}</div>
      <div v-if="!!maxLength" class="text-field__helper-counter">{{value.length}}/{{maxLength}}</div>
    </div>
  </div>

</template>

<style scoped lang="scss">
@import "src/assets/vars";

.text-field {
  margin-bottom: 1rem;
  margin-right: 1.5rem;
  max-width: 400px;
}

.text-field__label {
  display: block;
  margin-bottom: 0.25rem;
}

.text-field__input {
  display: block;
  width: 93.5%;
  height: calc(2.25rem + 2px);
  padding: 0.375rem 0.75rem;
  font-family: inherit;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: $input-color;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid $input-color-border;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.text-field__input:disabled {
  cursor: not-allowed;
}

.text-field__input::placeholder {
  color: $input-color;
  opacity: 0.4;
}

.text-field__input:focus {
  color: $input-color;
  background-color: #fff;
  border-color: $input-color-interaction;
  box-shadow: 0 0 0 0.25rem rgba(53, 81, 220, 0.25);
  outline: 0;
}

.text-field__input:disabled,
.text-field__input[readonly] {
  background-color: #f5f5f5;
  opacity: 1;
}

.text-field_floating {
  position: relative;
}

.text-field_floating .text-field__input {
  height: 2.5rem;
  padding: 0.5rem 0.75rem;
}

.text-field_floating .text-field__label {
  position: absolute;
  top: 50%;
  left: 0.3125rem;
  display: flex;
  transform: translateY(-50%);
  pointer-events: none;
  border: none;
  background-color: #fff;
  color: #757575;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  transition: top 0.1s ease-in-out;
}

.text-field_floating .text-field__input::-moz-placeholder {
  color: transparent;
}

.text-field_floating .text-field__input::placeholder {
  color: transparent;
}

.text-field_floating .text-field__input:focus~.text-field__label,
.text-field_floating .text-field__input:not(:placeholder-shown)~.text-field__label {
  top: 0;
  transform: translateY(-50%) scale(0.75);
}

.text-field__wrapper {
  margin-bottom: 1.25rem;
}

.text-field__wrapper .text-field {
  margin-bottom: 0;
}

.text-field__input_invalid,
.text-field__input_valid {
  border-color: $input-color-danger;
  padding-right: 2.25rem;
  background-repeat: no-repeat;
  background-position: right 0.5625rem center;
  background-size: 1.125rem 1.125rem;
}

.text-field__input_invalid:focus {
  border-color: $input-color-danger;
  box-shadow: 0 0 0 0.25rem rgba(220, 53, 69, 0.25);
}

.text-field__helper-message {
  display: none;
  margin-top: .25rem;
  font-size: .875rem;
  color: $input-color-danger;
}

.text-field__helper-invalid {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.text-field__helper-message_invalid,
.text-field__helper-message_valid {
  display: block;
}

.text-field__helper-counter {
  font-size: .75rem;
  margin-top: 0.25rem;
  text-align: right;
  padding-right: 15px;
  color: $input-color-border;
}

</style>
