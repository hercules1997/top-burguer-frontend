import axios from 'axios'

const apiTopBurger = axios.create({
  baseURL: 'http://localhost:3001'
})

export default apiTopBurger
