<template>
  <div>
    <active-element
      :title="activeTopic && activeTopic.title"
      :description="activeTopic && activeTopic.description"
    ></active-element>
    <!-- <knowledge-base @select-topic="SelectTopic"></knowledge-base> -->
    <knowledge-base></knowledge-base>
  </div>
</template>

<script>
export default {
  data() {
    return {
      topics: [
        {
          id: "angular",
          title: "Angular",
          description:
            "Angular is an application-design framework and development platform for creating efficient and sophisticated single-page apps.",
        },
        {
          id: "vue",
          title: "Vue JS",
          description:
            "Vue (pronounced /vjuː/, like view) is a JavaScript framework for building user interfaces. It builds on top of standard HTML, CSS, and JavaScript and provides a declarative and component-based programming model that helps you efficiently develop user interfaces, be they simple or complex.",
        },
        {
          id: "react",
          title: "React",
          description:
            "React is a JavaScript library for rendering user interfaces (UI). UI is built from small units like buttons, text, and images.",
        },
      ],
      activeTopic: null,
    };
  },
  provide() {
    return {
      topics: this.topics,
      selectTopic: this.SelectTopic,
    };
  },
  methods: {
    SelectTopic(topicId) {
      this.activeTopic = this.topics.find((topic) => topic.id === topicId);
      console.log(this.activeTopic);
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
}
body {
  margin: 0;
}
</style>
