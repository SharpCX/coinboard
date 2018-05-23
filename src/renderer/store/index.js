import Vue from 'vue'
import Vuex from 'vuex'

import modules from './modules'
import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui';

Vue.use(Vuex)
Vue.use(ElementUI)

export default new Vuex.Store({
  modules,
  strict: process.env.NODE_ENV !== 'production'
})
