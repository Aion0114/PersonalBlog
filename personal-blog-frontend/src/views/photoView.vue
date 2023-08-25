<template>
  <div id="main-photo">
    <div id="main-area">
<!--      上部大格子-->
      <div id="top">
        <div class="top-content">

        </div>
        <canvas id="top-canvas" width="1370" height="988" style="position:absolute; bottom: 0"></canvas>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "photoView"
}
</script>

<style scoped>
#main-photo {
  width: 100%;
  max-width: 1370px;
  margin: 0 auto;
  padding: 10px 15px 40px;
  flex: 1 auto;
  animation: bottom-top 1s;
  display: flex;
}

@keyframes bottom-top {
  0% {
    margin-top: 50px;
    opacity: 0;
  }
  100% {
    margin-top: 0;
    opacity: 1;
  }
}

#main-area {
  background: 0 0;
  border: none;
  padding: 0;
  align-self: flex-start;
  border-radius: 8px;
  width: 100%!important;
  transition: all .3s;
}

#top {
  width: 100%;
  height: 19rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: #ff38a6;
  background-position: left 28%;
  background-repeat: no-repeat;
  background-size: 400%;
  color: #fff;
  overflow: hidden;
  margin-top: 0;
  background-image: linear-gradient(-45deg, #ff38a6, #0f4667, #2a6973 150%, #67044d);
  animation: gradient 15s ease infinite;
  border-radius: 24px;
  border: 1px solid #e3e8f7;
  box-shadow: 0 8px 16px -4px rgba(44,45,48,0.047);
  position: relative;
  padding: 1rem 2rem;
}
</style>