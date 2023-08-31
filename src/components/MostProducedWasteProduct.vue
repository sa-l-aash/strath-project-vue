<template>
  <body class="site">
    <navigationbar />
    <div class="body1">
      <sliding-text id="animation" :text="hello">
        <h2 id="content">Most produced waste product in Africa</h2>
        <div id="text">
          <h3 id="title1">MSW</h3>
          <h4>
            Which in full is Municipal solid waste .This includes residential,
            commercial, and industrial waste. MSW is the most common type of
            waste produced in Africa, accounting for about 70% of all waste.
          </h4>
        </div>

        <div id="text">
          <h3 id="title2">Agricultural waste</h3>
          <h4>
            This includes crop residues, animal manure, and food waste.
            Agricultural waste is the second most common type of waste produced
            in Africa, accounting for about 20% of all waste.
          </h4>
        </div>

        <div id="text">
          <h3 id="title3">Hazardous waste</h3>
          <h4>
            This includes medical waste, industrial waste, and electronic waste.
            Hazardous waste is the least common type of waste produced in
            Africa, accounting for about 10% of all waste.
          </h4>
        </div>
      </sliding-text>
    </div>
  </body>
</template>

<script>
import navigationbar from "./Navigation.vue";
import SlidingText from "./SlidingText.vue"; // Import the SlidingText component

export default {
  data() {
    return {
      hello: "Hello, World",
    };
  },
  components: {
    SlidingText,
    navigationbar,
  },
};
</script>
<style scoped>
.site {
  background-image: url("https://images.pexels.com/photos/3174349/pexels-photo-3174349.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load");
  background-repeat: no-repeat; /* Prevents the background image from repeating */
  background-size: cover; /* Scales the background image to cover the container */
  height: 900px; /* Set the desired height for the scrollable container */
  overflow: auto; /* Enable scrolling if content overflows the container */
}
#title1 {
  background-color: rgb(76, 185, 68, 0.8);
  border-radius: 20px;

  margin-right: 25px;
}
#title2 {
  background-color: rgb(76, 185, 68, 0.8);
  border-radius: 20px;
  padding-left: 15px;
  padding-right: 15px;
  margin-right: 25px;
}
#title3 {
  background-color: rgb(76, 185, 68, 0.8);
  border-radius: 20px;
  padding-left: 15px;
  padding-right: 15px;
  margin-right: 25px;
}
#content {
  margin-top: 40px;
  text-align: center;
}
.body1 {
  margin-top: 35px;
  margin-right: 50px;
  margin-left: 50px;
}
#text {
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.7);
  margin-top: 20px;
  margin-left: 20px;
  margin-right: 20px;
  display: flex;
}
</style>
