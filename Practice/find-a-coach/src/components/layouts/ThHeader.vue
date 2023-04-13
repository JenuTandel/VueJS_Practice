<template>
  <div
    class="nav p-1 bg-primary d-flex justify-content-between align-items-center"
  >
    <h3>
      <router-link to="/" class="nav-link text-white">Find a Coach</router-link>
    </h3>
    <ul class="d-flex align-items-center">
      <li class="nav-item">
        <router-link to="/coaches" class="nav-link">All Coaches</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/requests" class="nav-link">Requests</router-link>
      </li>
    </ul>
  </div>
</template>

<style scoped>
a {
  color: white;
}

a:active,
a:hover,
a.router-link-active {
  color: black;
}
</style>
