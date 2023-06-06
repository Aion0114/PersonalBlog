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
          <div class="AlibabaBold" id="name">Aion</div>
        </span>
        <!--        中栏-->
        <span id="nav-middle" class="AlibabaBold">
          <div class="middle-items">
              <div>
                <wenku style="margin-right: 10px"></wenku>
                <span>文库</span>
              </div>
              <div>
                <daima style="margin-right: 10px"></daima>
                <span>项目</span>
              </div>
              <div>
                <life style="margin-right: 10px"></life>
                <span>生活</span>
              </div>
              <div>
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

export default {
  name: "indexView",
  components: {Gengduo, Share, Sousuo, Benzhan, Life, Daima, Wenku, HeadMenu},
  setup() {

    const particlesInit = async (engine) => {
      await loadFull(engine)
    }

    const particlesLoaded = async (container) => {
      console.log('Particles container loaded', container)
    }

    return {
      particlesInit,
      particlesLoaded,
      options,
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
</style>