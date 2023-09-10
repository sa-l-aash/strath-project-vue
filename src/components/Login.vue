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
                    <!-- the required property checks if the text field is filled,
                    if it is not it displays a snackbar urging the user to fill it-->
                    <input
                      autocomplete="off"
                      type="text"
                      name="email"
                      id="email"
                      class="form-control"
                      v-model="email"
                      required
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
                      required
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
.text-center {
  margin-top: 20px;
}
.password-input {
  position: relative;
}

#body {
  background-color: rgb(247, 245, 251);
  height: 500px; /* Set the desired height for the scrollable container */
  overflow: auto; /* Enable scrolling if content overflows the container */
}
.form-group {
  margin-top: 20px;
}
.form-control {
  margin-top: 2px;
  height: 40px;
  width: 520px;
  border: none;
  outline: none;
  border-radius: 15px;
  padding: 1em;
  background-color: rgb(247, 245, 251);
  box-shadow: inset 2px 5px 10px rgba(0, 0, 0, 0.3);
  transition: 300ms ease-in-out;
}
.form-control:focus {
  background-color: white;
  transform: scale(1.05);
  box-shadow: 13px 13px 100px #969696, -13px -13px 100px #ffffff;
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
