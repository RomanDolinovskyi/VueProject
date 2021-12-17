<template>
  <div id="manageCoursesWrapper">
    <div id="loaderWrapper" v-if="getCoursesLoadingStatus && !UserIsLoading">
      <div id="loader"></div>
    </div>
    <div
      v-else-if="getTwentyCourses.length <= 0 && !getCoursesLoadingStatus"
      class="oops-container-admin"
    >
      <div class="oops-all-container-admin">
        <div class="oops-title">
          <span>OOPS!</span>
        </div>
        <div class="text-not-found">
          <span>Courses not found</span>
        </div>
        <div class="button">
          <button @click="show">+ add courses</button>
        </div>
      </div>
    </div>

    <div v-else-if="!getCoursesLoadingStatus">
      <div class="button-add-news">
        <span @click="show">+ add courses</span>
      </div>
      <div v-for="courses in getTwentyCourses" :key="courses.id">
        <AdminItemsList :item="courses" location="courses" />
      </div>
    </div>
  </div>
</template>

<script>
import ModalCourses from "./ModalCourses.vue";
import AdminItemsList from "./AdminItemsList";

import { mapGetters, mapActions } from "vuex";

export default {
  name: "AdminManageNews",
  components: {
    AdminItemsList
  },
  computed: {
    ...mapGetters("courses", ["getTwentyCourses", "getCoursesLoadingStatus"]),
    ...mapGetters("auth", ["UserIsLoading"])
  },
  created() {
    if (!this.getCoursesLoadingStatus) {
      this.fetchCourses();
    }
  },
  methods: {
    ...mapActions("courses", ["fetchCourses"]),
    show() {
      this.$modal.show(
        ModalCourses,
        {},
        { clickToClose: false, width: "65%", height: "auto" }
      );
    }
  }
};
</script>

<style lang="scss">
#manageCoursesWrapper {
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
</style>
