<template>
  <div class="site">
    <navigationbar />
    <div class="content">
      <h2>
        <sliding-text id="sliding-text">#0#Waste</sliding-text>
        <sliding-text2 id="sliding-text"
          >We work today for a better tomorrow</sliding-text2
        >
        <sliding-text id="sliding-text">Our Mission</sliding-text>
        <sliding-text2 id="sliding-text">
          To connect industries preventing them from dumping industrial waste on
          water bodies hence increasing the population of marine plants which
          produce 50 to 85% of the oxygen found in air leading to a reduction in
          global warming.
        </sliding-text2>
        <sliding-text id="sliding-text">Words from the founders</sliding-text>
        <sliding-text2>
          As the founder of #0# Waste I would like to encourage industries all
          over the world to use this platform and reduce the amount of waste
          material dumped into water bodies because sooner or later we will face
          the consequences of our actions and regret them heavily.
        </sliding-text2>
      </h2>
    </div>
  </div>
</template>

<script>
import navigationbar from "./Navigation.vue";
import SlidingText from "./SlidingText.vue"; // Import the SlidingText component
import SlidingText2 from "./SlidingText2.vue"; // Import the SlidingText component

export default {
  components: {
    SlidingText2,
    SlidingText,
    navigationbar,
  },
};
</script>

<style scoped>
.site {
  background-image: url("https://images.pexels.com/photos/3480494/pexels-photo-3480494.jpeg?auto=compress&cs=tinysrgb&w=600");
  background-repeat: no-repeat;
  background-size: cover;
  height: 900px;
  overflow: auto;
}

.content {
  color: ghostwhite;
  margin-top: 40px;
  text-align: center;
  padding: 20px;
}

/* Add top and bottom spacing to the sliding-text elements */
#sliding-text {
  margin-top: 30px; /* Adjust this value to control the top spacing */
  margin-bottom: 20px; /* Adjust this value to control the bottom spacing */
}
</style>
