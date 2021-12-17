<template>
  <div class="admin-panel-menu-style">
    <div class="admin-panel-menu-item">
      <router-link to="/admin/news">
        <i class="far fa-newspaper"></i>Manage news
      </router-link>
      <router-link to="/admin/courses"><div class="style">
        <span><i class="far fa-newspaper"></i>Manage courses</span>
      </div></router-link>
      <!-- <router-link to="/admin/entrant"><div class="style">
        <span><i class="far fa-address-card"></i>Change entrant</span>
      </div></router-link> -->
      <router-link to="/admin/reset"><div class="style">
        <span><i class="fas fa-unlock-alt"></i>Change password</span>
      </div></router-link>
    </div>

    <div class="admin-panel-menu-log-out" @click="logOut">
      <span><i class="fas fa-sign-in-alt"></i> Log out</span>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";

const { mapActions } = createNamespacedHelpers("auth");

export default {
  name: "AdminNavBar",
  methods: {
    ...mapActions(["logout"]),
    logOut(){
      this.logout();
      this.$router.replace("/login");
    }
  }
};
</script>

<style lang="scss">
.admin-panel-menu-style {
  width: 20%;
  height: 94vh;
  background-color: #393939;
}

.admin-panel-menu-item {
  padding-top: 30%;

  .router-link-exact-active {
        width: 90%;
        background: white;
        color:#4d4d4d ;
        margin-right: 0%;
        border-radius: 10px 0px 0px 10px ;
        padding-left: 10%;
      }

  a {
    display: block;
    color: #f5f5f5;
    font-weight: bold;
    width: 80%;
    margin: 0 auto;
    padding-top: 4%;
    padding-bottom: 4%;
    margin-bottom: 4%;
    padding-left: 15%;
    font-size: 1.1vw;

    i {
      padding-right: 4%;
    }

    &:hover:not(.router-link-exact-active ) {
      transition: 0.4s;
      background-color: #4d4d4d;
      border-radius: 10px;
      cursor: pointer;
    }
  }
}

.admin-panel-menu-dream-team {
  height: 52%;
}

.admin-panel-menu-log-out {
  width: 45%;
  margin: 0 auto;
  color: #f5f5f5;
  font-weight: bold;
  text-align: center;
  padding: 2%;
  margin-top: 135%;
  border-radius: 5px;
  transition: 0.4s;
  

  &:hover {
    cursor: pointer;
    background-color: #4d4d4d;
  }
}
</style>
