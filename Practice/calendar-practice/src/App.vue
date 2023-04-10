<template>
  <div class="d-flex flex-column h-100">
    <!-- start: header -->
    <header class="w-100 d-flex align-items-center p-2 border-bottom">
      <span class="icon icon-menu fs-4 mx-3"></span>
      <!-- logo -->
      <figure class="img-wrapper me-3">
        <img src="../src/assets/calendar1.png" alt="logo" />
      </figure>
      <span class="name">Calendar</span>
      <div class="d-flex justify-content-between w-100">
        <div class="header-left-wrapper d-flex align-items-center">
          <button
            type="button"
            class="btn-today btn border me-3"
            @click="onToday"
          >
            Today
          </button>
          <span
            class="icon icon-chevron_left fw-semibold mx-2"
            @click="onPrev"
          ></span>
          <span
            class="icon icon-chevron_right fw-semibold mx-2"
            @click="onNext"
          ></span>
          <span class="month-year ms-3"
            >{{ month[currentMonth] }} {{ currentYear }}</span
          >
          <span class="icon icon-arrow_drop_down"></span>
        </div>
        <div class="header-right-wrapper d-flex align-items-center">
          <span class="icon icon-search fw-semibold mx-2"></span>
          <span class="icon icon-help fw-semibold mx-2"></span>
          <span class="icon icon-settings fw-semibold mx-2"></span>
          <div class="position-relative">
            <button
              type="button"
              class="btn-today btn border me-3"
              @click="onSelectType"
            >
              {{ title }} <span class="icon-arrow_drop_down"></span>
            </button>
            <ul
              class="border position-absolute top-100 start-25 z-3 bg-white shadow rounded"
              v-if="dropdownVisibility"
            >
              <li @click="onMonth">
                <div
                  class="d-flex justify-content-between"
                  style="font-size: 14px"
                >
                  <span>Month</span>
                  <span class="ms-auto">M</span>
                </div>
              </li>
              <li @click="onWeek">
                <div
                  class="d-flex justify-content-between"
                  style="font-size: 14px"
                >
                  <span>Week</span>
                  <span class="ms-auto">W</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="d-flex align-items-center ms-4">
        <span class="icon icon-apps text-dark"></span>
        <div class="profile-wrapper ms-3">
          <img src="../src/assets/logo.png" />
        </div>
      </div>
    </header>
    <!-- end:header -->
    <!-- start: monthwise -->
    <section v-if="isMonth" class="h-100">
      <div class="row days border-bottom gx-0">
        <div
          class="col border-end d-flex justify-content-center"
          v-for="i in weekDays"
          :key="i"
        >
          <span>{{ i }}</span>
        </div>
      </div>
      <div class="dates w-100 d-flex flex-wrap h-100">
        <div
          class="date border-end border-bottom d-flex justify-content-center"
          v-for="date in dates"
          :key="date"
          :class="{ 'bg-primary': date === currentDate }"
        >
          <p class="mt-2">
            {{ date }}
          </p>
        </div>
      </div>
    </section>
    <!-- end: monthwise -->

    <!-- start: weekwise -->
    <section v-if="!isMonth" class="h-100">
      <div class="p-2">
        <!-- week days -->
        <div class="row days gx-0">
          <div class="col-1"></div>
          <div
            class="col d-flex justify-content-center"
            v-for="day in weekDays"
            :key="day"
          >
            <span>{{ day }}</span>
          </div>
        </div>
        <!-- date of weeks -->
        <div class="row gx-0">
          <div class="col-1"></div>
          <div
            class="col d-flex justify-content-center"
            v-for="date in dates[6]"
            :key="date"
          >
            <p class="week-date">{{ date }}</p>
          </div>
        </div>
      </div>
      <!-- time slots -->
      <div class="row gx-0">
        <div class="col-1 border-end pe-3">
          <div class="time-slot" v-for="t in time" :key="t">
            {{ t }}
          </div>
        </div>
        <div class="col" v-for="i in [1, 2, 3, 4, 5, 6, 7]" :key="i">
          <div
            class="time-slot border-end border-top"
            v-for="t in time"
            :key="t"
          ></div>
        </div>
      </div>
    </section>
    <!-- end: weekwise -->
  </div>
</template>

<script>
export default {
  name: "App",

  data() {
    return {
      dropdownVisibility: false,
      isMonth: true,
      title: "Month",
      weekDays: ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"],
      month: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      dates: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
      ],
      currentYear: new Date().getFullYear(),
      currentMonth: new Date().getMonth(),
      currentDate: new Date().getDate(),
      time: [
        "GMT+00",
        "1 AM",
        "2 AM",
        "3 AM",
        "4 AM",
        "5 AM",
        "6 AM",
        "7 AM",
        "8 AM",
        "9 AM",
        "10 AM",
        "11 AM",
        "12 PM",
        "1 PM",
        "2 PM",
        "3 PM",
        "4 PM",
        "5 PM",
        "6 PM",
        "7 PM",
        "8 PM",
        "9 PM",
        "10 PM",
        "11 PM",
      ],
    };
  },
  methods: {
    onSelectType() {
      this.dropdownVisibility = !this.dropdownVisibility;
    },
    onMonth() {
      this.isMonth = true;
      this.title = "Month";
      this.dropdownVisibility = false;
    },
    onWeek() {
      this.isMonth = false;
      this.title = "Week";
      this.dropdownVisibility = false;
    },
    onToday() {
      (this.currentMonth = new Date().getMonth()),
        (this.currentYear = new Date().getFullYear());
    },
    onPrev() {
      this.currentMonth--;
      if (this.currentMonth == -1) {
        this.currentYear--;
        this.currentMonth = 11;
        this.onPrev;
      }
    },
    onNext() {
      this.currentMonth++;
      if (this.currentMonth == 12) {
        this.currentYear++;
        this.currentMonth = 0;
        this.onNext;
      }
    },
  },
};
</script>

<style>
@import url("../node_modules/bootstrap/dist/css/bootstrap.css");
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap");
@import url("../src/assets/icons/style.css");

#app {
  height: 100%;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body,
html {
  height: 100%;
  width: 100%;
  font-family: "Roboto", sans-serif;
}
figure {
  margin: 0;
}
ul {
  margin: 0;
  padding: 0px;
  list-style-type: none;
  width: 200px;
}
li {
  list-style-type: none;
  padding: 10px;
}
.days {
  font-size: 11px;
  color: #70757a;
  font-weight: 500;
  letter-spacing: 0.8px;
}
.date {
  font-size: 12px;
  width: calc(100% / 7);
}
p {
  margin-bottom: 0;
}
.week-date {
  font-size: 26px;
  color: #70757a;
}
.time-slot {
  height: 48px;
  padding-right: 8px;
  text-align: right;
  font-size: 10px;
  color: #70757a;
}
.time {
  width: calc(100% / 7);
}
/* header */
.img-wrapper {
  height: 44px;
  width: 40px;
}
img {
  height: 100%;
  width: 100%;
}
.name {
  font-size: 22px;
  font-family: "Google Sans", Roboto, Arial, sans-serif;
  color: rgb(60, 64, 67);
}
.btn-today {
  font-size: 14px;
  margin-left: 20px;
}
.header-left-wrapper {
  padding-left: 65px;
  color: rgb(60, 64, 67);
}
.month-year {
  font-size: 22px;
  color: rgb(60, 64, 67);
}
.icon {
  font-size: 22px;
  color: rgb(95, 99, 104);
  cursor: pointer;
}
.profile-wrapper {
  height: 40px;
  width: 40px;
  border-radius: 50%;
}
</style>
