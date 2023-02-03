<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/change-country">About</router-link>

  </nav>
  <router-view/>

  <div class="WeatherPage">
    <div>{{weather}}</div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name:'WeatherPage',
  created() {
    this.getWeather();
  },
  computed: {
    ...mapState(["weather"]),
  },
  methods: {
    ...mapActions(["getWeather"]),
  },
}

</script>
