<template>
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <slot name="header">
              default header
            </slot>
          </div>

          <div class="modal-body">
            <slot name="body">
              default body
            </slot>
          </div>

          <div class="modal-footer">
            <slot name="footer">

              <Button class="modal-default-button" @click="$emit('closeModal', true)">
                apply
              </Button>
              <Button class="modal-default-button" @click="$emit('closeModal', false)">
                close
              </Button>
            </slot>
          </div>
        </div>
      </div>
    </div>
</template>

<script setup>

import Button from "./buttons/Button.vue";
</script>

<style scoped lang="scss">
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  display: table;
  transition: opacity 0.3s ease;
  .modal-wrapper {
    display: table-cell;
    vertical-align: middle;
    .modal-container {
      width: 400px;
      margin: 0px auto;
      padding: 20px 30px;
      background-color: #fff;
      border-radius: 15px 0;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
      transition: all 0.3s ease;
      font-family: Helvetica, Arial, sans-serif;
      .modal-header {
        margin-top: 0;
        font-size: 20px;
        color: #646cff;
      }
      .modal-body {
        margin: 20px 0;
      }
      .modal-footer {
        display: flex;
        justify-content: end;
        margin: 20px 0 0 0;
      }
    }
  }
}

.modal-default-button {
  float: right;
}
.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
