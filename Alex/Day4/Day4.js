  let data= {
      src: 'https://images.unsplash.com/photo-1540205081-d01d494b6f37?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a3a00efb839883ac243e103e843537a6&auto=format&fit=crop&w=500&q=60',
      title:'景點',
      index:0,
      menu: [
        {type:'早上',title: '景色',link:'javascript:;',src:'https://images.unsplash.com/photo-1540205081-d01d494b6f37?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a3a00efb839883ac243e103e843537a6&auto=format&fit=crop&w=500&q=60'},
        {type:'中午',title: '景色2',link:'javascript:;',src:'https://images.unsplash.com/photo-1541617963284-5e3858243c7b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7f9b96d6cf22395eaaea4b2b2821df1c&auto=format&fit=crop&w=500&q=60'},
        {type:'下午',title: '景色3',link:'javascript:;',src:'https://images.unsplash.com/photo-1541634566613-27b3d0a3bbf5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ceb240873cdc71f5627a953ede80e111&auto=format&fit=crop&w=500&q=60'},
        {type:'晚上',title: '景色4',link:'javascript:;',src:'https://images.unsplash.com/photo-1541641448801-7e14deb25463?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a835680840ec6a130e7b318dee52ffe6&auto=format&fit=crop&w=500&q=60'},
        {type:'半夜',title: '景色5',link:'javascript:;',src:'https://images.unsplash.com/photo-1541641245699-8e2084c4b15b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3998f7cb8e07aa14e6b3d64ec3aeb344&auto=format&fit=crop&w=500&q=60'},
      ],
    };
    
    let vm = new Vue({
      el:'#app',
      data:data,
      computed:{
        today() {
          return this.menu[this.index];
        },
        total() {
          return this.menu.length;
        }
      },
      methods:{
        changeIndex(change) {
        //   this.index = (this.index + change + this.total) % this.total;
          




          this.index += change;
          if (this.index < 0) {this.index = 0;} //如果小於0 , index為0
          else if (this.index > this.menu.length -1 ) {this.index = this.menu.length -1} //如果大於總長度-1 , index為總長度-1
          // // 總數從0算起有5筆資料，也就是0.1.2.3.4，所以不可超過4
          
          //循環
        //   this.index += change;
        //   if (this.index < 0) {this.index = this.menu.length -1} //如果小於0 , index為0
        //   else if (this.index > this.menu.length -1 ) {this.index = 0;}

        }
      }
    });
