<template>
  <div id="home-courses">
    <div id="cisco-course">
      <span>Курс CISCO</span>
      <div id="cisco-course-link">
        <a target="_blank" href="https://netacad.com" />
      </div>
    </div>
    <div id="another-courses" v-if="getTwentyCourses.length > 0">
      <span>Додаткові курси</span>
      <div id="slider-wrapper">
        <VueSlickCarousel v-bind="settings">
          <div
            v-for="course in getTwentyCourses"
            :key="course.id"
            class="slider-item"
          >
            <a
              class="slider-item-content"
              target="_blank"
              :href="course.url"
              :style="{
                backgroundImage: `linear-gradient(
            to right,
            rgba(0, 0, 0, 0.6),
            rgba(0, 0, 0, 0.6)
          ), url('${course.image}')`
              }"
            >
              {{ course.title }}
            </a>
          </div>
        </VueSlickCarousel>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  name: "HomeCourses",

  data() {
    return {
      settings: {
        infinite: true,
        dots: true,
        arrows: false,
        slidesToShow: 2,
        speed: 500,
        rows: 2,
        slidesPerRow: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnDotsHover: true,
        pauseOnFocus: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 560,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 2,
              rows: this.getCoursesLength % 2 === 0 ? 2 : 1
            }
          }
        ]
      }
    };
  },

  components: { VueSlickCarousel },

  created() {
    if (!this.getCoursesLoadingStatus) {
      this.fetchCourses();
    }
  },
  computed: {
    ...mapGetters("courses", [
      "getTwentyCourses",
      "getCoursesLength",
      "getCoursesLoadingStatus"
    ])
  },
  methods: {
    ...mapActions("courses", ["fetchCourses"])
  }
};
</script>

<style lang="scss">
#home-courses {
  display: flex;
}
#cisco-course {
  text-align: left;
  flex: 1;
  span {
    font-size: 5vw !important;
    font-weight: bold;
    position: relative;
    z-index: 0;
    margin: -2vw 0 0vw 18px;
    padding: 0;
    color: #e4e4e4;
    font-size: calc(10px + 9vw);
  }
  #cisco-course-link {
    width: 100%;
    height: 340px;
    position: relative;
    overflow: hidden;
    padding: 20px 4px 0 20px;
    a {
      border-radius: 5px;
      display: block;
      width: 100%;
      height: 320px;
      background-image: linear-gradient(
          to right,
          rgba(0, 0, 0, 0.6),
          rgba(0, 0, 0, 0.6)
        ),
        url("./../../assets/Home/ciscoCourses.jpg");
      background-position: center;
      background-size: contain;
      background-repeat: no-repeat;
    }
  }
}
#another-courses {
  text-align: left;
  flex: 1;
  span {
    font-size: 5vw !important;
    font-weight: bold;
    position: relative;
    z-index: 0;
    margin: -2vw 0 0vw 22px;
    padding: 0;
    color: #e4e4e4;
    font-size: calc(10px + 9vw);
  }
  #slider-wrapper {
    margin: 0 20px 40px 0px;
    .slick-prev:before,
    .slick-next:before {
      color: black !important;
    }
    .slider-item {
      height: 170px;
      padding: 10px 12px;
      .slider-item-content {
        display: block;
        color: #ffffff;
        margin: 10px 10px;
        border-radius: 5px;
        height: 150px;
        width: 100%;
        text-align: center;
        text-transform: uppercase;
        font-size: calc(10px + 1vw);
        line-height: 150px;
        cursor: pointer;
        background-position: center;
        background-size: 110%;
        background-repeat: no-repeat;
        transition: all 0.5s ease-in-out;
        &:hover {
          background-size: 120%;
        }
      }
    }
  }
}

@media screen and (max-width: 780px) {
  #home-courses {
    display: block;
    #another-courses,
    #cisco-course {
      text-align: center;
      margin-top: 10px;
      margin-bottom: 10px;
      span {
        font-size: 40px !important;
      }
      #cisco-course-link {
        padding: 20px;
      }
    }
  }
}
</style>
