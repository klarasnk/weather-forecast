<template>
  <router-view/>
  <div
      class="w-[320px] h-[400px] border-[1px] bg-[url('@/assets/images/weather/snow.jpeg')] rounded-[30px] ">
    <div class="bg-gray-400 bg-[#a69eb27d] w-[320px] h-[400px] rounded-[30px] p-[30px]">
      <div class="flex justify-between">
        <div class="text-bold text-[20px]">{{ weather?.name }} , {{ weather.sys?.country }}</div>
        <router-link to="/change-country"><img class="w-[25px] h-[25px]" src="@/assets/images/icon/gear.png" alt="">
        </router-link>
      </div>
      <div class="h-[180px] flex justify-start items-center">
        <img class="w-[150px]" :src=weatherImage alt="">
        <div class="text-[50px]">{{ Math.round(weather.main?.temp - 273.15) }}&deg;C</div>
      </div>
      <div class="h-[130px] flex flex-col justify-evenly">
        <div>Feels like 1O&deg;C. {{ weather.weather?.[0]?.description.toUpperCase() }}. {{ windSpeed }}</div>
        <div class="flex justify-between">
          <div>Humidity: {{ weather?.main?.humidity }} <img id="arrow" class="w-[20px] h-[25px]"
                                                            src="@/assets/images/icon/arrow.png" alt="">
            <!--                <div>Humidity: 84% <img id="arrow" :class=`"w-[20px] h-[25px] rotate-[${weather?.wind?.deg}deg]"` src="@/assets/images/icon/arrow.png" alt="">-->
          </div>
          <div>Visibility: 10.0km</div>
        </div>
      </div>
    </div>
    <!--        <input type="text" v-model="city" class="bg-[2px]">-->
    <!--        <button @click="getData()">Enter the city</button>-->
  </div>
</template>

<script>
export default {
  name: 'WeatherPage',
  computed: {

    windSpeed() {
      return this.weather.wind?.speed > 1 ? 9 : 'hi'

    },
    weatherImage() {
      return `https://openweathermap.org/img/wn/${this.weather.weather?.[0]?.icon}@2x.png`
      // return `04d@2x.png`
    },
    // windDirection(){
    //   document.getElementById('arrow').classList.add("rotete-["+this.weather.wind?.deg+"]")
    // }
  },
  methods: {

    async getData() {
      try {
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=dubai&appid=21f731ebc999bee36dc13db346551694`);
        //${this.city}
        const final = await res.json();
        this.weather = final;
      } catch (error) {
        this.requestError = true
      }
    }
  },

  data() {
    return {
      weather: '',
      city: '',
      requestError: false,
      wrongCityError: false,
    }
  },

  mounted() {
    this.getData()
    // console.log(this.weather.wind?.speed)
    let windDir = `"rotete-[${this.weather.wind?.deg}deg]"`
    document.getElementById('arrow').classList.add(windDir)
  }
}

</script>
