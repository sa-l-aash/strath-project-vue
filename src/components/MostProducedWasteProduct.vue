<template>
  <div class="site">
    <navigationbar />
    <div class="content">
      <sliding-text class="text" id="sliding-text"
        >Most produced waste product in Africa</sliding-text
      >
      <div class="text">
        <sliding-text id="sliding-text">MSW</sliding-text>
        <sliding-text2 id="sliding-text2">
          <h4>
            Which in full is Municipal solid waste. This includes residential,
            commercial, and industrial waste. MSW is the most common type of
            waste produced in Africa, accounting for about 70% of all waste.
          </h4>
        </sliding-text2>
      </div>
      <div class="text">
        <sliding-text id="sliding-text">Agricultural waste</sliding-text>
        <sliding-text2 id="sliding-text2">
          <h4>
            This includes crop residues, animal manure, and food waste.
            Agricultural waste is the second most common type of waste produced
            in Africa, accounting for about 20% of all waste.
          </h4>
        </sliding-text2>
      </div>
      <div class="text">
        <sliding-text id="sliding-text">Hazardous waste</sliding-text>
        <sliding-text2 id="sliding-text2">
          <h4>
            This includes medical waste, industrial waste, and electronic waste.
            Hazardous waste is the least common type of waste produced in
            Africa, accounting for about 10% of all waste.
          </h4>
        </sliding-text2>
      </div>
    </div>
  </div>
</template>

<script>
import navigationbar from "./Navigation.vue";
import SlidingText from "./SlidingText.vue"; // Import the SlidingText component
import SlidingText2 from "./SlidingText2.vue"; // Import the SlidingText2 component

export default {
  components: {
    SlidingText,
    SlidingText2,
    navigationbar,
  },
};
</script>

<style scoped>
.site {
  background-image: url("https://images.pexels.com/photos/938045/pexels-photo-938045.jpeg?auto=compress&cs=tinysrgb&w=600");
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
.text {
  font-size: 25px;
  margin-top: 30px;
  margin-bottom: 20px;
  font-weight: bold;
}
/* Apply specific styles for sliding-text and sliding-text2 */
#sliding-text {
  font-size: 25px;
  font-weight: bold;
}

#sliding-text2 {
  margin-top: 20px;
  border-radius: 20px;
  margin-left: 20px;
  margin-right: 20px;
}
</style>
