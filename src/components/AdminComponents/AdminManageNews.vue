<template>
  <div id="manageNewsWrapper">
    <div id="loaderWrapper" v-if="getNewsLoadingStatus && !UserIsLoading">
      <div id="loader"></div>
    </div>
    <div
      v-else-if="getTwentyNews.length <= 0 && !getNewsLoadingStatus"
      class="oops-container-admin"
    >
      <div class="oops-all-container-admin">
        <div class="oops-title">
          <span>OOPS!</span>
        </div>
        <div class="text-not-found">
          <span>News not found</span>
        </div>
        <div class="button">
          <button @click="show">+ add news</button>
        </div>
      </div>
    </div>

    <div v-else-if="!getNewsLoadingStatus">
      <div class="button-add-news">
        <span @click="show">+ add news</span>
      </div>
      <div v-for="news in getTwentyNews" :key="news.id">
        <AdminItemsList :item="news" location="news" />
      </div>
      <div class="button-new-news" v-if="!getLoadMoreNewsButton">
        <div class="center">
          <button
            class="button-style"
            @click="fetchMore"
            :disabled="getIsLoadingMore"
          >
            <div class="div-fa-redo">
              <i
                class="fas fa-redo"
                :class="getIsLoadingMore && `loading_class`"
              ></i>
            </div>
            Завантажити ще...
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ModalNews from "./ModalNews.vue";
import AdminItemsList from "./AdminItemsList";

import { mapGetters, mapActions } from "vuex";

export default {
  name: "AdminManageNews",
  components: {
    AdminItemsList
  },
  computed: {
    ...mapGetters("news", [
      "getTwentyNews",
      "getNewsLoadingStatus",
      "getIsUpdating",
      "getLoadMoreNewsButton",
      "getIsLoadingMore"
    ]),
    ...mapGetters("auth", ["UserIsLoading"])
  },
  created() {
    if (this.getTwentyNews.length === 0 && !this.getNewsLoadingStatus) {
      this.fetchNews();
    }
  },
  methods: {
    ...mapActions("news", ["fetchNews", "fetchMore"]),
    show() {
      this.$modal.show(
        ModalNews,
        {},
        { clickToClose: false, width: "65%", height: "auto" }
      );
    }
  }
};
</script>

<style lang="scss">
#manageNewsWrapper {
  margin: 0;
  padding: 0;
  position: relative;
}

#loaderWrapper {
  opacity: 1;
  z-index: 0;
}

.button-add-news {
  width: 10%;
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
    background-color: #e4b940;
  }
}

/* o o p s */

.oops-all-container-admin {
  -moz-user-select: none;
  -khtml-user-select: none;
  user-select: none;
  margin-top: 12%;
}

.oops-container-admin::after {
  display: block;
  content: " ";
  padding-top: 17%;
}

.oops-container-admin {
  width: 100%;

  .oops-title {
    text-align: center;
    font-size: 12vw;
    font-weight: 100;
    z-index: 0;
    color: #505050;
  }

  .text-not-found {
    width: 30%;
    margin: 0 auto;
    text-align: center;
    font-size: 2.5vw;
    background: white;
    margin-top: -8%;
    position: relative;
    font-weight: 500;
    color: #ababab;
  }

  .button {
    text-align: center;
    margin-top: 1%;
    button {
      background-color: #edbe3e;
      border: none;
      color: white;
      padding: 0.5% 1% 0.5% 1%;
      font-weight: 600;
      border-radius: 3px;
      cursor: pointer;
      transition: 0.4s;
      &:hover {
        background-color: #989898;
      }
    }
  }
}
.button-new-news {
  padding-top: 2%;

  .center {
    width: 170px;
    margin: 0 auto;

    .button-style {
      display: flex;
      padding: 0.5% 1% 0.5% 1%;
      box-shadow: 0px 3px 6px 1px rgba(0, 0, 0, 0.16);
      text-align: center;
      border-radius: 5px;
      transition: 0.4s;
      background: white;
      border: none;
      padding: 6%;
      margin: 0;
      font-size: 14px;
      color: #505050;

      &:hover {
        cursor: pointer;
        background-color: #e4e4e4;
      }

      .loading_class {
        animation: loading 1s infinite;
      }

      &:hover i {
        transition: 0.4s;
        transform: rotate(360deg);
      }

      i {
        transition: 0.4s;
        margin-right: 10px;
        font-size: 14px;
      }
    }
  }
}

@keyframes loading {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
