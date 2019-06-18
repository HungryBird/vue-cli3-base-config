<template>
    <div v-if="value">
        <div class="sub-navbar">
            <h1 class="fl">
                {{ data.xmmc }}
            </h1>
            <el-button class="fr" @click="goBack" :loading="btnLoading">
                返回
            </el-button>
        </div>
        <div class="sub-navbar">
            <el-button type="primary" class="fl">
                导出
            </el-button>
            <el-alert :title="warningText"  class="fl warn" type="warning" :closable="false" show-icon>
            </el-alert>
        </div>
        <div class="sub-navbar">
            <el-form class="fl" label-width="80" :inline="true">
                <el-form-item>
                    <el-input v-model="searchForm.xmmc" placeholder="设备名称、出厂编号、设备编号、器械分类、生产厂家、所属科室、附件名称..." style="width: 480px;">
                        <i slot="suffix" class="el-input__icon el-icon-close" @click="searchForm.xmmc = ''"></i>
                        <i slot="prefix" class="el-input__icon el-icon-search slot-button"></i>
                    </el-input>
                </el-form-item>
                <el-form-item label="设备类型">
                    <el-select v-model="searchForm.form.sblx">
                        <el-option v-for="os in options.sblx" :key="os.value" :value="os.value" :label="os.label">
                            {{ os.label }}
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="设备状态">
                    <el-select v-model="searchForm.form.sbzt">
                        <el-option v-for="os in options.sbzt" :key="os.value" :value="os.value" :label="os.label">
                            {{ os.label }}
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="附件状态">
                    <el-select v-model="searchForm.form.fjzt">
                        <el-option v-for="os in options.fjzt" :key="os.value" :value="os.value" :label="os.label">
                            {{ os.label }}
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="盘点人">
                    <el-select v-model="searchForm.form.pdr">
                        <el-option v-for="os in options.pdr" :key="os.id" :value="os.id" :label="os.yhxm">
                            {{ os.yhxm }}
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="search" :loading="table.loading">
                        搜索
                    </el-button>
                </el-form-item>
            </el-form>
        </div>
        <el-table :data="table.data">
            <el-table-column v-for="tc in table.columns" :prop="tc.prop" :key="tc.label" :label="tc.label">
                <template slot-scope="scope">
                    <div v-if="tc.prop === 'action'">
                        <el-button type="text">
                            删除
                        </el-button>
                    </div>
                    <div v-else-if="tc.prop === 'img'">
                        <img v-if="scope.row[tc.prop]" :src="scope.row[tc.prop]" />
                    </div>
                    <div v-else-if="tc.prop === 'fjzt'">
                        {{ scope.row[tc.prop] | f_fjzt }}
                    </div>
                    <div v-else>
                        {{ scope.row[tc.prop] }}
                    </div>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination
            class="pagination-fix"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="searchForm.page"
            :page-sizes="[10, 20, 30, 40]"
            :page-size="searchForm.pagesize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="table.total">
        </el-pagination>
    </div>
</template>

<script>
const timer = 200;
import { XM } from '@/enumeration'
import xmgl from '@/api/xmgl'
import paginationMixin from '@/mixins/pagination'

export default {
    props: {
        data: Object,
        value: {
            default: false,
        }
    },
    mixins: [paginationMixin],
    watch: {
        data: {
            handler() {
                this.init();
            },
            deep: true,
        }
    },
    data() {
        return {
            btnLoading: false,
            warningText: '注意，请不要将手动改动过的Excel文件导入设备管理系统！会有生成错误数据的风险。',
            searchForm: {
                form: {
                    xmmc: '',
                    sblx: '',
                    sbzt: '',
                    fjzt: '',
                    pdr: '',
                }     
            },
            options: {
                sblx: XM.SBLX_A,
                sbzt: XM.SBZT,
                fjzt: XM.FJZT_A,
                pdr: [],
            },
            table: {
                columns: [
                    {
                        label: '操作',
                        prop: 'action'
                    },
                    {
                        label: '盘点人',
                        prop: 'fzr'
                    },
                    {
                        label: '出厂编号',
                        prop: 'csbh'
                    },
                    {
                        label: '设备名称',
                        prop: 'sbmc'
                    },
                    {
                        label: '设备编号',
                        prop: 'sbbh'
                    },
                    {
                        label: '设备类型',
                        prop: 'sblx'
                    },
                    {
                        label: '器械分类',
                        prop: 'qxfl'
                    },
                    {
                        label: '设备型号',
                        prop: 'sbxh'
                    },
                    {
                        label: 'loraID',
                        prop: 'loraid'
                    },
                    {
                        label: '生产厂家',
                        prop: 'sccj'
                    },
                    {
                        label: '所属科室',
                        prop: 'ssks'
                    },
                    {
                        label: '出厂日期',
                        prop: 'ccrq'
                    },
                    {
                        label: '购入日期',
                        prop: 'grrq'
                    },
                    {
                        label: '启用日期',
                        prop: 'qyrq'
                    },
                    {
                        label: '设备状态',
                        prop: 'sbzt'
                    },
                    {
                        label: '设备原值',
                        prop: 'sbyz'
                    },
                    {
                        label: '图片',
                        prop: 'img'
                    },
                    {
                        label: '附件名称',
                        prop: 'fjmc'
                    },
                    {
                        label: '附件状态',
                        prop: 'fjzt'
                    },
                    {
                        label: '附件数量',
                        prop: 'fjsl'
                    },
                ]
            }
        }
    },
    methods: {
        goBack() {
            const self = this;
            this.btnLoading = true;
            setTimeout(() => {
                this.$emit('go-back', false);
                this.$emit('input', false);
                self.btnLoading = false;
            }, timer)
        },
        init() {    // 初始化数据
            this.GetPdSbList(); // 获取盘点人
        },
        search() {  // 搜索列表
            this.GetPdSbList();
        },
        GetPdSbList() {
            this.searchForm.loading = true;
            xmgl.GetPdSbList(this.searchForm.form).then((res) => {
                if (res.code === 1) {
                    console.log('res: ', res)
                    this.table.data = res.data.sblb;
                    this.table.total = res.data.total;
                }
            })
        }
    }
}
</script>

<style>
    .warn{
        width: auto !important;
        margin-left: 20px;
    }
</style>
