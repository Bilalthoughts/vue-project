import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
import SecureLS from "secure-ls";
import axios from 'axios';
const ls = new SecureLS({ isCompression: false });

export const store = createStore({
    store(){
        return{
            email:'',
            password:'',
            isAuth: false,
            ApiData: null  
        }
    },
    mutations:{
        loginData(state,action){
            state.email = action.payload.email;
            state.password = action.payload.password;
            state.isAuth = action.payload.isAuth;
        },
        logout(state){
            state.email = '';
            state.password = '';
            state.isAuth = false;
        },

        setApiData(state, action){
            state.ApiData = action.payload.data;
        }
    },
    actions:{
        async ApiData ({ commit }) {  
            const options = {
                method: 'GET',
                url: 'https://climate-news-feed.p.rapidapi.com/page/1',
                params: {limit: '10'},
                headers: {
                  'X-RapidAPI-Key': 'd02dc2523emshf17806f588dd65fp13382djsn4d2312d7bfee',
                  'X-RapidAPI-Host': 'climate-news-feed.p.rapidapi.com'
                }
              };
              
              try {
                  const response = await axios.request(options);
                  commit('setApiData',{payload:{
                    data: response.data
                  }});
              } catch (error) {
                  console.error(error);
              }
        }
    },
    plugins: [createPersistedState({
        storage: {
          getItem: key => ls.get(key),
          setItem: (key, value) => ls.set(key, value),
          removeItem: key => ls.remove(key)
        }
      })],

})
