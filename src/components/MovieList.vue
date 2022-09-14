<template>
  <div class="movie-box">
    <a @click.stop="detailMovie">
      <div class="a-image">
        <img :src="propsdata.image" />
      </div>
      <h2 class="a-title">
        {{propsdata.title}}
        <small>{{propsdata.original_title}}</small>
      </h2>
      <!-- <p class="a-desc">
        {{propsdata.description}}
      </p> -->
    </a>
  </div>
</template>

<script>
import {useRouter} from 'vue-router';

export default {
  props: ['propsdata'],
  setup(props){
    const router = useRouter();
    const detailMovie = () => {
      // props를 참조하기 위해 setup(props)를 활용
      router.push('/detail/' + props.propsdata.id);
    }
    return{
      detailMovie
    }
  }
}
</script>

<style scoped>
.movie-box {
  position: relative;
  display: block;
}


.a-image {
  position: relative;
  display: block;
  width: 100%;
  height: 650px;
  overflow: hidden;
}

.a-image img {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: block;
  overflow: hidden;
  transition: all 0.3s;
}

.a-title {
  position: relative;
  display: block;
  margin: 20px 0;
  font-size: 22px;
  white-space: nowrap;
}

.a-title small {
  display: block;
  font-size: 15px;
  color: #ccc;
}

.a-desc {
  position: relative;
  display: block;
  margin-bottom: 20px;
  line-height: 1.25;
  color: #ccc;
}

</style>