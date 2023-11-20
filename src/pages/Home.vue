<template>
 
      <MenuBarComp  />

      <CardList />
   
</template>



<script>
import CardList from "../components/Card.vue";
import MenuBarComp from "../components/MenuBar.vue";


export default {
  name: "HomePage",
  components: {
    CardList,
    MenuBarComp,
  
  },
  data(){
    return{
      ifShowSidebar: false,
    }
  },
  methods:{
    showSidebar(){
      this.ifShowSidebar = !this.ifShowSidebar
    }
  }
};
</script>
