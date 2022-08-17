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
          <li><router-link to="/report">Report</router-link></li>
          <li><router-link to="/">Contact</router-link></li>
        </ul>
      </div>
    </div>
  </div>
</template>