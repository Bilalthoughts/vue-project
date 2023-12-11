<template>
    
    <div class="container m-auto shadow-lg rounded p-5 bg-light"  >
     <h1>Title</h1>
     <input v-model="productObject.title" class="w-50 py-2 rounded" placeholder="title..." type="text" name="" id="">
     <h1>Photo</h1>
     <input v-model="productObject.photo" class="w-50 py-2 rounded" placeholder="Photo..." type="text" name="" id="">
     <hr>
     <h1>Description</h1>
     <input v-model="productObject.description" class="w-50 py-2 rounded" placeholder="Description..." type="text" name="" id="">
     <hr>
     <h1>Category</h1>
     <input v-model="productObject.category" class="w-50 py-2 rounded" placeholder="Category..." type="text" name="" id="">
     <hr>
     <h1>Status</h1>
     <input v-model="productObject.status" class="w-50 py-2 rounded" placeholder="Status..." type="text" name="" id="">
     <hr>
     <h1>Price</h1>
     <input v-model="productObject.price" class="w-50 py-2 rounded" placeholder="Price..." type="text" name="" id="">
     <hr>
     <h1>Original Price</h1>
     <input v-model="productObject.originalPrice" class="w-50 py-2 rounded" placeholder="Original Price..." type="text" name="" id="">
   
     <h1>Delivery type</h1>
     <input v-model="productObject.delivery.type" class="w-50 py-2 rounded" placeholder="Delivery type..." type="text" name="" id="">
     <h1>Charges</h1>
     <input v-model="productObject.delivery.charges" class="w-50 py-2 rounded" placeholder="Charges..." type="number" name="" id="">
     <h1>Quantity</h1>
     <input v-model="productObject.quantity" class="w-50 py-2 rounded" placeholder="quantity..." type="text" name="" id="">

     <div class="w-100 m-auto text-center"> 
        <button @click.prevent="datafunc" class="w-50  text-center my-4 btn mx-auto  btn-success rounded btn-lg">Submit</button>
     </div>
   </div>
</template>

<script>

export default {
 name: 'CreateProduct',
 data(){
 return{
    productObject:{
    title:'',
    description:'',
    category:'scenery',
    status: "active",
    photo: "",
    price: "",
    originalPrice: "",
    unit: '$',
    createdBy:'6554d96bd0cd54519c0542cf', 
    delivery: {
        type: "free",
        charges: 0
    },
    quantity: ""
}
 }
 },
 methods: {
    async datafunc() {
       console.log(this.productObject,'sldfkj')
        if (this.productObject.delivery && this.productObject.delivery.type) {
        await this.$store.dispatch('createProduct', this.productObject);
        this.$router.push(this.$page.PRODUCTS.path)
      } else {
        console.error("Delivery information is missing or incomplete.");
      }
            
        
   },
   
 },
 
};
</script>

