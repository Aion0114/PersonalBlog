<template>
  <div id="main">
    <div id="message-board">
      <div style="margin: 0 30px"><comment style="font-size: 22px"></comment></div>
      <div class="AlibabaBold" style="font-size: 20px">个人博客正在建设！</div>
      <div style="margin: 0 30px"><revocation style="font-size: 22px"></revocation></div>
    </div>
    <div id="main-back">
<!--      核心左栏-->
      <div id="main-left">
        <div id="heat-map">
          <get-heat-map></get-heat-map>
          <div id="countVisits" class="AlibabaBold">
            <div style="border-top: 1px solid #ddd">
              <span class="countVisits-first-span">一年内访问</span>
              <span class="countVisits-second-span">6389</span>
              <span class="countVisits-third-span">2023-01-01 - 2023-12-31</span>
            </div>
            <div style="border: 1px solid #ddd; border-bottom: none">
              <span class="countVisits-first-span">本月内访问</span>
              <span class="countVisits-second-span">755</span>
              <span class="countVisits-third-span">2023-06-01 - 2023-6-30</span>
            </div>
            <div style="border-top: 1px solid #ddd">
              <span class="countVisits-first-span">今日内访问</span>
              <span class="countVisits-second-span">82</span>
              <span class="countVisits-third-span">2023-06-02 - 2023-06-02</span>
            </div>
          </div>
        </div>
      </div>
<!--      核心右栏-->
      <div id="main-right">
<!--        个人信息简介-->
        <div class="AlibabaBold" id="Personal-profile">
          <div id="profile-avatar-name">
            <div id="avatar"></div>
            <div style="margin-left: 18px">
              <div id="profile-name-welcome">Hello,欢迎,我是</div>
              <div id="profile-name-text">林昊</div>
            </div>
          </div>
          <div style="line-height: 1.4; margin-top: 20px">记录生活的点点滴滴</div>
          <div style="line-height: 1.4; margin-top: 10px">好好打工ଘ(੭ˊᵕˋ)੭<br/>好好干饭ღ( ´･ᴗ･ )<br/>做好自己✧ (＞ ＜)☆<br/>厚积薄发⁽⁽ଘ( ˊᵕˋ )ଓ⁾⁾</div>
          <div style="display: flex;
                      align-items: center;
                      justify-content: space-between;
                      margin-top: 50px">
            <a href="https://github.com/Aion0114" target="_blank">
                <div id="icon-github"></div>
            </a>
            <div>
              <el-button class="AlibabaBold" color="#626aef" round icon="Right" plain style="transition: all 0.35s; height: 40px; font-size: 18px">了解更多</el-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Comment from "@/components/icon/comment";
import Revocation from "@/components/icon/revocation";
import GetHeatMap from "@/components/getHeatMap";
export default {
  name: "homeView",
  components: {GetHeatMap, Revocation, Comment},
  setup() {
   const staticdata = {

   }
   return {
     staticdata,
   }
  }
}
</script>

<style scoped>
#main {
  width: 100%;
  max-width: 1370px;
  margin: 0 auto;
  flex-direction: column;
}

#message-board {
  display: flex;
  margin: 10px auto;
  width: 100%;
  height: 50px;
  background-color: white;
  border-radius: 8px;
  border: lavender solid 1px;
  transition: all 0.35s linear;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
}

#message-board:hover {
  cursor: pointer;
  border: #333333 solid 1px;
  box-shadow: 0px 0px 6px 1px rgba(0, 0, 0, 0.3);
}

#main-back {
  display: flex;
  flex: 1 auto;
  margin: 0 auto;
  width: 100%;
  max-width: 1370px;
  animation: bottom-top 1s;
}

#main-left {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  align-content: flex-start;
  flex-wrap: wrap;
  width: calc(100% - 300px);
  transition: all 0.3s;
}

#heat-map {
  width: 100%;
  background-color: white;
  border-radius: 8px;
  padding: 10px;
}

#countVisits {
  display: flex;
  width: 100%;
}

.countVisits-first-span {
  font-size: 11px;
  font-weight: 300;
}

.countVisits-second-span {
  display: block;
  font-size: 24px;
  font-weight: 300;
  line-height: 1.3em;
  padding: 6px 0;
}

.countVisits-third-span {
  font-size: 11px;
  font-weight: 300;
}

#countVisits>div {
  padding: 10px;
  flex: 1;
  text-align: center;
  vertical-align: top;
  transition: all 0.3s;
}

#countVisits>div:hover {
  color: #425aef;
  transition: all 0.3s;
}

#main-right {
  width: 300px;
  padding-left: 15px;
}

#Personal-profile {
  background: linear-gradient(to right, #6a11cb 0%, #2575fc 100%);
  border-radius: 8px;
  color: #fff;
  padding: 20px 24px;
}

#profile-avatar-name {
  display: flex;
  align-items: center;
}

#profile-name-welcome {
  text-align: left;
  background: rgba(255,255,255,.25);
  font-size: 12px;
  padding: 6px 12px;
  border-radius: 4px;
}

#profile-name-text {
  font-weight: 700;
  font-size: 30px;
  line-height: 1.5;
  font-family: "Microsoft YaHei";
}

#avatar {
  border-radius: 50%;
  height: 80px;
  width: 80px;
  background-image: url("../assets/xxx.jpeg");
  background-repeat: no-repeat;
  background-size: cover;
}

#icon-github {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: url('../assets/github.png') no-repeat;
  background-size: cover;
}

</style>