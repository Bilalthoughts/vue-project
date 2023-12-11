<template>
  <div class="container m-auto shadow-lg rounded p-5 bg-light" v-for="item in fetchDataFromState" :key="item.id">
    <h1>Title</h1>
    <h3>{{ item.title }}</h3>
    <hr />
    <h1>Published</h1>
    <h3>{{ item.published }}</h3>
    <hr />
    <h1>Source</h1>
    <h3>{{ item.source }}</h3>
    <hr />
    <h1>Thumbnail</h1>
    <h3>{{ item.thumbnail }}</h3>
    <hr />
    <h1>URL</h1>
    <h3>{{ item.url }}</h3>
    <hr />
    <h1>ID</h1>
    <h3>{{ item.id }}</h3>
  </div>
</template>

<script>
export default {
  name: 'DetailData',
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.$store.commit('updatePageTitle', to.name);
    });
  },
  computed: {
    id() {
      return this.$route.params.id;
    },
    fetchDataFromState() {
      return this.$store.state.ApiData.articles.filter((item) => {
        return Object.values(item).some((prop) => prop.includes(this.id));
      });
    },
  },
  created() {
    console.log(this.fetchDataFromState, 'sdkfhjskafhks');
  },
};
</script>
