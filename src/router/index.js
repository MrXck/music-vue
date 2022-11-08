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
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('../views/Admin.vue'),
    redirect: '/admin/user',
    children: [
      {
        path: 'song',
        name: 'AdminSong',
        component: () => import('../views/AdminSong.vue')
      },
      {
        path: 'singer',
        name: 'AdminSinger',
        component: () => import('../views/AdminSinger.vue'),
      },
      {
        path: 'songList',
        name: 'AdminSongList',
        component: () => import('../views/AdminSongList.vue'),
      },
      {
        path: 'user',
        name: 'AdminUser',
        component: () => import('../views/AdminUser.vue'),
      },
      {
        path: 'singerUpdate',
        name: 'AdminSingerUpdate',
        component: () => import('../views/AdminSingerUpdate.vue'),
      },
      {
        path: 'songUpdate',
        name: 'AdminSongUpdate',
        component: () => import('../views/AdminSongUpdate.vue'),
      },
      {
        path: 'songListUpdate',
        name: 'AdminSongListUpdate',
        component: () => import('../views/AdminSongListUpdate.vue'),
      },
      {
        path: 'detail',
        name: 'AdminDetail',
        component: () => import('../views/AdminDetail.vue'),
      },
    ]
  },
  {
    path: '/adminLogin',
    name: 'AdminLogin',
    component: () => import('../views/AdminLogin.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
