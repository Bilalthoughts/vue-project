<template>
  <MenuBarComp />
  <div class="d-flex flex-wrap">
    <template v-for="(items, index) in loginCredentials" :key="index.id">
      <CardList :loginCredentials="items" :foodList="foodList"></CardList>
    </template>
  </div>
</template>

<script>
import CardList from "../components/Card.vue";
import MenuBarComp from "../components/MenuBar.vue";
import {loginCredentials} from '../data/users.js'
import {foodList} from '../data/foodlist'

export default {
  name: "HomePage",
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.$store.commit('updatePageTitle', to.name);
    });
  },
  components: {
    CardList,
    MenuBarComp,
  
  },
  data(){
    return{
      ifShowSidebar: false,
      loginCredentials:loginCredentials,
      foodList:foodList
    }
  },
  methods:{
    showSidebar(){
      this.ifShowSidebar = !this.ifShowSidebar
    }
  }
};
</script>
