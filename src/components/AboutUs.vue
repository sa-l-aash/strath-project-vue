<!-- this page is expensive -->

<template>
  <body class="site">
    <navigationbar />
    <div id="body">
      <div id="text1">
        <sliding-text id="animation" :text="hello">
          <h1 id="waste">#0#Waste</h1>
        </sliding-text>
        <sliding-text2 id="animation" :text="hi">
          <h4 id="text">We work today for a better tomorrow</h4>
        </sliding-text2>
        <sliding-text id="animation" :text="hello">
          <h2 id="title">Our title</h2>
        </sliding-text>
        <sliding-text2 id="animation" :text="hi">
          <h4 id="text">
            To connect industries preventing them from dumping industrial waste
            on water bodies hence increasing the population of marine plants
            which produce 50 to 85% of the oxygen found in air leading to a
            reduction in global warming.
          </h4>
        </sliding-text2>
        <sliding-text id="animation" :text="hello">
          <h2 id="title">Words from the founders</h2>
        </sliding-text>
        <sliding-text2 id="animation" :text="hi">
          <h4 id="text">
            As the founder of #0# Waste I would like to encourage industries all
            over the world to use this platform and reduce the amount of waste
            material dumped into water bodies because sooner or later we will
            face the consequences of our actions and regret them heavily.
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
  background-image: url("https://images.pexels.com/photos/3480494/pexels-photo-3480494.jpeg?auto=compress&cs=tinysrgb&w=600");
  background-repeat: no-repeat; /* Prevents the background image from repeating */
  background-size: cover; /* Scales the background image to cover the container */
  height: 900px; /* Set the desired height for the scrollable container */
  overflow: auto; /* Enable scrolling if content overflows the container */
}
#body {
  color: ghostwhite;
  margin-top: 40px;
  height: fit-content;
  overflow: auto; /* Enable scrolling if content overflows the container */
  justify-content: center;
}
#waste {
  margin-top: 40px;
  font-style: oblique;
}
#text1 {
  
  margin-top: 10px;
  justify-content: center;
  text-align: center;
}
#title {
  
  margin-top: 40px;
  padding-top: 20px;
}
#text {
  margin-top: 30px;
  margin-left: 200px;
  margin-right: 200px;
}
</style>
