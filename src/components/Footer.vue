<template>
  <footer>
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
      integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
      crossorigin="anonymous"
    />

    <div id="top-footer">
      <router-link to="/">
        <div id="footer-logo"></div>
      </router-link>
      <div id="cs-links" class="cs-links">
        <div id="followUs">Стежте за нами тут</div>
        <a
          href="https://www.youtube.com/channel/UCJbl27T52zSBDCq9rXbZLHQ"
          target="_blank"
          ><i id="youtube-link" class="fab fa-youtube"></i
        ></a>
        <a href="https://www.instagram.com/cybersecurity_tneu/" target="_blank"
          ><i id="instagram-link" class="fab fa-instagram"></i
        ></a>
        <a href="https://www.facebook.com/kb.tneu.edu.ua/" target="_blank"
          ><i id="facebook-link" class="fab fa-facebook-square"></i
        ></a>

        <a href="#" target="_blank"
          ><i id="telegram-link" class="fab fa-telegram"></i
        ></a>
      </div>
    </div>
    <div id="bottom-footer">
      <div id="footer-links">
        <div class="footer-link">
          <a><h2>Студенту</h2></a>
          <a href="http://mod.tanet.edu.te.ua/site/login" target="_blank"
            >Rating system</a
          >
          <!-- <a href="http://student.tneu.org/" target="_blank">Вибір дисциплін</a> -->
        </div>
        <div class="footer-link">
          <a><h2>Партнери</h2></a>
          <a href="https://www.cisco.com/" target="_blank">Cisco</a>
          <a href="https://magnise.com/" target="_blank">Magnise</a>
          <a href="https://itcluster.te.ua/" target="_blank">It cluster</a>
        </div>
        <div class="footer-link">
          <a><h2>Сайти</h2></a>
          <a href="https://www.tneu.edu.ua/" target="_blank">ЗУНУ</a>
          <a href="http://fcit.tneu.edu.ua/" target="_blank">ФКІТ</a>
        </div>
        <div class="footer-link">
          <a><h2>Соцмережі</h2></a>
          <a
            href="https://www.instagram.com/cybersecurity_tneu/"
            target="_blank"
            >Instagram</a
          >
          <a
            href="https://www.youtube.com/channel/UCJbl27T52zSBDCq9rXbZLHQ"
            target="_blank"
            >YouTube</a
          >
          <a href="https://www.facebook.com/kb.tneu.edu.ua/" target="_blank"
            >Facebook</a
          >
          <a href="https://t.me/cs_cybersecurity" target="_blank">Telegram</a>
        </div>
      </div>
      <div class="university-links">
        <a
          href="https://www.wunu.edu.ua/"
          target="_blank"
          id="footer-tneu-link"
        ></a>

        <a
          href="http://fcit.tneu.edu.ua/"
          target="_blank"
          id="footer-fcit-link"
        ></a>
      </div>
    </div>
    <div id="copyright">
      © Copyright 2020 Cyber Security | Rights Reserved
    </div>
  </footer>
</template>

<script>
export default {
  name: "Header",
  data: function() {
    return {
      isPc: false
    };
  }
};
</script>

<style lang="scss">
footer {
  position: absolute;
  width: 100%;

  text-align: center;
  display: block;
  background-color: #303030;
  margin: 0;
  padding: 0vh 10vh 0 10vh;
  #top-footer {
    padding-top: 1.8%;
    padding-bottom: 1.8%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 0.5px solid;
    border-color: white;
    #footer-logo {
      display: block;
      height: 5.5vh;
      width: 45vh;
      margin-left: -15%;
      background-image: url("./../assets/logo.png");
      background-position: center;
      background-repeat: no-repeat;
      background-size: contain;
    }
    .cs-links i {
      color: white;
      font-size: 2vw;
    }

    #cs-links {
      #followUs {
        display: inline-block;
        color: white;
        font-size: 20px;
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }

      #youtube-link,
      #instagram-link,
      #facebook-link,
      #telegram-link {
        margin-left: 4.5vh;
        margin-top: 1vh;
        transition: 0.4s;
      }

      #instagram-link {
        width: 25px;
        height: 25px;
        border-radius: 45%;
        transition: 0.4s;
      }

      #youtube-link:hover {
        color: #ff0200;
        transition-timing-function: ease-out;
      }
      #instagram-link:hover {
        color: #cf2d91;
        transition-timing-function: ease-out;
      }
      #facebook-link:hover {
        color: #4367b2;
        transition-timing-function: ease-out;
      }

      #telegram-link:hover {
        color: #30a8e0;
        transition-timing-function: ease-out;
      }
    }
  }
  #bottom-footer {
    display: flex;
    justify-content: space-between;
    margin: 4vh 0 4vh 4vh;
    align-items: center;
    flex-direction: row-reverse;
    .university-links {
      display: block;
      white-space: nowrap;
      margin-left: -0.5vw;
      display: flex;
      a {
        display: inline-block;
        height: 15vh;
        width: 15vh;
        padding: 0;
        margin: 0 -4vh;
        text-align: center;
        justify-content: center;
        background-color: inherit;
        border-radius: 50%;
      }
      #footer-tneu-link {
        z-index: 1;
        background-image: url("./../assets/TNEULogo.png");
        background-size: 13vh;
        background-repeat: no-repeat;
        background-position: center;
      }

      #footer-fcit-link:hover {
        z-index: 1;
      }

      #footer-fcit-link {
        background-image: url("./../assets/FCITLogo.png");
        background-size: 15vh;
        background-repeat: no-repeat;
        background-position: center;
      }
    }
    #footer-links {
      display: flex;
      .footer-link {
        text-align: left;
        padding-left: 3vh;
        a {
          display: block;
          font-family: Helvetica;
          text-decoration: none;
          color: #9b9a9a;
          letter-spacing: 0.5px;
          margin: 5px;
          font-size: 1.5vh;

          h2 {
            color: #ffffff;
            margin: 10px 0;
            padding: 0;
            font-size: 2.3vh;
          }
        }

        :hover {
          color: white;
          transition: 0.4s;
        }
      }
    }
  }
  #copyright {
    font-size: 1.6vh;
    color: #535353;
    background-color: #212121;
    margin: 0px -10vh;
    padding: 8px 0;
    text-align: center;
    font-weight: bold;
  }
}

@media screen and (max-width: 785px) {
  footer {
    #top-footer {
      flex-wrap: wrap;
      justify-content: center;
      border-bottom: 1px solid white;
      a {
        div {
          margin-left: 0 !important;
        }
      }
      .cs-links {
        display: flex;
        width: 100%;
        justify-content: space-around;
        flex-wrap: wrap;
        #followUs {
          width: 100%;
          margin: 10px 0;
        }
        a {
          flex: 1;
          i {
            font-size: 5vw;
            margin: 10px 24px 0 24px !important;
            padding: 0 !important;
          }
        }
      }
    }
    #bottom-footer {
      display: block;
      #footer-links {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        .footer-link {
          padding: 0;
          margin: 0px 10px;
          height: 200px;
          width: 200px;
          a {
            font-size: 3vw;
            text-align: center;

            h2 {
              text-align: center;
              font-size: 3vw;
            }
          }
        }
      }
      .university-links {
        display: block;
        white-space: nowrap;
        display: flex;
        justify-content: center;
        margin-top: 6%;
      }
    }
  }
}

@media screen and (max-width: 520px) {
  footer {
    padding: 6%;
    #top-footer {
      border-color: white;

      #footer-logo {
        margin-bottom: 15px;
        width: 30vh;
        margin-left: 0%;
      }

      .cs-links i {
        color: white;
        font-size: 8vw !important;
      }

      #cs-links {
        flex-wrap: wrap;
        #followUs {
          width: 100%;
        }
        #youtube-link,
        #instagram-link,
        #facebook-link,
        #telegram-link {
          margin-left: 3vh;
          margin-right: 3vh;
          margin-top: 0.5vh;
          transition: 0.4s;
          flex: 1;
        }
      }
    }

    #bottom-footer {
      margin: 10px 0;
      .university-links {
        display: block;
        white-space: nowrap;
        display: flex;
        justify-content: center;
        margin-top: 6%;
      }
      #footer-links {
        display: block 2;

        .footer-link {
          height: 120px;
          width: 120px;
          padding-left: 3%;
          padding-right: 3%;
          padding-bottom: 3%;
          a {
            font-size: 4vw;
            text-align: center;

            h2 {
              text-align: center;
              font-size: 5vw;
            }
          }
        }
      }
    }
  }
  #copyright {
    display: none;
  }
}
</style>
