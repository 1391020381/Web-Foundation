<template>
  <div class="home">
    <img alt="Vue logo"
         src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <custom-button></custom-button>
    <A></A>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import customButton from "@/components/customButton.vue";
import A from "@/components/A.vue";

export default Vue.extend({
  name: "home",
  components: {
    HelloWorld,
    customButton,
    A
  },
  provide: {
    name: "行云流水justdoit"
  }
});
</script>
