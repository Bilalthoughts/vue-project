<template>
  <div class="w-100 bg-light p-5" style="height: 100vh">
    <div class="container d-flex justify-content-between mb-2">
      <div>
        <span class="d-block"><b>Purchase Order</b> Inbox</span>
      </div>
      <div></div>
    </div>
    <div class="container shadow-lg rounded bg-white">
      <div class="d-flex justify-content-between pt-4">
        <span class="d-flex gap-2">
          Show
          <div class="dropdown">
            <span
              class="dropdown-toggle"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {{ noOfRows }}
            </span>
            Entries
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" @click="selectedValue(10)">10</a>
              </li>
              <li>
                <a class="dropdown-item" @click="selectedValue(20)">20</a>
              </li>
              <li>
                <a class="dropdown-item" @click="selectedValue(30)">30</a>
              </li>
              <li>
                <a class="dropdown-item" @click="selectedValue(40)">40</a>
              </li>
            </ul>
          </div></span
        >
        <span
          >Search
          <input
            v-model="search"
            class="border border-dark rounded"
            type="text"
          />

          <span class="d-block text-end"
            ><span @click="filterByPoStatus('')" class="shadow btn"
              ><img src="../../../assets/icons/refresh.svg" alt="" /> Clear All
              Filter</span
            ></span
          >
        </span>
      </div>
      <div>
        <table class="table mt-3">
          <thead>
            <tr class="bg-light">
              <th scope="col">PO NUMBER</th>
              <th scope="col">PO TYPE</th>
              <th scope="col">TRADING PARTNER ID</th>
              <th scope="col">DATE POSTED</th>
              <th scope="col">PO DATE</th>
              <th scope="col">
                <div class="dropdown d-inline">
                  <span
                    class="dropdown-toggle removeArrow"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img src="../../../assets/icons/filter.svg" alt="" />
                  </span>

                  <ul class="dropdown-menu">
                    <li v-for="items in poStatusDataArray" :key="items">
                      <a
                        class="dropdown-item"
                        @click="filterByPoStatus(items)"
                        >{{ items }}</a
                      >
                    </li>
                  </ul>
                </div>
                PO STATUS
                <img
                  v-if="isArrow"
                  @click="isArrowMethode"
                  src="../../../assets/icons/arrowDown.svg"
                  alt=""
                />
                <img
                  v-if="isArrow === false"
                  @click="isArrowMethode"
                  src="../../../assets/icons/arrowUp.svg"
                  alt=""
                />
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="items in filteredArray" :key="items.id">
              <td>{{ items.PO_Number }}</td>
              <!-- <td>
                <div class="dropdown border w-25">
                  <span
                    class="dropdown-toggle"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-list"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                      />
                    </svg>
                  </span>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">20</a></li>
                    <li><a class="dropdown-item" href="#">30</a></li>
                    <li><a class="dropdown-item" href="#">40</a></li>
                  </ul>
                </div>
              </td> -->
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
            @paginate="myCallback"
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
import { po_inbox_list } from "../../../data/po-inbox.js";
export default {
  name: "DashboardComp",
  data() {
    return {
      po_inbox_list: po_inbox_list,
      search: "",
      page: 1,
      noOfRows: 10,
      filteredData: [],
      poStatusvalue: "",
      poStatusDataArray: new Set(),
      isArrow: false,
    };
  },
  methods: {
    selectedValue(value) {
      return (this.noOfRows = value);
    },
    filterByPoStatus(status) {
      this.poStatusvalue = status.toLowerCase();
      console.log(this.filteredData, "this.filteredData ");
      if (this.poStatusvalue) {
        this.filteredData = this.po_inbox_list.data.filter(
          (item) =>
            item.PO_Status.toLowerCase() === this.poStatusvalue.toLowerCase()
        );
      }
    },

    isArrowMethode() {
      return (this.isArrow = !this.isArrow);
    },
  },
  computed: {
    // filteredArray() {
    //   return this.poStatusvalue !== "" && this.filteredData.length > 0
    //     ? this.filteredData
    //     : this.po_inbox_list.data.filter((item) =>
    //         Object.values(item).some((value) =>
    //           String(value).toLowerCase().includes(this.search.toLowerCase())
    //         )
    //       );
    // },

    filteredArray() {
      if (this.poStatusvalue !== "") {
        return this.filteredData;
      } else if (this.search !== "") {
        return this.po_inbox_list.data.filter((item) =>
          Object.values(item).some((value) =>
            String(value).toLowerCase().includes(this.search.toLowerCase())
          )
        );
      }
      return this.po_inbox_list.data;
    },
    poStatusArray() {
      return this.poStatusDataArray;
    },
    sortedArrayAlphabetically() {
      let arrayCopy = [...this.filteredArray];
      return arrayCopy.sort((a, b) => {
        let fa = a.PO_Status.toLowerCase();
        let fb = b.PO_Status.toLowerCase();
        if (this.isArrow && fa < fb) {
          return -1;
        }
        if (this.isArrow === false && fa > fb) {
          return 1;
        }
        return 0;
      });
    },
  },
  created() {
    this.poStatusDataArray = new Set(
      this.po_inbox_list.data.map((item) => item.PO_Status)
    );
  },
};
</script>
