<template>
  <div class="d-flex flex-column align-items-center">
    <!-- start: card -->
    <div class="card mt-3">
      <!-- start: card body -->
      <ul class="card-body">
        <div class="d-flex justify-content-between">
          <li><span class="fw-bold">Firstname: </span>{{ firstname }}</li>
          <div class="d-flex">
            <figure class="icon me-3" @click="$emit('updateUser', id)">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-pencil"
                viewBox="0 0 16 16"
              >
                <path
                  d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"
                />
              </svg>
            </figure>
            <figure class="icon" @click="$emit('deleteUser', id)">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="red"
                class="bi bi-x-square"
                viewBox="0 0 16 16"
              >
                <path
                  d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"
                />
                <path
                  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                />
              </svg>
            </figure>
          </div>
        </div>
        <li><span class="fw-bold">Lastname: </span>{{ lastname }}</li>
        <li><span class="fw-bold">Gender: </span>{{ gender }}</li>
        <li><span class="fw-bold">Skill: </span>{{ skill }}</li>
      </ul>
      <!-- end: card body -->
    </div>
    <!-- end: card -->
  </div>
</template>
<script>
export default {
  emits: ["deleteUser", "updateUser"],
  props: ["id", "firstname", "lastname", "gender", "skill"],
};
</script>
<style scoped>
.card {
  width: 600px;
}
.icon {
  cursor: pointer;
}
</style>
