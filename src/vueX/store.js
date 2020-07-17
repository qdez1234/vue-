import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import toolslist from './modules/tools'
export default new Vuex.Store(
    {
        modules: {
          toolslist
        }
    }
)


