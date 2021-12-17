<template>
  <div class="height-footer">
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
      integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
      crossorigin="anonymous"
    />

    <div class="container-map">
      <iframe
        width="100%"
        height="550px"
        id="gmap_canvas"
        src="https://maps.google.com/maps?q=%D0%A2%D0%9D%D0%95%D0%A3%2C%20%D0%A4%D0%B0%D0%BA%D1%83%D0%BB%D1%8C%D1%82%D0%B5%D1%82%20%D0%BA%D0%BE%D0%BC%D0%BF'%D1%8E%D1%82%D0%B5%D1%80%D0%BD%D0%B8%D1%85%20%D1%96%D0%BD%D1%84%D0%BE%D1%80%D0%BC%D0%B0%D1%86%D1%96%D0%B9%D0%BD%D0%B8%D1%85%20%D1%82%D0%B5%D1%85%D0%BD%D0%BE%D0%BB%D0%BE%D0%B3%D1%96%D0%B9&t=&z=13&ie=UTF8&iwloc=&output=embed"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
      ></iframe>
    </div>

    <div class="container-title">
      <span>Контакти кафедри кібербезпеки</span>
    </div>

    <div class="container-item">
      <a id="link" href="tel:+380352475050">
        <div id="phone" class="item">
          <div class="item-img">
            <i class="fas fa-phone"></i>
          </div>
          <div class="item-text">
            <span>Телефон</span>
            <br />
            <span>+380 35 24 75 050</span>
          </div>
        </div>
      </a>

      <a id="link" href="mailto:kb@tneu.edu.ua">
        <div id="email" class="item">
          <div class="item-img">
            <i class="fas fa-envelope-open-text"></i>
          </div>
          <div class="item-text">
            <span>Пошта</span>
            <br />
            <span>kb@tneu.edu.ua</span>
          </div>
        </div>
      </a>

      <a
        id="link"
        target="_blank"
        href="https://www.youtube.com/channel/UCJbl27T52zSBDCq9rXbZLHQ"
      >
        <div id="youtube" class="item">
          <div class="item-img">
            <i class="fab fa-youtube"></i>
          </div>
          <div class="item-text">
            <span>YouTube</span>
            <br />
            <span>Department of Cybersecurity</span>
          </div>
        </div>
      </a>

      <a
        id="link"
        target="_blank"
        href="https://www.instagram.com/cybersecurity_tneu/?hl=uk"
      >
        <div id="instagram" class="item">
          <div class="item-img">
            <i class="fab fa-instagram"></i>
          </div>
          <div class="item-text">
            <span>Instagram</span>
            <br />
            <span>cybersecurity_tneu</span>
          </div>
        </div>
      </a>

      <a
        id="link"
        target="_blank"
        href="https://www.facebook.com/kb.tneu.edu.ua/"
      >
        <div id="facebook" class="item">
          <div class="item-img">
            <i class="fab fa-facebook"></i>
          </div>
          <div class="item-text">
            <span>Facebook</span>
            <br />
            <span>Кафедра кібербезпеки</span>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contacts"
};
</script>

<style lang="scss">
.height-footer {
  min-height: 94vh;
}

.container-title {
  font-size: 3.5vw;
  font-weight: bold;
  margin-left: -4px;
  color: #e4e4e4;
}

.container-item {
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  #link {
    width: 19%;
    margin-top: 2%;
    margin-bottom: 4%;
  }

  #phone {
    &:hover {
      background-color: #4caf51;
      box-shadow: none;
      cursor: pointer;
    }

    &:hover .item-text {
      color: white;
    }

    &:hover i {
      color: white;
    }
  }

  #email {
    &:hover {
      background-color: #d54c40;
      box-shadow: none;
      cursor: pointer;
    }

    &:hover .item-text {
      color: white;
    }

    &:hover i {
      color: white;
    }
  }

  #youtube {
    &:hover {
      background-color: #ff0200;
      box-shadow: none;
      cursor: pointer;
    }

    &:hover .item-text {
      color: white;
    }

    &:hover i {
      color: white;
    }
  }

  #instagram {
    &:hover {
      background-color: #e63562;
      box-shadow: none;
      cursor: pointer;
    }

    &:hover .item-text {
      color: white;
    }

    &:hover i {
      color: white;
    }
  }

  #facebook {
    &:hover {
      background-color: #4367b2;
      box-shadow: none;
      cursor: pointer;
    }

    &:hover .item-text {
      color: white;
    }

    &:hover i {
      color: white;
    }
  }

  .item {
    transition: 0.4s;
    padding: 10px 10px 20px 10px;
    border-radius: 5px;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);

    .item-img {
      margin-top: -5px;
      font-size: 30px;
      color: #6c6c6c;
    }

    .item-text {
      font-weight: bold;
      color: #6c6c6c;
      margin-top: -20px;
      font-size: 1vw;
      text-align: center;
    }
  }
}

@media screen and (max-width: 800px) {
  #link {
    width: 45% !important;
    margin: 0 auto;
  }

  .container-item {
    .item {
      .item-text {
        font-size: 2vw;
      }
    }
  }
}

@media screen and (max-width: 500px) {
  .container-title {
    font-size: 6vw;
  }

  #link {
    width: 100% !important;
    margin: 0 auto;
  }

  .container-item {
    .item {
      .item-text {
        font-size: 4vw;
      }
    }
  }

  .container-title {
    text-align: center;
  }
}
</style>
