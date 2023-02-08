<template>
  <WeatherShow v-if="show" :cities="cities" :show="changeShow" :loading="loading"/>
  <CityChanges v-else :cities="cities" :show="changeShow" :deleteItem="deleteItem" :addCity="addCity"/>
</template>

<script>
import CityChanges from "@/components/CityChanges";
import WeatherShow from "@/components/WeatherShow";

export default {
  components: {WeatherShow, CityChanges},
  data() {
    return {
      show: true,
      cities: window.localStorage.getItem('cities') ? JSON.parse(window.localStorage.getItem('cities')) : [],
      options: {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      },
      loading: false,
      weather: '',
      city: '',
      requestError: false,
      wrongCityError: false,
    }
  },

  mounted() {
    if (this.cities.length===0){
      this.loading=true
      this.getData()
    }
  },
  methods: {
    changeShow() {
      this.show = !this.show
    },
    async addCity(city) {
      let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=21f731ebc999bee36dc13db346551694`)
      let res = await response.json()
      this.weather = res
      if (res.message === "bad query" || res.message === "city not found" || res.message === "Nothing to geocode") {
        return {cityError: true}
      } else if (this.cities.find(city => city.id === res.id)) {
        return {existingCityError: true}
      } else {
        this.cities.push(this.weather)
        this.loading=false
        window.localStorage.setItem('cities', JSON.stringify(this.cities))
        return {existingCityError: false}
      }
      // return {cityError: false}
    },
    async fetchLocationName(lat, lng) {
      await fetch(
          'https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lng + '&appid=21f731ebc999bee36dc13db346551694',
      )
          .then((response) => response.json())
          .then(async (responseJson) => {
            try {
              this.addCity(responseJson.name)
            } catch (error) {
              this.requestError = true
            }
          });
    },
    deleteItem(id) {
      console.log(id)
      this.cities = this.cities.filter(elm => elm.id !== id)
      window.localStorage.setItem('cities', JSON.stringify(this.cities))
      if(this.cities.length===0){
        this.getData()
      }
    },
    async success(pos) {
      const crd = pos.coords;
      this.fetchLocationName(crd.latitude, crd.longitude)
    },
    error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    },
    async getData() {
      navigator.geolocation.getCurrentPosition(this.success, this.error, this.options);
    }
  }
}
</script>