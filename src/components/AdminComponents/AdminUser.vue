<template>
  <div class="user-panel-style">
    <div class="title-admin-panel">
      <span>Admin panel</span>
    </div>
    <div class="center-container"></div>
    <div v-if="user" class="user-container">
      <div class="user-name">
        <div id="all-name">
          <span>{{ user.first_name }}&nbsp;{{ user.last_name }}</span>
        </div>
        <div id="role">
          <span>{{ user.role }}</span>
        </div>
      </div>

      <!-- <div
        class="img"
        :style="{
          'background-image': 'url(' + user.image + ')'
        }"
      ></div> -->
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";

const { mapGetters } = createNamespacedHelpers("auth");

export default {
  name: "AdminUser",
  data: () => ({
    user: null
  }),
  computed: {
    ...mapGetters(["getUser"])
  },
  mounted() {
    this.user = this.getUser;
  }
};
</script>

<style lang="scss">
.user-panel-style {
  display: flex;
  width: 100%;
  height: 0;
  padding: 2.5% 2% 6% 2%;

  .title-admin-panel {
    width: 30%;
    margin-top: -1vh;

    span {
      font-size: 3vw;
      font-weight: bold;
      color: #e4e4e4;
    }
  }
}
</style>
