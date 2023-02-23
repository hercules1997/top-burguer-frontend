import axios from 'axios'

const apiTopBurguer = axios.create({
  baseUrl: 'http://localhost:3008'
})

export default apiTopBurguer
