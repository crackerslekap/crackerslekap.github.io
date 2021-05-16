import {createRouter, createWebHistory} from 'vue-router';
import Info from '../views/Info';
import Landing from '../views/Landing';

const routes = [
    {
        path: '/',
        name: 'Landing',
        component: Landing
    },
    {
        path: '/info',
        name: 'Info',
        component: Info
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes 
})

export default router