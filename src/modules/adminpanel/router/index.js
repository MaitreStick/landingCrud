

export default {

    name: 'adminpanel',
    component: () => import(/* webpackChunkName: "adminpanel" */ '@/modules/adminpanel/layouts/AdminLayout.vue'),
    children: [
        {
            path: '',
            name: 'listview',
            component: () => import(/* webpackChunkName: "listview" */ '@/modules/adminpanel/views/ListView.vue')
        },
        {
            path: 'edit',
            name: 'editview',
            component: () => import(/* webpackChunkName: "edit" */ '@/modules/adminpanel/views/EditView.vue')
        },
    ]
}