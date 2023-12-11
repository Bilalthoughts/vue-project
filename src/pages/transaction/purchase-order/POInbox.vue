<template>
  <div class="w-100 bg-light p-5" style="height: 100vh">
    <div class="container d-flex justify-content-between mb-2">
      <div>
        <span class="d-block"><b>Purchase Order Inbox</b> </span>
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
              <th scope="col">
                PO TYPE
                <img
                  @click="(SortPOType = !SortPOType) && (SortButtonPOType = true) && (sortButtonStatus = false) && (sortButtonTPI = false)"
                  :src="SortPOType ? require('../../../assets/icons/arrowDown.svg') : require('../../../assets/icons/arrowUp.svg')"
                  alt=""
                />
              </th>
              <th scope="col">
                <div class="dropdown d-inline">
                  <span class="dropdown-toggle removeArrow" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="../../../assets/icons/filter.svg" alt="" />
                  </span>

                  <ul class="dropdown-menu">
                    <li v-for="item in allUniqueTP" :key="item">
                      <a :class="['dropdown-item', tPSelected === item && 'bg-primary text-white']" @click="tPSelected = item">{{ item }}</a>
                    </li>
                  </ul>
                </div>
                TRADING PARTNER ID
                <img
                  @click="(tPSort = !tPSort) && (sortButtonTPI = true) && (sortButtonStatus = false) && (sortButtonTPI = false)"
                  :src="tPSort ? require('../../../assets/icons/arrowDown.svg') : require('../../../assets/icons/arrowUp.svg')"
                  alt=""
                />
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
                      <a :class="['dropdown-item', statusSelected === item && 'bg-primary text-white']" @click="statusSelected = item">{{ item }}</a>
                    </li>
                  </ul>
                </div>
                PO STATUS
                <img
                  @click="(statusSort = !statusSort) && (sortButtonStatus = true) && (sortButtonTPI = false) && (sortButtonTPI = false)"
                  :src="statusSort ? require('../../../assets/icons/arrowDown.svg') : require('../../../assets/icons/arrowUp.svg')"
                  alt=""
                />
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="items in filteredArray" :key="items.id">
              <td>{{ items.PO_Number }}</td>
              <td>{{ items.PO_Type }}</td>
              <td>{{ items.Trading_Partner }}</td>
              <td>{{ items.Date_Posted }}</td>
              <td>{{ items.PO_Date }}</td>
              <td>
                <button type="button" class="btn btn-primary btn-sm">
                  {{ items.PO_Status }}
                </button>
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
            :records="po_inbox_list.total_count"
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
import { po_inbox_list } from '../../../data/po-inbox.js';

export default {
  name: 'DashboardComp',
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.$store.commit('updatePageTitle', to.name);
    });
  },
  data() {
    return {
      po_inbox_list: po_inbox_list,
      page: 1,
      noOfRows: 10,
      search: '',
      statusSelected: '',
      statusSort: false,
      SortPOType: false,
      SortButtonPOType: false,
      tPSelected: '',
      tPSort: false,
      sortButtonStatus: false,
      sortButtonTPI: false,
      sortButtonPOType: false,
    };
  },
  methods: {
    clearFilter() {
      this.statusSelected = '';
      this.tPSelected = '';
    },
    myCallback() {
      // console.log();
    },
    sortData(arrFiltered) {
      if (this.sortButtonStatus) {
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
      }
      return arrFiltered;
    },
    sortDataTPI(arrFiltered) {
      if (this.sortButtonTPI) {
        if (this.tPSort) {
          arrFiltered = arrFiltered.sort((a, b) => {
            if (a.Trading_Partner < b.Trading_Partner) {
              return -1;
            }
            if (a.Trading_Partner > b.Trading_Partner) {
              return 1;
            }
            return 0;
          });
        } else {
          arrFiltered = arrFiltered.sort((a, b) => {
            if (a.Trading_Partner > b.Trading_Partner) {
              return -1;
            }
            if (a.Trading_Partner < b.Trading_Partner) {
              return 1;
            }
            return 0;
          });
        }
      }
      return arrFiltered;
    },
    sortDataPOType(arrFiltered) {
      if (this.SortButtonPOType) {
        if (this.SortPOType) {
          arrFiltered = arrFiltered.sort((a, b) => {
            if (a.PO_Type < b.PO_Type) {
              return -1;
            }
            if (a.PO_Type > b.PO_Type) {
              return 1;
            }
            return 0;
          });
        } else {
          arrFiltered = arrFiltered.sort((a, b) => {
            if (a.PO_Type > b.PO_Type) {
              return -1;
            }
            if (a.PO_Type < b.PO_Type) {
              return 1;
            }
            return 0;
          });
        }
      }
      return arrFiltered;
    },
  },
  computed: {
    allUniquePOStatus() {
      return [...new Set(this.po_inbox_list.data.map((item) => item.PO_Status))];
    },
    allUniqueTP() {
      return [...new Set(this.po_inbox_list.data.map((item) => item.Trading_Partner))];
    },
    filteredArray() {
      let arrFiltered = this.po_inbox_list.data;
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
      arrFiltered = this.sortDataTPI(arrFiltered);
      arrFiltered = this.sortData(arrFiltered);
      arrFiltered = this.sortDataPOType(arrFiltered);
      return arrFiltered;
    },
  },
};
</script>
