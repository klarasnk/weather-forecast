<template>
  <div
      class="w-[320px] h-[320px] border-[1px] rounded-[40px] p-[30px] flex flex-col justify-between bg-[url('@/assets/images/weather/clear.jpg')] bg-cover shadow-2xl">
    <div class="flex justify-between h-[20px] items-center">
      <div class="text-[20px]">Settings</div>
      <img src="@/assets/images/icon/close.png" alt="Icon" class="w-[25px] h-[25px] cursor-pointer" @click="show">
    </div>
    <div class="w-full h-[150px] overflow-y-scroll" v-if="items.length>0">
      <draggable v-model="items" v-if="items.length > 0 && visible">
        <template v-slot:item="{item}">
          <div>
            <div
                class="w-w-full h-[35px] bg-gray-200 flex justify-between px-[10px] items-center rounded-[40px] my-[5px] cursor-pointer">
              <div class="flex justify-start">
                <img src="@/assets/images/icon/hamburger.png" class="w-[25px] h-[25px] mr-[10px] cursor-grab"/>
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
        <p v-if="error">{{ error }}</p>
      </div>
      <div class="flex justify-between w-full items-center">
        <input type="text" v-model="countryName"
               class="w-[200px] h-[35px] bg-[2px] border-[1px] rounded-[40px] p-[10px] focus:outline-none"
               @keyup.enter="add"
               placeholder="Add Location">
        <button @click="add" class="flex items-center focus:outline-none">
          <img class="w-[47px] hover:scale-[1.1]" src="@/assets/images/icon/logoutminor.svg" alt="">
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
      countryName: null,
      error: null,
      visible: true,
      items: window.localStorage.getItem('cities') ? JSON.parse(window.localStorage.getItem('cities')) : [],
    }
  },
  watch: {
    countryName(newValue) {
      if (newValue.length >= 0) {
        this.error = null
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
      if (this.countryName) {
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
      } else {
        this.error = 'Please fill the field '
      }

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

