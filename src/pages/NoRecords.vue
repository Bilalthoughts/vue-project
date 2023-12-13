<template>
  <div class="w-100">
    <div class="container m-auto text-center mt-5 shadow-lg p-5 rounded">
      <h1 class="display-1">OPPS!</h1>
      <h4>Record Not Found</h4>
      <h1 class=""><b>Let's goto Home Page</b></h1>
      <button class="btn shadow-lg btn-danger w-25 mt-4 text-white" @click.prevent="$router.push('/')">
        <h4><b>Home</b></h4>
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'NoRecords',
};
</script>
