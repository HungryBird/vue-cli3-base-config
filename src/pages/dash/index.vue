<template>
    <div class="dash">
        <h1>
            {{ chrono }}好，{{ user.yhxm }}
        </h1>
        <el-row :gutter="20">
            <el-col :span="12">
                <el-card class="box-card doing" shadow="hover">
                    <div slot="header" class="clearfix">
                        <span>进行中任务</span>
                    </div>
                    <h1>
                        {{ dTasks }}
                    </h1>
                </el-card>
            </el-col>
            <el-col :span="12">
                <el-card class="box-card wait" shadow="hover">
                    <div slot="header" class="clearfix">
                        <span>待处理任务</span>
                    </div>
                    <h1>
                        {{ wTasks }}
                    </h1>
                </el-card>
            </el-col>
        </el-row>
        
    </div>
</template>

<script>
import store from '@/store'
import { getChrono } from '@/util/util'
import { setInterval } from 'timers'
import dash from '@/api/dash'

export default {
    data() {
        return {
            user: store.getters.getUser,    // 用户信息
            chrono: '', // 时辰
            wTasks: 0,  // 待处理任务
            dTasks: 0,  // 进行中任务
        }
    },
    mounted() {
        this.setChrono();
        this.getTasks();
    },
    methods: {
        setChrono() {
            const self = this;
            setInterval(() => {
                const date = new Date();
                const hours = date.getHours();
                self.chrono = getChrono(hours);
            }, 1000);
        },
        getTasks() {
            dash.getTasks({}).then((res) => {
                if (res.errcode === 200) {
                    // 
                }
                else {
                    this.$message.error(res.message);
                }
            })
        }
    }
}
</script>

<style lang="scss">
    .dash{
        width: 1080px;
        .box-card{
            cursor: pointer;
            h1{
                text-align: center;
                font-size: 48px;
            }
        }
        .box-card.doing{
            background: rgba(255, 223, 37, 1);
        }
        .box-card.wait{
            background: rgba(54, 169, 206, 1);
        }
    }
</style>
