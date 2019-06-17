<template>
    <div>
        <div class="sub-navbar">
            <el-form class="fl" label-width="80" :inline="true">
                <el-form-item>
                    <el-input v-model="searchForm.xmmc" placeholder="项目名称、工作地点、甲方联系人、联系电话、已指派工作人员..." style="width: 480px;">
                        <i slot="suffix" class="el-input__icon el-icon-close"></i>
                        <i slot="prefix" class="el-input__icon el-icon-search slot-button" @click="searchForm.xmmc = ''"></i>
                    </el-input>
                </el-form-item>
                <el-form-item label="状态：">
                    <el-select v-model="searchForm.state">
                        <el-option>
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="search">
                        搜索
                    </el-button>
                </el-form-item>
            </el-form>
            <el-button class="fr">
                新增
            </el-button>
        </div>
        <el-table style="width: 100%;">
            <el-table-column v-for="tc in table.columns" :key="tc.prop" :prop="tc.prop" :label="tc.label">
                <template slot-scope="scope">
                    <div v-if="scope.row.prop==='action'">
                        <el-button-group>
                            <el-button @click="edit">
                                编辑
                            </el-button>
                            <el-button @click="assign">
                                指派
                            </el-button>
                            <el-button v-if="scope.row.xmzt == '0'" @click="jump(scope.row.xmzt)">
                                处理
                            </el-button>
                            <el-button v-if="scope.row.xmzt == '1'" @click="jump(scope.row.xmzt)">
                                查看
                            </el-button>
                            <el-button type="danger" @click="remove(scope.row.xmid)">
                                删除
                            </el-button>
                        </el-button-group>
                    </div>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination
            class="pagination-fix"
            @size-change="search"
            @current-change="search"
            :current-page="searchForm.page"
            :page-sizes="[10, 20, 30, 40]"
            :page-size="searchForm.pagesize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="table.total">
        </el-pagination>
    </div>
</template>

<script>
export default {
    data() {
        return {
            searchForm: {
                xmmc: '',
                state: '',
                page: 1,
                pagesize: 10,
            },
            table: {
                data: [],
                total: 100,
                columns: [
                    {
                        label: '项目名称',
                        prop: 'xmmc'
                    },
                    {
                        label: '医院',
                        prop: 'yymc'
                    },
                    {
                        label: '状态',
                        prop: 'xmzt'
                    },
                    {
                        label: '工作地点',
                        prop: 'gzdd'
                    },
                    {
                        label: '工作时间',
                        prop: 'gzsj'
                    },
                    {
                        label: '甲方联系人',
                        prop: 'jflxr'
                    },
                    {
                        label: '联系电话',
                        prop: 'jflxrdh'
                    },
                    {
                        label: '创建时间',
                        prop: 'cjsj',
                    },
                    {
                        label: '说明',
                        prop: 'xmsm'
                    },
                    {
                        label: '已指派工作人员',
                        prop: 'pdryxm',
                    },
                    {
                        label: '操作',
                        prop: 'action'
                    }
                ]
            },
            option: {

            },
        }
    },
    mounted() {

    },
    methods: {
        search() {
            // 
        },
        edit() {    // 编辑
            // 
        },
        assign() {  // 指派
            //
        },
        jump(xmzt) {    // 跳转
            // 
        },
        remove(xmid) {  // 删除
            // 
        }
    }
}
</script>

<style>

</style>
