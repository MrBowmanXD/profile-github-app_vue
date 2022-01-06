<template>
  <div class="containerDisplay">
    <div class="TopDisplay">
      <img class="img" :src="user.avatarUrl" alt="Avatar of the user" />
      <h1 class="usernameDisplay">{{ user.name }}</h1>
      <p class="website"><b>website:</b></p>
      <a :href="user.blog">{{ user.blog }}</a>
      <p><b>bio:</b> {{ user.bio }}</p>
      <p><b>Location:</b> {{ user.location }}</p>
      <p><b>Public Repositories:</b> {{ user.publicRepos }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContainerDisplay",

  props: {
    user: { type: Object, required: true },
  },
};
</script>

<style scoped></style>
