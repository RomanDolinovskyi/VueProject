<template>
  <router-link to="/about">
    <div id="home-staff">
      <span>Професорсько викладацький склад</span>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "HomeActivity"
};
</script>

<style lang="scss">
#home-staff {
  height: 40vh;
  color: #f5f5f5;
  font-weight: bold;
  font-size: calc(10px + 3vw);
  background: linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url(./../../assets/Home/homeStaffBackground.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  line-height: 40vh;
}
</style>
