import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginPage from '../views/LoginPage.vue'
import SignUpPage from '../views/SignUpPage.vue'
import DetailReport from '../views/DetailReport.vue'
import BodyPage from "../components/BodyPage.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginPage,
    },
    {
      path: "/register",
      name: "register",
      component: SignUpPage,
    },
    {
      path: "/report/:id",
      name: "DetailReport",
      component: DetailReport,
    },
    {
      path: "/quote",
      name: "quote",
      component: BodyPage,
    },
  ],
});

export default router
