<template>
  <div class="w-100 bg-light p-5" style="height: 100vh">
    <div class="container d-flex justify-content-between mb-2">
      <div>
        <span class="d-block"><b>Purchase Order Inprogress</b> </span>
      </div>
      <div></div>
    </div>
    <div class="container shadow-lg rounded bg-white">
      <div class="d-flex justify-content-between pt-4">
        <span class="d-flex gap-2">
          Show
          <div class="dropdown">
            <span class="dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              {{ noOfRows }}
            </span>
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
            ></span
          >
        </span>
      </div>
      <div>
        <table class="table mt-3">
          <thead>
            <tr class="bg-light">
              <th scope="col">Title</th>
              <th scope="col">Source</th>
              <th scope="col">
                
                Thumbnail
              </th>
              <th scope="col">URL</th>
              <th scope="col">Published</th>
              <th scope="col">ID</th>
             
              
            </tr>
          </thead>
          <tbody>
            <tr v-for="items in filteredArray" :key="items.id" @click.prevent="$router.push({ name: 'Detail_Data', params: { id: items.id } })">
              
              <td style="overflow: hidden; max-width: 300px">{{ items.title }}</td>
              <td style="overflow: hidden; max-width: 300px">{{ items.source }}</td>
              <td style="overflow: hidden; max-width: 300px">{{ items.thumbnail }}</td>
              <td style="overflow: hidden; max-width: 300px">{{ items.url }}</td>
              <td style="overflow: hidden; max-width: 300px">{{ items.published }}</td>
              <td style="overflow: hidden; max-width: 300px">{{ items.id }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="d-flex justify-content-between align-items-center py-3">
        <div></div>
        <small>
          <paginationWrapper
            v-model="pageNo"
            :records="GetStateData.meta.totalArticles"
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
  name: 'PO-InProgress',
  data() {
    return {
      pageNo: 1,
      noOfRows: 10,
      search: '',
      statusSelected: '',
      statusSort: false,
      tPSelected: '',
      tPSort: false,
    };
  },
  methods: {
  
    clearFilter() {
      this.statusSelected = '';
      this.tPSelected = '';
    },
    fetchData() {
      this.$store.dispatch('ApiData', { noOfRows: this.noOfRows, pageNo: this.pageNo });
    },
    myCallback() {
      // console.log();
    },
   
  },
  computed: {
    GetStateData() {
      return this.$store.state.ApiData;
    },
    po_inprogress_list() {
   return this.GetStateData.articles;  
 
  
},




    allUniquePOStatus() {
      return [...new Set(this.po_inprogress_list.map((item) => item.PO_Status))];
    },
    allUniqueTP() {
      return [...new Set(this.po_inprogress_list.map((item) => item.Trading_Partner))];
    },
    filteredArray() {
      let arrFiltered = this.po_inprogress_list;
      if (this.search !== '') {
        arrFiltered = arrFiltered.filter((item) =>
          Object.values(item).some((value) => String(value).toLowerCase().includes(this.search.toLowerCase()))
        );
      }
      if (this.statusSelected !== '') {
        arrFiltered = arrFiltered.filter((item) => item.PO_Status.toLowerCase() === this.statusSelected.toLowerCase());
      }
      if (this.tPSelected !== '') {
        arrFiltered = arrFiltered.filter((item) => item.Trading_Partner.toLowerCase() === this.tPSelected.toLowerCase());
      }
      
      return arrFiltered;
    },
  },
  watch: {
    noOfRows: {
      handler: 'fetchData',
      immediate:true
    },
    pageNo: 'fetchData',
  },
};
</script>
