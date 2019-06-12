<template>
    <el-menu :default-active="value" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="dash">
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
import { setSession, removeToken, removeSession, removeStore } from '@/util/util'

export default {
    props: {
        value: {
            type: String,
            default: 'dash',
        }
    },
    data() {
        return {

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
