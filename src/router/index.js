import Vue from 'vue'
import VueRouter from 'vue-router'
import NotFound from '../views/NotFound.vue'
import SignIn from '../views/SignIn.vue'
import SignUp from '../views/SignUp.vue'
import AdminSignIn from '../views/AdminSignIn.vue'
import TweetMain from '../views/TweetMain.vue'
import ReplyList from '../views/TweetReplyList.vue'
import Userself from '../views/Userself.vue'
import UserselfLike from '../views/UserselfLike.vue'
import UserOther from '../views/UserOther.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'root',
    redirect: '/main'
  },
  {
    path: '/signin',
    name: 'sign-in',
    component: SignIn
  },
  {
    path: '/signup',
    name: 'sign-up',
    component: SignUp
  },
  {
    path: '/admin',
    exact: true,
    redirect: '/admin/twitter'
  },
  {
    path: '/admin/twitter',
    name: 'admin-twitter',
    component: () => import('../views/AdminTwitterPage.vue')
  },
  {
    path: '/admin/users',
    name: 'admin-users',
    component: () => import('../views/AdminUsersPage.vue')
  },
  {
    path: '/admin/signin',
    name: 'admin-sign-in',
    component: AdminSignIn
  },
  {
    path: '/main',
    name: 'main',
    component: TweetMain
  },
  {
    path: '/reply_list',
    name: 'reply-list',
    component: ReplyList
  },
  {
    path: '/user/self',
    name: 'user-self',
    component: Userself
  },
  {
    path: '/user/self/like',
    name: 'user-self-like',
    component: UserselfLike
  },
  {
    path: '/user/self/follower',
    name: 'user-self-follower',
    component: () => import('../views/UserselfFollower.vue')
  },
  {
    path: '/user/self/following',
    name: 'user-self-following',
    component: () => import('../views/UserselfFollowing.vue')
  },
  {
    path: '/user/:id',
    name: 'user-other',
    component: UserOther
  },
  {
    path: '*',
    name: 'not-found',
    component: NotFound
  }
]

const router = new VueRouter({
  routes
})

export default router