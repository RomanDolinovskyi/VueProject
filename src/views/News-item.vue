<template>
  <div id="loaderWrapper" v-if="isLoading">
    <div id="loader"></div>
  </div>
  <div v-else-if="!getCurrentNews" class="oops-container">
    <div class="oops-all-container">
      <div class="oops-title">
        <span>OOPS!</span>
      </div>
      <div class="text-not-found">
        <span>News not found</span>
      </div>
      <div class="button">
        <router-link to="/news"><button>go to news page</button></router-link>
      </div>
    </div>
  </div>
  <div v-else>
    <div
      class="container-photo"
      v-bind:style="{ 'background-image': 'url(' + this.news.image + ')' }"
    >
      <div class="container-photo-text">
        <span>{{ this.news.title }}</span>
      </div>
    </div>

    <div class="title-date">
      <p id="title-date">{{ new Date(this.news.date).toDateString() }}</p>
    </div>

    <div class="body">
      <p v-html="render(news.body)"></p>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
import VueMarkdownEditor, { xss } from "@kangc/v-md-editor";

const { mapActions, mapGetters } = createNamespacedHelpers("news");

export default {
  name: "NewsItem",
  data: function() {
    return {
      news: [],
      isLoading: true
    };
  },
  methods: {
    ...mapActions(["fetchCurrent"]),
    fetchCurrentNews: async function(id) {
      await this.fetchCurrent(id);
      this.news = this.getCurrentNews;
      this.isLoading = false;
    },
    render(body) {
      return xss.process(
        VueMarkdownEditor.themeConfig.markdownParser.render(body)
      );
    }
  },
  computed: {
    ...mapGetters(["getTwentyNews", "getCurrentNews"]),
    getNewsItem() {
      return this.getTwentyNews;
    }
  },
  created() {
    this.getNewsItem.filter(
      item => item.id == +this.$route.params.id && (this.news = item)
    );
    if (this.news.length === 0) {
      this.fetchCurrentNews(this.$route.params.id);
    } else {
      this.isLoading = false;
    }
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

.container-photo {
  width: 100%;
  background-position: center;
  background-size: cover;
}

.container-photo-text {
  background: rgba(0, 0, 0, 0.4);
  font-size: 5vw;
  font-weight: bold;
  color: white;
  text-align: center;
  padding-top: 10%;
  padding-bottom: 10%;
}

.title-date {
  text-align: center;
  padding-top: 1%;
  color: #b7b7b7;
}

.body {
  margin: auto;
  line-height: 1.5;
  width: 80%;
  padding: 20px 0 30px 0;
  text-indent: 30px;
  text-align: justify;
}

.text-all {
  width: 80%;
  margin: 0 auto;
  text-align: justify;
}

#text-all {
  font-size: 18px;
  color: #748692;
  line-height: 1.5;
}
</style>
