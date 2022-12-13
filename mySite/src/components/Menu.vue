<template>
    <div class="bg-primary">
        <nav class="navbar navbar-expand navbar-dark container">
            <RouterLink :to="{name : 'home'}" class="navbar-brand">MySiteWork</RouterLink>
            <ul class="navbar-nav">
                <li class="nav-item">
                    <RouterLink :to="{name:'home'}" class="nav-link">Accueil</RouterLink>
                </li>
            </ul>
            <ul class="navbar-nav ms-auto">
                <li class="nav-item d-flex align-items-baseline">
                    <RouterLink :to="{name:'formLogin'}" class="nav-link">créer un compte</RouterLink>
                </li>
                <li class="nav-item d-flex align-items-baseline">
                    <RouterLink :to="{name:'profil'}" class="nav-link">Profil</RouterLink>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script setup>
    import { RouterLink } from "vue-router"
</script>