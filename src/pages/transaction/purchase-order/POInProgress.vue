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
            ><span @click="clearFilter()" class="shadow btn"><img src="../../../assets/icons/refresh.svg" alt="" /> Clear All Filter</span></span
          >
        </span>
      </div>
      <div>
        <table class="table mt-3">
          <thead>
            <tr class="bg-light">
              <th scope="col">PO NUMBER</th>
              <th scope="col">PO TYPE</th>
              <th scope="col">
                <div class="dropdown d-inline">
                  <span class="dropdown-toggle removeArrow" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="../../../assets/icons/filter.svg" alt="" />
                  </span>

                  <ul class="dropdown-menu">
                    <li v-for="item in allUniqueTP" :key="item">
                      <a class="dropdown-item" @click="tPSelected = item">{{ item }}</a>
                    </li>
                  </ul>
                </div>
                TRADING PARTNER ID
              </th>
              <th scope="col">DATE POSTED</th>
              <th scope="col">PO DATE</th>
              <th scope="col">
                <div class="dropdown d-inline">
                  <span class="dropdown-toggle removeArrow" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="../../../assets/icons/filter.svg" alt="" />
                  </span>

                  <ul class="dropdown-menu">
                    <li v-for="item in allUniquePOStatus" :key="item">
                      <a class="dropdown-item" @click="statusSelected = item">{{ item }}</a>
                    </li>
                  </ul>
                </div>
                POA
                <img
                  @click="statusSort = !statusSort"
                  :src="statusSort ? require('../../../assets/icons/arrowDown.svg') : require('../../../assets/icons/arrowUp.svg')"
                  alt=""
                />
              </th>
              <th scope="col">ASN</th>
              <th scope="col">INV</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="items in filteredArray" :key="items.id">
              <td style="overflow: hidden; max-width: 300px">{{ items.title }}</td>
              <td style="overflow: hidden; max-width: 300px">{{ items.source }}</td>
              <td style="overflow: hidden; max-width: 300px">{{ items.thumbnail }}</td>
              <td style="overflow: hidden; max-width: 300px">{{ items.url }}</td>
              <td style="overflow: hidden; max-width: 300px">{{ items.published }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="d-flex justify-content-between align-items-center py-3">
        <div></div>
        <small>
          <paginationWrapper
            v-model="page"
            :records="po_inprogress_list.meta.totalArticles"
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
    clearFilter() {
      this.statusSelected = '';
      this.tPSelected = '';
    },
    fetchData() {
      this.$store.dispatch('ApiData', { noOfRows: this.noOfRows, page: this.page });
    },
    myCallback() {
      // console.log();
    },
    sortData(arrFiltered) {
      if (this.statusSort) {
        arrFiltered = arrFiltered.sort((a, b) => {
          if (a.PO_Status < b.PO_Status) {
            return -1;
          }
          if (a.PO_Status > b.PO_Status) {
            return 1;
          }
          return 0;
        });
      } else {
        arrFiltered = arrFiltered.sort((a, b) => {
          if (a.PO_Status > b.PO_Status) {
            return -1;
          }
          if (a.PO_Status < b.PO_Status) {
            return 1;
          }
          return 0;
        });
      }
      return arrFiltered;
    },
  },
  computed: {
    GetStateData() {
      return this.$store.state.ApiData;
    },
    po_inprogress_list() {
      return this.GetStateData;
    },
    allUniquePOStatus() {
      return [...new Set(this.po_inprogress_list.articles.map((item) => item.PO_Status))];
    },
    allUniqueTP() {
      return [...new Set(this.po_inprogress_list.articles.map((item) => item.Trading_Partner))];
    },
    filteredArray() {
      let arrFiltered = this.po_inprogress_list.articles;
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
      arrFiltered = this.sortData(arrFiltered);
      return arrFiltered;
    },
  },
  watch: {
    noOfRows: 'fetchData',
    page: 'fetchData',
  },
};
</script>
