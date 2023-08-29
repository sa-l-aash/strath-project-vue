<template>
  <body id="body">
    <navigationbar />

    <div id="login">
      <div id="trial">
        <div class="container">
          <div
            id="login-row"
            class="row justify-content-center align-items-center"
          >
            <form @submit.prevent="register">
              <div id="login-column" class="col-md-6">
                <div id="login-box" class="col-md-12">
                  <h3 class="text-center text-info">Register</h3>
                  <div class="form-group">
                    <label for="name" class="text-info">Company Name:</label
                    ><br />
                    <input
                      type="text"
                      name="name"
                      id="name"
                      class="form-control"
                      v-model="name"
                      required
                    />
                  </div>
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
                      required
                    />
                  </div>
                  <div class="form-group">
                    <label for="country" class="text-info">Location:</label
                    ><br />
                    <input
                      type="text"
                      name="country"
                      id="country"
                      class="form-control"
                      v-model="country"
                      required
                    />
                  </div>
                  <div class="form-group">
                    <label for="waste_product_produced" class="text-info"
                      >Waste material Produced:</label
                    ><br />
                    <input
                      type="text"
                      name="waste_product_produced"
                      id="waste_product_produced"
                      class="form-control"
                      v-model="waste_product_produced"
                      required
                    />
                  </div>
                  <div class="form-group">
                    <label for="phone_number" class="text-info">Phone Number:</label
                    ><br />
                    <input
                      type="text"
                      name="phone_number"
                      id="phone_number"
                      class="form-control"
                      v-model="phone_number"
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
                    <label for="password_confirmation" class="text-info"
                      >Password confirmation:</label
                    ><br />
                    <input
                      type="password"
                      name="password_confirmation"
                      id="password_confirmation"
                      class="form-control"
                      v-model="password_confirmation"
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
                    <input
                      type="submit"
                      name="submit"
                      class="btn btn-info btn-md"
                      value="Register"
                    />
                  </div>
                </div>
              </div>
            </form>
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
      name: "",
      email: "",
      country: "",
      waste_product_produced: "",
      phone_number:"",
      password: "",
      password_confirmation: "",
    };
  },

  methods: {
    async register() {
      const response = await axios.post("http://127.0.0.1:8000/api/register", {
        name: this.name,
        email: this.email,
        password: this.password,
        password_confirmation: this.password_confirmation,
        subcounty_id: this.subcounty,
      });
      setTimeout(() => {
        router.push("/login");
      }, 5000);
    },
  },
};
</script>

<style>
body {
  height: 800px; /* Set the desired height for the scrollable container */
  overflow: auto; /* Enable scrolling if content overflows the container */
}
#trial {
  margin-top: 40px;
}
</style>
