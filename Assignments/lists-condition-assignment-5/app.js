Vue.createApp({
  data() {
    return {
      task: "",
      Alltasks: [],
      isVisible: true,
    };
  },
  computed: {
    buttonCaption() {
      return this.isVisible ? "Hide List" : "Show List";
    },
  },
  methods: {
    addTask() {
      this.Alltasks.push(this.task);
      this.task = "";
    },
    showList() {
      this.isVisible = !this.isVisible;
    },
  },
}).mount("#assignment");
