Vue.createApp({
  data() {
    return {
      totalNumber: 0,
    };
  },
  watch: {
    check() {
      setTimeout(() => {
        const that = this;
        that.totalNumber = 0;
        console.log("a", this.totalNumber);
      }, 5000);
    },
  },
  computed: {
    check() {
      if (this.totalNumber > 37) {
        return " Too much!";
      } else if (this.totalNumber == 37) {
        return this.totalNumber;
      } else {
        return " Not there yet";
      }
    },
  },
  methods: {
    add(number) {
      this.totalNumber = this.totalNumber + number;
      console.log(this.totalNumber);
    },
  },
}).mount("#assignment");
