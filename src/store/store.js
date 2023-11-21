import { createStore } from "vuex";
import VuexPersistence from "vuex-persist";


const vuexLocal = new VuexPersistence({
    storage: window.localStorage,
   });

export const store = createStore({
    store(){
        return{
            email:'',
            password:'',
            isAuth: false,
        }
    },
    mutations:{
        loginData(state,action){
            state.email = action.payload.email;
            state.password = action.payload.password;
            state.isAuth = action.payload.isAuth
        },
        logout(state){
            state.email = '';
            state.password = '';
            state.isAuth = false
        },
    },
    plugins: [vuexLocal.plugin],

})