let data = {
    input: {
        type: '全部',
        title: ''
    },
    menu: [{
            type: '風景',
            title: '北海道',
            link: 'javascript:;'
        },
        {
            type: '風景',
            title: '東京都',
            link: 'javascript:;'
        },
        {
            type: '風景',
            title: '琦玉縣',
            link: 'javascript:;'
        },
        {
            type: '文化',
            title: '吃拉麵要發出聲音',
            link: 'javascript:;'
        },
        {
            type: '文化',
            title: '喝酒文化',
            link: 'javascript:;'
        },
        {
            type: '文化',
            title: '博愛座文化',
            link: 'javascript:;'
        },
        {
            type: '美食',
            title: '天婦羅',
            link: 'javascript:;'
        },
        {
            type: '美食',
            title: '拉麵',
            link: 'javascript:;'
        },
        {
            type: '美食',
            title: '蕎麥麵',
            link: 'javascript:;'
        },
        {
            type: '美食',
            title: '壽司',
            link: 'javascript:;'
        },
        {
            type: '美食',
            title: '壽喜燒',
            link: 'javascript:;'
        },
        {
            type: '美食',
            title: '流水涼麵',
            link: 'javascript:;'
        },
        {
            type: '美食',
            title: '生啤酒',
            link: 'javascript:;'
        },
    ]
}
let vm = new Vue({
    el: '#app',
    data: data,
    methods: {
        
    },
    computed: {
        typeMenu() {
            if (this.input.type !== '全部') {
                return this.menu.filter(item => {
                    return item.type === this.input.type //item所產生出來的東西跟this.input.type一樣就可以做保留
                })
            } else {
                return this.menu
            }
        },
        titleMenu() {
            if (this.input.title) {
                return this.typeMenu.filter(item => {
                    //item所產生出來的東西先轉成小寫
                    let tolittle = item.title.toLowerCase()
                    //title 所輸入的東西如果不是-1的話就代表找到了就留下來
                    let keyword = this.input.title.toLowerCase()
                    //要注意toLowerCase()跟indexOf的大小寫
                    return tolittle.indexOf(keyword) !== -1
                })
            } else {
                return this.typeMenu
            }
        }
    },

})