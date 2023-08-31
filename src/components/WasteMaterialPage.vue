<template>
  <navigationbar />
  <body class="body"></body>
</template>

<script>
import navigationbar from "./Navigation.vue";
export default {
  components: {
    navigationbar,
  },
};
</script>
<style scoped>
.body {
  background-color: rgb(247, 245, 251);
}
</style>
