<template>
  <div class="w-100 bg-light p-5" style="height: 100vh">
    <div class="container d-flex justify-content-between mb-2">
      <div>
        <span class="d-block"><b>All Products List</b> </span>
      </div>
      <div></div>
    </div>
    <div class="container shadow-lg rounded bg-white">
      <div class="d-flex justify-content-between pt-4">
        <span class="d-flex gap-2">
          Show
          <div class="dropdown">
            <span class="dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false"> noOfRows </span>
            Entries
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" @click="noOfRows = 10">10</a>
              </li>
              <li>
                <a class="dropdown-item" @click="noOfRows = 20">20</a>
              </li>
              <li>
                <a class="dropdown-item" @click="noOfRows = 30">30</a>
              </li>
              <li>
                <a class="dropdown-item" @click="noOfRows = 40">40</a>
              </li>
            </ul>
          </div></span
        >
        <span
          >Search
          <input v-model="search" class="border border-dark rounded" type="text" />

          <span class="d-block text-end"
            ><span @click.prevent="$router.push($page.CREATE_PRODUCT.path)" class="shadow btn"><img src="../assets/icons/add.svg" alt="" /> Add Product</span></span
          >
        </span>
      </div>
      <div>
        <table class="table mt-3">
          <thead>
            <tr class="bg-light">
              <th scope="col">Title</th>
              <th scope="col">Description</th>
              <th scope="col">Category</th>
              <th scope="col">Status</th>
              <th scope="col">Photo</th>
              <th scope="col">Price</th>
              <th scope="col">OriginalPrice</th>
              <th scope="col">Unit</th>
              <th scope="col" class="text-primary"><b>Actions</b></th>
            </tr>
          </thead>
          <tbody>
            <tr  v-for="item in allProductList" :key="item.id" @click="$router.push({name:'SINGLE_PRODUCTS', params:{id:item._id}})" style="cursor: pointer;">
              <td style="overflow: hidden; max-width: 150px">{{ item.title }}</td>
              <td style="overflow: hidden; max-width: 150px">{{ item.description }}</td>
              <td style="overflow: hidden; max-width: 150px">{{ item.category }}</td>
              <td style="overflow: hidden; max-width: 150px">{{ item.status }}</td>
              <td style="overflow: hidden; max-width: 150px">{{ item.photo }}</td>
              <td style="overflow: hidden; max-width: 150px">{{ item.price }}</td>
              <td style="overflow: hidden; max-width: 150px">{{ item.originalPrice }}</td>
              <td style="overflow: hidden; max-width: 150px">{{ item.unit }}</td>
              <td style="overflow: hidden; max-width: 150px">
                <small
                  ><button class="btn btn-sm text-black"><img src="../assets/icons/edit.svg" alt="" /></button
                ></small>
                <small
                  ><button class="btn btn-sm  "><img src="../assets/icons/delete.svg" alt="" /></button
                ></small>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="d-flex justify-content-between align-items-center py-3">
        <div></div>
        <small>
            <paginationWrapper
              v-model="page"
              :records="allProductList.length"
              :per-page="noOfRows"
              @paginate="myCallback()"
              :options="{
                chunk: 3,
              }"
          /></small>
      </div>
    </div>
  </div>
</template>
<style scoped>
.removeArrow::after {
  display: none;
}
</style>

<script>
export default {
  name: 'productsPage',
  data() {
    return {
      page: 1,
      noOfRows: 10,
      search: '',
      statusSelected: '',
      statusSort: false,
      tPSelected: '',
      tPSort: false,
    };
  },
  methods: {
    myCallback() {
      // console.log();
    },
  },
  computed: {
    allProductList() {
      return this.$store.state.allProductsArray;
    },
    asd(){
        return console.log(this.allProductList,'allProductListsss')
    }
  },
};
</script>
