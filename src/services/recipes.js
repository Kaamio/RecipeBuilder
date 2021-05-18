import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/recipes'

const create = newObject => {
    return axios.post(baseUrl, newObject)
  }

  const getAll = () => {
    return axios.get(baseUrl)
  }  


  export default {
    getAll : getAll,
    create : create
  }