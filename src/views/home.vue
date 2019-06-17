<template>
    <el-container style="height: 100%;">
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

export default {
    name: 'home',
    components: {
        Menu,
    },
    data() {
        return {
            // activeIndex: store.getters.getActiveIndex,
        }
    },
    computed: {
        activeIndex: {
            get() {
                return this.$store.getters.getActiveIndex;
            },
            set(val) {
                this.$store.commit('setActiveIndex', val);
            }
        }
    },
    methods: {
        // 
    },
}
</script>

<style lang="scss" scoped>
    .el-container{
        .el-header{
            padding: 0;
        }
    }
</style>


