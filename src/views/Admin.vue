<template>
  <div id="admin-grid">
    <div id="loaderWrapper" v-if="UserIsLoading">
      <div id="loader"></div>
    </div>
    <div id="wrapper" v-else-if="getUser">
      <div>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
          integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
          crossorigin="anonymous"
        />

        <AdminNavBar />

        <div class="page-grid">
          <AdminUser />
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AdminNavBar from "./../components/AdminComponents/AdminNavBar.vue";
import AdminUser from "./../components/AdminComponents/AdminUser.vue";
// import AdminItemsList from "./../components/AdminComponents/AdminItemsList.vue";
import { createNamespacedHelpers } from "vuex";
const { mapGetters } = createNamespacedHelpers("auth");

export default {
  name: "Admin",
  components: {
    AdminNavBar,
    AdminUser
    // AdminItemsList
  },
  computed: {
    ...mapGetters(["UserIsLoading", "getUser"])
  }
};
</script>

<style lang="scss">
#loaderWrapper {
  width: 100%;
  position: absolute;
  background-color: #ffffff;
  opacity: 0;
  z-index: 1;
  #loader {
    height: 150px;
    width: 150px;
    background-color: #505050;
    background-image: url(./../assets/loader.gif);
    background-repeat: no-repeat;
    background-position: center;
    background-size: 75%;
    border-radius: 50%;
    margin: 35vh auto;
  }
}

@keyframes showFade {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

#wrapper {
  width: 100%;
  opacity: 0;
  transition: 1s opacity 1s ease-in-out;
  animation-name: showFade;
  animation-duration: 1s;
  animation-fill-mode: forwards;
  & > div {
    display: flex;
  }
}

#admin-grid {
  position: relative;
}

.page-grid {
  width: 80%;

  .center-container {
    width: 40%;
  }

  .user-container {
    width: 30%;
    display: flex;
    height: 6vh;

    .user-name {
      width: 100%;
      text-align: end;
      font-weight: bold;

      #all-name {
        color: #505050;
        font-size: 1.1vw;
      }

      #role {
        color: #a5a5a5;
        font-size: 0.9vw;
      }
    }

    .img {
      width: 6vh;
      height: 6vh;
      border-radius: 50px;
      background-image: url(./../assets/Admin-panel/user.png);
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }
  }
}

.button-add-news {
  width: 9.5%;
  background-color: #edbe3e;
  border-radius: 5px;
  padding-top: 0.4%;
  padding-bottom: 0.4%;
  margin-left: 2%;
  margin-bottom: 1%;
  transition: 0.2s;
  text-align: center;
  font-weight: bold;
  font-size: 1.1vw;
  color: white;

  &:hover {
    cursor: pointer;
    width: 10%;
    transition-timing-function: ease-out;
  }
}

.element-news {
  width: 96%;
  margin: 0 auto;
  background-color: #f5f5f5;
  border-radius: 5px;
  display: flex;
  padding: 1.3% 2% 1.3% 2%;
  margin-bottom: 1%;

  color: #6a6a6a;
  font-size: 1.2vw;

  .date {
    width: 15%;
  }

  .element-title {
    width: 70%;

    text-align: center;
  }

  .icon {
    width: 15%;

    text-align: end;

    span {
      padding-left: 15%;
    }

    #pen {
      &:hover {
        color: #77a7d6;
        cursor: pointer;
        transition: 0.2s;
      }
    }

    #tresh {
      &:hover {
        color: #d95c5c;
        cursor: pointer;
        transition: 0.2s;
      }
    }
  }
}

// ----------Entrant----------
.element-entrant {
  width: 96%;
  margin: 0 auto;

  .title-entrant {
    width: 100%;
    padding-bottom: 1%;

    span {
      color: #838383;
      font-size: 2vw;
      font-weight: bold;
    }
  }

  .item-entrant {
    display: flex;

    #item {
      width: 25%;
      padding-left: 3%;

      input {
        width: 80%;
        height: 100%;
        border: none;
        border-bottom: 1px solid;
        border-color: #e1e1e1;
        padding-bottom: 2%;
        font-size: 1.4vw;
      }

      input[type="text"]::-webkit-input-placeholder {
        color: #d5d5d5;
        font-size: 1.4vw;
      }
    }
  }

  .contauner-button {
    width: 96%;
    margin: 0 auto;
    display: flex;
    justify-content: flex-end;

    .button {
      width: 9.5%;
      background-color: #edbe3e;
      border-radius: 5px;
      padding-top: 0.4%;
      padding-bottom: 0.4%;
      margin-bottom: 1%;
      margin-top: 2%;
      margin-right: 2.5%;
      transition: 0.2s;
      text-align: center;
      font-weight: bold;
      font-size: 1.1vw;
      color: white;

      &:hover {
        cursor: pointer;
        transition-timing-function: ease-out;
        width: 10%;
      }
    }
  }
}
</style>
