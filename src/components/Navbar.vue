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
          <span @click.prevent="$router.push('/')"><img style="width: 120px;" src="../assets/image/ecom.png" alt=""> | </span><span class="text-black" style="font-weight: bolder;"><b> WEBEDI  </b></span>| <span> {{ updatePageName }} </span>
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
        <ul class="navbar-nav me-auto ms-auto mb-2 gap-3 mb-lg-0">
          <li
            @click.prevent="testing()"
            class="nav-item d-flex align-items-center"
          >
            <a class="nav-link  active " aria-current="page" href="#">
              <img style="width: 25px;" src="../assets/icons/home.svg" alt="home" />
              </a
            >
          </li>
          <li
            @click.prevent="$router.push($page.ANALYTICS.path)"
            class="nav-item d-flex align-items-center"
          >
            <a class="nav-link gap-1" href="#">
              <img style="width: 25px;" src="../assets/icons/search.svg" alt="" />
              </a
            >
          </li>
          <li
            class="nav-item p-0 d-flex align-items-center justify-content-center"
          >
            <a class="nav-link gap-1" href="#">

              <div class="dropdown">
                <a
                  class="dropdown-toggle remove-dropdown-arrow"
                  style="text-decoration: none"
                  role="button"
                  aria-expanded="false"
                >
                <img style="width: 25px;"  src="../assets/icons/transaction.svg" alt="" />
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
                        @click.prevent="$router.push($page.PO_INBOX.path)"
                        class="dropdown-item"
                        href="#"
                        >Inbox</a
                      >
                      <a
                        @click.prevent="$router.push($page.PO_PROGRESS.path)"
                        class="dropdown-item"
                        href="#"
                        >In-progress</a
                      >
                      <a
                        @click.prevent="$router.push($page.PO_HISTORY.path)"
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
                        @click.prevent="$router.push($page.SHIPMENT_SENT.path)"
                        class="dropdown-item"
                        href="#"
                        >Sent</a
                      >
                      <a
                        @click.prevent="$router.push($page.SHIPMENT_SAVED.path)"
                        class="dropdown-item"
                        href="#"
                        >Saved</a
                      >
                      <a
                        @click.prevent="
                          $router.push($page.SHIPMENT_HISTORY.path)
                        "
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
                        @click.prevent="$router.push($page.INVOICE_SENT.path)"
                        class="dropdown-item"
                        href="#"
                        >Sent</a
                      >
                      <a
                        @click.prevent="$router.push($page.INVOICE_SAVED.path)"
                        class="dropdown-item"
                        href="#"
                        >Saved</a
                      >
                      <a
                        @click.prevent="
                          $router.push($page.INVOICE_HISTORY.path)
                        "
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
            @click.prevent="$router.push($page.PRODUCTS.path)"
            class="nav-item d-flex align-items-center"
          >
            <a class="nav-link gap-1" href="#">
              <img style="width: 25px;"  src="../assets/icons/products.svg" alt="" />
              
            </a>
          </li>
          <li
            @click.prevent="$router.push($page.DOC_TRACKING.path)"
            class="nav-item d-flex align-items-center"
          >
            <a class="nav-link gap-1" href="#">
              <img style="width: 25px;" src="../assets/icons/bag.svg" alt="" />
              </a
            >
          </li>
          <li
            @click.prevent="$router.push($page.DOC_TRACKING.path)"
            class="nav-item d-flex align-items-center"
          >
            <a class="nav-link gap-1" href="#">
              <img style="width: 25px;" src="../assets/icons/message.svg" alt="" />
              </a
            >
          </li>
          <li
            @click.prevent="$router.push($page.DOC_TRACKING.path)"
            class="nav-item d-flex align-items-center"
          >
            <a class="nav-link gap-1" href="#">
              <img style="width: 25px;" src="../assets/icons/add.svg" alt="" />
              </a
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
        <div class="dropdown  mx-3">
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
                  fill="black"
                  class="bi bi-person-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                  <path
                    fill-rule="evenodd"
                    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                  />
                </svg>
                <span class="px-2"> {{ $store.state.name  }} ({{$store.state.role  }})</span>
              </button>
              <ul class="dropdown-menu ">
                <li>
                  <span class="dropdown-item" 
                    >{{ $store.state.email  }}</span
                  >
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
  background-color: white;
  padding: 5px 10px 5px 10px;
  border: none;
  border-radius: 10%;
  font-size: large;
  
}
.customBgbuton::after{
  display: none;
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
      this.$router.push(this.$page.SIGNIN.path);
    },
    async apiDataFunc(){
      
          console.log(this.$store.state.ApiData)
    }
  },
  computed:{
    updatePageName(){
      return this.$store.state.pageTitle
    }
  }
};
</script>
