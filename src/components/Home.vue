<template>
  <div class="site">
    <navigationbar />
    <body class="body">
      <sliding-text id="animation" :text="hello">
        <h1 id="title">#0#Waste</h1>
        <div id="soldInfoProduced">
          <h3 id="mostSoldWasteProduct">
            Most sold waste product.<br />1. Plastic <br />2. Metal <br />3.
            Paper
          </h3>

          <h4 id="info">
            If we are not careful our forests, rivers and oceans will be filled
            with waste leading to global warming and death of land and aquatic
            animals.
          </h4>
          <h3 id="mostProducedWasteProduct">
            Most produced waste product. <br />1. MSW <br />
            2. Agricultural waste <br />3. Hazardous waste
          </h3>
        </div>
      </sliding-text>
    </body>
    <div id="body2">
      <h1>Whats new?</h1>
      <h3>
        There’s always a lot happening at #0#Waste! You’ll find what you need to
        know here, whether it’s the announcement of a new recycling program, our
        latest sustainability tips, or a media story you may have missed.
      </h3>
    </div>

    <footer id="footer">#0# waste 2023. ALL RIGHTS RESERVED.</footer>
  </div>
</template>

<script>
//importing the navigation bar
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
#title {
  font-style: oblique;
  text-align: center;
  color: ghostwhite;
  font-weight: bolder;
  font-size: 40px;
}
#body2 {
  text-align: center;
  margin-left: 50px;
  margin-right: 50px;
}
#animation {
  margin-top: 40px;
  color: black;
}
.site {
  display: flex;
  flex-direction: column;
  height: 900px; /* Set the desired height for the scrollable container */
  overflow: auto; /* Enable scrolling if content overflows the container */
}

#soldInfoProduced {
 
  font-weight: bolder;
  color: ghostwhite;
  margin-top: 60px;
  text-align: center;
  display: flex;
  justify-content: space-between;
}
#mostSoldWasteProduct {
  padding-bottom: 30px;
  padding-top: 30px;
  border-width: 0ch;
  color: rgb(255, 255, 255);
  margin-left: 25px;
  border-radius: 20px;
  width: 30%;
  padding-right: 0px;
  padding-left: 0px;
  background-color: rgb(76, 185, 68, 0.9);
}
#mostProducedWasteProduct {
  padding-bottom: 30px;
  margin-right: 25px;
  padding-top: 30px;
  border-width: 0ch;
  color: rgb(255, 255, 255);
  border-radius: 20px;
  width: 30%;
  padding-right: 0px;
  padding-left: 0px;
  background-color: rgb(76, 185, 68, 0.9);
}

#info {
  width: 30%;
}
.body {
  background-repeat: no-repeat; /* Prevents the background image from repeating */
  background-size: cover; /* Scales the background image to cover the container */
  margin: 50px;
  margin-top: 38px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  background-image: url("https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2");
}
#footer {
  justify-items: center;
  padding: 8px;
  padding-bottom: 8px;
  margin-top: 40px;
  position: relative;
  text-align: center;
  background-color: rgb(76, 185, 68, 0.9);
}
</style>
