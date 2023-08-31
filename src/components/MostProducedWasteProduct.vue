<template>
  <body class="site">
    <navigationbar />
    <div class="body1">
      <sliding-text id="animation" :text="hello">
        <h2 id="content">Most produced waste product in Africa</h2>
      </sliding-text>

      <div id="text">
        <sliding-text id="animation" :text="hello">
          <h3 id="title1">MSW</h3>
        </sliding-text>

        <sliding-text2 id="animation" :text="hi">
          <h4>
            Which in full is Municipal solid waste .This includes residential,
            commercial, and industrial waste. MSW is the most common type of
            waste produced in Africa, accounting for about 70% of all waste.
          </h4>
        </sliding-text2>
      </div>

      <div id="text">
        <sliding-text id="animation" :text="hello">
          <h3 id="title2">Agricultural waste</h3>
        </sliding-text>
        <sliding-text2 id="animation" :text="hi">
          <h4>
            This includes crop residues, animal manure, and food waste.
            Agricultural waste is the second most common type of waste produced
            in Africa, accounting for about 20% of all waste.
          </h4>
        </sliding-text2>
      </div>

      <div id="text">
        <sliding-text id="animation" :text="hello">
          <h3 id="title3">Hazardous waste</h3>
        </sliding-text>
        <sliding-text2 id="animation" :text="hi">
          <h4>
            This includes medical waste, industrial waste, and electronic waste.
            Hazardous waste is the least common type of waste produced in
            Africa, accounting for about 10% of all waste.
          </h4>
        </sliding-text2>
      </div>
    </div>
  </body>
</template>

<script>
import navigationbar from "./Navigation.vue";
import SlidingText from "./SlidingText.vue"; // Import the SlidingText component
import SlidingText2 from "./SlidingText2.vue"; // Import the SlidingText component

export default {
  data() {
    return {
      hello: "Hello, World",
      hi: "hi",
    };
  },
  components: {
    SlidingText2,
    SlidingText,
    navigationbar,
  },
};
</script>
<style scoped>
.site {
 
  background-image: url("https://images.pexels.com/photos/938045/pexels-photo-938045.jpeg?auto=compress&cs=tinysrgb&w=600");
  background-repeat: no-repeat; /* Prevents the background image from repeating */
  background-size: cover; /* Scales the background image to cover the container */
  height: 900px; /* Set the desired height for the scrollable container */
  overflow: auto; /* Enable scrolling if content overflows the container */
}
#title1 {
  margin-top: 25px;
  /* background-color: rgb(76, 185, 68, 0.8); */
  border-radius: 20px;
  padding-left: 15px;
  padding-right: 15px;
  margin-right: 25px;
  text-align: center;
}
#title2 {
  margin-top: 25px;

  /* background-color: rgb(76, 185, 68, 0.8); */
  border-radius: 20px;
  padding-left: 15px;
  padding-right: 15px;
  margin-right: 25px;
  text-align: center;
}
#title3 {
  margin-top: 25px;

  /* background-color: rgb(76, 185, 68, 0.8); */
  border-radius: 20px;
  padding-left: 15px;
  padding-right: 15px;
  margin-right: 25px;
  text-align: center;
}
#content {
  color: ghostwhite;
  margin-top: 40px;
  text-align: center;
}
.body1 {
  margin-top: 35px;
  margin-right: 100px;
  margin-left: 100px;
}
#text {
  color: ghostwhite;
  border-radius: 20px;
  /* background-color: rgba(255, 255, 255, 0.7); */
  margin-top: 30px;
  margin-left: 20px;
  margin-right: 20px;
  /* display: flex; */
}
</style>
