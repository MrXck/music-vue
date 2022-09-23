import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../components/Menu.vue'),
    redirect: '/discovery',
    children: [
      {
        path: 'discovery',
        name: 'Discovery',
        component: () => import('../views/Discovery.vue')
      },
      {
        path: '/songList/:id',
        name: 'SongList',
        component: () => import('../views/SongList.vue'),
      },
      {
        path: '/myLoveMusic',
        name: 'MyLoveMusic',
        component: () => import('../views/MyLoveMusic.vue'),
      },
      {
        path: '/searchResult',
        name: 'SearchResult',
        component: () => import('../views/SearchResult.vue'),
      },
      {
        path: '/userDetail',
        name: 'UserDetail',
        component: () => import('../views/UserDetail.vue')
      },
      {
        path: '/singerDetail/:id',
        name: 'SingerDetail',
        component: () => import('../views/SingerDetail.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
