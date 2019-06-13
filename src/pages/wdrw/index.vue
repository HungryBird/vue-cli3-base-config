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
        status() {
            const status = this.$route.query.status;
            return status
        },
    },
    methods: {
        // 
    },

}
</script>

<style>

</style>
