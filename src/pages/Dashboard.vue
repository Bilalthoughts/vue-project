<template>
  <div class="w-100 bg-light p-5" style="height: 100vh">
    <!-- <div class="container d-flex justify-content-between mb-2">
      <div>
        <span class="d-block"><b>Department</b></span>
        <span class="d-flex"
          ><small class="text-primary d-flex align-items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-house-door-fill"
              viewBox="0 0 16 16"
            >
              <path
                d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5Z"
              />
            </svg>
            Home</small
          >
          > Department</span
        >
      </div>
      <div>
        <button type="button" class="btn btn-primary">Add New</button>
      </div>
    </div> -->
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
        <table class="table mt-3">
          <thead>
            <tr class="bg-light">
              <th scope="col">PO NUMBER</th>
              <th scope="col">PO TYPE</th>
              <th scope="col">TRADING PARTNER ID</th>
              <th scope="col">DATE POSTED</th>
              <th scope="col">PO DATE</th>
              <th scope="col">PO STATUS</th>
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
        <div><small>Showing 1-5 ({{ po_inbox_list.total_count }})</small></div>
        <div>
          <nav aria-label="Page navigation example">
            <ul class="pagination">
              <li class="page-item">
                <a class="page-link" href="#"> {{ `<` }} </a>
              </li>
              <li class="page-item">
                <a class="page-link bg-primary text-white" href="#">1</a>
              </li>

              <li class="page-item">
                <a class="page-link" href="#">{{ `>` }}</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { po_inbox_list } from "../data/po_inbox.js";
export default {
  name: "DashboardComp",
  data() {
    return {
      po_inbox_list: po_inbox_list,
      search: "",
    };
  },
  computed: {
    filteredArray() {
      if (!this.search) {
        return this.po_inbox_list.data;
      }

      const searchLower = this.search.toLowerCase();
      return this.po_inbox_list.data.filter((item) =>
        Object.values(item).some((value) =>
          String(value).toLowerCase().includes(searchLower)
        )
      );
    },
  },
};
</script>
