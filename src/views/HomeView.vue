<template>
  <div class="movie" v-for="(item,index) in movieList" :key="index">
    <MovieList :propsdata="item" />
  </div>
  <button class="gotop" ref="gotop" @click="moveTop">&#10140;</button>
</template>

<script>
import { computed, onMounted, onUpdated, ref } from 'vue';
import { useStore } from 'vuex'
import MovieList from '../components/MovieList.vue'

export default {
  components: {
    MovieList
  },
  setup(props, context){
    const store = useStore();
    const movieList = computed(() => store.getters.getMovieList);
    
    const gotop = ref(null);
    
    onMounted( () => {
        
    })

    // axios 실행 > vuex muation 실행 
    onUpdated( () => {
      // app에 hide 신호 전달
      let delay = setTimeout( () => {
        clearTimeout(delay);  
        context.emit('hide');
      }, 1500)
    })

    const moveTop = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }

    return{
      movieList,
      gotop,
      moveTop
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
.gotop{
  position: fixed;
  right: 20px;
  bottom: 20px;
  width: 65px;
  height: 65px;
  background-color: rgb(100, 176, 238);
  color: rgb(255, 255, 255);
  font-size: 35px;
  z-index: 9;
  border: 0;
  border-radius: 10px;
  transform: rotate(-90deg);
  padding-bottom: 3px;
  cursor: pointer;
}

@media screen and (max-width: 1300px){
  .movie{
    width: 95%;
  }
}
</style>