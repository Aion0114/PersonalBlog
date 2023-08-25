<template>
  <Particles id="tsparticles" class="backcanvas" :particlesInit="particlesInit"
             :particlesLoaded="particlesLoaded" :options="options" />
  <div id="back">
    <el-container>
      <!--      顶部导航栏-->
      <el-header id="nav">
        <!--        左栏-->
        <span id="nav-info">
          <div id="head-menu">
            <head-menu style="cursor: pointer; margin-top: 6px"></head-menu>
          </div>
          <div class="AlibabaBold" id="name" @click="jump.jumpToHome()">Aion</div>
        </span>
        <!--        中栏-->
        <span id="nav-middle" class="AlibabaBold">
          <div class="middle-items">
              <div class="middle-item">
                <div>
                  <wenku style="margin-right: 10px"></wenku>
                <span>文库</span>
                </div>
              </div>
              <div class="middle-item" @click="jump.jumpToProject()">
                <daima style="margin-right: 10px"></daima>
                <span>项目</span>
              </div>
              <div class="middle-item">
                <life style="margin-right: 10px"></life>
                <span>生活</span>
                <ul class="middle-item-child">
                  <li>
                    <a @click="jump.jumpToPhoto()">
                      <camera-alt class="inline-icon"></camera-alt>
                      <span>相册</span>
                    </a>
                  </li>
                  <li></li>
                  <li></li>
                </ul>
              </div>
              <div class="middle-item">
                <benzhan style="margin-right: 5px"></benzhan>
                <span>本站</span>
              </div>
          </div>
        </span>
        <!--        右栏-->
        <span id="nav-right">
          <div><sousuo></sousuo></div>
          <div><share></share></div>
          <div><gengduo></gengduo></div>
        </span>
      </el-header>
      <!--      中心区域-->
      <el-main id="main">
        <router-view></router-view>
      </el-main>
      <!--      底部-->
      <el-footer id="foot">111</el-footer>
    </el-container>
  </div>
</template>

<script>
import HeadMenu from "@/components/icon/head-menu";
import Wenku from "@/components/icon/wenku";
import Daima from "@/components/icon/daima";
import Life from "@/components/icon/life";
import Benzhan from "@/components/icon/benzhan";
import Sousuo from "@/components/icon/sousuo";
import Share from "@/components/icon/share";
import Gengduo from "@/components/icon/gengduo";
import {reactive} from "vue";
import {options} from "@/assets/js/particleOptions";
import {loadFull} from 'tsparticles';
import jumpMethod from "@/router/jumpMethod";
import CameraAlt from "@/components/icon/camera-alt";

export default {
  name: "indexView",
  components: {CameraAlt, Gengduo, Share, Sousuo, Benzhan, Life, Daima, Wenku, HeadMenu},
  setup() {

    const particlesInit = async (engine) => {
      await loadFull(engine)
    }

    const particlesLoaded = async (container) => {
      console.log('Particles container loaded', container)
    }

    const jump = jumpMethod.setup();

    return {
      particlesInit,
      particlesLoaded,
      options,
      jump,
    }
  }
}
</script>

<style scoped>

#back {
  /*background: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);*/
}

.backcanvas{
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  /*transform: translate(-50%,-50%);*/
  z-index: -1;
}

#nav {
  position: fixed;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 60px;
  background: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);
  /*border-dashed: 1px dashed #e3e8f7;*/
  box-shadow: 1px 1px #e3e8f7;
  padding: 0 42px;
  z-index: 99;
}

#nav-info {
  display: flex;
  flex-wrap: nowrap;
}

#main {
  display: flex;
  /*align-items: center;*/
  padding: 0;
  margin-top: 70px;

}

#foot {
  display: flex;
  align-items: center;
  padding: 0;
}

#head-menu {
  font-size: 24px;
  position: relative;
  display: flex;
  padding: 0 8px;
  border-radius: 6px;
  transition: all 0.5s;
}

#head-menu:hover {
  background-color: rgb(66,90,239);
  transition: all 0.5s;
}

#head-menu:hover .svg11 {
  fill: white;
  transition: all 0.5s;
}

#head-menu .svg11 {
  transition: all 0.5s;
}

#name {
  display: flex;
  height: 36px;
  font-size: 22px;
  padding: 0 8px;
  font-weight: bold;
  vertical-align: middle;
  line-height: 36px;
  border-radius: 6px;
  transition: all 0.5s;
}

#name:hover {
  background-color: rgb(66,90,239);
  transition: all 0.5s;
  color: white;
  cursor: pointer;
}

#nav-middle {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.middle-items {
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 40px;
}

.middle-items > div {
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  padding: 0 10px;
  border-radius: 6px;
  transition: all 0.5s;
}

.middle-items > div:hover {
  background: rgb(66,90,239);
  transition: all 0.5s;
  color: white;
  fill: white;
}

.middle-items div {
  font-size: 20px;
}

#nav-right {
  display: flex;
  align-items: center;
  font-size: 28px;
}

#nav-right > div {
  display: inline;
  padding: 0 4px;
  margin: 0 4px;
  cursor: pointer;
  overflow: hidden;
  border-radius: 6px;
  transition: all 0.5s;
}

#nav-right > div:hover {
  background-color: rgb(66,90,239);
  transition: all 0.5s;
  color: white;
}

@keyframes sub_menus {
  0% {
    opacity: 0;
    transform: translateY(10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.middle-item-child {
  position: absolute;
  display: none;
  margin-top: 8px;
  padding: 0;
  border-radius: 5px;
  background-color: #f6f8fa;
  box-shadow: 0 5px 20px -4px rgba(0, 0, 0, .5);
  animation: sub_menus .3s .1s ease both;
  white-space: nowrap;
  top: 40px;
  left: -22px;
}

.middle-item-child:before {
  position: absolute;
  top: -20px;
  left: 0;
  width: 100%;
  height: 20px;
  content: '';
}

.middle-item:hover .middle-item-child {
  display: block;
}

.middle-item-child li {
  list-style: none;
  border-radius: 5px;
  transition: all .3s;
  display: inline-flex;
  margin: 0 6px;
  padding: 6px 0;
}

.middle-item-child li a {
  color: #363636;
  text-shadow: none;
  padding: 10px 8px 0 calc(8px + 0.3rem);
  border-radius: 8px;
  transition: background .35s ease-in-out, color .2s ease-in-out;
  font-weight: 700;
  display: inline-block;
  width: 100%;
  letter-spacing: normal;
  height: 40px;
}

.middle-item-child li:hover a {
  background: #425aef;
  color: #fff!important;
}

@keyframes tada {
  0% {
    transform: scaleX(1);
  }
  10%, 20% {
    transform: scale3d(.9, .9, .9) rotate(-3deg);
  }
  30%, 50%, 70%, 90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate(3deg);
  }
  40%, 60%, 80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate(-3deg);
  }
  100% {
    transform: scaleX(1);
  }
}

.middle-item-child li:hover .inline-icon {
  transition: all .05s ease-in;
  fill: #fff;
  animation: tada, 2s, linear, infinite;
}

.middle-item-child li a span {
  margin-left: 5px;
}
</style>