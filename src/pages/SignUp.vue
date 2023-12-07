<template>
  <div class="backgroundbody">
    <div class="CardBody">
      <div class="widthclass">
        <div class="flexclass">
          <div>
            <b><h3>SignUp</h3></b>
          </div>
          <div style="font-size: x-large"><span>&#128743; </span><span> &#127760; </span></div>
        </div>
        <div class="flexClassLogo">
          <img style="width: 130px" src="../assets/image/logo.png" alt="" />
        </div>
        <div>
          <p class="labelClass">Welcome, plz SignUp to your account</p>
        </div>
        <div>
          <label for="emailUserName" class="labelClass">Name</label>
          <input
            v-model.trim="v$.form.name.$model"
            @keyup.enter="signupData"
            type="name"
            name=""
            id="name"
            class="inputclass"
            :class="{ 'border-danger': v$.form.name.$error && buttonClick }"
          />
          <div class="text-danger" v-for="(error, index) of v$.form.name.$errors" :key="index">
            <div v-if="this.buttonClick" class="error-msg">
              <small>{{ error.$message }}</small>
            </div>
          </div>
        </div>
        <br />
        <div>
          <label for="emailUserName" class="labelClass">Email</label>
          <input
            v-model.trim="v$.form.email.$model"
            @keyup.enter="signupData"
            type="email"
            name=""
            id="email"
            class="inputclass"
            :class="{ 'border-danger': v$.form.email.$error && buttonClick }"
          />
          <div class="text-danger" v-for="(error, index) of v$.form.email.$errors" :key="index">
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
          @keyup.enter="signupData"
          v-model.trim="v$.form.password.$model"
          name="password"
          id="password"
          class="inputclass"
          :class="{ 'border-danger': v$.form.password.$error && buttonClick }"
        />
        <div class="text-danger" v-for="(error, index) of v$.form.password.$errors" :key="index">
          <div v-if="this.buttonClick" class="error-msg">
            <small>{{ error.$message }}</small>
          </div>
        </div>
        
       
       <div class="pt-4" v-if="$store.state.BoolianOtp">
          <label for="emailUserName" class="labelClass">Enter OTP <small>(check you email)</small></label>
          <input
            v-model.trim="v$.form.otp.$model"
            @keyup.enter="submitOtp"
            type="text"
            name="number"
            id="otp"
            class="inputclass"
            :class="{ 'border-danger': v$.form.otp.$error && buttonClick }"
          />
          <div class="text-danger" v-for="(error, index) of v$.form.otp.$errors" :key="index">
            <div v-if="this.buttonClick" class="error-msg">
              <small>{{ error.$message }}</small>
            </div>
          </div>
          <button  @click.prevent="submitOtp" class="btn btn-sm mt-1 btn-success">Submit</button>
        </div>
        <div style="text-align: start; margin-top: 40px">
          Already a member? <span class="text-primary" style="cursor: pointer" @click.prevent="$router.push($page.SIGNIN.path)">Login</span>
        </div>
        <div>
          <button @keyup.enter="signupData" @click="signupData" class="butonClass">SignUp</button>
        </div>
        <div class="footertext">
          
          <p>@2023 HeavyCoders</p>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>
import { toast } from 'vue3-toastify';
// import { loginCredentials } from "../data/users.js";
import { useVuelidate } from '@vuelidate/core';
import { required, email, minLength } from '@vuelidate/validators';

export default {
  name: 'SignUp',
  setup() {
    return { v$: useVuelidate() };
  },

  data() {
    return {
      isAuth: false,
      isregester: false,
      buttonClick: false,
      form: {
        email: '',
        name: '',
        password: '',
        otp: '',
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
        otp: {
          min: minLength(2),
          
        },
        name: {
          required,
          min: minLength(3),
        },
      },
    };
  },

  methods: {
    async submitOtp() {
      console.log(this.form.otp,'thisl.otp')
      await this.$store.dispatch('verifyOtp', {
        payload: {
          email: this.form.email,
          otp: this.form.otp,
        },
      });

      if (this.$store.state.loginRoute ) {
        this.$router.push(this.$page.SIGNIN.path);
      }
    },
    async signupData() {
      this.v$.$touch();
      this.buttonClick = true;
      console.log(this.buttonClick);
      if (!this.form.email && !this.form.password && !this.form.name) {
        toast('Plz fill the signup details', {
          autoClose: 1000,
          type: 'error',
        });
      } else if (this.v$.$validate) {
        // const user = loginCredentials.filter(
        //   (credentials) =>
        //     this.form.email === credentials.email &&
        //     this.form.password === credentials.password
        // );

        // if (user.length > 0) {

        

        console.log('Registration completed:', this.$store.state.isregester);

        if (!this.v$.$error ) {
          await this.$store.dispatch('registerUser', {
          payload: {
            email: this.form.email,
            password: this.form.password,
            name: this.form.name,
            isregester: !this.isregester,
           
          },
        });
          
        } else {
          console.error('Error during registration');
          toast('Error during registration', {
            autoClose: 1000,
            type: 'error',
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
