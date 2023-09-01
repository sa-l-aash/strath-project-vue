<template>
  <div class="site">
    <navigationbar />
    <div class="content">
      <sliding-text class="text" id="sliding-text"
        >Most sold waste product in Africa</sliding-text
      >

      <div class="text">
        <sliding-text id="sliding-text">Plastic</sliding-text>
        <sliding-text2 id="sliding-text2">
          <h4>
            Plastic is a major pollutant in Africa, and it is often recycled and
            sold to be used in other products. Plastic waste can be used to make
            new products such as furniture.
          </h4>
        </sliding-text2>
      </div>

      <div class="text">
        <sliding-text id="sliding-text">Metal</sliding-text>
        <sliding-text2 id="sliding-text2">
          <h4>
            Metal is another valuable waste product that can be recycled and
            sold. Metal waste can be used to make new products such as cars,
            appliances, and jewelry.
          </h4>
        </sliding-text2>
      </div>

      <div class="text">
        <sliding-text id="sliding-text">Paper</sliding-text>
        <sliding-text2 id="sliding-text2">
          <h4>
            Paper is a renewable resource, and it can be recycled and sold to be
            used to make new products such as cardboard.
          </h4>
        </sliding-text2>
      </div>
    </div>
  </div>
</template>

<script>
import navigationbar from "./Navigation.vue";
import SlidingText from "./SlidingText.vue";
import SlidingText2 from "./SlidingText2.vue";

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
  background-image: url("https://images.pexels.com/photos/3264779/pexels-photo-3264779.jpeg?auto=compress&cs=tinysrgb&w=600");
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
