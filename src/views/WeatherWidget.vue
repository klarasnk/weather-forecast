<template>
  <p
    class="w-[320px] h-[320px] flex items-center justify-center text-center text-[20px] bg-[url('@/assets/images/icon/eclipse.gif')] bg-no-repeat bg-contain rounded-[40px] overflow-hidden"
    v-if="loading"
  ></p>
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
    <WeatherShow v-if="show" :cities="cities" :show="changeShow" />
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
  components: { WeatherShow, CityChanges },
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
        return { error: "Enter correct city" };
      } else if (this.cities.find((city) => city.id === this.weather.id)) {
        return { error: "City already exists in Your list" };
      } else {
        this.cities.push(this.weather);
        this.loading = false;
        window.localStorage.setItem("cities", JSON.stringify(this.cities));
        return { error: null };
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
