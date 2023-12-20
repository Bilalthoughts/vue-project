<template>
  <div class="bodycalss">
    <h1 class="text-3xl mb-5 font-bold text-center bg-black mb-0 text-white py-2 w-100">Create Product</h1>

    <div
      class="container mb-0 mx-auto shadow-lg p-5 rounded d-flex justify-content-between gap-5 w-100 p-8 bg-white flex-row rounded-lg shadow-md max-w-md"
    >
      <div class="w-50">
        <div class="w-100 mx-auto d-flex justify-content-between align-items-center">
          <label for="title" class="block text-sm font-semibold text-black mb-1">Title</label>
          <input
            v-model="productObject.title"
            id="title"
            class="form-input border-0 border-bottom border-dark w-75 w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
            placeholder="Enter title..."
            type="text"
          />
        </div>
        <div class="input-errors text-end" v-for="error of v$.productObject.title.$errors" :key="error.$uid">
          <div class="error-msg text-danger">
            <small>{{ error.$message }}</small>
          </div>
        </div>

        <div class="mt-4 w-100 mx-auto d-flex justify-content-between align-items-center">
          <label for="photo" class="block text-sm font-semibold text-black mb-1">Photo URL</label>
          <input
            v-model="productObject.photo"
            id="photo"
            class="form-input border-0 border-bottom border-dark w-75 w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
            placeholder="Enter photo URL..."
            type="text"
          />
        </div>
        <div class="input-errors text-end" v-for="error of v$.productObject.photo.$errors" :key="error.$uid">
          <div class="error-msg text-danger">
            <small>{{ error.$message }}</small>
          </div>
        </div>

        <div class="mt-4 w-100 mx-auto d-flex justify-content-between align-items-center">
          <label for="description" class="block text-sm font-semibold text-black mb-1">Description</label>
          <input
            v-model="productObject.description"
            id="title"
            class="form-input border-0 border-bottom border-dark w-75 w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
            placeholder="Enter description..."
            type="text"
          />
        </div>
        <div class="input-errors text-end" v-for="error of v$.productObject.description.$errors" :key="error.$uid">
          <div class="error-msg text-danger">
            <small>{{ error.$message }}</small>
          </div>
        </div>

        <div class="mt-4 w-100 mx-auto d-flex justify-content-between align-items-center">
          <label for="category" class="block text-sm font-semibold text-black mb-1">Category</label>
          <div class="dropdown w-75" style="position: relative">
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
                <a @click="() => (this.productObject.category = 'Entertainment')" class="dropdown-item" href="#">Entertainment</a>
              </li>
            </ul>
          </div>
        </div>

        <div class="input-errors text-end" v-for="error of v$.productObject.category.$errors" :key="error.$uid">
          <div class="error-msg text-danger">
            <small>{{ error.$message }}</small>
          </div>
        </div>

        <div class="mt-4 w-100 mx-auto d-flex justify-content-between align-items-center">
          <label for="status" class="block text-sm font-semibold text-black mb-1">Status</label>
          <div class="dropdown w-75" style="position: relative">
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
        </div>
        <div class="input-errors text-end" v-for="error of v$.productObject.status.$errors" :key="error.$uid">
          <div class="error-msg text-danger">
            <small>{{ error.$message }}</small>
          </div>
        </div>
      </div>

      <div class="w-50">
        <div class="w-100 mx-auto d-flex justify-content-between align-items-center">
          <label for="price" class="block text-sm font-semibold text-black mb-1">Price</label>
          <input
            v-model="productObject.price"
            id="price"
            class="form-input border-0 border-bottom border-dark w-75 w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
            placeholder="Enter price..."
            type="number"
          />
        </div>

        <div class="input-errors text-end" v-for="error of v$.productObject.price.$errors" :key="error.$uid">
          <div class="error-msg text-danger">
            <small>{{ error.$message }}</small>
          </div>
        </div>

        <div class="mt-4 w-100 mx-auto d-flex justify-content-between align-items-center">
          <label for="originalPrice" class="block text-sm font-semibold text-black mb-1">Original Price</label>
          <input
            v-model="productObject.originalPrice"
            id="originalPrice"
            class="form-input border-0 border-bottom border-dark w-75 w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
            placeholder="Enter original price..."
            type="number"
          />
        </div>
        <div class="input-errors text-end" v-for="error of v$.productObject.originalPrice.$errors" :key="error.$uid">
          <div class="error-msg text-danger">
            <small>{{ error.$message }}</small>
          </div>
        </div>
        <div class="mt-4 w-100 mx-auto d-flex justify-content-between align-items-center">
          <label class="block text-sm font-semibold text-black mb-1">Delivery Type</label>
          <input
            v-model="productObject.delivery.type"
            class="form-input border-0 border-bottom border-dark w-75 w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
            placeholder="Enter delivery type..."
            type="text"
          />
        </div>
        <div class="input-errors text-end" v-for="error of v$.productObject.delivery.type.$errors" :key="error.$uid">
          <div class="error-msg text-danger">
            <small>{{ error.$message }}</small>
          </div>
        </div>
        <div class="mt-4 w-100 mx-auto d-flex justify-content-between align-items-center">
          <label for="deliveryCharges" class="block text-sm font-semibold text-black mb-1">Delivery Charges</label>
          <input
            v-model="productObject.delivery.charges"
            id="deliveryCharges"
            class="form-input border-0 border-bottom border-dark w-75 w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
            placeholder="Enter delivery charges..."
            type="number"
          />
        </div>
        <div class="input-errors text-end" v-for="error of v$.productObject.delivery.charges.$errors" :key="error.$uid">
          <div class="error-msg text-danger">
            <small>{{ error.$message }}</small>
          </div>
        </div>
        <div class="mt-4 w-100 mx-auto d-flex justify-content-between align-items-center">
          <label for="quantity" class="block text-sm font-semibold text-black mb-1">Quantity</label>
          <input
            v-model="productObject.quantity"
            @input="productObject.quantity = productObject.quantity.replace(/\D/g, '')"
            id="quantity"
            class="form-input border-0 border-bottom border-dark w-75 w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
            placeholder="Enter quantity..."
            type="text"
          />
        </div>
        <div class="input-errors text-end" v-for="error of v$.productObject.quantity.$errors" :key="error.$uid">
          <div class="error-msg text-danger">
            <small>{{ error.$message }}</small>
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-content-center mx-auto text-center w-50 mt-5">
      <button @click.prevent="datafunc" class="btn btn-success w-50 text-white shadow-lg"><b>Submit</b></button>
    </div>
  </div>
</template>

<style scoped></style>

<script>
import { useVuelidate } from '@vuelidate/core';
import { required } from '@vuelidate/validators';
export default {
  name: 'CreateProduct',
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.$store.commit('updatePageTitle', to.name);
    });
  },
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      productObject: {
        title: '',
        description: '',
        category: 'scenery',
        status: 'active',
        photo: '',
        price: '',
        originalPrice: '',
        unit: '$',
        createdBy: '6554d96bd0cd54519c0542cf',
        delivery: {
          type: 'free',
          charges: 0,
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
        photo: { required },
        price: { required },
        originalPrice: { required },
        unit: { required },

        delivery: {
          type: { required },
          charges: { required },
        },
        quantity: { required },
      },
    };
  },
  methods: {
    async datafunc() {
      this.v$.$touch();
      const isFormCorrect = await this.v$.$validate();
      // you can show some extra alert to the user or just leave the each field to show it's `$errors`.
      if (!isFormCorrect) return;
      if (this.productObject.delivery && this.productObject.delivery.type) {
        await this.$store.dispatch('createProduct', this.productObject);
        this.$router.push(this.$page.PRODUCTS.path);
      } else {
        console.error('Delivery information is missing or incomplete.');
      }
    },
  },
};
</script>
