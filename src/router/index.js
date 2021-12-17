import Vue from "vue";
import VueRouter from "vue-router";

const Home = () => import("../views/Home.vue");
const News = () => import("../views/News.vue");
const NewsItem = () => import("../views/News-item.vue");
const Entrant = () => import("../views/Entrant.vue");
const AboutUs = () => import("../views/About-us.vue");
const Contacts = () => import("../views/Contacts.vue");
const Admin = () => import("../views/Admin.vue");
const Login = () => import("../views/Login.vue");
const NotFound = () => import("../views/404.vue");

const AdminManageNews = () =>
  import("./../components/AdminComponents/AdminManageNews.vue");
const AdminManageCourses = () =>
  import("./../components/AdminComponents/AdminManageCourses.vue");
const AdminManageEntrant = () =>
  import("./../components/AdminComponents/AdminManageEntrant.vue");
const AdminResetPassword = () =>
  import("./../components/AdminComponents/AdminResetPassword.vue");

import store from "./../store/index";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/news",
    name: "News",
    component: News
  },
  {
    path: "/news/:id",
    name: "News-item",
    component: NewsItem
  },
  {
    path: "/info",
    name: "Entrant",
    component: Entrant
  },
  {
    path: "/about",
    name: "AboutUs",
    component: AboutUs
  },
  {
    path: "/contacts",
    name: "Contacts",
    component: Contacts
  },
  { path: "/admin", redirect: () => store.state.auth.user && "/admin/news" },
  {
    path: "/admin",
    name: "Admin",
    component: Admin,
    children: [
      {
        path: "/admin/news",
        component: AdminManageNews
      },
      {
        path: "/admin/courses",
        component: AdminManageCourses
      },
      {
        path: "/admin/entrant",
        component: AdminManageEntrant
      },
      {
        path: "/admin/reset",
        component: AdminResetPassword
      }
    ]
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "*",
    name: "NotFound",
    component: NotFound
  }
];

const router = new VueRouter({
  mode: "history",
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  }
});

router.beforeEach(async (to, from, next) => {
  next();
  if (!to.path.includes("/login") && !to.path.includes("/admin")) return;
  await store.dispatch("auth/initialize").then(() => {
    if (
      (to.path === "/admin" || to.path === "/login") &&
      store.state.auth.user
    ) {
      next("/admin/news");
    } else if (to.path.includes("/admin") && !store.state.auth.user) {
      setTimeout(() => next("/login"), 2000);
    }
  });
});

export default router;
