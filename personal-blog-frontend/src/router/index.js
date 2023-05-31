import { createRouter, createWebHashHistory } from 'vue-router'
import indexView from "@/views/indexView";
import homeView from "@/views/homeView";

const routes = [
    {
      path: '/',
      component: indexView,
      redirect: '/home',
      children: [
        {
          path: 'home',
          component: homeView,
          meta: {
            title: '冰块的个人博客(*^▽^*)'
          }
        }
      ]
    },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach(async (to) => {
  if (to.meta.title) { // 判断是否有标题
    document.title = to.meta.title;
  }
  else {
    document.title = '图像加密系统';
  }
});

export default router
