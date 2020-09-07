;
(function (Vue) {
    new Vue({
        el: '#app',
        data: {
            loading: false,
            contacts: [],
            editIndex: [],
            input: {

                name: '',
                email: ''
            }

        },
        methods: {
            submitHandler() {
                let {
                    name,
                    email
                } = this.input
                if (!name || !email) return //如果沒有輸入的話不做任何事
                this.loading = true
                if (this.editIndex == null) {
                    //可以寫成{name, email} 或是 this.input
                    axios.post('http://localhost:8888/content', {
                            name,
                            email
                        })
                        .then((res) => {
                            this.contacts.push(res.data)
                            this.cancelHandler() //輸入完之後可以清除表格資料
                            this.loading = false
                        }).catch((err) => {
                            console.log(err)
                        })
                } else {
                    let id = this.contacts[this.editIndex].id
                    axios.put('http://localhost:8888/content/' + id, this.input)
                        .then((res) => {
                            this.contacts[this.editIndex] = res.data
                            this.cancelHandler()
                            this.loading = true
                        }).catch((err) => {
                            console.log(err)
                        })
                }
            },
            cancelHandler() {
                this.editIndex = ''
                this.input = {
                    name: '',
                    email: ''
                }
            },
            deleteHandler(index) {
                let target = this.contacts[index]
                if (confirm(`是否要刪除${target.name}?`)) {
                    this.loading = true
                    axios.delete('http://localhost:8888/content/' + target.id)
                        .then((res) => {
                            this.contacts.splic(index, 1) //刪除一筆資料
                            this.cancelHandler()
                            this.loading = false
                        }).catch((err) => {
                            console.log(err)
                        })
                }
            },
            editHandler(index) {
                let {
                    name,
                    email
                } = this.contacts[index]
                this.editIndex = index
                this.input = {
                    name,
                    email
                }
            }
        },
        mounted() {
            this.loading = true
            axios.get('http://localhost:8888/content')
                .then((res) => {
                    this.contacts = res.data
                    this.loading = false
                }).catch((err) => {
                    console.log(err)
                })
        },
    })
})(Vue)