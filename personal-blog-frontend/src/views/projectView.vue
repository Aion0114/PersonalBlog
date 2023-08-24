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
                  <img src="../assets/Pokecoins.png" alt="个人博客">
                </div>
                <div class="project-list-item-info">
                  <div class="project-list-item-name">个人博客</div>
                  <div class="project-list-item-detail">每个人心中应该都有属于自己展示的舞台吧!</div>
                </div>
              </a>
            </div>
            <div class="project-list-item">
              <a title="" target="_blank">
                <div class="project-list-item-icon">
                  <img src="../assets/imageDecry.png" alt="个人博客">
                </div>
                <div class="project-list-item-info">
                  <div class="project-list-item-name">基于二维码为载体的图像加密管理系统</div>
                  <div class="project-list-item-detail">我的毕业设计!</div>
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
  height: 150px;
  padding: 20px;
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

.project-list-item-icon {
  float: left;
  width: 100px;
  height: 100px;
  transition: all .3s ease-out;
  margin: 5px 0 20px 0;
  border-radius: 50%;
  overflow: hidden;
}

.project-list-item-icon img {
  display: block;
  margin: 0 auto 20px;
  max-width: 100%;
  transition: filter 375ms ease-in .2s;
  object-fit: cover;
  max-height: 900px;
  width: 100%;
  height: 100%;
  border-style: none;
}

.project-list-item:hover .project-list-item-icon {
  width: 0;
  height: 0;
  margin-left: -10px;
}

.project-list-item-info {
  display: flex;
  flex-wrap: wrap;
  padding-left: 20px;
  padding-top: 15px;
  text-align: left;
  flex-direction: column;
}

.project-list-item-name {
  padding: 12px 0 16px 0;
  height: auto;
  line-height: 1;
  font-weight: 700;
  font-size: 1.1rem;
  color: #363636;
  overflow: hidden;
  text-overflow: ellipsis;
  /*white-space: nowrap;*/
}

.project-list-item:hover .project-list-item-name {
  color: #fff;
}

.project-list-item-detail {
  padding: 0;
  height: 35px;
  font-size: .93rem;
  opacity: .7;
  color: #363636;
  word-break: break-all;
  white-space: break-spaces;
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

.project-list-item:hover .project-list-item-detail {
  color: #fff;
}
</style>