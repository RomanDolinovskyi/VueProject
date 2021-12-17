<template>
  <div v-if="getNewsLength > 0">
    <div id="home-news">
      <span>Новини</span>
    </div>

    <div class="grid-news" v-if="getNewsLength <= 3">
      <div
        class="news-component news-component-one"
        v-for="news in getTwentyNews"
        :key="news.id"
        :style="{
          'background-image':
            `linear-gradient(
            to right,
            rgba(0, 0, 0, 0.6),
            rgba(0, 0, 0, 0.6)
          ),url(` +
            news.image +
            `)`
        }"
      >
        <div class="news-component-one-title">
          <span>{{ news.title }}</span>
          <p id="news-component-top-date">
            {{ new Date(news.date).toLocaleDateString() }}
          </p>
        </div>
        <router-link :to="{ name: 'News-item', params: { id: news.id } }">
          <div class="news-component-one-button-style">
            <span>Детальніше...</span>
          </div>
        </router-link>
      </div>
    </div>
    <div class="grid-news" v-else>
      <div
        class="news-component news-component-one"
        :style="{
          'background-image':
            `linear-gradient(
            to right,
            rgba(0, 0, 0, 0.6),
            rgba(0, 0, 0, 0.6)
          ),url(` +
            getTwentyNews[0].image +
            `)`
        }"
      >
        <div class="news-component-one-title">
          <span>{{ getTwentyNews[0].title }}</span>
          <p id="news-component-top-date">
            {{ new Date(getTwentyNews[0].date).toLocaleDateString() }}
          </p>
        </div>
        <router-link
          :to="{ name: 'News-item', params: { id: getTwentyNews[0].id } }"
        >
          <div class="news-component-one-button-style">
            <span>Детальніше...</span>
          </div>
        </router-link>
      </div>
      <div class="news-component-two news-component-two">
        <div
          class="news-component-top"
          :style="{
            'background-image':
              `linear-gradient(
            to right,
            rgba(0, 0, 0, 0.6),
            rgba(0, 0, 0, 0.6)
          ),url(` +
              getTwentyNews[1].image +
              `)`
          }"
        >
          <div class="news-component-top-title">
            <span>{{ getTwentyNews[1].title }}</span>
            <p id="news-component-top-date">
              {{ new Date(getTwentyNews[1].date).toLocaleDateString() }}
            </p>
          </div>

          <router-link
            :to="{ name: 'News-item', params: { id: getTwentyNews[1].id } }"
          >
            <div class="news-component-top-button-style">
              <span>Детальніше...</span>
            </div>
          </router-link>
        </div>

        <div
          class="news-component-top news-component-bottom"
          :style="{
            'background-image':
              `linear-gradient(
            to right,
            rgba(0, 0, 0, 0.6),
            rgba(0, 0, 0, 0.6)
          ),url(` +
              getTwentyNews[2].image +
              `)`
          }"
        >
          <div class="news-component-top-title">
            <span>{{ getTwentyNews[2].title }}</span>
            <p id="news-component-top-date">
              {{ new Date(getTwentyNews[2].date).toLocaleDateString() }}
            </p>
          </div>
          <router-link
            :to="{ name: 'News-item', params: { id: getTwentyNews[2].id } }"
          >
            <div class="news-component-top-button-style">
              <span>Детальніше...</span>
            </div>
          </router-link>
        </div>
      </div>

      <div class="news-component news-component-one" id="redirect-link">
        <router-link :to="{ name: 'News' }">
          Показати ще
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";

const { mapActions, mapGetters } = createNamespacedHelpers("news");

export default {
  name: "HomeNews",
  created() {
    if (this.getTwentyNews.length === 0 && !this.getNewsLoadingStatus) {
      this.fetchNews();
    }
  },
  computed: {
    ...mapGetters(["getTwentyNews", "getNewsLength", "getNewsLoadingStatus"])
  },
  methods: {
    ...mapActions(["fetchNews"])
  }
};
</script>

<style lang="scss">
.grid-news {
  width: 90%;
  margin: 0 auto;
  display: flex;
  margin-bottom: 4%;
  justify-content: space-around;
}

.news-component {
  box-shadow: 0px 3px 6px 1px rgba(0, 0, 0, 0.16);
  text-align: left;
  flex-grow: 1;
  margin: 0 10px;
  width: 32.1%;
  position: relative;
  height: 25vw;
}

.news-component-two {
  text-align: left;
  margin: 0 auto;
  width: 32.1%;
  position: relative;
  height: 25vw;
}

.news-component span {
  color: white;
  font-weight: bold;
  font-size: 2vw;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.news-component-two span {
  color: white;
  font-weight: bold;
  font-size: 1.6vw;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.news-component-one-title {
  padding-top: 18.5vw;
  height: 23vw;
  width: 80%;
  transition: 0.4s;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

#news-component-top-date {
  color: white;
}

.news-component-top-title {
  padding-top: 25%;
  height: 11vw;
  width: 60%;
  transition: 0.4s;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.news-component-top {
  padding-left: 5%;
  height: 12vw;
  background-color: rosybrown;
  border-radius: 3px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  box-shadow: 0px 3px 6px 1px rgba(0, 0, 0, 0.16);
}

.news-component-bottom {
  box-shadow: 0px 3px 6px 1px rgba(0, 0, 0, 0.16);
  margin-top: 1vw;
}

.news-component-one {
  padding-left: 2%;
  height: 25vw;
  background-color: rosybrown;
  border-radius: 3px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

#redirect-link {
  background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 0.6)
    ),
    url(../../assets/Home/news.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  padding: 0;

  a {
    display: block;
    font-size: 2vw;
    height: 25vw;
    line-height: 25vw;
    color: grey;
    transition: all 0.2s ease-in-out;
    text-align: center;
  }
  &:hover {
    a {
      color: white;
    }
  }
}

/* button style */
.news-component-one-button-style {
  height: 3vw;
  line-height: 3vw;
  width: 35%;
  background-color: #edbe3e;
  border-radius: 5px;
  margin-left: 57%;
  opacity: 0;
  transition: 0.4s;
  text-align: center;
}

.news-component-top-button-style {
  width: 30%;
  height: 2.5vw;
  line-height: 2.4vw;
  background-color: #edbe3e;
  border-radius: 5px;
  margin-left: 65%;
  transition: 0.4s;
  opacity: 0;
  text-align: center;
}

.news-component-top-button-style span {
  font-size: 1vw;
}

.news-component-one-button-style span {
  font-size: 1.2vw;
}

/* hover */

.news-component-one:hover .news-component-one-title {
  padding-top: 2%;
  height: 20vw;
  transition-timing-function: ease-out;
}

.news-component-one:hover .news-component-one-button-style {
  opacity: 1;
  transition-timing-function: ease-out;
  cursor: pointer;
}

.news-component-top:hover .news-component-top-title {
  padding-top: 2%;
  height: 8vw;
  transition-timing-function: ease-out;
}

.news-component-top:hover .news-component-top-button-style {
  opacity: 1;
  transition-timing-function: ease-out;
  cursor: pointer;
}

/* home */

#home-news {
  text-align: left;
  span {
    margin-left: 18px;
    padding: 0;
    font-size: 5vw;
    font-weight: bold;
    color: #e4e4e4;
  }
}

@media screen and (max-width: 550px) {
  #home-news {
    text-align: center;
    margin-top: 10px;
    margin-bottom: 10px;
    span {
      font-size: 40px;
    }
  }

  .grid-news {
    flex-direction: column;
  }

  .news-component {
    margin: 0 auto;
  }

  .news-component-two {
    margin-bottom: 20px;
    width: 90%;
    height: auto;
  }

  .news-component-top {
    height: 200px;
    padding: 10px;
    box-shadow: 0px 3px 6px 1px rgba(0, 0, 0, 0.16);

    span {
      font-size: 30px;
    }

    #news-component-top-date {
      margin-top: -15px;
    }
  }

  .news-component-top-title {
    font-size: 100px;
    height: auto;
  }

  .news-component-bottom {
    margin-top: 20px;
  }

  .news-component-one {
    width: 90%;
    margin-bottom: 20px;
    height: 200px;
  }

  .news-component-one-title {
    margin-top: 60px;
    height: auto;

    span {
      font-size: 30px;
    }
  }

  #news-component-top-date {
    font-size: 15px;
  }

  .news-component-top-title {
    margin-top: -20px;
  }

  #redirect-link {
    a {
      font-size: 25px !important;
      color: white;
      margin-top: 50px;
    }
  }

  .news-component-one:hover .news-component-one-title {
    margin-top: 0px;
  }

  .news-component-one:hover .news-component-one-button-style {
    height: 25px;
    margin-top: 70px;
    padding-top: 6px;

    span {
      font-size: 12px;
    }
  }

  .news-component-top:hover .news-component-top-title {
    height: auto;
    margin-top: -70px;
  }

  .news-component-top {
    padding-right: 40px;
  }

  .news-component-top-button-style {
    height: 25px;
    width: 110px;
    padding-top: 7px;
    margin-top: 90px;
    span {
      font-size: 12px;
    }
  }

  .news-component-one-button-style {
    height: 25px;
    width: 110px;
    padding-top: 7px;
    margin-top: 90px;
    span {
      font-size: 12px;
    }
  }

  .news-component-two {
    height: auto;
    border-radius: 3px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .news-component-two-title {
    padding-top: 18.5vw;
    height: 23vw;
    width: 80%;
    transition: 0.4s;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
}

@media screen and (max-width: 320px) {
  .news-component-one:hover .news-component-one-button-style {
    height: 25px;
    margin-top: 85px;
    padding-top: 6px;

    span {
      font-size: 12px;
    }
  }

  .news-component-top {
    padding-right: 60px;
  }

  .news-component-one {
    padding-right: 34px;
  }
}
</style>
