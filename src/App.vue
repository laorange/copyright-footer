<script setup lang="ts">
import CopyrightFooter from "./components/CopyrightFooter.vue";
import packageJson from "../package.json";
</script>

<template>
  <h1>----- 1 -----</h1>
  <h1>----- 2 -----</h1>
  <h1>----- 3 -----</h1>
  <h1>----- 4 -----</h1>
  <h1>----- 5 -----</h1>
  <h1>----- 6 -----</h1>
  <h1>----- 7 -----</h1>
  <h1>----- 8 -----</h1>
  <h1>----- 9 -----</h1>
  <CopyrightFooter project-url="https://github.com/laorange/copyright-footer" :version="packageJson.version"/>
</template>

<style scoped>

</style>
