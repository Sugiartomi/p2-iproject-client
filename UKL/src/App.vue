

<template>
 <NavBar v-if="this.isLogin == true"/>

  <RouterView />
</template>


<script>
import { mapWritableState } from 'pinia';
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue';
import { useCounterStore } from './stores/counter';

export default {
  components : {
    NavBar
  },
  computed : {
    ...mapWritableState( useCounterStore, ["isLogin"])
  },
  created(){
    if(localStorage.access_token){
      this.isLogin = true
    } else{
      this.isLogin= false
    }
  }
}

</script>

<style >

</style>
