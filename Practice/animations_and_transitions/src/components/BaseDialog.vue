<template>
  <!-- <teleport to="body"> -->
  <dialog open>
    <header>
      <slot></slot>
    </header>
    <action>
      <slot name="action"></slot>
    </action>
  </dialog>
  <!-- </teleport> -->
</template>

<style scoped>
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.5);
}
dialog {
  padding: 30px;
  position: fixed;
  top: 50%;
  left: 30%;
  background-color: white;
  width: 40%;
  z-index: 100;
  border: 1px solid rgb(168, 202, 237);
  box-shadow: 1px 2px 10px 5px rgb(131, 143, 152);
}
header {
  color: rgb(5, 53, 92);
}
</style>
