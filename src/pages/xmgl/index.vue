<template>
    <div>
        <div v-if="show">
            <div class="sub-navbar">
                <el-form class="fl" label-width="80" :inline="true">
                    <el-form-item>
                        <el-input v-model="searchForm.xmmc" placeholder="项目名称、工作地点、甲方联系人、联系电话、已指派工作人员..." style="width: 480px;">
                            <i slot="suffix" class="el-input__icon el-icon-close" @click="searchForm.xmmc = ''"></i>
                            <i slot="prefix" class="el-input__icon el-icon-search slot-button"></i>
                        </el-input>
                    </el-form-item>
                    <el-form-item label="状态：">
                        <el-select v-model="searchForm.state">
                            <el-option v-for="os in options.state" :key="os.value" :value="os.value" :label="os.label">
                                {{ os.label }}
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="search" :loading="table.loading">
                            搜索
                        </el-button>
                    </el-form-item>
                </el-form>
                <el-button class="fr" @click="edit('add')">
                    新增
                </el-button>
            </div>
            <el-table style="width: 100%;" :data="table.data" v-loading="table.tableLoading">
                <el-table-column v-for="tc in table.columns" :key="tc.prop" :prop="tc.prop" :label="tc.label">
                    <template slot-scope="scope">
                        <div v-if="tc.prop==='action'">
                            <el-button @click="edit('edit', scope.row.xmid)" size="mini" type="text">
                                编辑
                            </el-button>
                            <el-button @click="assign(scope.row.xmid, scope.row.pdryid)" size="mini" type="text">
                                指派
                            </el-button>
                            <el-button v-if="scope.row.xmzt == '0'" @click="handle(scope.row)" size="mini" type="text">
                                处理
                            </el-button>
                            <el-button v-if="scope.row.xmzt == '1'" @click="see(scope.row)" size="mini" type="text">
                                查看
                            </el-button>
                            <el-button @click="remove(scope.row.xmid)" size="mini" type="text">
                                删除
                            </el-button>
                        </div>
                        <div v-else-if="tc.prop === 'gzsj'">
                            <span>
                                {{ scope.row.gzkssj }}
                            </span>
                            至
                            <span>
                                {{ scope.row.gzjssj }}
                            </span>
                        </div>
                        <div v-else-if="tc.prop === 'xmzt'">
                            {{ scope.row[tc.prop] == 1 ? '已完成' : '未完成' }}
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
        <see :data="seeForm.form" v-model="seeForm.visible" @go-back="showBase">
        </see>
        <!-- <div v-else-if="show === 'handle'">
        </div> -->
        <!-- 指派 -->
        <el-dialog title="指派工作人员" :visible.sync="assignForm.visible">
            <el-form class="sub-navbar" ref="assignSearch" :inline="true">
                <el-form-item>
                    <el-input v-model="assignForm.searchForm.yhxm" style="width: 180px;">
                        <i slot="prefix" class="el-input__icon el-icon-search slot-button"></i>
                    </el-input>
                </el-form-item>
                <el-form-item label="无任务时期：">
                    <el-date-picker type="date" placeholder="选择日期" v-model="assignForm.searchForm.wrwkssj" style="width: 140px;"></el-date-picker>
                    <span>
                        -
                    </span>
                    <el-date-picker type="date" placeholder="选择时间" v-model="assignForm.searchForm.wrwjssj" style="width: 140px;"></el-date-picker>
                </el-form-item>
                <el-button :loading="assignForm.loading" type="primary" @click="GetDropSelectList">
                    筛选
                </el-button>
            </el-form>
            <el-table :data="assignForm.table.data" max-height="250" ref="assignTable" @selection-change="assignTableChange">
                <el-table-column type="selection" with="55" :selectable="assignCheckSelectable"></el-table-column>
                <el-table-column label="姓名" prop="yhxm"></el-table-column>
                <el-table-column label="电话" prop="yhdh"></el-table-column>
                <el-table-column label="未完成项目" prop="wwxm"></el-table-column>
            </el-table>
            <div slot="footer" class="dialog-footer">
                <el-button @click="assignForm.visible = false">取 消</el-button>
                <el-button type="primary" @click="EditXm('zp')" :loading="assignForm.saveLoading">保 存</el-button>
            </div>
        </el-dialog>
        <!-- 添加编辑 -->
        <el-dialog title="项目信息" :visible.sync="editForm.visible">
            <el-form :model="editForm.form" ref="editForm" label-width="100px" :rules="editForm.rules">
                <el-form-item label="项目名称" prop="xmmc">
                    <el-input v-model="editForm.form.xmmc" />
                </el-form-item>
                <el-form-item label="医院" prop="yymc">
                    <el-input v-model="editForm.form.yymc" />
                </el-form-item>
                <el-form-item label="工作地点" prop="gzdd">
                    <el-input v-model="editForm.form.gzdd" />
                </el-form-item>
                <el-form-item label="工作时间">
                    <el-col :span="11">
                        <el-form-item prop="gzkssj">
                            <el-date-picker type="date" placeholder="选择日期" v-model="editForm.form.gzkssj" style="width: 100%;"></el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col :span="2" style="text-align: center;">
                        <span>
                            -
                        </span>
                    </el-col>
                    <el-col :span="11">
                        <el-form-item prop="gzjssj">
                            <el-date-picker type="date" placeholder="选择时间" v-model="editForm.form.gzjssj" style="width: 100%;"></el-date-picker>
                        </el-form-item>
                    </el-col>
                </el-form-item>
                <el-form-item label="甲方联系人" prop="jflxr">
                    <el-input v-model="editForm.form.jflxr" />
                </el-form-item>
                <el-form-item label="联系电话" prop="jflxrdh">
                    <el-input v-model="editForm.form.jflxrdh" />
                </el-form-item>
                <el-form-item label="说明" prop="xmsm">
                    <el-input type="textarea" v-model="editForm.form.xmsm" />
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="editForm.visible = false">取 消</el-button>
                <el-button type="primary" @click="EditXm" :loading="editForm.loading">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
import xmgl from '@/api/xmgl'
import yh from '@/api/yh'
import { XM } from '@/enumeration'
import See from '@/components/see'
import paginationMixin from '@/mixins/pagination'

export default {
    components: {
        See,
    },
    data() {
        return {
            show: true,
            seeForm: {  // 查看数据
                visible: false,
                form: {}
            },
            handleForm: {
                visible: false,
                form: {}
            },
            searchForm: {
                xmmc: '',
                state: '0',
            },
            table: {
                loading: true,
                tableLoading: false,
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
            options: {
                state: XM.STATE_A,
            },
            assignForm: {   // 指派form
                visible: false,
                loading: true,
                saveLoading: false, // 保存的loading
                searchForm: {
                    yhxm: '',
                    wrwkssj: '',
                    wrwjssj: '',
                },
                table: {
                    data: [],
                },
                form: {
                    action: 'zp',
                    pdryid: '',
                    xmid: '',
                },
                pdryid: '', // 与form内的pdryid分开避免无法取消选中
            },
            editForm: { // 添加、编辑
                visible: false,
                loading: false,
                form: {
                    xmid: '',
                    action: '',
                    xmmc: '',
                    yymc: '',
                    gzdd: '',
                    gzjssj: '',
                    gzkssj: '',
                    jflxr: '',
                    jflxrdh: '',
                    xmsm: '',
                },
                rules: {
                    xmmc: [
                        {required: true, message: '项目名称不能为空'}
                    ],
                    yymc: [
                        {required: true, message: '医院名称不能为空'}
                    ],
                    jflxr: [
                        {required: true, message: '甲方联系人不能为空'}
                    ],
                    jflxrdh: [
                        {required: true, message: '甲方联系人电话不能为空'}
                    ]
                }
            },
        }
    },
    mixins: [paginationMixin],
    mounted() {
        this.search();
    },
    methods: {
        showBase(bool) {
            this.show = !bool;
            this.search();
        },
        search() {
            this.table.loading = true;
            xmgl.GetXmList(this.searchForm).then((res) => {
                if (res.code === 1) {
                    this.table.total = res.data.total;
                    this.table.data = res.data.xmlb;
                }
                else {
                    this.$message.error(res.message);
                }
                this.table.loading = false;
            })
        },
        edit(action, row = {}) {    // 编辑
            this.editForm.visible = true;
            this.editForm.form.action = action;
            this.$nextTick(() => {
                this.$refs.editForm.resetFields();
            })
            if (action === 'edit') {
                this.editForm.loading = true;
                xmgl.GetXmxq({xmid: row.xmid}).then((res) => {
                    if (res.code === 1) {
                        Object.assign(this.editForm.form, res.data)
                    }
                    else {
                        this.$message.error(res.message);
                    }
                    this.editForm.loading = false;
                })
            }
        },
        assign(xmid, pdryid) {  // 指派
            this.assignForm.form.xmid = xmid;
            this.assignForm.pdryid = pdryid;
            this.assignForm.form.pdryid = pdryid;
            this.assignForm.visible = true;
            this.GetDropSelectList();
        },
        GetDropSelectList() {   // 搜索指派人员
            this.assignForm.loading = true;
            yh.GetDropSelectList(this.assignForm.searchForm).then((res) => {
                if (res.code === 1) {
                    this.assignForm.table.data = res.data.yhlb;
                    const selectedArr = this.assignForm.pdryid.split(',');
                    this.$nextTick(() => {
                        this.assignForm.table.data.forEach((row) => {
                            if (selectedArr.indexOf(row.id) !== -1) {
                                this.$refs.assignTable.toggleRowSelection(row);
                            }
                        })
                    })
                }
                else {
                    this.$message.error(res.message);
                }
                this.assignForm.loading = false;
            })
        },
        assignCheckSelectable(row) {
            const selectedArr = this.assignForm.pdryid.split(',');
            return selectedArr.indexOf(row.id) === -1;
        },
        see(data) {    // 跳转
            this.show = false;
            this.handleForm.visible = false;
            this.seeForm.form = data;
            this.seeForm.visible = true;
        },
        handle(data) {  // 处理

        },
        remove(xmid) {  // 删除
            this.table.tableLoading = true;
            xmgl.EditXm({xmid, action: 'sc'}).then((res) => {
                if (res.code === 1) {
                    if (res.data.errcode === 0) {
                        this.$message.success(res.data.errmsg);
                        this.search();
                    }
                    else {
                        this.$message.error(res.data.errmsg);
                    }
                }
                else {
                    this.$message.error(res.message);
                }
                this.table.tableLoading = false;
            })
        },
        assignTableChange(selection) {  // 处理字符串
            this.assignForm.form.pdryid = selection.map((row) => {
                return row.id;
            }).join(',');
        },
        async EditXm(action = '') {    // 新增、编辑、指派
            let data = {};
            if (action === 'zp') {  // 指派
                this.assignForm.saveLoading = true;
                data = this.assignForm.form;
            }
            else {
                Object.assign(data, this.editForm.form);
                const valid = await this.$refs.editForm.validate();
                if (!valid) return false;
            }
            data.action = data.action ? data.action : action;
            xmgl.EditXm(data).then((res) => {
                if (res.code === 1) {
                    if (res.data.errcode === 0) {
                        if (action === 'zp') {
                            this.$refs.assignSearch.resetFields();
                            this.assignForm.visible = false;
                        }
                        else {
                            this.$refs.editForm.resetFields();
                            this.editForm.visible = false;
                        }
                        this.search();
                        this.$message.success(res.data.errmsg);  
                    }
                    else {
                        this.$message.error(res.data.errmsg);
                    }
                }
                else {
                    this.$message.error(res.message);
                }
                this.assignForm.saveLoading = false;
                this.editForm.loading = false;
            })
        }
    }
}
</script>

<style>

</style>
