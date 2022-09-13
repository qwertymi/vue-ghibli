import {createStore} from 'vuex'
import {fetchAllapi, fetchDetailInfo} from '../api/index'

export default createStore({
  state: {
    movieList: [],
    movieInfo: {}
  },
  actions: {
    fetchMovieList({commit}){
      fetchAllapi()
      .then(res => {
        commit('MOVIE_LIST_INIT', res.data)
      })
      .catch(err => console.log(err))
    },
    // detail 호출
    fetchMovieInfo({commit}, _id){
      fetchDetailInfo(_id)
      .then(res => {
        commit('MOVIE_INFO', res.data)
      })
      .catch(err => console.log(err))
    }
  },
  mutations: {
    MOVIE_LIST_INIT(state, payload){
      state.movieList = payload;
    },
    MOVIE_INFO(state, payload){
      state.movieInfo = payload;
    }
  },
  getters: {
    getMovieList(state){
      return state.movieList
    },
    getMovieInfo(state){
      return state.movieInfo
    }
  }
})