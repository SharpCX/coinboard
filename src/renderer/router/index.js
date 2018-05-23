import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/show',
      name: 'show-page',
      component: require('@/components/ShowPage').default
    },
    {
      path: '/',
      name: 'main-page',
      component: require('@/components/MainPage').default,
      beforeEnter: (to, from, next)=>{
        if(from.name!=='show-page'){
          console.log("enter")
          next({path:"/show"});
          return;
        }
        next();
      },
    },
  ]
})

export default router;
