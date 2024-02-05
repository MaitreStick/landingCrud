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
            path: ':id',
            name: 'editview',
            component: () => import(/* webpackChunkName: "edit" */ '@/modules/adminpanel/views/EditView.vue'),
            props: true
        },
        {
            path: 'create',
            name: 'createentry',
            component: () => import(/* webpackChunkName: "create" */ '@/modules/adminpanel/views/CreateEntryView.vue'),
        },
    ]
}