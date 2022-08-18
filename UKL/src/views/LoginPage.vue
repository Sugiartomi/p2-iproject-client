<template>
  <div id="box-login">
    <div class="item">
      <div id="img-login">
        <img
          src="https://www.klikwarta.com/sites/default/files/styles/photo_medium/public/article/2020/04/Longsor.jpg?itok=GFlIVqa7"
          alt=""
        />
      </div>
      <div id="content-login">
        <h1><strong>ACT - UKL</strong></h1>
        <form @submit.prevent="goLogin">
          <input
            type="text"
            class="input-login"
            placeholder="username"
            v-model="this.username"
          />
          <input
            type="password"
            class="input-login"
            placeholder="password"
            v-model="this.password"
          />
          <br />

          <button type="submit" class="btn-login">Login</button>
        </form>

        <p>
          create new accout?
          <span
            ><router-link to="/register" id="btn-signup"
              >Sign-Up</router-link
            ></span
          >
        </p>
        <div id="btn-google">
          <div id="google-button-login"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "pinia";
import { useCounterStore } from "../stores/counter";

export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    ...mapActions(useCounterStore, [
      "loginHandler",
      "handleCredentialResponse",
    ]),
    async loginUser() {
      let login = await this.loginHandler(this.input);
      if (login.code == 1) {
        localStorage.setItem("access_token", login.result.data.access_token);
        localStorage.setItem("username", login.result.data.username);
        this.$router.push({ path: "/" });
      } else {
      }
    },
    handleLogingoole(response) {
      try {
        this.handleCredentialResponse(response);
        this.$router.push({ path: "/" });
      } catch (error) {}
    },
    goLogin() {
      let username = this.username;
      let password = this.password;
      this.loginHandler(username, password);
    },
  },
  created() {
    if (localStorage.access_token) {
      this.$router.push("/");
    }
  },
  mounted() {
    const cb = this.handleLogingoole;
    google.accounts.id.initialize({
      client_id:
        "32456869880-80pdap0t4h8f1jegq6nn6j2h4cmgnvp1.apps.googleusercontent.com",
      callback: cb,
    });
    google.accounts.id.renderButton(
      document.getElementById("google-button-login"),
      { theme: "outline", size: "large" }
    );
  },
};
</script>

<style>
#btn-google {
  display: flex;
  justify-content: center;
}

hr {
  margin-top: 50px;
  border-top: 5px solid grey;
  width: 100%;
  border-radius: 5px;
  opacity: 30%;
}

#box-login {
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

#img-login {
  background-color: #66bfbf;
  width: 40%;
  border-radius: 1em 0em 0em 1em;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 80%;
}

#img-login img {
  object-fit: cover;
  height: 100%;
  width: 100%;
  object-position: 60%;
  border-radius: 1em 0em 0em 1em;
}

#content-login {
  color: #898aa6;
  padding: 10px;
  width: 60%;
  border-radius: 0em 1em 1em 0em;
  display: flex;
  flex-direction: column;
  /* align-items: space-between; */
  margin-top: 50px;
}

#content-login p {
  margin-top: 50px;
}

.input-login {
  color: #898aa6;
  text-align: center;
  width: 250px;
  height: 0px;
  padding: 20px 10px 20px 10px;
  margin: 5px;
  margin-top: 20px;
  border-radius: 0.5em;
  border-style: none;
}

.btn-login {
  background-color: #66bfbf;
  color: #ffff;
  width: 100px;
  height: 30px;
  padding: 0px 10px 0px 10px;
  margin: 10px;
  border-radius: 0.5em;
  border-style: none;
  margin-top: 20px;
}

#btn-signup {
  text-decoration: none;
  color: #66bfbf;
}
</style>
