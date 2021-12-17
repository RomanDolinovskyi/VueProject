<template>
  <div>
    <div class="all-information-for-entrant-gs">
      <div class="all-information-for-entrant-item-gs">
        <span class="information-title">Денна-Заочна</span><br />
        <span class="information-text">Форма навчання</span>
      </div>

      <div class="all-information-for-entrant-item-gs">
        <span class="information-title">4 роки</span><br />
        <span class="information-text">Термін навчання</span>
      </div>
    </div>

    <div class="graduate-studiess-info">
      <span
        >Перелік необхідних документів для вступу -
        <a
          href="https://www.tneu.edu.ua/science/doctoral-studies/"
          target="_blank"
          >Детальніше...</a
        ></span
      >
    </div>

    <div class="container-entrant">
      <div class="teacher" v-for="teacher in teachers" :key="teacher.id">
        <div
          class="teacher-img"
          :style="{ 'background-image': 'url(' + teacher.img + ')' }"
        >
          <div class="teacher-text">
            <div class="teacher-name">
              <span id="text-name">{{ teacher.fullname }}</span>
            </div>
            <span id="text-bold">Посада:</span>
            <span> {{ teacher.position }}</span>
            <br />

            <span id="text-bold">Вчене звання:</span>
            <span> {{ teacher.AcademicStatus }}</span>

            <br />

            <span id="text-bold" v-if="teacher.degree">Науковий ступінь:</span>
            <span v-if="teacher.degree"> {{ teacher.degree }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import yatskiv from "../../assets/About-us-img/Yatskiv.jpg";
import yakymenko from "../../assets/About-us-img/Yakymenko.jpg";
import kasiancuk from "../../assets/About-us-img/Kasiancuk.jpg";

export default {
  name: "AboutUs",
  data: function() {
    return {
      teachers: [
        {
          fullname: "Яцків Василь Васильович",
          position: "завідувач кафедри кібербезпеки",
          degree: "д.т.н.",
          AcademicStatus: "доцент",
          img: yatskiv
        },

        {
          fullname: "Якименко Ігор Зіновійович",
          position: "доцент",
          degree: "кандидат технічних наук",
          AcademicStatus: "доцент",
          img: yakymenko
        },

        {
          fullname: "Касянчук Михайло Миколайович",
          position: "доцент",
          degree: "канд.фіз.-мат. наук",
          AcademicStatus: "доцент",
          img: kasiancuk
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.graduate-studiess-info {
  margin-left: -5px;
  text-align: left;
  font-size: 30px;
  font-weight: bold;
  color: #505050;
  padding-bottom: 3%;
}

.graduate-studiess-info a {
  margin-left: -5px;
  text-align: left;
  font-size: 25px;
  font-weight: normal;
  color: #162e67;
  padding-bottom: 3%;
}

.all-information-for-entrant-gs {
  display: flex;
  width: 90%;
  margin: 0 auto;
}

.all-information-for-entrant-item-gs {
  padding-left: 7%;
  width: 33.33%;
  margin: 0 auto;
  text-align: left;
  padding-top: 2.5%;
  padding-bottom: 2.5%;
}

.container-entrant {
  display: flex;
  flex-wrap: wrap;

  .teacher {
    overflow: hidden;
    height: 480px;
    width: 370px;
    margin: 0 auto;
    border-radius: 5px;
    margin-bottom: 2%;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);

    &:hover .teacher-text {
      opacity: 0;
      color: white;
      margin-bottom: -100px;
    }

    &:hover .teacher-img {
      background-size: 120%;
      height: 100%;
      border-radius: 5px 5px 5px 5px;
    }

    .teacher-img {
      width: 100%;
      height: 100%;
      border-radius: 5px 5px 5px 5px;
      background-position: center;
      background-repeat: no-repeat;
      background-size: 110%;
      transition: 0.4s;
      display: flex;
      align-items: flex-end;
    }

    .teacher-text {
      transition: 0.4s;
      opacity: 0.9;
      width: 100%;
      margin: 0 auto;
      background: white;
      padding: 1vh 2vh 1vh 2vh;
      border-radius: 0px 0px 5px 5px;

      span {
        color: #6c6c6c;
        font-size: 15px;
        line-height: 2.2vw;
      }

      .teacher-name {
        text-align: center;
        padding-bottom: 1vh;
        #text-name {
          color: #505050;
          font-weight: bold;
          font-size: 18px;
        }
      }

      #text-bold {
        color: #505050;
        font-weight: bold;
      }
    }
  }
}

@media screen and (max-width: 550px) {
  .teacher {
    width: 90% !important;
    margin: 0 auto;
  }
  .graduate-studiess-info {
    font-size: 20px;
    margin-left: 4px;
  }

  .graduate-studiess-info a {
    margin-left: -5px;
    text-align: left;
    font-size: 20px;
    font-weight: normal;
    color: #162e67;
    padding-bottom: 3%;
  }

  .all-information-for-entrant-item-gs {
    width: 100%;
    text-align: center;
    padding: 15px 0px 15px 0px;
  }

  .graduate-studiess-info {
    text-align: center;
  }
}
</style>
