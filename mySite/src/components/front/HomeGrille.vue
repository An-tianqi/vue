<template>
    <div class="row">
        <article v-for="produit , index in articles" :key="index" class="col-4">
            <h2>{{ produit.pseudo }}</h2>
            <footer class="d-flex justify-content-between align-items-baseline mt-3">
                <p class="mb-0">prix : {{ produit.prix }}  €</p>
                <RouterLink :to="{name:'article' , params :{id : produit.id}}" class="btn btn-sm btn-outline-dark" >voir l'article</RouterLink>
            </footer>
        </article>
    </div>
</template>

<script setup>
    import CatalogueApi from '../../services/article';
    import { RouterLink } from "vue-router";
    import { ref } from "vue" ;
    let articles = ref([]);
    async function getArticles(){
        const api = new ArticleApi()
        const data = await api.getAll()
        articles.value = data ;
    }
    await getArticles();
</script>