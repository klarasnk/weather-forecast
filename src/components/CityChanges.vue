<template>
  <div
      class="w-[320px] h-[320px] border-[1px] rounded-[30px] p-[30px] flex flex-col justify-between bg-[url('@/assets/images/weather/clear.jpg')] bg-cover shadow-2xl">
    <div class="flex justify-between h-[20px] items-center">
      <div class="text-[20px]">Settings</div>
      <img src="@/assets/images/icon/close.png" alt="Icon" class="w-[25px] h-[25px]" @click="show">
    </div>
    <div class="w-full h-[150px] overflow-y-scroll" v-if="items.length>0">
      <draggable v-model="items" v-if="items.length > 0 && visible">
        <template v-slot:item="{item}">
          <div>
            <div
                class="w-w-full h-[35px] bg-gray-200 flex justify-between px-[10px] items-center rounded-[30px] my-[5px]">
              <div class="flex justify-start">
                <img src="@/assets/images/icon/hamburger.png" class="w-[25px] h-[25px] mr-[10px]"/>
                <div>{{ item.name }}</div>
              </div>
              <img src="@/assets/images/icon/trash-can.png" class="w-[25px] h-[25px]" @click="deleteItem(item.id)"/>
            </div>
          </div>
        </template>
      </draggable>
    </div>
    <div class="h-[70px] flex flex-col justify-between">
      <div class="text-[17px]">
        <p v-if="cityError">Enter correct city</p>
        <p v-if="existingCityError">city already exists in Your list</p>
      </div>
      <div class="flex justify-between w-full">
        <input type="text" v-model="countryName"
               class="w-[200px] h-[35px] bg-[2px] border-[1px] rounded-[30px] p-[10px]" @keyup.enter="add"
        placeholder="Add Location">
        <button @click="add" class="w-[35px] h-[35px] ">
          <img class="w-[35px] h-[35px]" src="@/assets/images/icon/add.svg" alt="">
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Draggable from "vue3-draggable"

export default {
  name: 'CityChanges',
  props: {
    show: Function,
    addCity: Function,
  },
  emits: ['deleteCity', 'updateCities'],
  components: {
    Draggable,
  },
  data() {
    return {
      drag: false,
      countryName: '',
      cityError: false,
      existingCityError: false,
      visible: true,
      items: window.localStorage.getItem('cities') ? JSON.parse(window.localStorage.getItem('cities')) : [],
    }
  },
  watch: {
    countryName(newValue) {
      if (newValue.length >= 0) {
        this.existingCityError = false
        this.cityError = false
      }
    },
    items: {
      handler() {
        this.$emit('updateCities', this.items)
      },
      deep: true,
      immediate: true
    }
  },
  methods: {
    async add() {
      this.addCity(this.countryName).then(res => {
        for (const resKey in res) {
          this[resKey] = res[resKey]
          this.visible = false
          this.$nextTick(() => {
            this.visible = true
          })
        }
      })
      this.countryName = ''
    },
    startDrag() {
      this.drag = true
    },
    endDrag() {
      this.drag = false
      localStorage.setItem('cities', JSON.stringify(this.items))
    },
    async deleteItem(id) {
      this.items = this.items.filter(elm => elm.id !== id)
      this.visible = false
      await this.$nextTick(() => {
        this.visible = true
      })
      window.localStorage.setItem('cities', JSON.stringify(this.items))
      this.$emit('deleteCity', this.items)
      if (this.items.length === 0) {
        await this.add()
      }
    },
  }
}
</script>

