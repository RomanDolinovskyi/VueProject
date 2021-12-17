<template>
  <div>
    <div id="loaderWrapper" v-if="UserIsLoading">
      <div id="loaderLogin">Cyber Security</div>
    </div>
    <div id="container-registration-grid" v-else-if="!getUser">
      <div class="container-registration">
        <div class="container-registration-log-in-text">
          <span>Log in</span>
        </div>

        <div class="container-registration-text">
          <span>Email</span>
          <div
            v-if="submited && $v.userData.email.$error"
            class="invalid-feedback"
          >
            <span v-if="!$v.userData.email.required"
              >Email is required <i class="fas fa-times"></i
            ></span>
            <span v-else-if="!$v.userData.email.email"
              >Email is invalid <i class="fas fa-exclamation"></i
            ></span>
          </div>
        </div>

        <input
          type="text"
          placeholder="cs.tneu.edu.ua@gmail.com"
          class="container-registration-input"
          v-model="userData.email"
          :class="{ 'is-invalid': submited && $v.userData.email.$error }"
          @focus="serverError = ''"
        />

        <div class="container-registration-text">
          <span>Password</span>
          <div
            v-if="submited && ($v.userData.password.$error || serverError)"
            class="invalid-feedback"
          >
            <span v-if="serverError">
              {{ serverError }} <i class="fas fa-exclamation"></i
            ></span>
            <span v-else-if="!$v.userData.password.required"
              >Password is required <i class="fas fa-times"></i
            ></span>
            <span v-else-if="!$v.userData.password.minLength"
              >Too short <i class="fas fa-exclamation"></i
            ></span>
          </div>
        </div>

        <input
          type="password"
          placeholder="Enter you password"
          class="container-registration-input"
          v-model="userData.password"
          :class="{ 'is-invalid': submited && $v.userData.password.$error }"
          @focus="serverError = ''"
          @keydown="findEnterKey"
        />

        <div class="container-registration-button">
          <button
            class="container-registration-button-style"
            @click.stop.prevent="submit"
          >
            <span v-if="LoginIsLoading">Loading...</span>
            <span v-else>Log in</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers, mapState } from "vuex";
import { required, email } from "vuelidate/lib/validators";

const { mapActions, mapGetters } = createNamespacedHelpers("auth");

export default {
  name: "Login",
  data() {
    return {
      userData: {
        email: "",
        password: ""
      },
      serverError: "",
      submited: false
    };
  },
  validations: {
    userData: {
      email: { required, email },
      password: { required }
    }
  },
  computed: {
    ...mapGetters(["LoginIsLoading", "UserIsLoading", "getUser"]),
    ...mapState(["user"])
  },
  watch: {
    getUser(newUser) {
      if (newUser) {
        this.$router.replace("admin");
      }
    }
  },
  methods: {
    ...mapActions(["login", "del"]),
    findEnterKey(e) {
      e.keyCode === 13 && !this.LoginIsLoading && this.submit();
    },
    async submit() {
      try {
        if (this.serverError === "Sorry, we have some trouble on server")
          this.serverError = "";
        this.submited = true;
        this.$v.$touch();
        if (this.$v.$invalid || this.serverError) {
          return;
        }
        await this.login(this.userData);
      } catch (err) {
        switch (err.message) {
          case "Error: 401":
            this.serverError = "Invalid email or password";
            break;
          case "Error: 500":
            this.serverError = "Sorry, we have some trouble on server";
            break;
        }
      }
    }
  }
};
</script>

<style lang="scss">
#loaderWrapper {
  width: 100%;
  height: 95vh;
  position: absolute;
  background-color: #ffffff;
  #loaderLogin {
    height: 150px;
    width: 600px;
    background-color: #505050;
    background-image: url(./../assets/loader.gif);
    background-repeat: no-repeat;
    background-position: 5% 50%;
    background-size: 15%;
    border-radius: 80px;
    margin: 35vh auto;
    padding-right: 20px;
    text-align: right;
    font-size: 50px;
    color: white;
    line-height: 150px;
    text-transform: uppercase;
  }
}

@keyframes showFade {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

#container-registration-grid {
  width: 100%;
  height: 95vh;
  opacity: 0;
  transition: 1s opacity 1s ease-in-out;
  animation-name: showFade;
  animation-duration: 1s;
  animation-fill-mode: forwards;
}

.container-registration {
  padding-top: 11em;
  width: 25%;
  margin: 0 auto;
}

.container-registration-log-in-text {
  color: #333333;
  font-size: 3.5vw;
  font-weight: bold;
  padding-bottom: 10%;
}

.container-registration-input {
  width: 100%;
  height: 4vh;
  border: none;
  border-bottom: 1px solid;
  border-color: #e1e1e1;
  font-size: 1vw;
  transition: 0.4s;
  margin-bottom: 8%;
}

.container-registration-input:focus {
  transition-timing-function: ease-out;
  border-color: #333333;
}

.container-registration-text-password {
  display: flex;
  width: 100%;
  padding-top: 12%;
}

.container-registration-text-forgot-password {
  text-align: end;
  width: 100%;
  font-weight: bold;
  font-size: 0.8vw;
}

.container-registration-text-forgot-password a {
  color: #748692;
}

.container-registration-text {
  display: flex;
  color: #bbbbbb;
  justify-content: space-between;
  font-weight: bold;
  font-size: 1vw;
}
.invalid-feedback {
  display: block;
  text-align: right;
  color: #d95c5c;
}

input[type="text"]::-webkit-input-placeholder {
  color: #d5d5d5;
  font-size: 1vw;
}

input[type="password"]::-webkit-input-placeholder {
  color: #d5d5d5;
  font-size: 1vw;
}

.is-invalid {
  border-bottom: 1px solid #d95c5c;
}
/* container registration button */

.container-registration-button {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}

.container-registration-button-style {
  width: 40%;
  margin-top: 1%;
  margin-left: 0 auto;
  background-color: #acacac;
  padding-bottom: 3%;
  padding-top: 3%;
  border: none;
  text-align: center;
  border-radius: 10px;
  color: #ffffff;
  font-size: 0.8vw;
  font-weight: bold;
  transition: 0.4s;
}

.container-registration-button-style:hover {
  cursor: pointer;
  background-color: #949494;
  transition-timing-function: ease-out;
}
</style>
