<template>
  <div id="app">
    <h3>Got jokes?</h3>
    <div class>
      <button class="btn btn-primary" @click="initJokes">Add Random Jokes</button>
      <button class="btn btn-primary" @click="addJoke">Add a Joke</button>
    </div>
    <br />
    <br />
    <br />
    <div class="col-md-12">
      <Joke v-for="(joke, idx) in $store.state.jokes" 
      :joke="joke" 
      :index="idx"
      :key="idx" />
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Joke from "./Joke.vue";

export default {
  name: "App",
  methods: mapActions(["initJokes", "addJoke"]),
  components: {
    Joke
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.btn {
  margin: 0 5px;
}

</style>
