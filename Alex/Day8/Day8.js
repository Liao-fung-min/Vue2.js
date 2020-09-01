let data = {
    input: {
        type: null,
        title: null
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
new Vue({
    el: '#app',
    data: data,
    computed: {
        typeList() {
            let obj = {
                sort: [],
                map: {}
            }
            this.menu.forEach(({
                type,
                title,
                link
            }, index) => {
                if (!obj.map[type]) {
                    obj.sort.push(type)
                    obj.map[type] = {
                        sort: [],
                        map: {}
                    }
                }
                obj.map[type].sort.push(title)
                obj.map[type].map[title] = {
                    index,
                    link
                }
            })
            return obj
        },
        titleList() {
            this.input.title = null
            if (this.input.type) {
                return this.typeList.map[this.input.type]
            } else {
                return []
            }
        },
        content(){
            if(this.input.title){
                return this.titleList.map[this.input.title]
            }else{
                return null
            }
        }
    }
})