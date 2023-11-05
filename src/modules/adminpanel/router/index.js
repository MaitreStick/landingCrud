

export default {

    name: 'adminpanel',
    component: () => import(/* webpackChunkName: "adminpanel" */ '@/modules/adminpanel/layouts/AdminLayout.vue'),
    children: [

    ]
}