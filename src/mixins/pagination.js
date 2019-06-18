export default {
    data() {
        return {
            searchForm: {
                loading: false,
                form: {
                    xmmc: '',
                    sblx: '',
                    sbzt: '',
                    fjzt: '',
                    pdr: '',
                    pagesize: 10,
                    page: 1,
                }     
            },
            table: {
                loading: false,
                total: 0,
                data: [],
            }
        }
    },
    methods: {
        handleSizeChange(size) {
            this.searchForm.page = 1;
            this.searchForm.pagesize = size;
            this.search();
        },
        handleCurrentChange(page) {
            this.searchForm.page = page;
            this.search();
        },
    }
}