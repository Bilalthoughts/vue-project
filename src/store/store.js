import { createStore } from "vuex";


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
        }
    }
})