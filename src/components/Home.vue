<template>
  <div class="home-root">
    <navigationbar />
  </div>
  <body id="body">
    <div><h1>This is the home page</h1></div>
  </body>
  <footer>
    <div id="footer">#0# waste 2023. ALL RIGHTS RESERVED.</div>
  </footer>
</template>

<script>
//importing the navigation bar
import navigationbar from "./Navigation.vue";
export default {
  components: {
    navigationbar,
  },
};
</script>

<style scoped>
#body {
  background-color: rgb(247, 245, 251);
  margin-top: 40px;
  overflow: auto; /* Enable scrolling if content overflows the container */
}
#footer {
  padding-top: 8px;
  padding-bottom: 8px;
  margin-top: 40px;
  position: relative;
  text-align: center;
  background-color: rgb(76, 185, 68);
}
</style>
