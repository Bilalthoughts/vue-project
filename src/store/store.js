import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import SecureLS from 'secure-ls';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
const ls = new SecureLS({ isCompression: false });

export const store = createStore({
  state() {
    return {
      userId: null,
      email: '',
      password: '',
      isAuth: false,
      ApiData: null,
      otp: null,
      name:null,
      role:null,
      isregester:false,
      BoolianOtp:false,
      loginRoute:false,
    };
  },
  mutations: {
    loginData(state, action) {
      state.email = action.payload.data.email;
      state.password = action.payload.data.password;
      state.isAuth = action.payload.data.isAuth;
      state.name = action.payload.data.name;
      state.role = action.payload.data.role;
      state.isregester = action.payload.isregester;
    },
    setBoolianOtp(state, value) {
      state.BoolianOtp = value;
    },
    setotp(state, value) {
      state.otp = value.payload.otp;
      state.email  = value.payload.email;
    },
    loginRoute(state, value) {
      state.loginRoute = value;
    },
    logout(state) {
      state.email = '';
      state.password = '';
      state.isAuth = false;
    },
    setApiData(state, action) {
      state.ApiData = {
        ...action.payload.data,
        articles: action.payload.data.articles.map((article) => ({
          ...article,
          id: uuidv4(),
        })),
      };
    },
  },
  actions: {
    async ApiData({ commit }, payload) {
      const options = {
        method: 'GET',
        url: `https://climate-news-feed.p.rapidapi.com/page/${payload.pageNo}`,
        params: { limit: payload.noOfRows },
        headers: {
          'X-RapidAPI-Key': 'd02dc2523emshf17806f588dd65fp13382djsn4d2312d7bfee',
          'X-RapidAPI-Host': 'climate-news-feed.p.rapidapi.com',
        },
      };

      try {
        const response = await axios.request(options);
        commit('setApiData', {
          payload: {
            data: response.data,
          },
        });
      } catch (error) {
        console.error(error);
      }
    },
    async loginUser({ commit }, action) {
      const {isAuth,email,password} = action.payload;

      try {
        const response = await axios.post('http://localhost:5000/api/user/login', {
          email,
          password,
        });
        commit('loginData', {
          payload: {
            data: { ...response.data, isAuth },
          },
        });
      } catch (error) {
        console.error(error);
      }
    },
    async registerUser({commit},action){
      const {email,name,password,role,isregester} = action.payload;
      
      try{
        
        const signupResponse = await axios.post('http://localhost:5000/api/user/create',{
              name,
              email,
              password,
              role
            })

            commit('loginData',{
              payload:{
                data: signupResponse.data,
                isregester,
              }
            });
          

        
        
        if(signupResponse.status === 201){
          commit('setBoolianOtp', true);
          await axios.post('http://localhost:5000/api/otp',{
            email,
          })
         
         

        }
      
       

      }
      catch(error){
        console.error(error)
      }
    },
    async verifyOtp({commit },action){
      const {email,otp} = action.payload
      console.log(email,otp,'email as otp')
      try{
        if(email && otp){
          const verifyResponse = await axios.post('http://localhost:5000/api/verify-otp',{
        email,
        otp
    })
    if(verifyResponse){

      commit('loginRoute',true)

    }
        }
      }
      catch(error){
        console.error(error.message)
      }
      
    },
  },
  plugins: [
    createPersistedState({
      storage: {
        getItem: (key) => ls.get(key),
        setItem: (key, value) => ls.set(key, value),
        removeItem: (key) => ls.remove(key),
      },
    }),
  ],
});
