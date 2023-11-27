<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary pb-0 mb-0 border-bottom">
    <div class="container-fluid">
      <a class="navbar-brand" style="height: 80px" href="#">
        <!-- <img style="width: 80px" src="../assets/image/logo.png" alt=""
      /> -->
        <h2>
          <span @click="showSidebar" v-if="!ifShowSidebar">
            <img src="../assets/icons/menu.svg" alt="" />
          </span>
          <span @click="showSidebar" v-if="ifShowSidebar">
            <img src="../assets/icons/cross.svg" alt="" />
          </span>
          <span @click.prevent="$router.push('/')">Vue Company</span>
        </h2>
      </a>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"
          ><svg
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
            /></svg
        ></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto ms-auto mb-2 mb-lg-0">
          <li
            @click.prevent="testing()"
            class="nav-item d-flex align-items-center"
          >
            <a class="nav-link active gap-1" aria-current="page" href="#">
              <img src="../assets/icons/home.svg" alt="home" />
              Home</a
            >
          </li>
          <li
            @click.prevent="$router.push('/analytic')"
            class="nav-item d-flex align-items-center"
          >
            <a class="nav-link gap-1" href="#">
              <img src="../assets/icons/analytic.svg" alt="" />
              Analytics</a
            >
          </li>
          <li
            class="nav-item p-0 d-flex align-items-center justify-content-center"
          >
            <a class="nav-link gap-1" href="#">
              <img src="../assets/icons/transaction.svg" alt="" />

              <div class="dropdown">
                <a
                  class="dropdown-toggle remove-dropdown-arrow"
                  style="text-decoration: none"
                  role="button"
                  aria-expanded="false"
                >
                  Transactions
                </a>

                <ul class="dropdown-menu">
                  <li
                    class="dropdown dropend dropdownNested px-3"
                    style="position: relative"
                  >
                    <a
                      class="dropdown-toggle gap-1 py-1"
                      style="text-decoration: none"
                      role="button"
                      aria-expanded="false"
                    >
                      Purchase Order
                    </a>
                    <div
                      class="dropdown-menu d-none"
                      style="position: absolute; left: 100%; top: 0px"
                    >
                      <a
                        @click.prevent="$router.push('/PO-Inbox')"
                        class="dropdown-item"
                        href="#"
                        >Inbox</a
                      >
                      <a
                        @click.prevent="$router.push('/PO-InProgress')"
                        class="dropdown-item"
                        href="#"
                        >In-progress</a
                      >
                      <a
                        @click.prevent="$router.push('/PO-History')"
                        class="dropdown-item"
                        href="#"
                        >History</a
                      >
                    </div>
                  </li>
                  <li
                    class="dropdown dropend dropdownNested px-3"
                    style="position: relative"
                  >
                    <a
                      class="dropdown-toggle py-1"
                      style="text-decoration: none"
                      role="button"
                      aria-expanded="false"
                    >
                      Shipment
                    </a>
                    <div
                      class="dropdown-menu d-none"
                      style="position: absolute; left: 100%; top: 0px"
                    >
                      <a
                        @click.prevent="$router.push('/ShipmentSent')"
                        class="dropdown-item"
                        href="#"
                        >Sent</a
                      >
                      <a
                        @click.prevent="$router.push('/ShipmentSaved')"
                        class="dropdown-item"
                        href="#"
                        >Saved</a
                      >
                      <a
                        @click.prevent="$router.push('/ShipmentHistory')"
                        class="dropdown-item"
                        href="#"
                        >History</a
                      >
                    </div>
                  </li>
                  <li
                    class="dropdown dropend dropdownNested px-3"
                    style="position: relative"
                  >
                    <a
                      class="dropdown-toggle py-1"
                      style="text-decoration: none"
                      role="button"
                      aria-expanded="false"
                    >
                      Invoice
                    </a>
                    <div
                      class="dropdown-menu d-none"
                      style="position: absolute; left: 100%; top: 0px"
                    >
                      <a
                        @click.prevent="$router.push('/InvoiceSent')"
                        class="dropdown-item"
                        href="#"
                        >Sent</a
                      >
                      <a
                        @click.prevent="$router.push('/InvoiceSaved')"
                        class="dropdown-item"
                        href="#"
                        >Saved</a
                      >
                      <a
                        @click.prevent="$router.push('/InvoiceHistory')"
                        class="dropdown-item"
                        href="#"
                        >History</a
                      >
                    </div>
                  </li>
                </ul>
              </div>
            </a>
          </li>
          <li
            @click.prevent="$router.push('/MostRecentDocs')"
            class="nav-item d-flex align-items-center"
          >
            <a class="nav-link gap-1" href="#">
              <img src="../assets/icons/document.svg" alt="" />
              Most Recent Documents
            </a>
          </li>
          <li
            @click.prevent="$router.push('/DocTracking')"
            class="nav-item d-flex align-items-center"
          >
            <a class="nav-link gap-1" href="#">
              <img src="../assets/icons/search.svg" alt="" />
              Document Tracking</a
            >
          </li>
          <!-- <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li> -->
          <!-- <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li> -->
        </ul>
        <div class="d-flex" role="search">
          <div class="d-flex gap-3">
            <div class="customBg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="16"
                fill="currentColor"
                class="bi bi-fullscreen"
                viewBox="0 0 16 16"
              >
                <path
                  d="M1.5 1a.5.5 0 0 0-.5.5v4a.5.5 0 0 1-1 0v-4A1.5 1.5 0 0 1 1.5 0h4a.5.5 0 0 1 0 1h-4zM10 .5a.5.5 0 0 1 .5-.5h4A1.5 1.5 0 0 1 16 1.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 1-.5-.5zM.5 10a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 0 14.5v-4a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v4a1.5 1.5 0 0 1-1.5 1.5h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 .5-.5z"
                />
              </svg>
            </div>
            <div class="customBg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="16"
                fill="currentColor"
                class="bi bi-globe"
                viewBox="0 0 16 16"
              >
                <path
                  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z"
                />
              </svg>
            </div>
            <div class="customBg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="16"
                fill="currentColor"
                class="bi bi-moon-fill"
                viewBox="0 0 16 16"
              >
                <path
                  d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"
                />
              </svg>
            </div>
            <div class="dropdown">
              <button
                class="customBgbuton dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                @click="toggleSidebar"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  fill="#2a7efc"
                  class="bi bi-person-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                  <path
                    fill-rule="evenodd"
                    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                  />
                </svg>

                My Account
              </button>
              <ul class="dropdown-menu">
                <li>
                  <span class="dropdown-item">{{ $store.state.email }}</span>
                </li>
                <li @click.prevent="logoutFunction">
                  <a class="dropdown-item" href="#">Logout</a>
                </li>
                <li @click.prevent="$router.push('/FormPage')">
                  <a class="dropdown-item" href="#">Form</a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">Something else here</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style>
.navbar a {
  color: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.customBg {
  background-color: #eaeaea;
  padding: 5px 13px 5px 13px;
  border-radius: 50%;
}
.remove-dropdown-arrow::after {
  display: none !important;
}
.dropdown:hover .dropdown-menu {
  display: block;
}
.dropdownNested:hover .dropdown-menu {
  display: block !important;
}
.customBgbuton {
  background-color: #eaeaea;
  padding: 5px 10px 5px 10px;
  border: none;
  border-radius: 10%;
  font-size: large;
}
</style>

<script>
export default {
  name: "navbarComp",
  props: {
    ifShowSidebar: Boolean,
  },

  methods: {
    showSidebar() {
      this.$emit("showSidebar");
    },
    testing() {
      console.log("abc");
      this.$router.push("/");
    },
    logoutFunction() {
      this.$store.commit("logout");
      this.$router.push("/signin");
    },
  },
};
</script>
