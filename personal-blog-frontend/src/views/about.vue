<template>
  <div id="main-about">
<!--    头像-->
    <div>
      <div id="about-avatar"></div>
    </div>
<!--    个人签名-->
    <p class="AlibabaBold" id="personal-saying">在努力变得更好!</p>
<!--    第一行-->
    <div class="about-box AlibabaBold">
<!--      第一行左盒子-->
      <div class="about-box-person">
        <div class="title-first">Hello,欢迎来到我的博客</div>
        <div style="margin-top: 5px; margin-bottom: 10px">
          我是
          <span class="title-my-name">林昊</span>
        </div>
        <div>是一名 后端开发者、系统工程师</div>
      </div>
<!--      第一行右盒子-->
      <div class="about-box-flag">
        <div style="color: #4c4948; font-size: 14px; margin-bottom: 15px">2023 flag</div>
        <div class="flag-box">
          <div>出去旅游一次</div>
          <div>攒钱买下z24-120/f4镜头</div>
          <div>随缘脱单</div>
          <div>努力转正</div>
        </div>
      </div>
    </div>
<!--    第二行-->
    <div class="about-box" style="align-items: center">
<!--      第二行左盒子-->
      <div class="about-box-flag" style="width: 40%;">
        <div class="AlibabaThin" style="color: #4c4948;
                                        font-size: 14px;
                                        font-weight: 600;
                                        line-height: 1.5;
                                        margin-bottom: 10px;">喜欢的一句话</div>
        <div class="AlibabaBold" style="font-size: 32px; color: #4c4948; line-height: 1.3;">
          <div>把活着的每一天<br/>看作生命的最后一天</div>
          <div style="text-align: right; font-size: 24px; color:#fa7671;">——海伦·凯勒</div>
        </div>
      </div>
<!--      第二行右盒子-->
      <div class="about-box-flag AlibabaBold" style="width: 59%; line-height: 1.55; font-size: 18px">
        <div style="font-size: 14px; margin-bottom: 12px">个人信息</div>
        <div class="Second-little-box"><el-icon :size="20" color="#409EFF" style="margin-right: 5px"><UserFilled /></el-icon>Name:
          <span style="padding-left: 10px">林昊</span>
        </div>
        <div class="Second-little-box"><el-icon :size="20" color="#F8DA5E" style="margin-right: 5px"><UserFilled /></el-icon>Age:
          <span style="padding-left: 10px">22</span>
        </div>
        <div class="Second-little-box"><el-icon :size="20" color="#008C8D" style="margin-right: 5px"><location /></el-icon>City:
          <span style="padding-left: 10px">广东肇庆</span>
        </div>
        <div class="Second-little-box"><el-icon :size="20" color="#696AAD" style="margin-right: 5px"><Suitcase /></el-icon>Company:
          <span style="padding-left: 10px">LESSO</span>
        </div>
      </div>
    </div>
<!--    第三行-->
    <div class="helloWorld" @mousemove="helloworldmove">
      <div class="cursor"></div>
      <div class="shapes">
        <div class="shape shape-1"></div>
        <div class="shape shape-2"></div>
        <div class="shape shape-3"></div>
      </div>
      <div class="content">
        <h1 class="AlibabaBold">Hello World!</h1>
      </div>
    </div>
<!--    第四行-->
    <div class="about-box">
<!--      左盒子-->
      <div class="skills">
        <div class="card-content">
          <div class="skill-tips">技能</div>
          <span class="skill-title">开启创造力</span>
          <div style="position: relative">
            <div style="display: flex; transform: rotate(0); transition: .3s">
              <div class="tag-group">
                <div class="tag-group-icon-pair">
                  <div class="tag-group-icon" style="background: #333">
                    <img src="../assets/frameIcon/java.png" title="Java" alt="无法显示"
                         style="width: 60%;
                                margin: 0 auto!important;
                                border-style: none;">
                  </div>
                  <div class="tag-group-icon sec" style="background: #b8f0ae">
                    <img src="../assets/frameIcon/dubbo.png" title="Dubbo" alt="无法显示"
                         style="width: 70%;
                         margin: 0 auto!important;
                         border-style: none;">
                  </div>
                </div>
                <div class="tag-group-icon-pair">
                  <div class="tag-group-icon" style="background: #faf3c3">
                    <img src="../assets/frameIcon/spring.png" title="Spring" alt="无法显示"
                         style="width: 60%;
                         margin: 0 auto!important;
                         border-style: none;">
                  </div>
                  <div class="tag-group-icon sec" style="background: #81CAC3">
                    <img src="../assets/frameIcon/Zookeeper.png" title="Zookeeper" alt="无法显示"
                         style="width: 60%;
                         margin: 0 auto!important;
                         border-style: none;">
                  </div>
                </div>
                <div class="tag-group-icon-pair">
                  <div class="tag-group-icon" style="background: #b8f0ae">
                    <img src="../assets/frameIcon/mybatis.png" title="Mybatis" alt="无法显示"
                         style="width: 70%;
                         margin: 0 auto!important;
                         border-style: none;">
                  </div>
                  <div class="tag-group-icon sec" style="background: #333">
                    <img src="../assets/frameIcon/rabbitmq.png" title="RabbitMQ" alt="无法显示"
                         style="width: 60%;
                         margin: 0 auto!important;
                         border-style: none;">
                  </div>
                </div>
                <div class="tag-group-icon-pair">
                  <div class="tag-group-icon" style="background: #faf3c3">
                    <img src="../assets/frameIcon/maven.png" title="Maven" alt="无法显示"
                         style="width: 70%;
                         margin: 0 auto!important;
                         border-style: none;">
                  </div>
                  <div class="tag-group-icon sec" style="background: #37bef0">
                    <img src="../assets/frameIcon/mysql.png" title="Mysql" alt="无法显示"
                         style="width: 60%;
                         margin: 0 auto!important;
                         border-style: none;">
                  </div>
                </div>
                <div class="tag-group-icon-pair">
                  <div class="tag-group-icon" style="background: #333">
                    <img src="../assets/frameIcon/tomcat.png" title="Tomcat" alt="无法显示"
                         style="width: 60%;
                         margin: 0 auto!important;
                         border-style: none;">
                  </div>
                  <div class="tag-group-icon sec" style="background: #333">
                    <img src="../assets/frameIcon/redis.png" title="Redis" alt="无法显示"
                         style="width: 60%;
                         margin: 0 auto!important;
                         border-style: none;">
                  </div>
                </div>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {onMounted} from "vue";
import gsap from "gsap";

export default {
  name: "about",
  setup() {

    const helloworldmove = function (e) {
      const o = e.offsetX
          , s = e.offsetY;
      gsap.set(".cursor", {
        x: o,
        y: s
      });
      gsap.to(".shape", {
        x: o,
        y: s,
        stagger: -.1
      })
    }

    return {
      helloworldmove,
    }
  }
}
</script>

<style scoped>
p {
  margin-top: 20px;
  margin-bottom: 20px;
  font-weight: 700;
  font-size:18px;
}

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

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

#about-avatar {
  border-radius: 50%;
  height: 180px;
  width: 180px;
  background-image: url("../assets/xxx.jpeg");
  background-repeat: no-repeat;
  background-size: cover;
  margin: 0 auto;
}

#personal-saying {
  text-align: center;
}

.about-box {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  margin-top: 1rem;
}

.about-box-person {
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
  background: linear-gradient(120deg,#5b27ff 0,#00d4ff 100%);
  background-size: 200%;
  overflow: hidden;
  animation: gradient 15s ease infinite;
  width: 57%;
  border-radius: 12px;
  border: 1px solid #e3e8f7;
  position: relative;
  padding: 1rem 2rem;
}

.title-first {
  text-align: left;
  background: rgba(255,255,255,0.25);
  font-size: 12px;
  padding: 2px 10px;
  border-radius: 4px;
  width: 160px;
  line-height: 2;
}

.title-my-name {
  font-size: 30px;
  line-height: 1.5;
  font-family: "Microsoft YaHei";
  margin-left: 10px;
}

.about-box-flag {
  width: 42%;
  border-radius: 12px;
  background: white;
  border: 1px solid #e3e8f7;
  position: relative;
  padding: 1rem 2rem;
  overflow: hidden;
}

.flag-box > div {
  display: flex;
  align-items: center;
  line-height: 2;
  text-indent: 1em;
  font-size: 16px;
}

.Second-little-box {
  padding-left: 20px;
  color: #4c4948;
  display: flex;
  align-items: center;
}

.helloWorld {
  margin: 20px auto;
  border-radius: 12px;
  background: #fff;
  box-shadow: 0 8px 16px -4px rgba(44,45,48,0.047);
  position: relative;
  overflow: hidden;
  user-select: none;
  line-height: 2;
  color: #4c4948;
}

.cursor {
  position: absolute;
  background: #2128bd;
  width: 20px;
  height: 20px;
  margin: -10px 0 0 -10px;
  border-radius: 50%;
  will-change: transform;
  user-select: none;
  pointer-events: none;
  z-index: 3;
}

.shapes {
  position: relative;
  height: 315px;
  width: 100%;
  background: #2128bd;
  overflow: hidden;
}

.shapes > div {
  will-change: transform;
  position: absolute;
  border-radius: 50%;
}

.shape-1 {
  background: #005ffe;
  width: 650px;
  height: 650px;
  margin: -325px 0 0 -325px;

}

.shape-2 {
  background: #ffe5e3;
  width: 440px;
  height: 440px;
  margin: -220px 0 0 -220px;
}

.shape-3 {
  background: #ffcc57;
  width: 270px;
  height: 270px;
  margin: -135px 0 0 -135px;
}

.content {
  top: 0;
  left: 0;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 315px;
  width: 100%;
  background: #fff;
  mix-blend-mode: screen;
}

.content h1 {
  color: #000;
  margin: 0;
  text-align: center;
  vertical-align: baseline;
  line-height: 1;
  font-size: calc((.09 * 100vw + 40px));
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.skills {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  width: 50%;
  min-height: 400px;
  border-radius: 12px;
  background: #fff;
  border: 1px solid #e3e8f7;
  position: relative;
  padding: 1rem 2rem;
  overflow: hidden;
}

.skill-tips {
  color: #4c4948;
  opacity: 0.8;
  font-size: .6rem;
  margin-bottom: 0.5rem;
}

.skill-title {
  margin-bottom: 0.5rem;
  font-size: 36px;
  font-weight: 700;
  line-height: 1;
}

@keyframes rowup {
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(0);
  }
}

.tag-group {
  margin-top: 30px;
  display: flex;
  flex-wrap: nowrap;
  animation: rowup 60s linear infinite;
}

.tag-group-icon-pair {
  margin-left: 1rem;
}

.tag-group-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 66px;
  font-weight: 700;
  width: 120px;
  height: 120px;
  border-radius: 30px;
}

.tag-group-icon.sec {
  margin-top: 1rem;
  transform: translate(-60px);
}
</style>