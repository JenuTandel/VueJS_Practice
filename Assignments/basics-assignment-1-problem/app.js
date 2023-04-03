Vue.createApp({
  data() {
    return {
      name: "Jinal Tandel",
      age: 26,
      imageUrl:
        "https://images.unsplash.com/photo-1678872537245-296b738873ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    };
  },
  methods: {
    /**
     * @description 'generate random number'
     * @returns Math.random()
     */
    generateRandomNum() {
      return Math.random();
    },
  },
}).mount("#assignment");
