<template>
  <div>
    <div class="change-password">
      <div class="new-password-style">
        <div class="input-info-top">
          <span>Old password</span>
        </div>
        <div class="password-string">
          <input
            type="password"
            placeholder="enter old password"
            class="new-password"
            :class="{ 'is-invalid': submited && $v.oldPassword.$error }"
            v-model="oldPassword"
            @focus="oldPasswordIsWrong = false"
          />
        </div>
        <div class="input-info-bottom">
          <span v-if="!$v.oldPassword.required && submited" class="is-warning"
            >Required</span
          >
          <span v-if="oldPasswordIsWrong" class="is-warning"
            >Wrong password</span
          >
        </div>
      </div>

      <div class="new-password-style">
        <div class="input-info-top">
          <span>New password</span>
        </div>
        <div class="password-string">
          <input
            v-model="newPassword"
            type="password"
            placeholder="enter new password"
            class="new-password"
            :class="{ 'is-invalid': submited && $v.newPassword.$error }"
          />
        </div>
        <div class="input-info-bottom">
          <span v-if="!$v.newPassword.required && submited" class="is-warning"
            >Required</span
          >
          <span
            v-else-if="!$v.newPassword.regexError && submited"
            class="is-warning"
            >Read rules below!</span
          >
        </div>
      </div>

      <div class="new-password-style">
        <div class="input-info-top">
          <span>Confirm password</span>
        </div>
        <div class="password-string">
          <input
            v-model="newPasswordAgain"
            type="password"
            placeholder="enter new password again"
            class="new-password"
            :class="{ 'is-invalid': submited && $v.newPasswordAgain.$error }"
          />
        </div>
        <div class="input-info-bottom">
          <span
            v-if="!$v.newPasswordAgain.sameAsPassword && submited"
            class="is-warning"
            >Passwords must match!</span
          >
        </div>
      </div>
    </div>
    <button id='confirm-change' @click="changePass" :disabled="getChangingPassword">
      Change password
    </button>

    <div class="passwords-must-alert">
      <i class="fas fa-exclamation-triangle"></i>
    </div>

    <div class="passwords-must">
      <span>Passwords <b>must:</b></span>

      <ul>
        <li>Be a minimum of eight (8) characters in length</li>
        <li>Be memorized; if a password is written down it must be secure</li>
        <li>
          Contain at least one (1) character from each three (3) of the
          following categories:
          <ul>
            <li>Uppercase letter (A-Z)</li>
            <li>Lowercase letter (a-z)</li>
            <li>Digit (0-9)</li>
          </ul>
        </li>
      </ul>

      <span>Passwords <b>must not:</b></span>

      <ul>
        <li>
          Contain a common proper name, login ID, email address, initials,
          first, middle or last name.
        </li>
        <li>
          Have been used in the last year or last three passwords, whichever is
          greater.
        </li>
      </ul>

      <span
        >It is strongly <b><i>recommended</i></b> that:</span
      >

      <ul>
        <li>
          Passwords are changed twice per year (e.g., when clocks are adjusted
          in the spring and fall).
        </li>
        <li>Each password chosen is new and different.</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { required, minLength, sameAs } from "vuelidate/lib/validators";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "AdminResetPassword",
  data() {
    return {
      oldPassword: "",
      newPassword: "",
      newPasswordAgain: "",
      regex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
      submited: false,
      oldPasswordIsWrong: false
    };
  },
  validations: {
    oldPassword: { required },
    newPassword: {
      required,
      minLength: minLength(8),
      regexError: function(value) {
        return this.regex.test(value);
      }
    },
    newPasswordAgain: { required, sameAsPassword: sameAs("newPassword") }
  },
  computed: {
    ...mapGetters("auth", ["getChangingPassword"])
  },
  methods: {
    ...mapActions("auth", ["changePassword"]),
    async changePass() {
      try {
        this.serverError = false;
        this.submited = true;
        this.$v.$touch();
        if (this.$v.$invalid) {
          return;
        }
        await this.changePassword({
          old_password: this.oldPassword,
          new_password: this.newPassword
        });
        this.$toasted.success(`Password successfully changed`, {
          theme: "bubble",
          icon: "check-circle",
          duration: 5000
        });
        this.oldPassword = "";
        this.newPassword = "";
        this.newPasswordAgain = "";
        this.submited = false;
      } catch (err) {
        switch (err.message) {
          case "Error: 500":
            this.$toasted.error(
              `Password didn't changed, we have some trouble on server`,
              {
                theme: "bubble",
                icon: "check-circle",
                duration: 5000
              }
            );
            break;
          case "Error: 400":
            this.oldPasswordIsWrong = true;
            break;
        }
      }
    }
  }
};
</script>

<style lang="scss">
#confirm-change {
  display: block;
  width: 137px;
  margin: 0px 120px 0 auto;
  border: none;
  border-radius: 5px;
  background-color: #505050;
  color: white;
  padding: 10px;
  cursor: pointer;
  background-position: center;
  background-size: 20%;
  background-repeat: no-repeat;
  &:disabled {
    background-image: url(./../../assets/loader.gif);
    background-color: #808080;
    text-indent: -9999em;
  }
}
.is-invalid {
  box-shadow: 0 2px 4px 0 rgb(255, 2, 2) !important;
}
.change-password {
  margin: 0 auto;
  width: 90%;
  display: flex;
  position: relative;
  .input-info-top {
    position: relative;
    display: flex;
    justify-content: space-between;
    padding: 0px 10px;
    margin-bottom: -7px;
    z-index: 2;
    span {
      font-size: 1.1vw;
      font-weight: bold;
      color: #505050;
      background-color: white;
    }
  }

  .input-info-bottom {
    position: relative;
    height: 1.1vw;
    display: flex;
    justify-content: flex-end;
    padding: 0px 10px;
    margin-top: -7px;
    z-index: 2;
    span {
      font-size: 1.1vw;
      font-weight: bold;
      color: red;
      background-color: white;
    }
  }

  .new-password-style {
    margin: 0 auto;
    width: 40%;
    padding: 5% 2% 1% 2%;
  }

  .new-password {
    margin-top: 1%;
    width: 100%;
    height: 5vh;
    border: 1px solid #efefef;
    border-radius: 5px;
  }

  input {
    padding-left: 5.5%;
    padding-top: 2%;
    transition: 0.4s;

    &:focus {
      transition-timing-function: ease-out;
      border-color: #505050;
    }
  }

  .password-string {
    display: flex;

    i {
      font-size: 1.6vw;
      position: absolute;
      margin-left: 21.5%;
      margin-top: 1.5vh;
      color: #d95c5c;
    }
  }
}

.passwords-must-alert {
  width: 100%;
  text-align: center;
  color: #d95c5c;
  font-size: 2.5vw;
  padding-top: 1%;
}

.passwords-must {
  padding-top: 1%;
  width: 55%;
  margin: 0 auto;
  font-size: 1vw;
  color: #505050;

  ul {
    margin-bottom: 2%;
    margin-top: 2%;
  }

  li {
    margin-left: 5%;
    margin-top: 0.5%;
    margin-bottom: 0.5%;
  }
}
</style>
