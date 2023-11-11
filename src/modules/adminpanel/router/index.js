

export default {

    name: 'adminpanel',
    component: () => import(/* webpackChunkName: "adminpanel" */ '@/modules/adminpanel/layouts/AdminLayout.vue'),
    children: [
        {
            path: '',
            name: 'adminview',
            component: () => import(/* webpackChunkName: "adminpanel" */ '@/modules/adminpanel/views/AdminView.vue'),
        }
    ]
}