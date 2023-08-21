import { createRouter, createWebHashHistory } from 'vue-router'
import indexView from "@/views/indexView";
import homeView from "@/views/homeView";
import about from "@/views/about";
import projectView from "@/views/projectView";

const routes = [
    {
      path: '/',
      component: indexView,
      redirect: '/home',
      meta: {
        title: '冰块的个人博客(*^▽^*)'
      },
      children: [
        {
          path: 'home',
          component: homeView
        },
        {
          path: 'about',
          component: about
        },
        {
          path: 'project',
          component: projectView
        },
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
    document.title = '个人博客';
  }
});

export default router
