<template>
  <div
    class="date border-end border-bottom d-flex justify-content-center"
    :class="{
      'bg-primary':
        date === currentDate &&
        activeMonth === currentMonth &&
        activeYear === currentYear,
    }"
  >
    <p class="mt-2" @click="addTask(date)">
      <span v-if="date === 1">{{ month[currentMonth].slice(0, 3) }}</span>
      {{ date }}
    </p>
    <!-- <p
      v-if="
        taskDate.find((d) => d === date) &&
        taskMonth.find((m) => m === currentMonth) &&
        taskYear.find((y) => y === currentYear)
      "
    >
      {{ task.a }}
    </p> -->
    <p v-if="currentMonth == m && currentYear == y">
      {{ task1 }}
    </p>
  </div>
</template>

<script>
// import emitter from "./emit";
export default {
  name: "CalendarDates",
  data() {
    return {
      task1: "",
      m: "",
      y: "",
      onsave: false,
      activeYear: new Date().getFullYear(),
      activeMonth: new Date().getMonth(),
      activeDate: new Date().getDate(),
      // task: "My Task",
      isTask: false,
      taskDate: [],
      taskMonth: [],
      taskYear: [],
    };
  },
  emits: ["addTask"],
  watch: {
    task(val) {
      this.task1 = val.title;
      this.m = val.month;
      this.y = val.year;
    },
    currentMonth(val) {
      return val;
    },
    currentYear(val) {
      return val;
    },
  },
  props: [
    "task",
    "date",
    "month",
    "currentMonth",
    "currentYear",
    "currentDate",
    "enteredTitle",
    "enteredDescription",
    "selectedDatetime",
  ],

  methods: {
    addTask(d) {
      // if (d && this.currentMonth && this.currentYear) {
      this.taskDate.push(d);
      this.taskMonth.push(this.currentMonth);
      this.taskYear.push(this.currentYear);
      // }
      // console.log(this.taskDate);
      // console.log(this.taskMonth);
      // console.log(this.taskYear);
      // console.log(this.selectedDatetime);
    },
  },
  created() {},
  // created() {
  //   emitter.on("onSave", (e) => {
  //     this.addTask(e);
  //   });
  //   this.onsave = true;
  // },
  // unmounted() {
  //   emitter.off("onSave");
  // },
};
</script>

<style></style>
