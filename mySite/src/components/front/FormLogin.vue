<template>
    <form @submit.prevent="submit">
        <div class="mb-3">
            <label for="email">email</label>
            <input type="email" @focus="show = false" class="form-control" id="email" v-model="email" placeholder="votre@email.fr">
        </div>
        <div class="mb-3">
            <label for="password">password</label>
            <input type="password" @focus="show = false" class="form-control" id="password" v-model="password" placeholder="password">
        </div>
        <div class="mb-3">
            <input type="submit" :class="classBtn">
        </div>
        <div class="alert alert-danger" v-if="show">
            <div v-for="message in messages">{{ message }}</div>
        </div>
    </form>
</template>

<script setup>
        import {ref , defineProps , computed} from "vue";
        import {useUserStore} from "../../stores/userStore"
        import Joi from "joi";
        import {useRouter} from "vue-router"
        const email = ref("")
        const password = ref("")
        let show = ref(false)
        let messages = ref({})
        let router = useRouter()
        const props = defineProps({ btn : String , action : String})
        const classBtn = computed(() => {
            return `btn btn-${props.btn}`;
        })
        async function submit (){
            const validationIdentifiant = Joi.object({
                email : Joi.string().email({ tlds: { allow: false } }).required(),
                password:Joi.string().trim().min(5).max(255).required()
            })
            const identifiants = {
                email : email.value,
                password : password.value
            }
            const { error } = validationIdentifiant.validate(identifiants , {abortEarly : false})
            if(error) {
                show.value = true ;
                const details = []
                for(let er of error.details){
                    details.push(er.message)
                }
                messages.value = details;
                return ;
            }
            let userStore = useUserStore()
            if(props.action === "creer"){
                // cr??er un compte
                const reponse = await userStore.add(identifiants)
                if(reponse.message && reponse.message === "ok"){
                    router.push("/checkout")
                }
                console.log(reponse);
            }else if(props.action === "connecter") {
                userStore.login(identifiants)
            }
        }
</script>