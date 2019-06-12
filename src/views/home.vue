<template>
    <div>
        <Menu v-model="activeIndex"></Menu>
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
import { getSession } from '@/util/util'

export default {
    name: 'home',
    components: {
        Menu,
    },
    data() {
        return {
            activeIndex: getSession('activeIndex'),
        }
    },
    methods: {
        // 
    }
}
</script>

<style>

</style>

