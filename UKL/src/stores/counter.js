import { defineStore } from "pinia";
import axios from "axios";

export const useCounterStore = defineStore({
  id: "counter",
  state: () => ({
    baseUrl: "http://localhost:3000",
    isLogin: false,
    addForm: false,
    reports: [],
  }),
  getters: {
    doubleCount: (state) => state.counter * 2,
  },
  actions: {
    async loginHandler(username, password) {
      try {
        let user = await axios({
          method: "POST",
          url: this.baseUrl + "/login",
          data: { username, password },
        });

        localStorage.setItem("access_token", user.data.access_token);
        this.isLogin = true;
        this.router.push({ path: "/" });
      } catch (error) {}
    },

    async registerHandler(input) {
      try {
        let user = await axios({
          method: "POST",
          url: this.baseUrl + "/register",
          data: {
            username: input.username,
            email: input.email,
            password: input.password,
          },
        });
        this.router.push("/login");
      } catch (error) {}
    },

    async fetchingReport() {
      try {
        let report = await axios({
          method: "GET",
          url: this.baseUrl + "/report",
          headers: { access_token: localStorage.getItem("access_token") },
        });
        this.reports = report.data;
      } catch (error) {}
    },

    async fetchingReportById(input) {
      try {
        let report = await axios({
          method: "GET",
          url: this.baseUrl + `/report/${input}`,
          headers: { access_token: localStorage.getItem("access_token") },
        });
        console.log(report);
      } catch (error) {}
    },

    async addReport(input) {
      try {
        let title = input.title;
        let description = input.description;
        let victim = input.victim;
        let location = input.location;

        let report = await axios({
          method: "POST",
          url: this.baseUrl + `/report`,
          headers: { access_token: localStorage.getItem("access_token") },
          data: { title, description, victim, location },
        });
        this.fetchingReport();
        this.addForm = false;
      } catch (error) {}
    },
  },
});
