<template>
    <el-menu :default-active="value" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="dash">
            主页
        </el-menu-item>
        <el-menu-item v-for="pl in getUser.cd" :key="pl" :index="pl">
            {{ pl | f_cd }}
        </el-menu-item>
        <el-submenu index="sz">
            <template slot="title">设置</template>
            <el-menu-item index="xgmm">修改密码</el-menu-item>
            <el-menu-item index="tcdl">退出登录</el-menu-item>
        </el-submenu>
    </el-menu>
</template>

<script>
import { setSession, removeToken, removeSession, removeStore } from '@/util/util'
import { mapGetters } from 'vuex'

export default {
    props: {
        value: {
            type: String,
            default: 'dash',
        }
    },
    computed: {
        ...mapGetters([
            'getUser',
        ])
    },
    data() {
        return {
            // 
        }
    },
    methods: {
        handleSelect(name) {
            if (name !== 'tcdl' && name !== 'xgmm') {
                setSession('activeIndex', name);
                if (name === 'dash') {
                    this.$router.replace('/');
                }
                else {
                    this.$router.push(`/${name}`);
                }
                this.$emit('input', name);
                this.$emit('select', name);
            }
            else {
                if (name === 'tcdl') {
                    removeToken();
                    removeStore();
                    removeSession();
                    this.$router.replace('/login');
                }
                else {
                    // 
                }
            }
        },
    }
}
</script>

<style>
    a{
        text-decoration-line: none;
    }
</style>
