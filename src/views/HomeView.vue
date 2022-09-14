<template>
  <div class="homecontainer">
    <div class="movie" v-for="(item,index) in movieList" :key="index">
      <MovieList :propsdata="item" />
    </div>
    <button class="gotop" ref="gotop" @click="moveTop">&#10140;</button>
  </div>
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
      }, 2000)
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
.homecontainer{
  position: absolute;
  left: 3%;
  top: 60px;
  display: flex;
  align-self: stretch;
}

.movie{
  position: relative;
  display: block;
  float: left;
  transform: translateY(0);
  width: 150px;
  height: 830px;
  margin: 30px 0;
  margin-left: -30px; 
  background: linear-gradient(90deg, rgba(53,53,53,1) 70%, rgba(17,17,17,1) 150%);
  border-radius: 20px;
  box-shadow: -8px 0px 15px 3px rgba(41,41,41,.35), inset -5px 5px 15px rgba(41,41,41,1);
  padding: 30px 20px;
  cursor: pointer;
  overflow: hidden;
  transition: width 0.5s, transform 0.1s;
  transition-delay: 0.05s;
}

.movie:hover{
  width: 600px;
  transform: translateY(-15px);
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
  transform: rotate(-180deg);
  transition: all 0.2s;
  padding-bottom: 3px;
  cursor: pointer;
}

@media screen and (max-width: 1305px){
  .homecontainer{
    position: relative;
    width: 95%;
    
    margin: 0 auto;
    display: block;
  }
  .movie{
    width: 45%;
    float: left;
    margin-left: 20px; 
  }
  .movie:hover{
  width: 45%;
  transform: translateY(-15px);}

  .gotop{
      transform: rotate(-90deg);
  }

}

@media screen and (max-width: 750px){

  .homecontainer{
    width: 90%;
    display: block;
    margin: 0;
  }
  .movie{
    width: 100%;
  }
  .movie:hover{
    width: 100%;
  }
}
</style>