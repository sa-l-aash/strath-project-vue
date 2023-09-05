<template>
  <div class="site">
    <navigationbar />
    <div class="content"></div>
  </div>
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
.site {
  background-image: url("");
  background-repeat: no-repeat;
  background-size: cover;
  height: 900px;
  overflow: auto;
}

.content {
  color: ghostwhite;
  margin-top: 50px;
  text-align: center;
}
</style>
