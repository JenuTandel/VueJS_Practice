Vue.createApp({
  data() {
    return {
      inputValue: "",
      anotherInputValue: "",
      paragraphVisible: true,
      //   user2Class: false,
    };
  },
  computed: {
    paragraphClass() {
      return {
        user1: this.inputValue == "user1",
        user2: this.inputValue == "user2",
        visible: this.paragraphVisible == true,
        hidden: this.paragraphVisible == false,
      };
    },
  },
  methods: {
    onToggle() {
      this.paragraphVisible = !this.paragraphVisible;
      console.log(this.paragraphVisible);
    },
  },
}).mount("#assignment");
