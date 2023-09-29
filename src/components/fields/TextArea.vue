<template>
  <div class="text-area__wrapper">
    <div class="text-area text-area_floating">
      <textarea
          @input="updateValue"
          :value="value"
          :name="name"
          :class="`text-area__input ${error?.length > 0 ? 'text-area__input_invalid' : ''}`"
          :maxlength="maxLength"
          :placeholder="placeholder"
      />
      <label class="text-area__label" for="">{{label}}</label>
    </div>
    <div :class="error?.length > 0 ? 'text-area__helper-invalid' : ''">
      <div v-if="error?.length > 0" class="text-area__helper-message text-area__helper-message_invalid">{{error[0]?.$message}}</div>
      <div v-if="!!maxLength" class="text-area__helper-counter">{{value.length}}/{{maxLength}}</div>
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue";

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
  label: {
    type: String,
    default: 'Text Area'
  },
  placeholder: {
    type: String,
    default: 'Text Area'
  },
  maxLength: {
    type: Number,
    default: null,
  },
  type: {
    type: String,
    default: 'text',
  },
  name: {
    type: String,
    required: true
  },
  error: {
    type: Array,
    required: false
  },
})
let maxLength = ref(props.maxLength)

const emits = defineEmits(['update:value'])

const updateValue = (e) => {
  emits('update:value', e.target.value)
}

</script>

<style scoped lang="scss">
@import "src/assets/vars";

.text-area {
  margin-bottom: 1rem;
  margin-right: 3.5rem;
  max-width: 400px;
}

.text-area__label {
  display: block;
  margin-bottom: 0.25rem;
}

.text-area__input {
  display: block;
  resize: none;
  width: 420px;
  min-height: 100px;
  padding: 0.375rem 0.75rem;
  font-family: inherit;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #bdbdbd;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.text-area__input:disabled {
  cursor: not-allowed;
}

.text-area__input::placeholder {
  color: #212529;
  opacity: 0.4;
}

.text-area__input:focus {
  color: #212529;
  background-color: #fff;
  border-color: $input-color-interaction;
  box-shadow: 0 0 0 0.25rem rgba(53, 81, 220, 0.25);
  outline: 0;
}

.text-area__input:disabled,
.text-area__input[readonly] {
  background-color: #f5f5f5;
  opacity: 1;
}

.text-area_floating {
  position: relative;
}

.text-area_floating .text-area__input {
  height: 2.5rem;
  padding: 0.5rem 0.75rem;
}

.text-area_floating .text-area__label {
  position: absolute;
  top: 20%;
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

.text-area_floating .text-area__input::-moz-placeholder {
  color: transparent;
}

.text-area_floating .text-area__input::placeholder {
  color: transparent;
}

.text-area_floating .text-area__input:focus~.text-area__label,
.text-area_floating .text-area__input:not(:placeholder-shown)~.text-area__label {
  top: 0;
  transform: translateY(-50%) scale(0.75);
}

.text-area__wrapper {
  margin-bottom: 1.25rem;
}

.text-area__wrapper .text-area {
  margin-bottom: 0;
}

.text-area__input_invalid,
.text-area__input_valid {
  border-color: $input-color-danger;
  padding-right: 2.25rem;
  background-repeat: no-repeat;
  background-position: right 0.5625rem center;
  background-size: 1.125rem 1.125rem;
}

.text-area__input_invalid:focus {
  border-color: $input-color-danger;
  box-shadow: 0 0 0 0.25rem rgba(220, 53, 69, 0.25);
}

.text-area__helper-message {
  display: none;
  margin-top: .25rem;
  font-size: .875rem;
  color: $input-color-danger;
}

.text-area__helper-invalid {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.text-area__helper-message_invalid {
  display: block;
}

.text-area__helper-counter {
  font-size: .75rem;
  margin-top: 0.25rem;
  text-align: right;
  padding-right: 15px;
  color: #bdbdbd;
}
</style>
