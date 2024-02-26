import { defineStore } from "pinia";

export const useUserStore = defineStore('UserStore', {
    // state() {
    //     return {
    //         user: 'wrj'
    //     }
    // }
    state: () => ({
        user: "w rj"
    }),
    getters: {
        firstName() {
            return this.user.split(' ')[0]
        }
    }
})