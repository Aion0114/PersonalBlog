<template>
  <div id="main-project">
    <div id="main-area">
      <div id="myProject">
<!--        项目区域-->
        <div id="project-area">
          <div style="font-size: 1.6rem">我的项目</div>
<!--          项目列表-->
          <div id="project-list">
<!--            项目item-->
            <div class="project-list-item">
              <a title="" target="_blank">
                <div class="project-list-item-icon">

                </div>
                <div class="project-list-item-info">
                  <div class="project-list-item-name">个人博客</div>
                </div>
              </a>
            </div>
            <div class="project-list-item">
              <a title="" target="_blank">
                <div class="project-list-item-icon">

                </div>
                <div class="project-list-item-info">
                  <div class="project-list-item-name">基于二维码为载体的图像加密管理系统</div>
                </div>
              </a>
            </div>
            <div class="project-list-item">
              <a title="" target="_blank">
                <div class="project-list-item-icon">

                </div>
                <div class="project-list-item-info">
                  <div class="project-list-item-name">项目3</div>
                </div>
              </a>
            </div>
            <div class="project-list-item">
              <a title="" target="_blank">
                <div class="project-list-item-icon">

                </div>
                <div class="project-list-item-info">
                  <div class="project-list-item-name">项目4</div>
                </div>
              </a>
            </div>
            <div class="project-list-item">
              <a title="" target="_blank">
                <div class="project-list-item-icon">

                </div>
                <div class="project-list-item-info">
                  <div class="project-list-item-name">项目5</div>
                </div>
              </a>
            </div>
            <div class="project-list-item">
              <a title="" target="_blank">
                <div class="project-list-item-icon">

                </div>
                <div class="project-list-item-info">
                  <div class="project-list-item-name">项目6</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "projectView"
}
</script>

<style scoped>
#main-project {
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

#myProject {
  color: #4c4948;
  font-size: 16px;
  font-family: Alimama_ShuHeiTi_Bold,sans-serif;
  line-height: 2;
}

#project-area {
  margin-bottom: 20px;
}

#project-list {
  overflow: auto;
  margin-top: 15px;
  text-align: center;
  display: grid;
  /*grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));*/
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.project-list-item {
  background-color: white;
  position: relative;
  float: left;
  overflow: hidden;
  line-height: 17px;
  height: 200px;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #e3e8f7;
  transition: all .3s ease-in-out;
}

.project-list-item>a {
  color: #363636;
  text-decoration: none;
}

.project-list-item:hover {
  border-color: #425aef!important;
  background-color: #425aef!important;
  box-shadow: 0 2px 12px -3px #425aef!important;
}
</style>