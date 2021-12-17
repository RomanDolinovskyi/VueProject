<template>
  <div class="height-footer">
    <div id="loaderWrapper" v-if="getNewsLoadingStatus">
      <div id="loader"></div>
    </div>
    <div v-else-if="getTwentyNews.length <= 0" class="oops-container">
      <div class="oops-all-container">
        <div class="oops-title">
          <span>OOPS!</span>
        </div>
        <div class="text-not-found">
          <span>News not found</span>
        </div>
        <div class="button">
          <router-link to="/"><button>go to homepage</button></router-link>
        </div>
      </div>
    </div>

    <div v-else>
      <div class="news-page-title">
        <span>Новини</span>
      </div>
      <div class="grid">
        <div
          class="news-page-component news-page-component-one"
          v-for="item in getTwentyNews"
          :key="item.id"
          :style="{
            backgroundImage: `linear-gradient(
            to right,
            rgba(0, 0, 0, 0.6),
            rgba(0, 0, 0, 0.6)
          ), url('${item.image}')`
          }"
        >
          <div class="news-page-component-one-title">
            <div class="news-page-component-one-title-size">
              <span class="news-page-component-one-title-span">{{
                item.title
              }}</span>
              <p id="news-page-component-one-title-p-date">
                {{ new Date(item.date).toLocaleDateString() }}
              </p>
            </div>
          </div>

          <div class="news-page-component-one-button-style">
            <router-link :to="{ name: 'News-item', params: { id: item.id } }">
              <span id="news-page-component-one-button-style-text"
                >Детальніше...</span
              >
            </router-link>
          </div>
        </div>
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
import { createNamespacedHelpers } from "vuex";

const { mapActions, mapGetters } = createNamespacedHelpers("news");

export default {
  name: "News",
  created() {
    if (this.getTwentyNews.length === 0 && !this.getNewsLoadingStatus) {
      this.fetchNews();
    }
  },
  computed: {
    ...mapGetters([
      "getTwentyNews",
      "getLoadMoreNewsButton",
      "getIsLoadingMore",
      "getNewsMoreLoadingStatus",
      "getNewsLoadingStatus"
    ])
  },
  methods: {
    ...mapActions(["fetchNews", "fetchMore"])
  }
};
</script>

<style lang="scss">
#loaderWrapper {
  width: 100%;
  position: absolute;
  background-color: #ffffff;
  transition: opacity 1s ease-in-out;
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

.height-footer {
  min-height: 94vh;
}
/* Title */

.news-page-title {
  margin-left: -8px;
  text-align: left;
  font-size: 7vw;
  font-weight: bold;
  color: #e4e4e4;
}

/* Grid */

.grid {
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
}

.news-page-component {
  margin: auto;
  box-shadow: 0px 3px 6px 1px rgba(0, 0, 0, 0.16);
  text-align: left;
  width: 300px;
  height: 400px;
  margin-bottom: 2%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

#news-page-component-one-button-style-text {
  color: white;
  font-weight: bold;
}

.news-page-component-one-title-size {
  width: 90%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.news-page-component-one-title-span {
  color: white;
  font-weight: bold;
  font-size: 25px;
}

.news-page-component-one-title {
  padding-top: 330px;
  width: 100%;
  height: 100%;
  padding-left: 5%;
  transition: 0.4s;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.news-page-component-top-title {
  padding-top: 25%;
  width: 0%;
  transition: 0.4s;
}

.news-page-component-top {
  padding-left: 5%;
  height: 12vw;
  background-color: white;
  border-radius: 3px;
}

.news-page-component-bottom {
  margin-top: 1vw;
}

.news-page-component-one {
  border-radius: 5px;
}

/* button style */
.news-page-component-one-button-style {
  width: 40%;
  padding: 7px 10px 8px 10px;
  background-color: #edbe3e;
  border-radius: 5px;
  margin-left: 54%;
  opacity: 0;
  margin-top: -30px;
  transition: 0.4s;
  text-align: center;
}

.news-page-component-top-button-style {
  width: 30%;
  background-color: #edbe3e;
  border-radius: 5px;
  transition: 0.4s;
  opacity: 0;
}

#news-page-component-one-title-p-date {
  color: white;
  font-size: 15px;
}

.news-page-component-top-button-style span {
  font-size: 20px;
}

.news-page-component-one-button-style span {
  font-size: 13px;
}

/* hover */

.news-page-component-one:hover .news-page-component-one-title {
  padding-top: 5%;
  border-radius: 5px;
  height: 85%;
  transition-timing-function: ease-out;
  -webkit-box-shadow: inset 0px 200px 300px -200px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: inset 0px 200px 300px -200px rgba(0, 0, 0, 0.75);
  box-shadow: inset 0px 200px 300px -200px rgba(0, 0, 0, 0.75);
}

.news-page-component-one:hover .news-page-component-one-button-style {
  opacity: 1;
  margin-top: 5px;
  transition-timing-function: ease-out;
  cursor: pointer;
}

.news-page-component-top:hover .news-page-component-top-title {
  padding-top: 2%;
  height: 8vw;
  transition-timing-function: ease-out;
}

.news-page-component-top:hover .news-page-component-top-button-style {
  opacity: 1;
  transition-timing-function: ease-out;
  cursor: pointer;
}

/* o o p s */

.oops-all-container {
  margin-top: 11%;
  -moz-user-select: none;
  -khtml-user-select: none;
  user-select: none;
}

.oops-container::after {
  display: block;
  content: " ";
  padding-top: 17%;
}

.oops-container {
  width: 100%;

  .oops-title {
    text-align: center;
    font-size: 20vw;
    font-weight: 100;
    z-index: 0;
    color: #505050;
  }

  .text-not-found {
    width: 40%;
    margin: 0 auto;
    text-align: center;
    font-size: 3vw;
    background: white;
    margin-top: -10%;
    position: relative;
    font-weight: 500;
    color: #ababab;
  }

  .button {
    text-align: center;
    margin-top: 1%;
    button {
      text-transform: capitalize;
      background-color: #a9a9a9;
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
  padding-bottom: 1.5%;

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

// @media

@media screen and (max-width: 1330px) {
  .news-page-component {
    margin: 0 auto;
    margin-bottom: 2%;
  }
}

@media screen and (max-width: 500px) {
  .oops-container {
    .text-not-found {
      font-size: 18px;
    }

    .button {
      button {
        padding: 10px 15px;
        margin-top: 10px;
      }
    }
  }

  .news-page-component {
    width: 350px;
    height: 200px;
    margin-bottom: 20px;
  }

  .news-page-component-one-title {
    padding-top: 20px;
  }

  .news-page-component-one-title {
    border-radius: 5px;
    width: 100%;
    transition-timing-function: ease-out;
    -webkit-box-shadow: inset 0px 200px 300px -200px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: inset 0px 200px 300px -200px rgba(0, 0, 0, 0.75);
    box-shadow: inset 0px 200px 300px -200px rgba(0, 0, 0, 0.75);
  }

  .news-page-title {
    margin-left: -2px;
    font-size: 40px;
  }

  .news-page-component-one-title-span {
    font-size: 20px;
  }

  .news-page-component-one-title-span {
    width: 20px;
  }

  .news-page-component-one-title-size {
    width: 80%;
    position: absolute;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .news-page-title {
    margin-top: 10px;
    margin-bottom: 10px;
    text-align: center;
  }

  .news-page-component-one:hover .news-page-component-one-button-style {
    margin-top: -20px;
  }
}
</style>
