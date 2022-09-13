<template>
  <div class="wrap">
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'

export default {

  setup(){
    // vuex 에 dispatch 
    const store = useStore();
    store.dispatch('fetchMovieList')

    return{
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

ul,
li {
  list-style: none;
}

a {
  color: #fff;
  text-decoration: none;
}

html{
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 16px;
  background: #222;
  color: #fff;
}

.wrap{
  position: relative;
  display: block;
}

.container
{
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

</style>