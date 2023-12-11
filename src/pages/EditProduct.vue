<template>
  <div class="container m-auto shadow-lg rounded p-5 bg-light">
    <h1>Title</h1>
    <input v-model="productObject.title" class="w-50 py-2 rounded" placeholder="title..." type="text" name="" id="" />
    <h1>Photo</h1>
    <input v-model="productObject.photo" class="w-50 py-2 rounded" placeholder="Photo..." type="text" name="" id="" />
    <hr />
    <h1>Description</h1>
    <input v-model="productObject.description" class="w-50 py-2 rounded" placeholder="Description..." type="text" name="" id="" />
    <hr />
    <h1>Category</h1>
    <input v-model="productObject.category" class="w-50 py-2 rounded" placeholder="Category..." type="text" name="" id="" />
    <hr />
    <h1>Status</h1>
    <input v-model="productObject.status" class="w-50 py-2 rounded" placeholder="Status..." type="text" name="" id="" />
    <hr />
    <h1>Price</h1>
    <input v-model="productObject.price" class="w-50 py-2 rounded" placeholder="Price..." type="text" name="" id="" />
    <hr />
    <h1>Original Price</h1>
    <input v-model="productObject.originalPrice" class="w-50 py-2 rounded" placeholder="Original Price..." type="text" name="" id="" />
    <h1>Unit</h1>
    <input v-model="productObject.unit" class="w-50 py-2 rounded" placeholder="Unit..." type="text" name="" id="" />
    <h1>CreatedBy</h1>
    <input v-model="productObject.createdBy" class="w-50 py-2 rounded" placeholder="CreatedBy..." type="text" name="" id="" />
    <h1>Delivery type</h1>
    <input v-model="productObject.delivery.type" class="w-50 py-2 rounded" placeholder="Delivery type..." type="text" name="" id="" />
    <h1>Charges</h1>
    <input v-model="productObject.delivery.charges" class="w-50 py-2 rounded" placeholder="Charges..." type="number" name="" id="" />
    <h1>Quantity</h1>
    <input v-model="productObject.quantity" class="w-50 py-2 rounded" placeholder="quantity..." type="text" name="" id="" />

    <div class="w-100 m-auto text-center">
      <button @click.prevent="UpdateFunc" class="w-50 text-center my-4 btn mx-auto btn-success rounded btn-lg">Submit</button>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
    beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.$store.commit('updatePageTitle', to.name);
    });
  },
  name: 'EditProduct',
  data() {
    return {
      editedData: ref([]),
      productObject: {
        title: '',
        description: '',
        category: '',
        status: '',
        photo: '',
        price: '',
        originalPrice: '',
        unit: '',
        createdBy: '',
        delivery: {
          type: '',
          charges: '',
        },
        quantity: '',
      },
    };
  },
  methods: {
    async UpdateFunc() {
      await this.$store.dispatch('updateProduct', {
        payload: {
          id: this.id,
          title: this.productObject.title,
        },
      });
      this.$router.push(this.$page.PRODUCTS.path);
    },
  },
  computed: {
    id() {
      return this.$route.params.id;
    },
  },
  created() {
    this.editedData = this.$store.state.allProductsArray.find((item) =>
      Object.values(item).some((value) => typeof value === 'string' && value.includes(this.id))
    );

    if (this.editedData) {
      this.productObject.title = this.editedData.title;
      this.productObject.description = this.editedData.description;
      this.productObject.category = this.editedData.category;
      this.productObject.photo = this.editedData.status;
      this.productObject.photo = this.editedData.photo;
      this.productObject.price = this.editedData.price;
      this.productObject.originalPrice = this.editedData.originalPrice;
      this.productObject.unit = this.editedData.unit;
      this.productObject.status = this.editedData.status;
      this.productObject.createdBy = this.editedData.createdBy;
      this.productObject.delivery.type = this.editedData.delivery.type;
      this.productObject.delivery.charges = this.editedData.delivery.charges;
      this.productObject.quantity = this.editedData.quantity;
    }
  },
};
</script>
