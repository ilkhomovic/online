<template>
  <div id="app">
    <navbar />
    <router-view/>
    <appFooter />
  </div>
</template>

<script>
import navbar from "./components/navbar";
import appFooter from "./components/app-footer"

export default {
  components: {
    navbar,
    appFooter
  }
}
</script>

<style>




</style>
