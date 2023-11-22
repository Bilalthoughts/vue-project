import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
import SecureLS from "secure-ls";
const ls = new SecureLS({ isCompression: false });

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
    plugins: [createPersistedState({
        storage: {
          getItem: key => ls.get(key),
          setItem: (key, value) => ls.set(key, value),
          removeItem: key => ls.remove(key)
        }
      })],

})