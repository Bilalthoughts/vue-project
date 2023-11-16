<template>
  <div class="w-100 bg-light pt-5" style="height: 100vh">
    <form>
        <div 
      class="container  d-flex justify-content-around gap-5 align-items-start p-5 shadow-lg rounded bg-white"
    >
      <div class="w-100">
        <label for="AppName">App Name *</label>
        <input
          type="text "
          required
          style="height: 50px"
          class="border mb-3 w-100 border-1 rounded border-secondary"
        />

        <label for="AppName">Sale Account *</label>

        <div class="dropdown">
          <button
            style="height: 50px; text-align: left"
            class="border mb-3 bg-white w-100 border-1 rounded border-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Default Button
          </button>
          <ul class="dropdown-menu w-100">
            
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </div>
        <label for="AppName">Payroll Account *</label>

        <div class="dropdown">
          <button
            style="height: 50px; text-align: left"
            class="border mb-3 bg-white w-100 border-1 rounded border-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Default Button
          </button>
          <ul class="dropdown-menu w-100">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </div>
        <div class="form-check">
  <input required class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
  <label class="form-check-label text-muted" for="flexCheckDefault">
    Send invoice Email
  </label>
</div>

<div class="mt-5">
    <button type="submit" class="btn btn-primary">Save Changes</button>
</div>
      </div>
      <div class="w-100">
        <label for="AppName">Default Customer *</label>
        <div class="dropdown">
          <button
            style="height: 50px; text-align: left"
            class="border mb-3 bg-white w-100 border-1 rounded border-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Default Button
          </button>
          <ul class="dropdown-menu w-100">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </div>
        

        <label for="AppName">Purchase Account *</label>

        <div class="dropdown">
          <button
            style="height: 50px; text-align: left"
            class="border mb-3 bg-white w-100 border-1 rounded border-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Default Button
          </button>
          <ul class="dropdown-menu w-100">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </div>
        <label for="AppName">CopyWrite *</label>

        <input
          type="text "
          required
          style="height: 47px"
          class="border mb-3 w-100 border-1 rounded border-secondary"
        />
        <div class="form-check">
  
</div>
      </div>
    </div>
    </form>
  </div>
</template>

<style scoped>
label {
  display: block;
}
</style>

<script>
export default {
  name: "FormPage",
};
</script>
