<template>
  <div id="app">
    <h3>Got jokes?</h3>
    <div class>
      <button class="btn btn-primary" @click="initJokes">Add Random Jokes</button>
      <button class="btn btn-primary" @click="addJoke">Add a Joke</button>
    </div>
    <br />
    <!-- filtering for jokes -->
    <span v-for="(type, idx) in types" :key="idx">
      <input type="checkbox" :value="type" checked v-model="checkedTypes" />
      <label>{{type}}</label>&nbsp;&nbsp;&nbsp;
    </span>
    <br />
    <br />
    <div class="col-md-12">
      <Joke
        v-for="(joke, idx) in $store.state.jokes"
        :joke="joke"
        :index="idx"
        :key="idx"
        v-show="checkedTypes.includes(joke.type)"
      />
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Joke from "./Joke.vue";

export default {
  name: "App",
  data() {
    return {
      types: ["general", "knock-knock", "programming"],
      checkedTypes: ["general", "knock-knock", "programming"]
    };
  },
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

.btn, label {
  margin: 0 5px;
}
</style>
