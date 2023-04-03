Vue.createApp({
  data() {
    return {
      name: "",
      para: "",
    };
  },
  methods: {
    /**
     * @description 'for alert message'
     * @return alert()
     */
    showAlert() {
      alert("This is an alert window");
    },
    /**
     * @description 'set name'
     */
    setName(event) {
      this.name = event.target.value;
    },
    /**
     *
     * @param event
     */
    setNameonEnter(event) {
      this.para = event.target.value;
    },
  },
}).mount("#assignment");
