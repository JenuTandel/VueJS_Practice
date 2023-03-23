<template>
  <ul>
    <li v-for="goal in goals" :key="goal">
      <slot :item="goal" anotherProp="abc"></slot>
    </li>
  </ul>
</template>

<script>
export default {
  //   props: ["another-prop"],
  data() {
    return {
      goals: ["Angular", "Vue", "React"],
    };
  },
};
</script>
