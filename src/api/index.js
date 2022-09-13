import axios from 'axios';
// http reqeust & response URL 
const config = {
  baseUrl: 'https://ghibliapi.herokuapp.com'
}
function fetchAllapi() {
  return axios.get(`${config.baseUrl}/films`)
}
// detail호출
function fetchDetailInfo(_id) {
  return axios.get(`${config.baseUrl}/films/${_id}`)
}

export { fetchAllapi, fetchDetailInfo }
