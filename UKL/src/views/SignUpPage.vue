<template>
  <section>
    <div id="box-signup">
      <div class="item">
        <div id="img-signup">
          <img
            src="https://png.pngtree.com/png-clipart/20201225/ourlarge/pngtree-commercial-flood-prevention-and-disaster-relief-scenarios-png-image_2598585.jpg"
            alt=""
          />
        </div>
        <div id="content-signup">
          <h1 style="margin-bottom: 20px">create account</h1>
          <form @submit.prevent="goRegister">
            <input type="text" class="input-signup" placeholder="username" v-model="this.input.username"/>
            <input type="text" class="input-signup" placeholder="email" v-model="this.input.email"/>
            <input type="text" class="input-signup" placeholder="password" v-model="this.input.password"/>
            <br />
            <button class="btn-signup" type="submit">submit</button>
          </form>

          <p>
            already have an accout?
            <span
              ><RouterLink to="/login" id="btn-signin"
                >Sign-in</RouterLink
              ></span
            >
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions } from 'pinia';
import { useCounterStore } from '../stores/counter';

export default {
  data() {
    return {
      input: {
        username: "",
        email: "",
        password: "",
      },
    }
  },
  methods : {
    ...mapActions(useCounterStore, ["registerHandler"]),
    goRegister(){
      this.registerHandler(this.input)
    }
  },
  created(){
    if(localStorage.access_token){
      this.$router.push('/')
    }
  }
};
</script>

<style>
hr {
  border-top: 5px solid grey;
  width: 70%;
  border-radius: 5px;
  opacity: 30%;
}

#box-signup {
  height: 100vh;
  background-color: rgb(255, 255, 255);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.item {
  background-color: #eae3d2;
  color: #ffff;
  width: 650px;
  height: 500px;
  border-radius: 1em;
  display: flex;
  flex-direction: row;
}

#img-signup {
  background-color: #66bfbf;
  width: 40%;
  border-radius: 1em 0em 0em 1em;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 80%;
}

#img-signup img {
  object-fit: cover;
  height: 100%;
  width: 100%;
  object-position: 60%;
  border-radius: 1em 0em 0em 1em;
}

#content-signup {
  color: #898aa6;
  padding: 10px;
  width: 60%;
  border-radius: 0em 1em 1em 0em;
  display: flex;
  flex-direction: column;
  margin-top: 50px;
}

#content-signup p {
  margin-top: 50px;
}

.input-signup {
  color: #898aa6;
  text-align: center;
  width: 250px;
  height: 0px;
  padding: 20px 10px 20px 10px;
  margin: 5px;
  border-radius: 0.5em;
  border-style: none;
}

.btn-signup {
  background-color: #66bfbf;
  color: #ffff;
  width: 100px;
  height: 30px;
  padding: 0px 10px 0px 10px;
  margin: 10px;
  border-radius: 0.5em;
  border-style: none;
}

#btn-signin {
  text-decoration: none;
  color: #66bfbf;
}
</style>
