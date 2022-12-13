import { defineStore } from "pinia"
import { UserApi } from "../services/user"

export const useUserStore = defineStore("userStore" , {
    state : () => {
        return {
            user : {},
        }
    },
    actions : {
        add : async function(identifiant){
            const userApi = new UserApi();
            
            const verif = await userApi.existe(identifiant.email)
            
            console.log(verif , identifiant.email);

            if(!verif) return {message : "l'email est déjà utilisé"}

            const user = await userApi.create(identifiant)

            this.user = {
                email : user.email ,
                isLogged : true 
            } ; 

            return {message : "ok" } ;
        },
        login : function(identifiants){},
        logout : function(){}
    }

})