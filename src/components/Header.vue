<template>
  <header>
    <div style="background-image: none;" id="close-menu"></div>
    <router-link to="/">
      <div id="header-logo"></div>
    </router-link>
    <ul id="navbar" v-show="showMobileMenu || isPc" class="animatedClass">
      <router-link to="/" v-on:click.native="toggleShowMenu">
        Головна
        <div class="anim" />
      </router-link>
      <router-link to="/news" v-on:click.native="toggleShowMenu">
        Новини
        <div class="anim" />
      </router-link>
      <router-link to="/info" v-on:click.native="toggleShowMenu">
        Абітурієнту
        <div class="anim" />
      </router-link>
      <router-link to="/about" v-on:click.native="toggleShowMenu">
        Про нас
        <div class="anim" />
      </router-link>
      <router-link to="/contacts" v-on:click.native="toggleShowMenu">
        Контакти
        <div class="anim" />
      </router-link>
      <div class="university-links">
        <a
          href="https://www.tneu.edu.ua/"
          target="_blank"
          id="header-tneu-link"
        ></a>
        <a
          href="http://fcit.tneu.edu.ua/"
          target="_blank"
          id="header-fcit-link"
        ></a>
      </div>
    </ul>
    <div id="toggle-menu" @click="toggleShowMenu"></div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data: function() {
    return {
      showMobileMenu: false,
      isPc: false
    };
  },
  methods: {
    toggleShowMenu: function() {
      this.showMobileMenu = !this.showMobileMenu;
      document.body.style.overflow =
        this.showMobileMenu && !this.isPc ? "hidden" : "inherit";
    },
    getWindowWidth: function() {
      this.showMobileMenu = window.screen.width > 785;
      this.isPc = this.showMobileMenu;
    }
  },
  created() {
    this.showMobileMenu = window.screen.width >= 785;
    this.isPc = this.showMobileMenu;
    window.addEventListener("orientationchange", this.getWindowWidth);
  }
};
</script>

<style lang="scss">
header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #212121;
  height: 6vh;
  margin: 0;
  padding: 0 0 0 2vh;
  #close-menu {
    padding: 0;
    margin: 0;
    display: none;
    height: 8vh;
    width: 8vh;
    background-image: url("./../assets/Header/mobileBackIcon.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: 70% 70%;
  }
  #header-logo {
    height: 5vh;
    width: 25vh;
    background-image: url("./../assets/logo.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
  }
  #navbar {
    margin: 0;
    padding: 0;
    z-index: 98;
    overflow-y: hidden;

    .router-link-exact-active {
      color: #f5f5f5;
      background: #4d4d4d;
    }

    a {
      position: relative;
      height: 6vh;
      display: inline-block;
      text-decoration: none;
      color: #ffffff;
      background: #212121;
      list-style: none;
      justify-content: center;
      font-family: Helvetica;
      font-size: 14px;
      font-weight: 500;
      letter-spacing: 1px;
      line-height: 6vh;
      padding: 0 2vh;
      .anim {
        position: absolute;
        top: 0;
        left: 0;
        height: 0;
        width: 100%;
        background: #edbe3e;
        transition: 0.4s;
      }
      &:hover:not(.router-link-exact-active):not(#header-tneu-link):not(#header-fcit-link):not(.university-links)
        > .anim {
        height: 0.4vh;
        cursor: pointer;
      }
    }
    .university-links {
      display: none;
      position: absolute;
      bottom: 12vh;
      width: 100%;
      height: 80px;
      text-align: center;
      a {
        display: inline-block;
        height: 75px;
        width: 75px;
        padding: 0;
        margin: 0 -22px;
        text-align: center;
        justify-content: center;
        background-color: inherit;
      }
      #header-tneu-link {
        position: relative;
        z-index: 100;
        background-image: url("./../assets/TNEULogo.png");
        background-size: 64px;
        background-repeat: no-repeat;
        background-position: center;
      }
      #header-fcit-link {
        position: relative;
        z-index: 99;
        background-image: url("./../assets/FCITLogo.png");
        background-size: 75px;
        background-repeat: no-repeat;
        background-position: center;
      }
    }
  }
  #toggle-menu {
    display: none;
    height: 8vh;
    width: 8vh;
    background-image: url("./../assets/Header/mobileMenuIcon.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: 40% 46%;
  }
}

@media screen and (max-width: 785px) {
  header {
    padding: 0;
    margin: 0;
    background: #212121;
    height: 8vh;

    #close-menu {
      display: block;
    }
    #header-logo {
      background-size: 100%;
      height: 8vh;
    }
    #navbar {
      position: absolute;
      top: 8vh;
      width: 100%;
      height: 101vh;
      background-color: #393939;

      .router-link-exact-active {
        width: 100%;
        margin: 0 auto;
        background: #4d4d4d;
        margin-top: 4%;
        border-radius: 5px;
        padding-left: 8%;
      }
      a {
        display: block;
        padding-left: 21px;
        font-size: 18px;
        background: none;
        margin-top: 4%;
        padding-left: 8%;
      }
      .university-links {
        display: block;
        margin-bottom: 40px;
      }
    }
    #toggle-menu {
      display: block;
    }
  }
}
</style>
