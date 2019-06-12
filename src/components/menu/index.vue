<template>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="home">
            主页
        </el-menu-item>
        <el-menu-item index="xmgl">
            项目管理
        </el-menu-item>
        <el-menu-item index="yygl">
            医院管理
        </el-menu-item>
        <el-menu-item index="yggl">
            员工管理
        </el-menu-item>
        <el-menu-item index="wdrw">
            我的任务
        </el-menu-item>
        <el-submenu index="sz">
            <template slot="title">设置</template>
            <el-menu-item index="xgmm">修改密码</el-menu-item>
            <el-menu-item index="tcdl">退出登录</el-menu-item>
        </el-submenu>
    </el-menu>
</template>

<script>
import { removeToken } from '@/util/util'

export default {
    props: {
        activeIndex: {
            type: String,
            default: 'home'
        },
    },
    data() {
        return {

        }
    },
    methods: {
        handleSelect(name) {
            if (name === 'tcdl') {
                removeToken();
                this.$router.replace('/login');
            }
            else if (name === 'xgmm') {
                // 
            }
            else if (name === 'home') {
                this.$router.replace('/');
            }
            else if (name !== 'sz') {
                this.$router.replace(`/${name}`);
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
