import { defineStore } from "pinia";
import axios from "axios";

export const useCounterStore = defineStore({
  id: "counter",
  state: () => ({
    baseUrl: "http://localhost:3000",
    isLogin: false,
    addForm: false,
    reports: [],
    detailReport: {},
    quotes: {},
    role: "",
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
        localStorage.setItem("role", user.data.role);
        this.role = user.data.role;
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
        this.detailReport = {
          data: report.data.data,
          lat: report.data.lat,
          long: report.data.long,
          mapUrl: report.data.mapUrl,
          survey: report.data.survey,
        };
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

    async changeTheStatus(status, id) {
      try {
        let report = await axios({
          method: "PATCH",
          url: this.baseUrl + `/report/${id}`,
          headers: { access_token: localStorage.getItem("access_token") },
          data: { status },
        });
      } catch (error) {}
    },

    async spiritQuote() {
      console.log("masuk");
      let quote = await axios({
        method: "GET",
        url: this.baseUrl + `/quote`,
        headers: { access_token: localStorage.getItem("access_token") },
      });
      this.quotes = quote.data;
    },

    async deleteReport(input) {
      try {
        let del = await axios({
          method: "DELETE",
          url: this.baseUrl + `/report/${input}`,
          headers: { access_token: localStorage.getItem("access_token") },
        });
      } catch (error) {}
    },

    handleCredentialResponse(response) {
      console.log("masoooooksini");
      axios({
        url: this.baseUrl + "/google-oauth",
        // url: "http://localhost:3000/customers/google-oauth",
        method: "POST",
        headers: {
          token_google: response.credential,
        },
      })
        .then((response) => {
          const { access_token, role, username, id } = response.data;
          localStorage.setItem("access_token", access_token);
          localStorage.setItem("role", role);
          console.log(role);
          this.isLogin = true;
          this.router.push('/')
          return { code: 1, response };
        })
        .catch((err) => {
          return { code: 2, err };
        });
    },
  },
});
