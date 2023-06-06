<template>
  <div id="main-about">
    <div>
      <div id="about-avatar"></div>
    </div>
  </div>
  <p class="AlibabaBold" id="personal-saying">在努力变得更好!</p>
</template>

<script>
export default {
  name: "about"
}
</script>

<style scoped>
#main-about {
  width: 100%;
  max-width: 1370px;
  margin: 0 auto;
  padding: 10px 15px 40px;
  flex: 1 auto;
  animation: bottom-top 1s;
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

#about-avatar {
  border-radius: 50%;
  height: 180px;
  width: 180px;
  background-image: url("../assets/xxx.jpeg");
  background-repeat: no-repeat;
  background-size: cover;
}

#personal-saying {
  text-align: center;
}
</style>