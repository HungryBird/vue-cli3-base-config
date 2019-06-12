<template>
    <div>
        您好{{ user.yhxm }}
    </div>
</template>

<script>
import store from '@/store'

export default {
    data() {
        return {
            user: store.getters.getUser,
        }
    },
    mounted() {
        // console.log('store: ', store);
    }
}
</script>

<style>

</style>
