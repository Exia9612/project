import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

axios.interceptors.request.use(function (config: AxiosRequestConfig) {
  const token = localStorage.getItem('token')
  if (token) config.headers!.Authorization = token
  return config
}, function (error) {
  console.log('axios error')
  console.log(error)
  return Promise.reject(error);
})

axios.interceptors.response.use(function (response: AxiosResponse) {
  return response
}, function (error) {
  console.log('axios error')
  console.log(error)
  return Promise.reject(error);
})

createApp(App).use(store).use(router).mount('#app')
