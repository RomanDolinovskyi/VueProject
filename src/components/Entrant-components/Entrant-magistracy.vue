<template>
  <div>
    <div class="all-information-for-entrant">
      <div class="all-information-for-entrant-item">
        <span class="information-title">Денна</span><br />
        <span class="information-text">Форма навчання</span>
      </div>

      <div class="all-information-for-entrant-item">
        <span class="information-title">1,5 роки</span><br />
        <span class="information-text">Термін навчання</span>
      </div>

      <div class="all-information-for-entrant-item">
        <span class="information-title">Наявні</span><br />
        <span class="information-text">Бюджетні місця</span>
      </div>

      <div class="all-information-for-entrant-item">
        <span class="information-title">35 520</span
        ><span id="price-for-years"> (ціна за 1,5 роки навчання)</span>
        <br />
        <span class="information-text">Платне навчання</span>
      </div>
    </div>

    <div class="only-background-color">
      <div class="list-of-all-certificates-container">
        <span class="list-of-all-certificates">Перелік сертифікатів ЗНО</span>
      </div>

      <div class="list-of-certificates-magistracy">
        <div class="certificates">
          <div class="certificates-img">
            <i class="fas fa-award"></i>
          </div>
          <div class="certificates-text">
            <span>Іноземна мова</span>
          </div>
        </div>
      </div>

      <div class="list-of-documents-for-entry-container">
        <span class="List-of-documents-for-entry"
          >Перелік документів для вступу</span
        >
        <div class="list-of-documents">
          <div class="documents">
            <div class="documents-img">
              <i class="fas fa-file-alt documents-new-color"></i>
            </div>
            <div class="documents-text">
              <span>Атестат про повну загальну освіту</span>
            </div>
          </div>

          <div class="documents">
            <div class="documents-img">
              <i class="fas fa-file-alt documents-new-color"></i>
            </div>
            <div class="documents-text">
              <span>Диплом + додаток</span>
              <br />
              <span>(оригінал)</span>
            </div>
          </div>

          <div class="documents">
            <div class="documents-img">
              <i class="fas fa-file-alt documents-new-color"></i>
            </div>
            <div class="documents-text">
              <span>Сертифікат ЗНО</span>
              <br />
              <span>(оригінал)</span>
            </div>
          </div>

          <div class="documents">
            <div class="documents-img">
              <i class="fas fa-portrait documents-new-color"></i>
            </div>
            <div class="documents-text documents-text-size">
              <span>6 фото 3*4</span>
            </div>
          </div>

          <div class="documents">
            <div class="documents-img">
              <i class="fas fa-address-card documents-new-color"></i>
            </div>
            <div class="documents-text documents-text-size">
              <span>Копія паспорту</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--     
    <div class="we-are-studying-container">
      <div class="we-study-the-material-one">
        <div class="we-study-the-material-item">
          <span>1.Українська мова</span>
        </div>
        <div class="we-study-the-material-item">
          <span>2.Історія України</span>
        </div>
        <div class="we-study-the-material-item">
          <span>3.Іноземна мова</span>
        </div>
        <div class="we-study-the-material-item">
          <span>4.Фахова іноземна мова</span>
        </div>
        <div class="we-study-the-material-item">
          <span>5.Філософія</span>
        </div>
        <div class="we-study-the-material-item">
          <span>6.Політологія</span>
        </div>
        <div class="we-study-the-material-item">
          <span>7.Дискретна математика</span>
        </div>
        <div class="we-study-the-material-item">
          <span>8.Криптографія</span>
        </div>
        <div class="we-study-the-material-item">
          <span>9.Математичний аналіз</span>
        </div>
        <div class="we-study-the-material-item">
          <span>10.Фізика</span>
        </div>
        <div class="we-study-the-material-item">
          <span>11.Основи програмування</span>
        </div>
        <div class="we-study-the-material-item">
          <span>12.Алгоритми та структури даних</span>
        </div>
        <div class="we-study-the-material-item">
          <span>13.Операційні системи</span>
        </div>
        <div class="we-study-the-material-item">
          <span>14.Комп’ютерні мережі</span>
        </div>
        <div class="we-study-the-material-item">
          <span>15.Оцінка та управління ризиками</span>
        </div>
        <div class="we-study-the-material-item">
          <span>16.Кібернетична безпека</span>
        </div>
        <div class="we-study-the-material-item">
          <span>17.Технічні засоби захисту інформації</span>
        </div>
        <div class="we-study-the-material-item">
          <span>18.Безпека комп’ютерних мереж</span>
        </div>
        <div class="we-study-the-material-item">
          <span>19.Безпека Web ресурсів</span>
        </div>
        <div class="we-study-the-material-item">
          <span>20.Тестування на проникненн</span>
        </div>
        <div class="we-study-the-material-item">
          <span>21.Охорона праці та навколишнього середовища</span>
        </div>
        <div class="we-study-the-material-item">
          <span>22.Теорія ймовірності та математична статистика</span>
        </div>
        <div class="we-study-the-material-item">
          <span>23.Архітектура комп’ютерів та систем</span>
        </div>
        <div class="we-study-the-material-item">
          <span>24.Комплексні системи захисту інформації</span>
        </div>
        <div class="we-study-the-material-item">
          <span>25.Управління інформаційною безпекою</span>
        </div>
        <div class="we-study-the-material-item">
          <span>26.Лінійна алгебра та аналітична геометрія</span>
        </div>
        <div class="we-study-the-material-item">
          <span
            >27.Стандарти та нормативно-правове забезпечення кібербезпеки</span
          >
        </div> 
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  name: "EntrantMagistracy"
};
</script>

<style lang="scss">
.list-of-certificates-magistracy {
  width: 100%;
  display: flex;

  .certificates-one {
    margin-right: 35px;
  }

  .certificates {
    width: 300px;
    height: 100px;
    display: flex;
    align-items: center;
    border-radius: 5px;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
    padding: 10px 10px 10px 10px;

    .certificates-img i {
      color: #93e0aa;
      font-size: 30px;
      margin-top: -40px;
      position: absolute;
    }

    .certificates-text {
      width: 80%;
      margin: 0 auto;
      text-align: center;
      color: #6c6c6c;
      font-weight: bold;
    }

    .certificate-new-color {
      color: #e39f9f !important;
    }

    #certificates-physics {
      margin-top: -10px !important;

      #certificates-physics-fix-color-text {
        color: #8b8b8b !important;
      }
    }
  }
}

@media screen and (max-width: 530px) {
  .list-of-certificates-magistracy {
    .certificates {
      width: 80%;
      margin: auto;
    }
  }
}
</style>
