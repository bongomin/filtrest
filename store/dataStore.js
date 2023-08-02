import { defineStore } from 'pinia';

export const useDataStore = defineStore('dataStore', {
    state: () => ({
        allPosts: [],
        isLoading: true,
    }),

    actions: {
        setData(posts) {
            this.allPosts = posts;
            this.isLoading = false;
        },
    },
});