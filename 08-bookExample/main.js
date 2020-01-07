const app = new Vue({
    el: "#app",
    data: {
        list: [
            {
                id: 1,
                name: "《算法导论》",
                date: "2006-9",
                price: 85.00,
                count: 1
            },
            {
                id: 2,
                name: "《Linux编程艺术》",
                date: "2006-2",
                price: 59.00,
                count: 1
            },
            {
                id: 3,
                name: "《编程珠玑》",
                date: "2009-12",
                price: 39.00,
                count: 1
            },
            {
                id: 4,
                name: "《代码大全》",
                date: "2006-3",
                price: 128.00,
                count: 1
            }
        ]
    },
    computed:{
        totalAllPrice (){
            let totalPrice = 0;
            for(let i = 0; i < this.list.length; i++){
                totalPrice += this.list[i].count * this.list[i].price;
            }
            return totalPrice;

            // for (let i in/of this.list)
            // reduce
        }
    },
    methods: {
        getFinalPrice (price){
            return '￥' + price.toFixed(2);
        },
        decrement (index){
            if ( this.list[index].count <= 1 )return;
            this.list[index].count --;
            console.log("decrement")
        },
        increment (index){

            this.list[index].count ++;
            console.log("increment")
        },
        removeHandle (index){
            this.list.splice(index, 1);
        }
    },
    filters: {
        showPrice(price){
            return '￥' + price.toFixed(2);
        }
    }
})