<template>
  <div class="w-100 bg-light p-5" style="height: 100vh">
    <div class="container d-flex justify-content-between mb-2">
      <div>
        <span class="d-block"><b>Dashboard</b></span>
        <span class="d-flex"> page</span>
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
              10
            </span>
            Entries
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">20</a></li>
              <li><a class="dropdown-item" href="#">30</a></li>
              <li><a class="dropdown-item" href="#">40</a></li>
            </ul>
          </div></span
        >
        <span
          >Search  
          <input
            v-model="search"
            class="border border-dark rounded"
            type="text"
        /></span>
      </div>

      <div>
        <EasyDataTable
          class="my-3 py-5"
          :headers="headers"
          :items="items"
          :search-value="search"
          :filter-options="filterOptions"
        >
        <template #header-PO_Number="header">
      <div class="filter-column">
        <img src="../assets/icons/filter.svg" class="filter-icon" @click.stop="showNameFilter=!showNameFilter">
        {{ header.text }}
        <div class="filter-menu" v-if="showNameFilter">
          <input v-model="nameCriteria"/>
        </div>
      </div>
    </template>
          <template
            #pagination="{ prevPage, nextPage, isFirstPage, isLastPage }"
          >
            <button :disabled="isFirstPage" @click="prevPage">prev page</button>
            <button :disabled="isLastPage" @click="nextPage">next page</button>
          </template>
        </EasyDataTable>
      </div>
    </div>
  </div>
</template>

<script>
import { po_inbox_list } from "../data/po-inbox.js";

export default {
  name: "DashboardComp",
  data() {
    return {
      po_inbox_list: po_inbox_list,
      search: "",
      nameCriteria:'',
      showNameFilter: false,

      headers: [
        { text: "PO NUMBER", value: "PO_Number" },
        { text: "PO TYPE", value: "PO_Type" },
        { text: "TRADING PARTNER ID", value: "Trading_Partner" },
        { text: "DATE POSTED", value: "Date_Posted" },
        { text: "PO DATE", value: "PO_Date" },
        { text: "PO STATUS", value: "PO_Status" },
      ],
      items: po_inbox_list.data,
    };
  },
  computed: {
    filterOptions() {
  const filterOptionsArray = [];

  if (this.nameCriteria) {
    filterOptionsArray.push({
      field: 'PO_Number',
      criteria: this.nameCriteria,
      comparison: (value, criteria) => (
        value != null &&
        criteria != null &&
        typeof value === 'string' &&
        value.includes(`PO_Number-${criteria}`)
      ),
    });
  }

  return filterOptionsArray;
},
  },
};
</script>
