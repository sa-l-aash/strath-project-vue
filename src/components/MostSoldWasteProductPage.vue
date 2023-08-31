<template>
  <body class="site">
    <navigationbar />
    <div class="body1">
      <sliding-text id="animation" :text="hello">
        <h2 id="content">Most sold waste product in Africa</h2>
      </sliding-text>
      <div id="text">
        <sliding-text id="animation" :text="hello">
          <h3 id="title">Plastic</h3>
        </sliding-text>
        <sliding-text2 id="animation" :text="hi">
          <h4>
            Plastic is a major pollutant in Africa, and it is often recycled and
            sold to be used in other products. Plastic waste can be used to make
            new products such as furniture.
          </h4>
        </sliding-text2>
      </div>
      <div id="text">
        <sliding-text id="animation" :text="hello">
          <h3 id="title">Metal</h3>
        </sliding-text>
        <sliding-text2 id="animation" :text="hi">
          <h4>
            Metal is another valuable waste product that can be recycled and
            sold. Metal waste can be used to make new products such as cars,
            appliances, and jewelry.
          </h4>
        </sliding-text2>
      </div>
      <div id="text">
        <sliding-text id="animation" :text="hello">
          <h3 id="title">Paper</h3>
        </sliding-text>
        <sliding-text2 id="animation" :text="hi">
          <h4>
            Paper is a renewable resource, and it can be recycled and sold to be
            used to make new products such as cardboard.
          </h4>
        </sliding-text2>
      </div>
    </div>
  </body>
</template>

<script>
import navigationbar from "./Navigation.vue";
import SlidingText from "./SlidingText.vue";
import SlidingText2 from "./SlidingText2.vue";

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
  background-image: url("https://images.pexels.com/photos/3264779/pexels-photo-3264779.jpeg?auto=compress&cs=tinysrgb&w=600");
  background-repeat: no-repeat; /* Prevents the background image from repeating */
  background-size: cover; /* Scales the background image to cover the container */
  height: 900px; /* Set the desired height for the scrollable container */
  overflow: auto; /* Enable scrolling if content overflows the container */
}
#title {
  margin-top: 40px;
  text-align: center;
  /* background-color: rgb(76, 185, 68, 0.8); */
  border-radius: 20px;
  padding-left: 15px;
  padding-right: 15px;
  margin-right: 25px;
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
  margin-top: 20px;
  margin-left: 20px;
  margin-right: 20px;
  /* display: flex; */
}
</style>
