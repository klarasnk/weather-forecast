<template>
  <div class="flex flex-col w-[320px] relative">
    <img class="w-[25px] h-[25px] absolute right-[30px] top-[30px]" src="@/assets/images/icon/gear.png" alt=""
         @click="show">
    <div
        :class="`w-[320px] h-[320px] border-[1px] bg-[url('@/assets/images/weather/clear.jpg')] bg-cover rounded-[30px] shadow-2xl`"
        v-for="(weather,i) in cities" :key="i">
      <div else class="bg-gray-400 bg-[#a69eb27d] w-[320px] h-[320px] rounded-[30px] p-[30px] shadow-2xl">
        <div class="flex justify-start">
          <div class="text-bold text-[20px]">{{ weather?.name }} , {{ weather.sys?.country }}</div>
        </div>
        <div class="h-[140px] flex justify-start items-center">
          <img class="w-[150px]" :src="`https://openweathermap.org/img/wn/${weather.weather?.[0]?.icon}@2x.png`" alt="">
          <div class="text-[50px]">{{ Math.round(weather.main?.temp - 273.15) }}&deg;C</div>
        </div>
        <div class="h-[80px] flex flex-col justify-end">
          <div>Feels like {{ Math.round(weather.main?.feels_like - 273.15) }}&deg;C,
            {{ weather.weather?.[0]?.description }}.
          </div>
          <div class="flex">
<!--            <img :class="`w-[15px] h-[15px] rotate-[${weather.wind?.deg}deg]`"-->
<!--                 src="@/assets/images/icon/arrow.png" alt="">-->
<!--            <div>{{ weather.wind.windSpeed }} m/s SSE</div>-->
          </div>
          <div class="flex justify-between flex-col">
            <div>Humidity: {{ weather?.main?.humidity }}
            </div>
            <div>Visibility: {{ weather.visibility }} km</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WeatherShow',
  props: {
    show: Function,
    cities: Array,
  },
  // data(){
  //   return{
  //     backgroundImage:''
  //   }
  // },
  // computed:{
  //   backgroundImage(){
  //     if(this.weather.weather.main==='Clouds'){
  //       return '@/assets/images/weather/clear.jpg'
  //     }
  //   }
  // }
}

</script>
