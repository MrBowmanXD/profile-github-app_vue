<template>
  <div class="container">
    <form class="run" @submit.prevent="sendForm">
      <div v-if="showInput" class="input-div center">
        <input
          id="username"
          class="username"
          type="text"
          :placeholder="placeholder"
          v-model="userName"
          autofocus
        />
      </div>
      <button
        id="gen"
        class="btn generate"
        :class="{ hidden: !showInput }"
        type="submit"
        @click="showDisplay"
      >
        <b>Submit</b>
      </button>
    </form>
    <div class="center">
      <button
        class="btn generate__input"
        :class="{ hidden: showInput }"
        @click="showInput = !showInput"
      >
        <b>Generate</b>
      </button>
    </div>
  </div>
  <div class="overlay hidden"></div>
  <ContainerDisplay :user="user" :class="{ hidden: hideDisplay }" />
  <div class="center">
    <button
      class="btn clear center"
      :class="{ hidden: hideDisplay }"
      @click="showDisplay"
      type="button"
    >
      <b>Clear</b>
    </button>
  </div>

  <footer class="footer"></footer>
</template>

<script>
import { mapActions } from "vuex";
import ContainerDisplay from "../components/ContainerDisplay";
import { User } from "../models/User";

export default {
  name: "HomePage",
  components: { ContainerDisplay },
  data() {
    return {
      placeholder: "Enter your Github username and click on generate",
      showInput: false,
      hideDisplay: true,
      userName: "",
      user: User,
    };
  },
  methods: {
    ...mapActions({
      getUser: "getUser",
    }),
    async sendForm() {
      this.user = await this.getUser(this.userName);
    },
    showDisplay() {
      this.hideDisplay = !this.hideDisplay;
    },
  },
};
</script>

<style scoped></style>
