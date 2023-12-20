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
            ><span @click.prevent="$router.push($page.CREATE_PRODUCT.path)" class="shadow btn"
              ><img src="../assets/icons/add.svg" alt="" /> Add Product</span
            ></span
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
            <tr
              v-for="item in searchProduct"
              :key="item.id"
              @click.stop="$router.push({ name: 'SINGLE_PRODUCTS', params: { id: item._id } })"
              style="cursor: pointer"
            >
              <td style="overflow: hidden; max-width: 150px">{{ item.title }}</td>
              <td style="overflow: hidden; max-width: 150px">{{ item.description }}</td>
              <td style="overflow: hidden; max-width: 150px">{{ item.category }}</td>
              <td style="overflow: hidden; max-width: 150px">{{ item.status }}</td>
              <td style="overflow: hidden; max-width: 150px">{{ item.photo }}</td>
              <td style="overflow: hidden; max-width: 150px">{{ item.price }}</td>
              <td style="overflow: hidden; max-width: 150px">{{ item.originalPrice }}</td>
              <td style="overflow: hidden; max-width: 150px">{{ item.unit }}</td>
              <td style="overflow: hidden; max-width: 150px">
                <small @click.stop="fetchID(item._id)"
                  ><button data-bs-toggle="modal" data-bs-target="#exampleModal1" class="btn btn-sm text-black">
                    <img src="../assets/icons/edit.svg" alt="" /></button
                ></small>

                <small @click.stop="() => (delID = item._id)"
                  ><button data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn btn-sm">
                    <img src="../assets/icons/delete.svg" alt="" /></button
                ></small>
                <small>
                  <!-- Modal -->
                  <div
                    @click.stop=""
                    data-bs-backdrop="static"
                    class="modal fade"
                    id="exampleModal"
                    tabindex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h1 class="modal-title fs-5" id="exampleModalLabel">Delete Seleceted Item</h1>
                          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">Are you Sure ?</div>
                        <div class="modal-footer">
                          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">cancle</button>
                          <button @click.stop="deleteProduct" data-bs-dismiss="modal" type="button" class="btn btn-danger">Confirm</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- Modal -->
                  <div
                    style="cursor: auto"
                    @click.stop=""
                    class="modal fade h-75 m-0"
                    data-bs-backdrop="static"
                    id="exampleModal1"
                    tabindex="-1"
                    aria-labelledby="exampleModal1"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header bg-light shadow-lg mb-5">
                          <h1 class="modal-title fs-5 text-primary" id="exampleModal1">Edit Product</h1>
                          <button type="button" class="btn" data-bs-dismiss="modal" aria-label="Close">
                            <img src="../assets/icons/cross.svg" alt="" />
                          </button>
                        </div>
                        <div class="modal-body">
                          <div class="d-flex flex-column">
                            <span class="d-flex w-100 py-3 justify-content-around flex-row">
                              <span class="w-25"
                                ><h6>Title: <span style="color: red">*</span></h6></span
                              >
                              <span class="w-75 text-right text-end">
                                <input
                                  v-model="productObject.title"
                                  class="w-100 py-1 border-0 border-bottom border-dark"
                                  placeholder="title..."
                                  type="text"
                                  name=""
                                  id=""
                                />
                                <span v-for="error of v$.productObject.title.$errors" :key="error.$uid">
                                  <strong class="text-danger">{{ error.$message }}</strong>
                                </span>
                              </span>
                            </span>

                            <span class="d-flex w-100 py-3 justify-content-around flex-row"
                              ><span class="w-25"
                                ><h6>description:<span style="color: red">*</span></h6></span
                              >
                              <span class="w-75 text-right text-end">
                                <input
                                  v-model="productObject.description"
                                  class="w-100 py-1 border-0 border-bottom border-dark"
                                  placeholder="description..."
                                  type="text"
                                  name=""
                                  id=""
                                /><span v-for="error of v$.productObject.description.$errors" :key="error.$uid">
                                  <strong class="text-danger">{{ error.$message }}</strong>
                                </span></span
                              >
                            </span>

                            <span class="d-flex w-100 py-3 justify-content-around flex-row"
                              ><span class="w-25"
                                ><h6>category:<span style="color: red">*</span></h6></span
                              >
                              <span class="w-75 text-right text-end">
                                <!-- <input
                                  v-model="productObject.category"
                                  class="w-100 py-1 border-0 border-bottom border-dark"
                                  placeholder="category..."
                                  type="text"
                                  name=""
                                  id=""
                                /> -->
                                <div class="dropdown w-100" style="position: relative">
                                  <a
                                    style="text-decoration: none"
                                    class="remove-dropdown-arrow w-100 text-start btn py-1 border-0 border-bottom border-dark dropdown-toggle"
                                    type="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                  >
                                    {{ productObject.category !== '' ? productObject.category : 'Categories' }}
                                  </a>
                                  <ul class="dropdown-menu w-100 posi">
                                    <li>
                                      <a @click="() => (this.productObject.category = 'Sports')" class="dropdown-item" href="#">Sports</a>
                                      <a @click="() => (this.productObject.category = 'Education')" class="dropdown-item" href="#">Education</a>
                                      <a @click="() => (this.productObject.category = 'Entertainment')" class="dropdown-item" href="#"
                                        >Entertainment</a
                                      >
                                    </li>
                                  </ul>
                                </div>

                                <span v-for="error of v$.productObject.category.$errors" :key="error.$uid">
                                  <strong class="text-danger">{{ error.$message }}</strong>
                                </span></span
                              ></span
                            >

                            <span class="d-flex w-100 py-3 justify-content-around flex-row"
                              ><span class="w-25"
                                ><h6>status:<span style="color: red">*</span></h6></span
                              >
                              <span class="w-75 text-right text-end">
                                <!-- <input
                                  v-model="productObject.status"
                                  class="w-100 py-1 border-0 border-bottom border-dark"
                                  placeholder="status..."
                                  type="text"
                                  name=""
                                  id=""
                                /> -->
                                
                                <div class="dropdown w-100" style="position: relative">
                                  <a
                                    style="text-decoration: none"
                                    class="remove-dropdown-arrow w-100 text-start btn py-1 border-0 border-bottom border-dark dropdown-toggle"
                                    type="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                  >
                                    {{ productObject.status !== '' ? productObject.status : 'active' }}
                                  </a>
                                  <ul class="dropdown-menu w-100 posi">
                                    <li>
                                      <a @click="() => (this.productObject.status = 'active')" class="dropdown-item" href="#">active</a>
                                      <a @click="() => (this.productObject.status = 'inactive')" class="dropdown-item" href="#">inactive</a>
                                     
                                    </li>
                                  </ul>
                                </div>
                                
                                
                                <span v-for="error of v$.productObject.status.$errors" :key="error.$uid">
                                  <strong class="text-danger">{{ error.$message }}</strong>
                                </span></span
                              ></span
                            >

                            <span class="d-flex w-100 py-3 justify-content-around flex-row"
                              ><span class="w-25"><h6>photo:</h6></span>
                              <span class="w-75 text-right text-end">
                                <input
                                  v-model="productObject.photo"
                                  class="w-100 py-1 border-0 border-bottom border-dark"
                                  placeholder="photo..."
                                  type="text"
                                  name=""
                                  id="" /></span
                            ></span>

                            <span class="d-flex w-100 py-3 justify-content-around flex-row"
                              ><span class="w-25"
                                ><h6>price:<span style="color: red">*</span></h6></span
                              >
                              <span class="w-75 text-right text-end">
                                <input
                                  v-model="productObject.price"
                                  class="w-100 py-1 border-0 border-bottom border-dark"
                                  placeholder="price..."
                                  type="number"
                                  name=""
                                  id=""
                                /><span v-for="error of v$.productObject.price.$errors" :key="error.$uid">
                                  <strong class="text-danger">{{ error.$message }}</strong>
                                </span></span
                              ></span
                            >

                            <span class="d-flex w-100 py-3 justify-content-around flex-row"
                              ><span class="w-25"><h6>originalPrice:</h6></span>
                              <span class="w-75 text-right text-end">
                                <input
                                  v-model="productObject.originalPrice"
                                  class="w-100 py-1 border-0 border-bottom border-dark"
                                  placeholder="originalPrice..."
                                  type="number"
                                  name=""
                                  id="" /></span
                            ></span>

                            <span class="d-flex w-100 py-3 justify-content-around flex-row"
                              ><span class="w-25"><h6>unit:</h6></span>
                              <span class="w-75 text-right text-end">
                                <input
                                  v-model="productObject.unit"
                                  class="w-100 py-1 border-0 border-bottom border-dark"
                                  placeholder="unit..."
                                  type="number"
                                  name=""
                                  id="" /></span
                            ></span>

                            <span class="d-flex w-100 py-3 justify-content-around flex-row"
                              ><span class="w-25"
                                ><h6>quantity:<span style="color: red">*</span></h6></span
                              >
                              <span class="w-75 text-right text-end">
                                <input
                                  v-model="productObject.quantity"
                                  @input="productObject.quantity = productObject.quantity.replace(/\D/g, '')"
                                  class="w-100 py-1 border-0 border-bottom border-dark"
                                  placeholder="quantity..."
                                  type="text"
                                  name=""
                                  id=""
                                /><span v-for="error of v$.productObject.quantity.$errors" :key="error.$uid">
                                  <strong class="text-danger">{{ error.$message }}</strong>
                                </span></span
                              ></span
                            >

                            <span class="d-flex w-100 py-3 justify-content-around flex-row"
                              ><span class="w-25"><h6>createdBy:</h6></span>
                              <span class="w-75 text-right text-end">
                                <input
                                  v-model="productObject.createdBy.name"
                                  class="w-100 py-1 border-0 border-bottom border-dark"
                                  placeholder="createdBy..."
                                  type="text"
                                  name=""
                                  id="" /></span
                            ></span>
                            <span class="d-flex w-100 py-3 justify-content-around flex-row"
                              ><span class="w-25"><h6>charges:</h6></span>
                              <span class="w-75 text-right text-end">
                                <input
                                  v-model="productObject.delivery.charges"
                                  class="w-100 py-1 border-0 border-bottom border-dark"
                                  placeholder="charges..."
                                  type="text"
                                  name=""
                                  id="" /></span
                            ></span>
                            <span class="d-flex w-100 py-3 justify-content-around flex-row"
                              ><span class="w-25"><h6>type:</h6></span>
                              <span class="w-75 text-right text-end">
                                <input
                                  v-model="productObject.delivery.type"
                                  class="w-100 py-1 border-0 border-bottom border-dark"
                                  placeholder="type..."
                                  type="text"
                                  name=""
                                  id="" /></span
                            ></span>
                          </div>
                        </div>
                        <div class="modal-footer">
                          <button @click.stop="" type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                          <button @click="updateFunc" type="button" class="btn btn-success">Save changes</button>
                        </div>
                      </div>
                    </div>
                  </div></small
                >
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
ul.dropdown-menu.posi.show {
  position: absolute !important;
  left: -100% !important;
  top: 0% !important;
}

.remove-dropdown-arrow::after {
  display: none !important;
}

</style>

<script>
import { useVuelidate } from '@vuelidate/core';
import { required } from '@vuelidate/validators';
import { ref } from 'vue';
export default {
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.$store.commit('updatePageTitle', to.name);
    });
  },
  name: 'productsPage',
  setup() {
    return {
      v$: useVuelidate(),
    };
  },
  data() {
    return {
      page: 1,
      noOfRows: 10,
      stateID: ref(''),
      delID: ref(''),
      search: '',
      statusSelected: '',
      statusSort: false,
      checkValidation: false,
      tPSelected: '',
      tPSort: false,
      productObject: {
        title: '',
        description: '',
        category: '',
        status: '',
        closemodal: false,
        photo: '',
        price: '',
        originalPrice: '',
        unit: '',
        createdBy: {
          name: '',
        },
        delivery: {
          type: '',
          charges: '',
        },
        quantity: '',
      },
    };
  },
  validations() {
    return {
      productObject: {
        title: { required },
        description: { required },
        category: { required },
        status: { required },
        price: { required },
        delivery: {
          charges: { required },
        },
        quantity: { required },
      },
    };
  },
  methods: {
    myCallback() {
      // console.log();
    },
    async fetchID(id) {
      if (id) {
        this.stateID = this.$store.state.allProductsArray.find((item) =>
          Object.values(item).some((value) => typeof value === 'string' && value.includes(id))
        );
        if (this.stateID) {
          this.productObject.title = this.stateID.title;
          this.productObject.description = this.stateID.description;
          this.productObject.category = this.stateID.category;
          this.productObject.photo = this.stateID.status;
          this.productObject.photo = this.stateID.photo;
          this.productObject.price = this.stateID.price;
          this.productObject.originalPrice = this.stateID.originalPrice;
          this.productObject.unit = this.stateID.unit;
          this.productObject.status = this.stateID.status;
          this.productObject.createdBy.name = this.stateID.createdBy.name;
          this.productObject.delivery.type = this.stateID.delivery?.type;
          this.productObject.delivery.charges = this.stateID.delivery?.charges;
          this.productObject.quantity = this.stateID.quantity;
        }
      }
    },
    async updateFunc() {
      this.v$.$touch();

      const isFormCorrect = await this.v$.$validate();

      if (!isFormCorrect) {
        return;
      }
      const myInput = document.getElementById('exampleModal1');

      await this.$store.dispatch('updateProduct', {
        payload: {
          id: this.stateID._id,
          title: this.productObject.title,
          description: this.productObject.description,
          category: this.productObject.category,
          status: this.productObject.status,
          photo: this.productObject.photo,
          price: this.productObject.price,
          originalPrice: this.productObject.originalPrice,
          unit: this.productObject.unit,
          createdBy: {
            name: this.productObject.createdBy.name,
            _id: '6554d96bd0cd54519c0542cf',
          },
          delivery: {
            type: this.productObject.delivery.type,
            charges: this.productObject.delivery.charges,
          },
          quantity: this.productObject.quantity,
        },
      });
      if (myInput) {
        myInput.style.display = 'none !important';
        myInput.style.visibility = 'hidden';
        myInput.style.opacity = '0';
      }
      this.$router.push(this.$page.PRODUCTS.path);
      location.reload();
    },
    dispatchArrayList() {
      this.$store.dispatch('allProducts');
    },
    deleteProduct() {
      if (this.delID !== '') {
        this.stateID = this.$store.state.allProductsArray.find((item) =>
          Object.values(item).some((value) => typeof value === 'string' && value.includes(this.delID))
        );
        if (this.stateID !== '') {
          this.$store.dispatch('deleteProduct', this.stateID._id);
        }
      }
    },
  },
  computed: {
    allProductList() {
      return this.$store.state.allProductsArray;
    },
    searchProduct() {
      let filteredArray = this.allProductList;
      if (this.search !== '') {
        filteredArray = filteredArray.filter((item) =>
          Object.values(item).some((value) => String(value).toLowerCase().includes(this.search.toLowerCase()))
        );
      }
      return filteredArray;
    },

    asd() {
      return console.log(this.searchProduct, 'allProductListsss');
    },
  },
  watch: {
    noOfRows: {
      handler: 'dispatchArrayList',
      immediate: true,
    },
  },
};
</script>
