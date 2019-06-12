<template>
    <div>
        <Menu :activeIndex="activeIndex"></Menu>
        <div>
            <keep-alive>
                <router-view v-if="$route.meta.keepAlive" />
            </keep-alive>
            <router-view v-if="!$route.meta.keepAlive" />
        </div>
    </div>
</template>

<script>
import Menu from '@/components/menu/index'

export default {
    name: 'home',
    components: {
        Menu,
    },
    data() {
        return {
            activeIndex: 'home',
        }
    },
    methods: {
        // 
    }
}
</script>

<style>

</style>

