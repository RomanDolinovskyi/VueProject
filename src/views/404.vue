<template>
  <div>
    <div class="container-404">
      <div class="center-404">
        <div class="text-404">
          <span id="text-top-404">404</span>
          <br>
          <span id="text-bottom-404">This page is not available</span>
        </div>
        <div class="image-404"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "404",
};
</script>

<style lang="scss">
.container-404 {
  width: 100%;
  height: 94vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10%;

  .center-404 {
    display: flex;
    
    .text-404 {
      color: #505050;
      z-index: 1;
      border-radius: 5px;
      padding: 20px 30px 20px 30px;
      box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
      background-color: white;
      margin-right: -120px;

      #text-top-404{
        font-size: 80px;
        font-weight: bold;
  
      }

      #text-bottom-404{
        font-size: 30px;
        font-weight: bold;
        color: #838383;
      }
    }

    .image-404 {
      z-index: 0;
      background-color: antiquewhite;
      width: 300px;
      height: 300px;
      background-image: url(../assets/404/gif-404.gif);
      border-radius: 50%;
      margin-top: -200px;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }
  }
}
</style>
