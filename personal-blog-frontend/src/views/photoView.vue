<template>
  <div id="main-photo">
    <div id="main-area">
<!--      上部大格子-->
      <div id="top">
        <div class="top-content AlibabaBold">
          <div class="top-tips">相册</div>
          <span class="top-title">这里是我的相册哦😯</span>
          <div class="top-text">
            <div class="top-text-tips">每一张照片都是一次美好的回忆。</div>
          </div>
          <div class="top-button-group">
            <a class="top-button" @click="jump.jumpToAbout()">
              <share_reply class="top-button-icon" style="font-size: 1.5rem; margin-right: 8px"></share_reply>
              <span class="top-button-text">关于我</span>
            </a>
          </div>
        </div>
        <canvas id="top-canvas" width="1370" height="988" style="position:absolute; bottom: 0"></canvas>
      </div>
    </div>
  </div>
</template>

<script>
import {onMounted} from "vue";
import jumpMethod from "@/router/jumpMethod";
import Share_reply from "@/components/icon/share_reply";

export default {
  name: "photoView",
  components: {Share_reply},
  setup() {
    let canvas = undefined;
    let ctx = undefined;
    const bubbles = [];
    const jump = jumpMethod.setup();

    function Bubble() {
      var _this = this;
      (function () {
        _this.pos = {};
        init();
      })();
      function init() {
        _this.pos.x = Math.random() * 1370;
        _this.pos.y = 988 + Math.random() * 100;
        _this.alpha = 0.1 + Math.random() * 0.5; //气泡透明度
        _this.alpha_change = 0.0002 + Math.random() * 0.0005; //气泡透明度变化速度
        _this.scale = 0.2 + Math.random() * 0.8; //气泡大小
        _this.scale_change = Math.random() * 0.002; //气泡大小变化速度
        _this.speed = 0.1 + Math.random() * 0.4; //气泡上升速度
      }
      //气泡
      this.draw = function () {
        if (_this.alpha <= 0) {
          init();
        }
        _this.pos.y -= _this.speed;
        _this.alpha -= _this.alpha_change;
        _this.scale += _this.scale_change;
        ctx.beginPath();
        ctx.arc(_this.pos.x, _this.pos.y, _this.scale * 10, 0, 2 * Math.PI, false);
        ctx.fillStyle = "rgba(255,255,255," + _this.alpha + ")";
        ctx.fill();
      };
    }

    function animate() {
      ctx.clearRect(0, 0, 1370, 988);
      for (var i in bubbles) {
        bubbles[i].draw();
      }
      requestAnimationFrame(animate);
    }

    onMounted(e => {
      canvas = document.getElementById("top-canvas");
      ctx = canvas.getContext("2d");
      const num = 1370 * 0.04; //气泡数量
      for (var i = 0; i < num; i++) {
        var c = new Bubble();
        bubbles.push(c);
      }
      animate();
    })

    return {
      animate,
      Bubble,
      canvas,
      ctx,
      bubbles,
      jump,
    }
  }
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

.top-content {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 2;
  display: flex;
  flex-direction: column;
  padding: 1rem 2rem;
}

.top-tips {
  opacity: 0.8;
  font-size: 0.6rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.top-title {
  margin-bottom: 0.5rem;
  font-size: 36px;
  font-weight: 700;
  line-height: 1;
}

.top-text {
  margin-top: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.top-text-tips {

}

.top-button-group {
  position: absolute;
  bottom: 1.5rem;
  right: 2rem;
}

.top-button {
  height: 40px;
  width: 140px;
  border-radius: 20px;
  justify-content: center;
  background: #fff;
  color: #4c4948;
  display: flex;
  align-items: center;
  transition: 0.3s;
  cursor: pointer;
  border-bottom: 0 !important;
  box-shadow: 0 0 12px 4px rgba(0,0,0,0.05);
}

.top-button:hover {
  background: #ff38a6;
  color: #fff;
  border-radius: 20px !important;
}

.top-button-text {

}

.top-button-icon {

}

.top-button:hover .top-button-icon {
  transition: 0.1s ease-in;
  fill: #fff;
}
</style>