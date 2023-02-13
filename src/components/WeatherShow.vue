<template>
  <div class="flex flex-col w-[320px] relative rounded-[40px] overflow-hidden">
    <img class="w-[25px] h-[25px] absolute right-[30px] top-[30px] cursor-pointer" src="@/assets/images/icon/gear.png"
         alt=""
         @click="show">
    <div
        class="w-[320px] h-[320px] border-[1px] p-[30px] bg-[url('@/assets/images/weather/clear.jpg')] bg-cover  shadow-2xl"
        v-for="(weather,i) in cities" :key="i">
      <div class="flex justify-start">
        <div class="text-bold text-[20px]">{{ weather?.name }} , {{ weather.sys?.country }}</div>
      </div>
      <div class=" flex justify-start items-center">
        <img class="w-[150px]" :src="`https://openweathermap.org/img/wn/${weather.weather?.[0]?.icon}@2x.png`" alt="">
        <div class="text-[50px]">{{ Math.round(weather.main?.temp - 273.15) }}&deg;C</div>
      </div>
      <div class="   flex flex-col justify-end">
        <div>Feels like {{ Math.round(weather.main?.feels_like - 273.15) }}&deg;C,
          {{ weather.weather?.[0]?.description }}.
        </div>
        <div class="flex">
        </div>
        <div class="flex justify-between flex-col">
          <div>Humidity: {{ weather?.main?.humidity }}
          </div>
          <div>Visibility: {{ weather.visibility }} m</div>
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
  computed:{
    temp(){

    }
  }
}

</script>
