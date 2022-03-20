import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/ingredients'


const getAll = () => {
    return axios.get(baseUrl)
  }
  
  const create = (newObject) => {   
      return axios.post(baseUrl, newObject).catch((error) => {    
        return (error.response.data);        
      })
}
  
  const update = (id, newObject) => {
    return axios.put(`${baseUrl}/${id}`, newObject)
  }

  
  const remove = (id) => {     
    return axios.delete(`${baseUrl}/${id}`)
  }

  
  export default { 
    getAll: getAll, 
    create: create, 
    update: update, 
    remove: remove
  }