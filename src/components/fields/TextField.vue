<script setup>
  import {ref} from "vue";

  const props = defineProps({
    // error: {
    //   type: Boolean,
    //   default: false
    // }
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
      default: 'TextField'
    },
    helperText: {
      type: String,
      default: ''
    }
  })
  let error = ref(false)

  function check(e) {
    if (!!props.rules.length) {
      props.rules.map(() => {

      })
    }
    if (!props.rules.length && props.required) {
      error.value = e.target.value.length <= 0;
    }
  }
</script>

<template>
<!--  <form>-->
    <div class="input-group">
      <label @input="check" :class="`input-rounded ${error ? 'input-danger' : ''}`">
        <input v-if="disabled" required disabled>
        <input v-else required>
        <span class="input-label">{{ label }}</span>
        <span class="input-helper">{{ helperText }}</span>
      </label>
    </div>
<!--  </form>-->
</template>

<style scoped lang="scss">
@import "src/assets/vars";

div.input-group {
  margin-bottom: 0.75rem;
  position: relative;
  width: 18rem;
  margin-right: 0;
}

.input-rounded > input,
.input-filled > input {
  //border: none;
  border-radius: 8px;
  border: 0.12rem solid $input-color-ink-medium-contrast;
  width: 100%;
  height: 2rem;
  font-size: 1.0625rem;
  padding: 0.825rem 0.875rem 0.5rem;
  //padding-left: 0.875rem;
  line-height: 147.6%;
  //padding-top: 0.825rem;
  //padding-bottom: 0.5rem;
}

.input-rounded > input:focus,
.input-filled > input:focus {
  outline: none;
}

.input-rounded > .input-label,
.input-filled > .input-label {
  position: absolute;
  top: 0.9375rem;
  left: 0.875rem;
  line-height: 147.6%;
  color: $input-color-ink-medium-contrast;
  transition: top .2s;
}

.input-rounded > svg,
.input-filled > svg {
  position: absolute;
  top: 0.9375rem;
  right: 0.875rem;
  fill: $input-color-ink-medium-contrast;
}

.input-rounded > .input-helper,
.input-filled > .input-helper {
  font-size: 0.9375rem;
  color: $input-color-ink-medium-contrast;
  letter-spacing: 0.0275rem;
  margin: 0.125rem 0.875rem;
}

.input-rounded > input:hover,
.input-filled > input:hover {
  background: $input-color-interaction-minus-two;
  border-color: $input-color-ink-high-contrast;
}

.input-rounded > input:focus + .input-label,
.input-rounded > input:valid + .input-label,
.input-filled > input:focus + .input-label,
.input-filled > input:valid + .input-label {
  top: 0;
  font-size: 0.9375rem;
  margin-bottom: 32px;;
}

.input-rounded:not(.input-danger) > input:focus + .input-label,
.input-filled:not(.input-danger) > input:focus + .input-label {
  color: $input-color-interaction;
}

.input-rounded:not(.input-danger) > input:focus,
.input-filled:not(.input-danger) > input:focus {
  border-color: $input-color-interaction;
}

.input-rounded:not(.input-danger) > input:focus ~ svg,
.input-filled:not(.input-danger) > input:focus ~ svg {
  fill: var($input-color-ink-high-contrast);
}

/** DISABLED **/

.input-rounded > input:disabled {
  background: $input-color-bg-low-contrast;
  cursor: not-allowed;
}

.input-rounded > input:disabled + .input-label,
.input-rounded > input:disabled ~ .input-helper{
  color: $input-color-ink-low-contrast;
}

.input-rounded > input:disabled ~ svg {
  fill: $input-color-ink-low-contrast;
}


/** DANGER **/

.input-rounded.input-danger > .input-label, .input-rounded.input-danger > .input-helper,
.input-filled.input-danger > .input-label, .input-filled.input-danger > .input-helper{
  color: $input-color-danger;
}

.input-danger > svg {
  fill: $input-color-danger;
}

.input-danger > input {
  border-color: $input-color-danger;
}

.input-rounded > input {
  background: $input-color-bg-high-contrast;
}
.input-filled > input {
  background: $input-color-bg-low-contrast;
}
</style>
