<template>
  <div>
    <div class="about-us-title about-us-title-cyber-security">
      <span>Кафедра кібербезпеки </span>
    </div>

    <div class="information-about-cyber-security">
      <span id="information-about-cyber-security-text">
        Спеціальність 125 - Кібербезпека охоплює питання, що стосуються захисту
        конфіденційності, цілісності і доступності обчислювальних пристроїв і
        мереж, програмного забезпечення і, найголовніше, даних та інформації.<br />
        <br />
        Кібербезпека розглядає захист функціонування нової сутності –
        кіберпростору, середовища, що виникло в результаті взаємодії людей,
        програмного забезпечення, Інтернет сервісів з використанням технічних
        пристроїв і мережевих зв’язків.<br />
        <br />

        Фахівці з кібербезпеки забезпечують захист життєво важливих інтересів
        людини і суспільства, своєчасне виявлення, запобігання і нейтралізацію
        реальних та потенційних загроз у сфері функціонування інформаційних,
        комп’ютерних та кіберфізичних систем.
      </span>
    </div>

    <div class="about-us-title">
      <span>Професорсько-викладацький склад</span>
    </div>

    <div class="container">
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

    <div class="about-us-title">
      <span>Аспіранти кафедри</span>
    </div>

    <div class="container">
      <div
        class="teacher"
        v-for="postgraduate in postgraduates"
        :key="postgraduate.id"
      >
        <div
          class="teacher-img"

          :style="{ 'background-image': 'url(' + postgraduate.img + ')' }"
        >
          <div class="teacher-text">
            <div class="teacher-name">
              <span id="text-name">{{ postgraduate.fullname }}</span>
            </div>
            <span id="text-bold">Посада:</span>
            <span> {{ postgraduate.position }}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="about-us-title">
      <span>Навчально - допоміжний персонал</span>
    </div>

    <div class="container">
      <div
        class="teacher"
        v-for="laboratoryAssistant in laboratoryAssistants"
        :key="laboratoryAssistant.id"
      >
        <div
          class="teacher-img"
          :style="{
            'background-image': 'url(' + laboratoryAssistant.img + ')',
          }"
        >
          <div class="teacher-text">
            <div class="teacher-name">
              <span id="text-name">{{ laboratoryAssistant.fullname }}</span>
            </div>
            <span id="text-bold">Посада:</span>
            <span> {{ laboratoryAssistant.position }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";

import tsavolyk from "../assets/About-us-img/Tsavolyk.jpg";
import kulina from "../assets/About-us-img/Kulina.jpg";
import ivasiev from "../assets/About-us-img/Ivasiev.jpg";
import yatskiv from "../assets/About-us-img/Yatskiv.jpg";
import davletova from "../assets/About-us-img/Davletova.jpg";
import fedishin from "../assets/About-us-img/Fedishin.jpg";
import kasiancuk from "../assets/About-us-img/Kasiancuk.jpg";
import yakymenko from "../assets/About-us-img/Yakymenko.jpg";

const { mapActions, mapGetters } = createNamespacedHelpers("about");

export default {
  name: "AboutUs",
  data: function() {
    return {
      teachers: [
        {
          fullname: "Яцків Василь Васильович",
          position: "завідувач кафедри кібербезпеки",
          degree: "доктор технічних наук",
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
          degree: "кандидат фіз.-мат. наук",
          AcademicStatus: "доцент",
          img: kasiancuk
        },

        {
          fullname: "Івасьєв Степан Володимирович",
          position: "старший викладач",
          AcademicStatus: "кандидат технічних наук",
          img: ivasiev
        },

        {
          fullname: "Цаволик Тарас Григорович",
          position: "старший викладач",
          AcademicStatus: "кандидат технічних наук",
          img: tsavolyk
        }
      ],
      postgraduates: [
        {
          fullname: "Кулина Сергій Васильович",
          position: "аспірант",
          img: kulina
        }
      ],

      laboratoryAssistants: [
        {
          fullname: "Давлетова Аліна Ярославівна",
          position: "старший лаборант",
          img: davletova
        },

        {
          fullname: "Федишин Ірина Ігорівна",
          position: "старший лаборант",
          img: fedishin
        }
      ],

      isLoading: true
    };
  },
  computed: {
    ...mapGetters([])
  },
  methods: {
    ...mapActions(["fetchPersons"]),

    async initialFetch() {
      await this.fetchPersons();
      this.isLoading = false;
    }
  },
  created() {
    this.initialFetch();
  }
};
</script>

<style lang="scss">
.information-about-cyber-security {
  width: 88%;
  margin: 0 auto;
  padding-bottom: 2vh;
}

#information-about-cyber-security-text {
  font-size: 20px;
  color: #6c6c6c;
  line-height: 30px;
}

.about-us-title {
  margin-left: -4px;
  text-align: left;
  font-size: 50px;
  font-weight: bold;
  color: #e4e4e4;
  padding-bottom: 1%;
}

.about-us-title-cyber-security {
  padding-top: 1%;
  font-size: 40px;
  text-align: center;
  color: #505050;
}

.container {
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  margin: 0 auto;

  .teacher {
    overflow: hidden;
    height: 480px;
    width: 350px;
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

@media screen and (max-width: 550px){
  .about-us-title-cyber-security {
  padding-top: 1%;
  font-size: 30px;
  text-align: center;
  color: #505050;
}


#information-about-cyber-security-text {
  font-size: 20px;
  color: #6c6c6c;
  line-height: 30px;
}

.about-us-title{
  font-size: 30px;
  padding:0px 15px 15px 15px;
  text-align: center;
}

.teacher{
  margin-bottom: 20px !important;
}

.about-us-title-cyber-security{
  margin-top: 15px;
  margin-bottom: 15px;
}


.teacher-text {
    
      padding: 15px 30px 15px 30px!important;


      span {
        color: #6c6c6c;
        font-size: 13px !important;
        line-height: 2.2vw;
      }

      #text-name{
        font-size: 16px !important;
      }
  }
}

</style>
