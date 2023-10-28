import { createRouter, createWebHistory } from "vue-router"

const routes = [
    { path: '/', component: () => import('./components/People/Index.vue'), name: 'people.index' },
    { path: '/create', component: () => import('./components/People/Create.vue'), name: 'people.create' },
    { path: '/:id/edit', component: () => import('./components/People/Edit.vue'), name: 'people.edit' },
    { path: '/:id', component: () => import('./components/People/Show.vue'), name: 'people.show' },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router