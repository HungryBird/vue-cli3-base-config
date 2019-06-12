<template>
    <el-container>
        <el-header>
            <Menu v-model="activeIndex"></Menu>
        </el-header>
        <el-main>
            <keep-alive>
                <router-view v-if="$route.meta.keepAlive" />
            </keep-alive>
            <router-view v-if="!$route.meta.keepAlive" />
        </el-main>
    </el-container>
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

