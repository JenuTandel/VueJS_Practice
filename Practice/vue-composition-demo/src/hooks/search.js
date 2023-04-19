import { ref, computed, watch } from "vue";

export default function userSearch(items, searchProp) {
  const enteredSearchTerm = ref("");
  const activeSearchTerm = ref("");

  const availableItems = computed(() => {
    const users = ref([]);
    if (activeSearchTerm.value) {
      users.value = items.value.filter((item) =>
        item[searchProp].includes(activeSearchTerm.value)
      );
    } else if (items.value) {
      users.value = items.value;
    }
    return users.value;
  });

  function updateSearch(val) {
    enteredSearchTerm.value = val;
  }
  watch(enteredSearchTerm, function (val) {
    setTimeout(() => {
      if (val === enteredSearchTerm.value) {
        activeSearchTerm.value = val;
      }
    }, 300);
  });

  return { enteredSearchTerm, availableItems, updateSearch };
}
