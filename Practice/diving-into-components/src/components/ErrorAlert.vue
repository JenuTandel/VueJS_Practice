<template>
  <dialog open>
    <slot></slot>
  </dialog>
</template>

<style scoped>
dialog {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
  width: 30rem;
  background-color: white;
  padding: 20px;
  border: 2px solid black;
  box-shadow: 1px 2px 7px #d6d3d6;
}
</style>
