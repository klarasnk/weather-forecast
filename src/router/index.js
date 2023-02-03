import { createRouter, createWebHistory } from 'vue-router'
import WeatherPage from "@/views/WeatherPage";
import ChangeCountry from "@/views/ChangeCountry";

const routes = [
  {
    path: '/',
    name: 'weather',
    component: WeatherPage
  },
  {
    path: '/change-country',
    name: 'change country',
    component: ChangeCountry
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
