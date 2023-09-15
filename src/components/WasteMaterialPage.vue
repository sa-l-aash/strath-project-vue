<template>
  <div class="site">
    <navigationbar />
    <div class="content">
      <!-- this is the search bar specifically for this page only -->
      <div class="search">
        <input v-model="searchQuery" placeholder="Search..." />
        <button @click="search" type="search" aria-label="Search">Search</button>
      </div>
      <!-- this table displays company details allowing other companies to contact them -->
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Company name</th>
            <th scope="col">Company email</th>
            <th scope="col">business number</th>
            <th scope="col">Company location</th>
            <th scope="col">Waste material produced</th>
            <th scope="col">Amount in tones</th>
          </tr>
        </thead>
        <tbody>
          <!-- this displays the data found in the table user in the database -->
          <tr v-for="user in users" :key="user.id">
            <td>{{ user.id }}</td>
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.phone_number }}</td>
            <td>{{ user.country }}</td>
            <td>{{ user.waste_material_produced }}</td>
            <td>{{ user.amount }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import navigationbar from "./Navigation.vue";
//here we import axios so as to talk to the back-end side
import axios from "axios";

export default {
  data() {
    return {
      users: [],
      errors: [],
      baseUrl: "http://127.0.0.1:8000/api",
      searchQuery: "",
    };
  },
  components: {
    // here we define the navigationbar
    // component to be used in this page
    navigationbar,
  },
  //this is the function that displays the data in the table users
  //but first it checks if the user has a authentication token
  //if not it will not display the table data
  async created() {
    try {
      //Authenticate request
      const token = localStorage.getItem("authToken");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      //if the above authentication function works it will then display the user table
      const response = await axios.get(this.baseUrl + "/readAllUsers", config);
      this.users = response.data.response;
    } catch (e) {
      this.errors.push(e);
    }
  },

  methods: {
    //this is the search function that filters data according to what is searched
    //but it also checks for a token
    async search() {
      try {
        const token = localStorage.getItem("authToken");
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };

        // Perform the search request by passing the searchQuery as a parameter
        const response = await axios.get(
          `${this.baseUrl}/searchUsers?query=${this.searchQuery}`,
          config
        );

        this.users = response.data.response;
      } catch (e) {
        this.errors.push(e);
      }
    },
  },
};
</script>
<style scoped>
.search {
  display: flex;
  padding-left: 100%;
  justify-content: right;
}
.site {
  /* background-image: url("https://images.pexels.com/photos/2952809/pexels-photo-2952809.jpeg?auto=compress&cs=tinysrgb&w=600");  */
  background-repeat: no-repeat;
  background-size: cover;
  height: 900px;
  overflow: auto;
}

.content {
  color: rgb(255, 255, 255);
  margin-top: 50px;
  text-align: center;
}
</style>
