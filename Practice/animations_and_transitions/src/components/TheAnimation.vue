<template>
  <h2>Animation</h2>
  <div class="d-flex flex-column align-items-center">
    <transition>
      <img
        src="../assets/logo.png"
        class="logo"
        alt="logo"
        v-if="logoVisibility"
      />
    </transition>
    <!-- name="para" -->
    <transition
      :css="false"
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @before-leave="beforeLeave"
      @leave="leave"
      @after-leave="afterLeave"
      @enterCancelled="enterCancelled"
      @leaveCancelled="leaveCancelled"
    >
      <p v-if="logoVisibility">Hello, How are you?</p>
    </transition>
    <button type="button" class="btn btn-primary" @click="onClick">
      {{ logoVisibility ? "Hide" : "Show" }}
    </button>
    <!-- start: Dialog -->
    <button type="button" class="btn btn-primary" @click="openDialog">
      Open Dialog
    </button>
    <transition name="dialog">
      <base-dialog v-if="!close">
        <template #default>
          <p>Dialog Box</p>
        </template>
        <template #action>
          <button type="button" class="btn btn-primary" @click="onClose">
            Close
          </button>
        </template>
      </base-dialog>
    </transition>
    <!-- end: Dialog -->
    <!-- Transitioning between multiple elements-->
    <transition name="btn">
      <button
        type="button"
        class="btn btn-danger"
        @click="onShow"
        v-if="!dataVisibility"
      >
        Show
      </button>
      <button type="button" class="btn btn-danger" @click="onHide" v-else>
        Hide
      </button>
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BaseDialog from "./BaseDialog.vue";
export default defineComponent({
  components: {
    BaseDialog,
  },
  data() {
    return {
      logoVisibility: false,
      close: true,
      dataVisibility: false,
      enterInterval: 0,
      leaveInterval: 0,
    };
  },
  methods: {
    enterCancelled(el: any) {
      console.log("Enter Cancelled");
      console.log(el);
      clearInterval(this.enterInterval);
    },
    leaveCancelled(el: any) {
      console.log("Leave Cancelled");
      console.log(el);
      clearInterval(this.leaveInterval);
    },
    beforeEnter(el: any) {
      console.log("before Enter");
      console.log(el);
      el.style.opacity = 0;
    },
    enter(el: any, done: any) {
      console.log("Enter");
      console.log(el);
      let round = 1;
      this.enterInterval = setInterval(() => {
        el.style.opacity = round * 0.01;
        round++;
        if (round > 100) {
          clearInterval(this.enterInterval);
          done();
        }
      }, 20);
    },
    afterEnter(el: any) {
      console.log("After Enter");
      console.log(el);
    },
    beforeLeave(el: any) {
      console.log("before Leave");
      console.log(el);
      el.style.opacity = 1;
    },
    leave(el: any, done: any) {
      console.log("Leave");
      console.log(el);
      let round = 1;
      this.leaveInterval = setInterval(() => {
        el.style.opacity = 1 - round * 0.01;
        round++;
        if (round > 100) {
          clearInterval(this.leaveInterval);
          done();
        }
      }, 20);
    },
    afterLeave(el: any) {
      console.log("After Leave");
      console.log(el);
    },
    onClick() {
      this.logoVisibility = !this.logoVisibility;
    },
    onClose() {
      this.close = true;
    },
    openDialog() {
      this.close = !this.close;
    },
    onShow() {
      this.dataVisibility = true;
    },
    onHide() {
      this.dataVisibility = false;
    },
  },
});
</script>

<style scoped>
.logo {
  height: 150px;
  width: 150px;
}
.v-enter-to {
  opacity: 0;
  transform: translateX(0px);
}
.v-enter-active {
  transition: all 0.5s ease-in;
}
.v-enter-from {
  opacity: 1;
  transform: translateX(-30px);
}
.v-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}
.v-leave-active {
  transition: all 0.5s ease-out;
}
.v-leave-from {
  opacity: 1;
  transform: translateX(0px);
}

.para-enter-to {
  opacity: 0;
  transform: translateY(0px);
}
.para-enter-active {
  transition: all 0.5s ease-in;
}
.para-enter-from {
  opacity: 1;
  transform: translateY(-30px);
}
.para-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
.para-leave-active {
  transition: all 0.5s ease-out;
}
.para-leave-from {
  opacity: 1;
  transform: translateY(0px);
}

.dialog-enter-active {
  animation: dialog 0.3s ease-in;
}
.dialog-leave-active {
  animation: dialog 0.3s ease-in reverse;
}

.btn-enter-to {
  opacity: 0;
  transform: translateX(0px);
}
.btn-enter-active {
  transition: all 0.3s ease-in;
}
.btn-enter-from {
  orphans: 1;
  transform: translateX(-10px);
}
.btn-leave-active {
  transition: all 0.3s ease-in reverse;
}

@keyframes dialog {
  from {
    opacity: 0;
    transform: translateY(-50px) scale(0);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
</style>
