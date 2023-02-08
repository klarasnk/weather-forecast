<template>

  <div class="w-[320px] h-[320px] border-[1px] rounded-[30px] p-[30px] flex flex-col justify-between ">
    <div class="flex justify-between h-[20px] items-center">
      <div class="text-[20px]">Settings</div>
      <img src="@/assets/images/icon/close.png" alt="Icon" class="w-[25px] h-[25px]" @click="show">
    </div>
    <div class="w-full h-[150px] overflow-y-scroll" v-if="cities.length>0">

      <draggable
          v-model="cities"
          @start="drag=true"
          @end="drag=false"
          item-key="id">
        <template #item="{element}">
          <city-from-list :city="element" class="mb-[10px]" @deleteCity="deleteItem"/>
        </template>
      </draggable>

    </div>
    <div class="h-[60px] flex flex-col justify-between">
      <p>Add Location</p>
      <p v-if="cityError">Enter correct city</p>
      <p v-if="existingCityError">city already exists in Your list</p>
      <div class="flex justify-between">
        <input type="text" v-model="countryName" class="w-[220px] bg-[2px] border-[1px]">
        <button @click="add">Add</button>
      </div>
    </div>
  </div>
</template>


<script>
import draggable from 'vuedraggable'
import CityFromList from "@/components/CityFromList";

export default {
  name: 'CityChanges',
  props: {
    show: Function,
    deleteItem: Function,
    addCity: Function
  },
  components: {
    CityFromList,
    draggable
  },
  data() {
    return {
      drag: false,
      countryName: '',
      cityError: false,
      existingCityError: false,
      cities: window.localStorage.getItem('cities') ? JSON.parse(window.localStorage.getItem('cities')) : [],
    }
  },
  watch: {
    countryName(newValue) {
      if (newValue.length > 0) {
        // this.newCity.name = newValue.name
        this.existingCityError = false
        this.cityError = false
      }
    },
    'cities'(newValue) {
      console.log(newValue)
    },

  },
  methods: {
    add() {
      this.addCity(this.countryName).then(res => {
        for (const resKey in res) {
          this[resKey] = res[resKey]
        }
      })
      this.countryName = ''
    }
  }


}
</script>

