import { defineStore } from "pinia";

export const useUserStore = defineStore('UserStore', {
    // state() {
    //     return {
    //         user: 'wrj'
    //     }
    // }
    state: () => ({
        user: 'wrj'
    })
})