let data = {
    input: {
        type: '風景',
        title: ''
    },
    menue: [{
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
        inputHandler() 
        {
            let {
                type,
                title
            } = this.input
            if (this.input.title) {
                this.menue.push({
                    type,
                    title,
                    link: 'javascript:;'
                })
                this.input.title = ''
            }
        }
    },
})