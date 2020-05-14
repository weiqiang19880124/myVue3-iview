import vue from 'vue'
import vuex from 'vuex'
import iot from './modules/iot'




vue.use(vuex)
export default new vuex.Store({
    modules:{
        iot
    }
})
