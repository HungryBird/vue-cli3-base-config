<template>
    <div class="dash">
        <h1>
            {{ chrono }}好，{{ user.yhxm }}
        </h1>
        <el-row :gutter="20">
            <el-col :span="24/rw.length" v-for="item in rw" :key="item.state">
                <el-card :class="{'box-card': true, 'doing': item.state === '2', 'wait': item.state === '1'}" @click.native="(e) => jump(item.state)">
                    <div slot="header" class="clearfix">
                        <span>{{ item.label }}</span>
                    </div>
                    <h1>
                        {{ item.value }}
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
            rw: [],
        }
    },
    mounted() {
        this.setChrono();   // 获取时刻
        this.GetDbsx();    // 获取任务数量
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
        GetDbsx() {
            const yhid = this.$store.getters.getUser.yhid;
            dash.GetDbsx({yhid}).then((res) => {
                if (res.code === 1) {
                    this.rw = res.data;
                }
                else {
                    this.$message.error(res.message);
                }
            })
        },
        jump(state) {   // 前往我的任务，并且筛选进行中或者待开始任务
            this.$router.push({
                path: '/wdrw',
                query: {
                    state,
                }
            })
            this.$emit('jump', 'wdrw');
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
