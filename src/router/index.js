import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import checkout from '../views/checkout.vue'
import account from '../views/account.vue'
import account_history from '../views/account_history.vue'
import calculateSize from '../views/calculate_size.vue'
import calculateShirt from '../views/calculateShirt.vue'
import calculate_size_quickSize from '../views/calculate_size_quickSize'
import constructor from '../views/constructor'
import contact_us from '../views/contact_us'
import copySizeShirt from '../views/copy_size_shirt'
import emptyCart from '../views/empty_cart'
import empty_wishlist from '../views/empty_wishlist'
import forgotPassword from '../views/forgotPassword'
import forgotPassConfirm  from '../views/forgotPasswordConfirm'
import how_toSelect_custom_shirt from '../views/how_toSelect_custom_shirt'
import howWeCalculateSize from '../views/howWeCalculateSize'
import ourShirts from '../views/ourShirts'
import shop from '../views/shop'
import shopItem from '../views/shopItem'
import signInReg from '../views/signInReg'
import vaucher from '../views/vaucher'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/account',
    name: 'account',
    component: account
  },
  {
    path: '/constructor',
    name: 'constructor',
    component: constructor
  },
  {
    path: '/emptywishlist',
    name: 'emptywishlist',
    component: empty_wishlist
  },
  {
    path: '/forgotPassword',
    name: 'forgotPass',
    component: forgotPassword
  },
  {
    path: '/forgotPasswordConfirmation',
    name: 'forgotPassConfirm',
    component: forgotPassConfirm
  },
  {
    path: '/ourShirts',
    name: 'ourShirts',
    component: ourShirts
  },
  {
    path: '/howToSelectCustomShirt',
    name: 'howToSelectCustomShirt',
    component: how_toSelect_custom_shirt
  },
  {
    path: '/contactUs',
    name: 'contactUs',
    component: contact_us
  },
  {
    path: '/signIn',
    name: 'signIn',
    component: signInReg
  },
  {
    path: '/vaucher',
    name: 'vaucher',
    component: vaucher
  },
  {
    path: '/calculate_size',
    name: 'calculate_size',
    component: calculateSize
  },
  {
    path: '/shop',
    name: 'shop',
    component: shop
  },
  {
    path: '/shopItem',
    name: 'shopItem',
    component: shopItem
  },
  {
    path: '/emptyCart',
    name: 'emptyCart',
    component: emptyCart
  },
  {
    path: '/copySizeShirt',
    name: 'copy_size_shirt',
    component: copySizeShirt
  },
  {
    path: '/calculate_size_quickSize',
    name: 'calculate_size',
    component: calculate_size_quickSize
  },
  {
    path: '/account_history',
    name: 'account_history',
    component: account_history
  },
  {
    path: '/calculateShirt',
    name: 'calculate_shirt',
    component: calculateShirt
  },
  {
    path: '/howWeCalculateSize',
    name: 'howWeCalculateSize',
    component: howWeCalculateSize
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: checkout
  },
  
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
