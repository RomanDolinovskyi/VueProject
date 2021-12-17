<template>
  <div
    class="element-news"
    :style="{
      opacity:
        (getIsDeletingNews(item.id) && location === `news`) ||
        (getIsDeletingCourses(item.id) && location === `courses`)
          ? 0.5
          : 1
    }"
  >
    <div class="date" v-if="item.date">
      {{ new Date(item.date).toLocaleDateString() }}
    </div>
    <div class="element-title">{{ item.title }}</div>
    <div
      v-if="
        (getIsUpdatingNews(item.id) && location === `news`) ||
          (getIsUpdatingCourses(item.id) && location === `courses`)
      "
      class="updating"
      :style="{
        backgroundImage: `url(${require('./../../assets/loader.gif')})`
      }"
    ></div>
    <div v-else class="icon">
      <button
        id="pen"
        @click="editItem"
        :disabled="
          (getIsDeletingNews(item.id) && location === `news`) ||
            (getIsDeletingCourses(item.id) && location === `courses`)
        "
      >
        <i class="fas fa-pen"></i>
      </button>
      <button
        id="tresh"
        @click="() => deleteItem(item)"
        :disabled="
          (getIsDeletingNews(item.id) && location === `news`) ||
            (getIsDeletingCourses(item.id) && location === `courses`)
        "
      >
        <i class="fas fa-trash-alt"></i>
      </button>
    </div>
  </div>
</template>

<script>
import ModalNews from "./ModalNews.vue";
import ModalCourses from "./ModalCourses.vue";

import { mapActions, mapGetters } from "vuex";

export default {
  name: "AdminItemsList",
  props: { item: Object, location: String },
  computed: {
    ...mapGetters("news", ["getIsDeletingNews", "getIsUpdatingNews"]),
    ...mapGetters("courses", ["getIsDeletingCourses", "getIsUpdatingCourses"])
  },
  methods: {
    ...mapActions("news", ["deleteNews"]),
    ...mapActions("courses", ["deleteCourses"]),
    editItem: function() {
      if (this.location === "news") {
        this.$modal.show(
          ModalNews,
          { news: this.item },
          { width: "65%", height: "auto" }
        );
      } else {
        this.$modal.show(
          ModalCourses,
          { courses: this.item },
          { width: "65%", height: "auto" }
        );
      }
    },
    deleteItem(item) {
      this.$toasted.clear();
      this.$toasted.error(`Are you sure want to delete ' ${item.title} ' ?`, {
        theme: "bubble",
        icon: "trash",
        action: [
          {
            text: "Yes",
            onClick: async (e, toastObject) => {
              try {
                toastObject.goAway(0);
                this.location === "news"
                  ? await this.deleteNews(item.id)
                  : await this.deleteCourses(item.id);
                this.$toasted.success(`Deleting ' ${item.title} ' success`, {
                  theme: "bubble",
                  icon: "check-circle",
                  duration: 5000
                });
              } catch {
                this.$toasted.error(`Deleting ' ${item.title} ' was failed`, {
                  theme: "bubble",
                  icon: "check-circle",
                  duration: 5000,
                  action: [
                    {
                      text: "OK",
                      onClick: (e, toastObject) => {
                        toastObject.goAway(0);
                      }
                    }
                  ]
                });
              }
            }
          },
          {
            text: "Cancel",
            onClick: (e, toastObject) => {
              toastObject.goAway(0);
            }
          }
        ]
      });
    }
  }
};
</script>

<style lang="scss">
.element-news {
  width: 96%;
  margin: 0 auto;
  background-color: #f5f5f5;
  border-radius: 5px;
  display: flex;
  padding: 1.3% 2% 1.3% 2%;
  margin-bottom: 1%;
  justify-content: space-between;

  color: #6a6a6a;
  font-size: 1.2vw;

  .date {
    width: 15%;
  }

  .element-title {
    text-align: center;
    width: unset;
  }

  .updating {
    width: 35px;
    height: 35px;
    margin: -9px 0 -9px 91px;
    background-size: 75%;
    background-position: center;
    background-color: #505050;
    background-repeat: no-repeat;
    border-radius: 50%;
  }

  .icon {
    width: 15%;
    text-align: end;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;

    button {
      margin-left: 15%;
      border: none;
      background: none;
      color: #505050;
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
</style>
