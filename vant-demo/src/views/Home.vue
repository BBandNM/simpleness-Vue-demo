
<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
   
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <button @click="go"></button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  },
  methods: {
    go(){
      this.$router.push('/about')
    }
  },
};
</script>
