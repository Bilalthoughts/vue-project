<template>
    
     <div class="container m-auto shadow-lg rounded p-5 bg-light" v-for="item in getSingleProduct" :key="item.id" >
      <h1>Title</h1>
      <h3>  {{item.title}} </h3>
      <h1>Photo</h1>
      <span><img src="item.photo" alt=""></span>
      <hr>
      <h1>Description</h1>
      <h3>  {{item.description}} </h3>
      <hr>
      <h1>Category</h1>
      <h3>  {{item.category}} </h3>
      <hr>
      <h1>Status</h1>
      <h3> {{ item.status}} </h3>
      <hr>
      <h1>Price</h1>
      <h3>  {{item.price}} </h3>
      <hr>
      <h1>Original Price</h1>
      <h3>  {{item.originalPrice}} </h3>
      <h1>Unit</h1>
      <h3>  {{item.unit}} </h3>
      <h1>Created By</h1>
      <h3>  {{item.createdBy.name}} </h3>
      <h1>Delivery</h1>
      <h3>  {{item.delivery?.type}} </h3>
      <h1>Charges</h1>
      <h3>  {{item.delivery?.charges}} </h3>
    </div>
</template>

<script>
export default {
  name: 'SingleProductPage',
  computed: {
    id() {
      return this.$route.params.id;
    },
    getSingleProduct() {
      return this.$store.state.allProductsArray.filter((item) => {
        return Object.values(item).some((value) => {
          return typeof value === 'string' && value.includes(this.id);
        });
      });
    },
  },
};
</script>

