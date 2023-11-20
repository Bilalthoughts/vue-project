<template>
  <div class="d-flex">
    <SidebarComp v-if="ifShowSidebar" />
    <div class="w-100">
      <navbarComp :ifShowSidebar="ifShowSidebar" @showSidebar="showSidebar" />
      <slot></slot>
    </div>
  </div>
</template>

<script>
import navbarComp from "../components/Navbar.vue";
import SidebarComp from "../components/Sidebar.vue";

export default {
  name: "LayoutWrapper",
  components: {
    SidebarComp,
    navbarComp,
  },
  data() {
    return {
      ifShowSidebar: false,
    };
  },
  methods: {
    showSidebar() {
      this.ifShowSidebar = !this.ifShowSidebar;
    },
  },
};
</script>
