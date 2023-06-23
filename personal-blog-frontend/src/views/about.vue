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
        <div style="padding-left: 30px">Name: <span>林昊</span></div>
        <div style="padding-left: 30px">Age: <span>22</span></div>
        <div style="padding-left: 30px">City: <span>广东肇庆</span></div>
        <div style="padding-left: 30px">Company: <span>LESSO</span></div>
      </div>
    </div>
    <div></div>
  </div>
</template>

<script>
export default {
  name: "about"
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
</style>