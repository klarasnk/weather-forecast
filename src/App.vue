<template>
  <nav>
    <router-link to="/change-country"></router-link>
  </nav>


  <div class="WeatherPage">
  </div>
  <div>
    <div v-if="requestError"> City not Found</div>
    <div v-else class=" w-full h-[420px]  flex justify-center ">
      <router-view/>

    </div>


  </div>

</template>


<script>



</script>


