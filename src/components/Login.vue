<template>
  <body id="body">
    <!--here we call the navigation bar-->
    <navigationbar />
    <div id="login">
      <div id="trial">
        <div class="container">
          <div
            id="login-row"
            class="row justify-content-center align-items-center"
          >
            <div id="login-column" class="col-md-6">
              <div id="login-box" class="col-md-12">
                <form @submit.prevent="login">
                  <h3 class="text-center text-info">Login</h3>
                  <div class="form-group">
                    <label for="email" class="text-info"
                      >Company Email Address:</label
                    ><br />
                    <input
                      type="text"
                      name="email"
                      id="email"
                      class="form-control"
                      v-model="email"
                    />
                  </div>
                  <div class="form-group">
                    <label for="password" class="text-info">Password:</label
                    ><br />
                    <input
                      type="password"
                      name="password"
                      id="password"
                      class="form-control"
                      v-model="password"
                    />
                  </div>
                  <div class="form-group">
                    <label for="remember-me" class="text-info"
                      ><span>Remember me</span> <span
                        ><input
                          id="remember-me"
                          name="remember-me"
                          type="checkbox" /></span></label
                    ><br />
                    <div id="buttons">
                      <!--below "login-button" is the specific class name for this button while "btn btn-info btn-md" is the general class name-->
                      <input
                        class="btn btn-info btn-md login-button"
                        type="submit"
                        name="submit"
                        value="Login"
                      />
                      <br />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
import axios from "axios";
import navigationbar from "./Navigation.vue";
import router from "../main";
export default {
  components: {
    navigationbar,
  },

  data() {
    return {
      email: "",
      password: "",
      baseUrl: "http://127.0.0.1:8000/api",
    };
  },

  methods: {
    async login() {
      const response = await axios.post(this.baseUrl + "/login", {
        email: this.email,
        password: this.password,
      });
      console.log("trying to authenticate", this.name);
      const token = response.data.token;
      localStorage.setItem("authToken", token);
      setTimeout(() => {
        router.push("/");
      }, 5000);
    },
  },
};
</script>

<!--scoped means that these styles only apply to id's or classes in this file-->
<style scoped>
.password-input {
  position: relative;
}

#body {
  height: 500px; /* Set the desired height for the scrollable container */
  overflow: auto; /* Enable scrolling if content overflows the container */
}
.form-group {
  margin-top: 20px;
}
#buttons {
  display: flex;
  margin-top: 15px;
}

.login-button {
  margin-right: 10px;
}
.register-button {
  margin-left: 11px;
}
</style>
