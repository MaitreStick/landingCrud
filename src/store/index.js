import { createStore } from 'vuex'

import adminModule from "../modules/adminpanel/store/adminModule";

const store = createStore({
    modules: {
        adminModule
    }
})



export default store

