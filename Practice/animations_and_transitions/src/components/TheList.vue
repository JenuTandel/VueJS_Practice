<template>
  <div class="d-flex justify-content-center">
    <transition-group tag="ul" name="fruit-list">
      <li v-for="fruit in fruits" :key="fruit" @click="removeItem(fruit)">
        {{ fruit }}
      </li>
    </transition-group>
  </div>
  <div class="d-flex flex-column align-items-center">
    <input type="text" placeholder="Enter Fruit Name" v-model="enteredFruit" />
    <!-- <input type="text" placeholder="Enter Fruit Name" ref="fruitName" /> -->
    <button @click="addItem" class="btn btn-success mt-3">Add Item</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      fruits: ["Kiwi", "Apple", "Banana", "Pineapple", "Grapes"],
      enteredFruit: "",
    };
  },
  methods: {
    addItem() {
      //   this.enteredFruit = this.$refs.fruitName.value;
      this.fruits.unshift(this.enteredFruit);
      this.enteredFruit = "";
    },
    removeItem(item: any) {
      this.fruits = this.fruits.filter((fruit) => fruit !== item);
    },
  },
});
</script>

<style scoped>
ul {
  list-style: none;
  margin-bottom: 1rem;
  padding: 0;
}
li {
  border: 1px solid #5a5858;
  padding: 1rem;
}

.fruit-list-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}

.fruit-list-enter-active {
  transition: all 0.5s ease-out;
}

.fruit-list-enter-to,
.fruit-list-leave-from {
  opacity: 1;
  transform: translateX(0);
}

.fruit-list-leave-active {
  transition: all 0.5s ease-in;
  position: absolute;
}

.fruit-list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.fruit-list-move {
  transition: transform 1s ease;
}
</style>
