<template>
  <div>
    <h2>{{ uname }}</h2>
    <h3>{{ number }}</h3>
  </div>
</template>

<script>
import {
  computed,
  ref,
  inject,
  onBeforeMount,
  onBeforeUpdate,
  onBeforeUnmount,
  onMounted,
  onUnmounted,
  onUpdated,
} from "vue";
export default {
  props: ["firstname", "lastname", "number"],
  setup(props, context) {
    const city = ref("Valsad");
    const username = computed(() => {
      return props.firstname + " " + props.lastname;
    });
    // console.log(context);
    context.emit("city", city.value);
    const age = inject("userAge");
    console.log(age);

    //Lifecycle Hooks
    onBeforeMount(() => {
      console.log("onBeforeMount");
    }),
      onMounted(() => {
        console.log("onMounted");
      }),
      onBeforeUpdate(() => {
        console.log("onBeforeUpdate");
      }),
      onUpdated(() => {
        console.log("onUpdated");
      }),
      onBeforeUnmount(() => {
        console.log("onBeforeUnmount");
      }),
      onUnmounted(() => {
        console.log("onUnmounted");
      });
    return { uname: username };
  },
};
</script>
