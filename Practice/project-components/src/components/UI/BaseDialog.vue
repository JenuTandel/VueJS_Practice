<template>
  <teleport to="body">
    <div @click="$emit('close')"></div>
    <dialog open>
      <header>
        <slot name="header">
          <h2>{{ title }}</h2>
        </slot>
      </header>
      <section>
        <slot></slot>
      </section>
      <menu>
        <slot name="action">
          <!-- <base-button @click="$emit('close')">Close</base-button> -->
        </slot>
      </menu>
    </dialog>
  </teleport>
</template>

<script>
export default {
  emit: ["close"],
  props: ["title"],
};
</script>

<style scoped>
dialog {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  width: 40%;
  padding: 0;
  z-index: 100;
  border: 1px solid rgb(5, 53, 92);
  box-shadow: 1px 2px 10px 5px rgb(47, 86, 118);
}
/*menu {
  padding: 0;
} */
div {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
}

header {
  background-color: rgb(5, 53, 92);
  color: white;
  padding: 1rem;
}

header h2 {
  margin: 0;
}

section {
  padding: 1rem;
}

menu {
  padding: 1rem;
  display: flex;
  justify-content: flex-end;
  margin: 0;
}
</style>
