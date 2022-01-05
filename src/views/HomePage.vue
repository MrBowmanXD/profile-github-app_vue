<template>
  <div class="container">
    <form class="run">
      <div v-if="userName" class="input-div center">
        <input
          id="username"
          class="username"
          type="text"
          :placeholder="placeholder"
          autofocus
        />
      </div>
      <button id="gen" class="btn generate hidden" type="submit">
        <b>Generate</b>
      </button>
    </form>
    <div class="center">
      <button class="btn generate__input" @click="userName = !userName">
        <b>Generate</b>
      </button>
    </div>
  </div>
  <div class="overlay hidden"></div>
  <div id="containerDisplay" class="containerDisplay"></div>
  <div class="center">
    <button class="btn clear center hidden" type="button">
      <b>Clear</b>
    </button>
  </div>
  <br />

  <footer class="footer"></footer>
</template>

<script>
export default {
  data() {
    return {
      placeholder: "Enter your Github username and click on generate",
      userName: false,
    };
  },
};
</script>

<style scoped></style>
