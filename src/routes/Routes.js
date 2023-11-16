    import { createRouter, createWebHistory } from 'vue-router';
    import HomePage from '../pages/Home.vue'
    import SignIn from '../pages/SignIn.vue'
    import DashboardComp from '../pages/Dashboard.vue'
    import FormPage from '../pages/Form.vue'

    const routes =[
        {path:'/',component:HomePage },
        {path:'/signin',component:SignIn },
        {path:'/DashboardComp',component:DashboardComp },
        {path:'/FormPage',component:FormPage },
    ]

    const routers = createRouter({
        history: createWebHistory(),
        routes
    })

    export default routers;