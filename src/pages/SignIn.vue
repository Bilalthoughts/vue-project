<template>
  <div class="backgroundbody">
    <div class="CardBody">
      <div class="widthclass">
        <div class="flexclass">
          <div><b>Login</b></div>
          <div style="font-size: x-large">
            <span>&#128743; </span><span> &#127760; </span>
          </div>
        </div>
        <div class="flexClassLogo">
          <img style="width: 130px" src="../assets/image/logo.png" alt="" />
        </div>
        <div>
          <p class="labelClass">Welcome Back, plz login to you account</p>
        </div>
        <div>
          <label for="emailUserName" class="labelClass"
            >Email or UserName</label
          >
          <input
            v-model.trim="v$.form.email.$model"
            @keyup.enter="logindata"
            type="email"
            name=""
            id="email"
            class="inputclass"
            :class="{ 'border-danger': v$.form.email.$error && buttonClick }"
          />
          <div
            class="text-danger"
            v-for="(error, index) of v$.form.email.$errors"
            :key="index"
          >
            <div v-if="this.buttonClick" class="error-msg">
              <small>{{ error.$message }}</small>
            </div>
          </div>
        </div>

        <br />
        <div class="flexclass">
          <div><label for="">Password</label></div>
          <div>
            <label for="" style="color: #2a7efc">Forget Password?</label>
          </div>
        </div>
        <input
          type="password"
          @keyup.enter="logindata"
          v-model.trim="v$.form.password.$model"
          name=""
          id="password"
          class="inputclass"
          :class="{ 'border-danger': v$.form.password.$error && buttonClick }"
        />
        <div
          class="text-danger"
          v-for="(error, index) of v$.form.password.$errors"
          :key="index"
        >
          <div v-if="this.buttonClick" class="error-msg">
            <small>{{ error.$message  }}</small>
          </div>
        </div>
        
        <div style="text-align: start; margin-top: 40px;">
          <input type="checkbox" />Remember me
        </div>
        <div>
          <button
            @keyup.enter="logindata"
            @click="logindata"
            class="butonClass"
          >
            Login
          </button>
        </div>
        <div class="footertext">
          <p>@2023 HeavyCoders</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { toast } from "vue3-toastify";
import { loginCredentials } from "../data/users.js";
import { useVuelidate } from "@vuelidate/core";
import { required, email, minLength } from "@vuelidate/validators";

export default {
  name: "SignIn",
  setup() {
    return { v$: useVuelidate() };
  },

  data() {
    return {
      isAuth: false,
      buttonClick: false,
      form: {
        email: "",
        password: "",
        buttonClick: false,
      },
    };
  },
  validations() {
    return {
      form: {
        email: {
          required,
          email,
        },
        password: {
          required,
          min: minLength(6),
        },
      },
    };
  },

  methods: {
    logindata() {
      this.v$.$touch();
      this.buttonClick = true;
      console.log(this.buttonClick);
      if (!this.form.email && !this.form.password) {
        toast("Plz fill the login details", {
          autoClose: 1000,
          type: "error",
        });
      } else if (this.v$.$validate) {
        const user = loginCredentials.filter(
          (credentials) =>
            this.form.email === credentials.email &&
            this.form.password === credentials.password
        );

        if (user.length > 0) {
          this.isAuth = true;
          this.$store.commit("loginData", {
            payload: {
              email: this.form.email,
              password: this.form.password,
              isAuth: this.isAuth,
            },
          });
          this.$router.push("/");
        } else {
          toast("user does not exist", {
            autoClose: 1000,
            type: "error",
          });
        }
      }
    },
  },
};
</script>

<style>
.backgroundbody {
  background-color: whitesmoke;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  margin-top: 0px;
  padding-top: 0px;
}

.CardBody {
  background-color: white;
  width: 31%;
  /* height: ; */
  margin: 50px auto 0px auto;
  border-radius: 10px;
  padding-bottom: 10px;
}
.widthclass {
  width: 90%;
  height: 100%;
  margin: auto;
}

.flexclass {
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 20px;
}
.flexClassLogo {
  display: flex;
  justify-content: center;
  align-items: center;
}
.labelClass {
  display: block;
  text-align: start;
}

.inputclass {
  width: 100%;
  border: 1px solid gray;
  height: 40px;
  border-radius: 7px;
  font-size: large;
}

.butonClass {
  width: 100%;
  height: 40px;
  border-radius: 7px;
  font-size: large;
  color: white;
  background-color: #2a7efc;

  border: none;
}

.footertext {
  margin-top: 100px;
}
</style>
