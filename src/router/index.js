import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard'
import Starter from '../views/starters/Starter'
import Login from '../views/Login'
import Register from '../views/Register'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'login',
        component: Login
    },
    {
        path: '/register',
        name: 'register',
        component: Register
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard
    },
    {
        path: '/demo',
        name: 'demo',
        component: Starter
    }
]

const router = new VueRouter({
    mode: 'history',
    base: 'http://localhost:8080',
    routes
    })
    
export default router