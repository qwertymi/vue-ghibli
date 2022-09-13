<template>

  <div class="movie" v-for="(item,index) in movieList" :key="index">
    <MovieList :propsdata="item" />
  </div>
</template>

<script>
import { computed } from 'vue';
import {useStore} from 'vuex'
import MovieList from '../components/MovieList.vue'

export default {
  components: {
    MovieList
  },
  setup(){
    const store = useStore();
    const movieList = computed(() => store.getters.getMovieList)

    return{
      movieList
    }
  }
}
</script>

<style>
.movie{
  position: relative;
  display: block;
  width: 49%;
  margin: 35px 0;
  background: rgb(41, 41, 41);
  border-radius: 20px;
  box-shadow: 5px 5px 15px #111;
  padding: 30px 20px;
  cursor: pointer;
  overflow: hidden;
}

@media screen and (max-width: 1000px){
  .movie{
    width: 95%;
  }
}
</style>