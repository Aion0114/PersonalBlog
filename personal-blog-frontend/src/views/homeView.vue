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
      <div id="main-right"></div>
    </div>
  </div>
</template>

<script>
import Comment from "@/components/icon/comment";
import Revocation from "@/components/icon/revocation";
import GetHeatMap from "@/components/getHeatMap";
export default {
  name: "homeView",
  components: {GetHeatMap, Revocation, Comment}
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
}
</style>