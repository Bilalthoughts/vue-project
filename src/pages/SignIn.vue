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
            v-model="email"
            type="email"
            name=""
            id="emailUserName"
            class="inputclass"
          />
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
          v-model="password"
          name=""
          id="emailUserName"
          class="inputclass"
        />

        <br />
        <br />
        <br />
        <div style="text-align: start">
          <input type="checkbox" />Remember me
        </div>
        <div>
          <button @click="logindata" class="butonClass">Login</button>
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
import { loginCredentials } from "../data/data.js";
import { useVuelidate } from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";
import { reactive } from "vue";

export default {
  name: "SignIn",

  data() {
    return {
      isAuth: false,
    };
  },

  setup() {
    const state = reactive({
      email: "",
      password: "",
    });
    const rules = {
      email: { required, email },
      password: { required },
    };

    const v$ = useVuelidate(rules, state);
    return { state, v$ };
  },

  methods: {
    logindata() {
      console.log(this.v$);
      if (this.v$.$validate) {
        const user = loginCredentials.filter(
          (credentials) =>
            this.email === credentials.email &&
            this.password === credentials.password
        )

        if (user.length > 0) {
          this.isAuth = true;
          this.$store.commit("loginData", {
            payload: {
              email: this.email,
              password: this.password,
              isAuth: this.isAuth,
            },
          });

          this.$router.push("/");
        }
      } 
      
      else {
        toast("Email and Password Required!", {
          autoClose: 1000,
        });
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
  width: 27vw;
  height: 70vh;
  margin: 50px auto 0px auto;
  border-radius: 10px;
}
.widthclass {
  width: 90%;
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
