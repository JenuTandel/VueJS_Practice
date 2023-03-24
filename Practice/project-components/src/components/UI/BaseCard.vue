<template>
  <div>
    <header v-if="$slots.header">
      <slot name="header"></slot>
    </header>
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
div {
  max-width: 40%;
  box-shadow: 1px 2px 8px gray;
  border-radius: 10px;
  background-color: white;
  padding: 10px;
  margin: auto;
  margin-bottom: 20px;
  background-color: rgb(175, 217, 254);
}
header {
  background-color: rgb(46, 102, 143);
  padding: 5px;
  margin-bottom: 10px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
