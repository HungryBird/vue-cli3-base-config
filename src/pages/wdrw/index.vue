<template>
    <div>
        我的任务
    </div>
</template>

<script>
export default {
    name: 'wdrw',
    data() {
        return {

        }
    },
    computed: {
        state() {
            const state = this.$route.query.state;
            return state
        },
    },
    methods: {
        // 
    },

}
</script>

<style>

</style>
