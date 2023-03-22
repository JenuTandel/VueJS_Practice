Vue.createApp({
  data() {
    return {
      name: "",
      para: "",
    };
  },
  methods: {
    showAlert() {
      alert("This is an alert window");
    },
    setName(event) {
      this.name = event.target.value;
    },
    setNameonEnter(event) {
      this.para = event.target.value;
    },
  },
}).mount("#assignment");
