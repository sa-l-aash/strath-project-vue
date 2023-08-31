<template>
  <body class="site">
    <navigationbar />
    <div class="body1">
      <sliding-text id="animation" :text="hello">
        <h2 id="content">Most sold waste product in Africa</h2>
        <div id="text">
          <h3 id="title1">Plastic</h3>
          <h4>
            Plastic is a major pollutant in Africa, and it is often recycled and
            sold to be used in other products. Plastic waste can be used to make
            new products such as furniture.
          </h4>
        </div>

        <div id="text">
          <h3 id="title2">Metal</h3>
          <h4>
            Metal is another valuable waste product that can be recycled and
            sold. Metal waste can be used to make new products such as cars,
            appliances, and jewelry.
          </h4>
        </div>

        <div id="text">
          <h3 id="title3">Paper</h3>
          <h4>
            Paper is a renewable resource, and it can be recycled and sold to be
            used to make new products such as cardboard.
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
  background-image: url("https://images.pexels.com/photos/2635064/pexels-photo-2635064.jpeg?auto=compress&cs=tinysrgb&w=600");
  background-repeat: no-repeat; /* Prevents the background image from repeating */
  background-size: cover; /* Scales the background image to cover the container */
  height: 900px; /* Set the desired height for the scrollable container */
  overflow: auto; /* Enable scrolling if content overflows the container */
}
#title1 {
  background-color: rgb(76, 185, 68, 0.8);
  border-radius: 20px;
  padding-left: 15px;
  padding-right: 15px;
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
