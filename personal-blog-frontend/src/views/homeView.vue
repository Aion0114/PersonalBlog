<template>
  <div id="main">
    <div id="message-board">
      <div style="margin: 0 30px"><comment style="font-size: 22px"></comment></div>
      <div class="AlibabaBold" style="font-size: 20px">个人博客正在建设！</div>
      <div style="margin: 0 30px"><revocation style="font-size: 22px"></revocation></div>
    </div>
    <div id="main-back">
      <div id="main-left">
        <div id="heat-map">
          <get-heat-map></get-heat-map>
        </div>
      </div>
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
}

#main-right {
  width: 300px;
}
</style>