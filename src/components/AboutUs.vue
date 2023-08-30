<template>
  <navigationbar />
  <body class="body">
    <div id="text">
      <h1 id="waste">#0#Waste</h1>
      <h4>We work today for a better tomorrow</h4>
      <h2 id="mission">Our Mission</h2>
      <h4 id="missionText">
        To connect industries preventing them from dumping industrial waste on
        water bodies hence increasing the population of marine plants which
        produce 50 to 85% of the oxygen found in air leading to a reduction in
        global warming.
      </h4>
      <h2 id="mission">Words from the founders</h2>
      <h4 id="missionText">
        As the founder of #0# Waste I would like to encourage industries all
        over the world to use this platform and reduce the amount of waste
        material dumped into water bodies because sooner or later we will face
        the consequences of our actions and regret them heavily.
      </h4>
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
  height: fit-content;
  overflow: auto; /* Enable scrolling if content overflows the container */
  justify-content: center;
}
#waste {
  margin-top: 40px;
}
#text {
  margin-top: 10px;
  justify-content: center;
  text-align: center;
}
#mission {
  margin-top: 40px;
  padding-top: 20px;
}
#missionText {
  margin-top: 30px;
  margin-left: 200px;
  margin-right: 200px;
}
</style>
