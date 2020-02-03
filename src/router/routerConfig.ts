import Home from "../views/Home";
import MyHome from '../views/children/Myhome';
import Release from '../views/children/release';
import Massage from '../views/children/message';
import My from '../views/children/my';

export default {
    routes:[{
        path:'/index',
        component:Home,
        children:[{
            path:'/index/home',
            component:MyHome
        },{
            path:'/index/release',
            component:Release
        },{
            path:'/index/massage',
            component:Massage
        },{
            path:'/index/my',
            component:My
        }]
    },{
        path:'/',
        redirect:'/index/home'
    }]
}