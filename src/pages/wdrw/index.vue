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
            const status = this.$router.query.status;
            console.log('status: ', status);
            return status
        }
    },
    methods: {

    },

}
</script>

<style>

</style>
