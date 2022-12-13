import { createRouter, createWebHistory } from "vue-router"
import Home from "./components/front/Home.vue";
import Identification from "./components/front/Identification.vue";

export const router = createRouter({
    history : createWebHistory(),
    routes : [
        {path : "/" , name : "home" , component: Home},
        {path : "/article/:id" , name : "produit" , component: HomeGrill},
        {path : "/identification" , name : "identification" , component: Identification},
        {path : "/formLogin" , name : "formLogin" , component: FormLogin}
    ]
})