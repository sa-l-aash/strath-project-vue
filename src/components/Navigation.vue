<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">#0# Waste</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link" href="/WasteMaterialPage">Waste material</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/MostSoldWasteProductPage">Most Sold </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/MostProducedWasteProductPage"
              >Most Produced
            </a>
          </li>
          <!-- Use v-if to conditionally show/hide the Login and Register buttons -->
          <li class="nav-item" v-if="!isLoggedIn">
            <a class="nav-link" href="/login">Login</a>
          </li>
          <li class="nav-item" v-if="!isLoggedIn">
            <a class="nav-link" href="/register">Register</a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="/aboutUs">About us</a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="/"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              More
            </a>
            <ul class="dropdown-menu">
              <!--NB the "<li></li>" only exists inside an "<ol></ol>"(odered list) or "<ul></ul>"(unodered list)-->
              <li><a class="dropdown-item" href="">Null</a></li>
              <li><a class="dropdown-item" href="">Null</a></li>
              <!-- <li><hr class="dropdown-divider" /></li>
                <li><a class="dropdown-item" href="/">Something else here</a></li> -->
            </ul>
          </li>
          <!-- Display the "Logout" link only if logged in -->
          <li class="nav-item" v-if="isLoggedIn">
            <a class="nav-link" @click="logout" href="/">Logout</a>
          </li>
        </ul>

        <form class="d-flex" role="search">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      isLoggedIn: false, // Set this value based on the user's authentication status
    };
  },

  methods: {
    async logout() {
      const response = await axios.post("http://127.0.0.1:8000/api/logout", {});
      // Perform logout logic here, e.g., making an API request to log out

      // After successful logout, navigate to the home page
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>

.navbar-collapse{
  overflow-y: auto
}
/* this is the search bar */
.d-flex {
  width: 300px;
}
.navbar-brand {
  color: black;
  font-weight: bolder;
}
.nav-link {
  color: black;
  font-weight: bolder;
}

.container-fluid {
  background-color: rgb(76, 185, 68);
  position: absolute;
  padding-top: 40px;
  padding-bottom: 5px;
  margin-top: 0px;
  margin-bottom: 0px;
}
.btn-outline-success {
  font-weight: bolder;
  color: black;
  background-color: rgb(76, 185, 68);
}
</style>
