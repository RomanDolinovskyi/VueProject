<template>
  <div class="height-footer">
    <div class="active-tabs">
      <input type="radio" name="active_tabs" id="btn-1" class="btn-1" checked />
      <label for="btn-1" id="btn-one" class="btn">Бакалавр</label>

      <input type="radio" name="active_tabs" id="btn-2" class="btn-2" />
      <label for="btn-2" id="btn-two" class="btn">Магістратура</label>

      <input type="radio" name="active_tabs" id="btn-3" class="btn-3" />
      <label for="btn-3" id="btn-three" class="btn">Аспірантура</label>
      <div class="tabs-container">
        <div class="tab-1">
          <EntrantBakalavr></EntrantBakalavr>
        </div>

        <div class="tab-2">
          <EntrantMagistracy></EntrantMagistracy>
        </div>

        <div class="tab-3">
          <EntrantGraduateStudies></EntrantGraduateStudies>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EntrantBakalavr from "./../components/Entrant-components/Entrant-bakalavr";
import EntrantMagistracy from "./../components/Entrant-components/Entrant-magistracy";
import EntrantGraduateStudies from "./../components/Entrant-components/Entrant-graduate-studies";

export default {
  name: "Entrant",
  components: { EntrantBakalavr, EntrantMagistracy, EntrantGraduateStudies }
};
</script>

<style>
.height-footer {
  min-height: 94vh;
}

.active-tabs:before,
.active-tabs:after {
  clear: both;
  content: "";
  display: block;
  box-sizing: border-box;
}

.active-tabs {
  width: 90%;
  margin: 0 auto;
  position: relative;
}

.active-tabs input {
  opacity: 0;
  display: none;
  visibility: hidden;
}

.btn {
  font-weight: bold;
  color: #fff;
  cursor: pointer;
  display: block;
  float: left;
  font-family: "open sans";
  text-align: center;
  width: 25%;
  padding-top: 0.5%;
  padding-bottom: 0.5%;
  transition: all 0.4s;
}

#btn-one {
  background-color: #edbe3e;
  border-radius: 0 0 0 5px;
}

#btn-two {
  background-color: #999999;
}

#btn-three {
  background-color: #5c5c5c;
  border-radius: 0 0 5px 0;
}

.active-tabs input:checked + label {
  width: 50%;
}

.tabs-container {
  width: 100%;
  position: relative;
  float: left;
}

.tab-1,
.tab-2,
.tab-3 {
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  display: none;
  transition: all 0.8s;
}

.btn-1:checked ~ .tabs-container .tab-1,
.btn-2:checked ~ .tabs-container .tab-2,
.btn-3:checked ~ .tabs-container .tab-3 {
  position: relative;
  display: block;
  top: 0;
  left: 0;
  opacity: 1;
}

label {
  font-size: 1.2vw;
}

@media screen and (max-width: 800px) {
  label {
    font-size: 1.5vw;
  }
}

@media screen and (max-width: 550px) {
  label {
    font-size: 16px;
  }

  .active-tabs {
    width: 100%;
    margin: 0 auto;
    position: relative;
  }

  .btn {
    width: 100%;
  }

  .active-tabs input + label {
    width: 100%;
    height: 40px;
    padding-top: 8px;
  }

  .active-tabs input:checked + label {
    width: 100%;
    height: 60px;
    padding-top: 20px;
  }

  #btn-one {
    border-radius: 0px;
  }

  #btn-three {
    background-color: #5c5c5c;
    border-radius: 0px;
  }
}
</style>
