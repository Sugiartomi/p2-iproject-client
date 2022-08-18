<template>
<div class="navbar navbar-default navbar-static-top">
    <div class="container bootstrap snippets bootdey">
      <div class="navbar-header">
        <button
          type="button"
          class="navbar-toggle"
          data-toggle="collapse"
          data-target=".navbar-collapse"
        >
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand"> <strong>U.K.L</strong> </a>
      </div>
      <div class="collapse navbar-collapse">
        <ul class="nav navbar-nav">
          <li><router-link to="/" >Home</router-link></li>
          <li @click="isiForm"><a>Report</a></li>
          <li @click="quote"><a>Get Spirit</a></li>
          <li @click="goLogout"><a>Logout</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapWritableState } from 'pinia';
import { useCounterStore } from '../stores/counter'

export default {
  computed:{
    ...mapWritableState( useCounterStore, ["addForm", "isLogin"])
  },
  methods : {
    ...mapActions( useCounterStore, ["spiritQuote"]),
    goLogout(){
      localStorage.clear()
      this.isLogin = false
      this.$router.push('/login')
    },
    isiForm(){
      this.addForm = true
      this.$router.push('/')
    },
    quote(){
      // this.spiritQuote()
      this.$router.push('/quote')
    }
  }
}
</script>