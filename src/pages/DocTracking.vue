<template>

    <h1>Document Tracking Page</h1>
    
    </template>
    
    <script>
        export default {
            name:'DocTracking',
            beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.$store.commit('updatePageTitle', to.name);
    });
  },
        }
    </script>