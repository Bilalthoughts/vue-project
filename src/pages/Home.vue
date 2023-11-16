<template>
  <div class="d-flex">
    <SidebarComp v-if="ifShowSidebar"/>
    <div class="w-100">
        <navbarComp :ifShowSidebar="ifShowSidebar"  @showSidebar="showSidebar"/>
      <MenuBarComp  />

      <CardList />
    </div>
  </div>
</template>



<script>
import CardList from "../components/Card.vue";
import MenuBarComp from "../components/MenuBar.vue";
import navbarComp from '../components/Navbar.vue'
import SidebarComp from '../components/Sidebar.vue'

export default {
  name: "HomePage",
  components: {
    CardList,
    MenuBarComp,
    navbarComp,
    SidebarComp
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
