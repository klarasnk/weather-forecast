<template>
  <div class="w-w-full h-[35px] bg-gray-200 flex justify-between px-[10px] items-center">
    <div class="flex justify-start">
      <img src="@/assets/images/icon/hamburger.png" class="w-[25px] h-[25px] mr-[10px]"/>
      <div>{{city.name}}</div>
    </div>
    <img @click="$emit('deleteCity', city.id)" src="@/assets/images/icon/trash-can.png" class="w-[25px] h-[25px]"/>
  </div>

</template>
<script>
export default{
  name:'CityFromList',
  props:{
    city: Object,
  },
  emits:['deleteCity']
}
</script>