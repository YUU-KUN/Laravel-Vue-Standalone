import AllProduct from '../js/components/AllProduct.vue'
import CreateProduct from '../js/components/CreateProduct.vue'
import EditProduct from '../js/components/EditProduct.vue'

export const routes = [
    {
        name: 'home',
        path: '/',
        component: AllProduct
    },
    {
        name: 'create',
        path: '/create',
        component: CreateProduct
    },
    {
        name: 'edit',
        path: '/edit/:id',
        component: EditProduct
    }
];
