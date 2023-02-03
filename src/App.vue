<template>
  <div>
    <div class=" w-full h-[420px] bg-blue-300 flex justify-center">
      <div class="w-[320px] h-[420px] p-[30px] border-[1px]">
        <div class="flex justify-between">
          <div class="text-bold text-[20px]">{{ weather?.name }} , {{ weather.sys?.country }}</div>
          <img class="w-[20px] h-[20px]" src="@/assets/icon/gear.png" alt="">
        </div>
        <div class="h-[180px] flex justify-start items-center">
          <img class="w-[150px]" :src=weatherImage alt="">
          <div class="text-[50px]">{{ Math.round(weather.main?.temp - 273.15) }}&deg;C</div>
        </div>
        <div class="h-[130px] flex flex-col justify-evenly">
          <div>Feels like 1O&deg;C. {{ weather.weather?.[0]?.description.toUpperCase() }}. {{ windSpeed }}</div>
          <div class="flex justify-between">
            <div>Humidity: 84%</div>
            <div>Visibility: 10.0km</div>
          </div>
        </div>
        <div></div>
        <!--        <input type="text" v-model="city" class="bg-[2px]">-->
        <!--        <button @click="getData()">Enter the city</button>-->
      </div>
    </div>


  </div>

</template>


<script>


export default {
  data() {
    return {
      weather: '',
      city: '',
      requestError: false,
      wrongCityError: false,
    }
  },
  methods: {
    async getData() {
      try {
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=london&appid=21f731ebc999bee36dc13db346551694`);
        //${this.city}
        const final = await res.json();
        this.weather = final;
      } catch (error) {
        this.error = true
      }
    }
  },
  computed: {
    windSpeed() {
      return this.weather.wind?.speed > 1?  9:'hi'

    },
    weatherImage() {
      return `https://openweathermap.org/img/wn/${this.weather.weather?.[0]?.icon}@2x.png`
      // return `04d@2x.png`
    }
  },
  mounted() {
    this.getData()
  }
}
</script>


