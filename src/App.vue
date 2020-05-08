<template>
  <div id="app">
    <h3>Got jokes?</h3>
    <div class>
      <button class="btn btn-primary" @click="initJokes">Add Random Jokes</button>
      {{$store.state}}
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "App",
  methods: mapActions(['initJokes'])
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
</style>
