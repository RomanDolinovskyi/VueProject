<template>
  <div id="home-page">
    <HomePreview />
    <HomeNews />
    <HomeActivity />
    <HomeCourses />
    <HomeStaff />
    <HomePartners />
  </div>
</template>

<script>
import HomePreview from "./../components/HomeComponents/HomePreviewComponent.vue";
import HomeNews from "./../components/HomeComponents/HomeNewsComponent.vue";
import HomeActivity from "./../components/HomeComponents/HomeActivityComponent.vue";
import HomeCourses from "./../components/HomeComponents/HomeCoursesComponent.vue";
import HomeStaff from "./../components/HomeComponents/HomeStaffComponent.vue";
import HomePartners from "./../components/HomeComponents/HomePartnersComponent.vue";

export default {
  name: "Home",
  components: {
    HomePreview,
    HomeNews,
    HomeActivity,
    HomeCourses,
    HomeStaff,
    HomePartners
  }
};
</script>

<style lang="scss">
#home-page {
  margin: 0;
  padding: 0;
  background: white;
  text-align: center;
}
</style>
