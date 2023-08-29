<template>
  <navigationbar />
  <body class="body">
    <div id="text">
      <h1>#0#Waste</h1>
      <h4>We work today for a better tomorrow</h4>
    </div>
  </body>
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
  margin-top: 40px;
  overflow: auto; /* Enable scrolling if content overflows the container */
  justify-content: center;
}
#text{
  margin-top: 10px;
  justify-content: center;
text-align: center;
}
</style>
