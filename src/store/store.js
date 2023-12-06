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
      name:null,
      role:null,
      isregester:false,
    };
  },
  mutations: {
    loginData(state, action) {
      state.email = action.payload.data.email;
      state.password = action.payload.data.password;
      state.isAuth = action.payload.data.isAuth;
      state.name = action.payload.data.name;
      state.role = action.payload.data.role;
      state.isregester = action.payload.data.isregester;
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
      const {name,email,password,isregester} = action.payload;
      try{
        const response = await axios.post('http://localhost:5000/api/user/create',{
          name,
          email,
          password,
          role:'user',
        })
        commit('loginData',{
          payload:{
            data: response.data,
            isregester,
          }
        });
       

      }
      catch(error){
        console.error(error)
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
