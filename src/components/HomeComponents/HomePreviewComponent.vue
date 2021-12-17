<template>
  <div id="home-preview">
    <h1><TextScrambleEffect>Кібербезпека</TextScrambleEffect></h1>
    <p>Факультет комп'ютерних інформаційних технологій</p>
  </div>
</template>

<script>
import TextScrambleEffect from "../../utils/TextScrambleEffect";

export default {
  name: "HomePreview",

  components: {
    TextScrambleEffect
  }
};
</script>

<style lang="scss">
#home-preview {
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 94vh;
  margin: 0;
  padding: 0;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url(./../../assets/Home/ezgif.com-video-to-gif.gif);
  background-position: center;
  background-size: cover;
  font-family: Helvetica;
  font-stretch: expanded;
  h1 {
    margin-top: 0;
    font-size: 7.2vw;
    color: #ffffff;
  }
  p {
    font-weight: bold;
    font-size: calc(12px + 1vw);
    color: #edbe3e;
    margin: 0;
  }
}

@media screen and (max-width: 550px){
#home-preview{
  h1{
    font-size: 48px;
    line-height: 65px;
  }
}
}

</style>
