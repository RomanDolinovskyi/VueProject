<template>
  <div>
    <div class="container-partners">
      <VueSlickCarousel v-bind="settings">
        <div
          class="partners-img"
          v-for="(partners, index) in partnersList"
          :key="index"
        >
          <a
            :href="partners.url"
            target="_blank"
            :style="{ backgroundImage: partners.logo }"
          />
        </div>
      </VueSlickCarousel>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  name: "HomePartners",
  components: {
    VueSlickCarousel
  },
  data() {
    return {
      partnersList: [
        {
          logo: `url(${require("./../../assets/Partners-img/cluster.png")})`,
          url: `https://www.facebook.com/ITClusterTernopil/`
        },
        {
          logo: `url(${require("./../../assets/Partners-img/cisco.png")})`,
          url: "https://www.cisco.com/"
        },
        {
          logo: `url(${require("./../../assets/Partners-img/magnise.png")})`,
          url: `https://magnise.com/`
        },
        {
          logo: `url(${require("./../../assets/Partners-img/cluster.png")})`,
          url: `https://www.facebook.com/ITClusterTernopil/`
        },
        {
          logo: `url(${require("./../../assets/Partners-img/cisco.png")})`,
          url: "https://www.cisco.com/"
        },
        {
          logo: `url(${require("./../../assets/Partners-img/magnise.png")})`,
          url: `https://magnise.com/`
        }
      ],
      settings: {
        infinite: true,
        slidesToShow: 3,
        speed: 500,
        rows: 1,
        slidesPerRow: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnFocus: true,
        arrows: false,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      }
    };
  }
};
</script>

<style lang="scss">
.container-partners {
  margin: 10px 0px;
  height: 70px;
  .slick-prev:before,
  .slick-next:before {
    color: black !important;
  }
  .partners-img {
    position: relative;
    padding: 0 10px;
    a {
      display: block;
      height: 70px;
      width: 100%;
      background-position: center;
      background-repeat: no-repeat;
      background-size: contain;
    }
  }
}
</style>
