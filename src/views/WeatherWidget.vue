<template>
  <div v-if="loading" role="status" class="w-[320px] h-[320px] flex items-center justify-center">
    <svg aria-hidden="true" class="w-20 h-20 mr-2  text-gray-200 animate-spin fill-blue-600" viewBox="0 0 100 101"
         fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
          fill="currentColor"/>
      <path
          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
          fill="currentFill"/>
    </svg>
    <span class="sr-only">Loading...</span>
  </div>
  <div
      v-else-if="requestError && show && cities.length === 0"
      class="w-[320px] h-[320px] flex items-center justify-center text-center"
  >
    <p>
      You have denied Geolocation request. Please go to
      <span @click="show = false" class="text-red-300 cursor-pointer"
      >settings</span
      >
      or
      <span @click="tryGetData" class="text-red-300 cursor-pointer">try</span>
      again.
    </p>
  </div>
  <div v-else>
    <WeatherShow v-if="show" :cities="cities" :show="changeShow"/>
    <CityChanges
        v-else
        :cities="cities"
        :show="changeShow"
        :addCity="addCity"
        @deleteCity="deleteCity"
        @updateCities="updateCities"
    />
  </div>
</template>

<script>
import CityChanges from "@/components/CityChanges";
import WeatherShow from "@/components/WeatherShow";

export default {
  components: {WeatherShow, CityChanges},
  data() {
    return {
      show: true,
      cities: window.localStorage.getItem("cities")
          ? JSON.parse(window.localStorage.getItem("cities"))
          : [],
      options: {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      },
      loading: false,
      weather: null,
      requestError: false,
      visible: true,
    };
  },

  mounted() {
    if (this.cities.length === 0) {
      this.getData();
    }
  },

  created() {
    if (this.cities.length === 0) {
      this.loading = true;
      this.show = true;
      this.getData();
    }
  },

  methods: {
    changeShow() {
      this.show = !this.show;
    },
    async addCity(city) {
      let response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=21f731ebc999bee36dc13db346551694`
      );
      this.weather = await response.json();
      if (this.weather.message) {
        return {error: "Enter correct city"};
      } else if (this.cities.find((city) => city.id === this.weather.id)) {
        return {error: "City already exists in Your list"};
      } else {
        this.cities.push(this.weather);
        this.loading = false;
        window.localStorage.setItem("cities", JSON.stringify(this.cities));
        return {error: null};
      }
    },

    async fetchLocationName(lat, lng) {
      await fetch(
          "https://api.openweathermap.org/data/2.5/weather?lat=" +
          lat +
          "&lon=" +
          lng +
          "&appid=21f731ebc999bee36dc13db346551694"
      )
          .then((response) => response.json())
          .then(async (responseJson) => {
            try {
              await this.addCity(responseJson.name);
            } catch (error) {
              this.requestError = true;
            }
          });
    },

    deleteCity(cities) {
      if (this.cities.length === 0) {
        this.loading = true;
        this.show = !this.requestError;
        this.getData();
      }
      this.cities = cities;
    },

    updateCities(cities) {
      this.cities = cities;
      localStorage.setItem("cities", JSON.stringify(this.cities));
    },
    async success(pos) {
      await this.fetchLocationName(pos.coords.latitude, pos.coords.longitude);
    },

    error(err) {
      if (err.code === 1) {
        this.loading = false;
        this.requestError = true;
      }
    },

    async getData() {
      navigator.geolocation.getCurrentPosition(
          this.success,
          this.error,
          this.options
      );
    },

    tryGetData() {
      this.loading = true;
      this.requestError = false;
      this.getData();
    },
  },
};
</script>
