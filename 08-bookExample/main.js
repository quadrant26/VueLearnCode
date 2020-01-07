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

            // 1. 普通的 for 循环
            // for(let i = 0; i < this.list.length; i++){
            //     totalPrice += this.list[i].count * this.list[i].price;
            // }

            // for (let i in/of this.list)
            // 2. for in
            // for (let i in this.list ){
            //     totalPrice += this.list[i].count * this.list[i].price;
            // }

            // 3. for item of
            // for( let item of this.list){
            //     totalPrice += item.count * item.price;
            // }

            // 4. reduce
            totalPrice = this.list.reduce(function (preValue, book){
                return preValue + book.count * book.price;
            }, 0)

            return totalPrice;
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

const nums = [10, 20, 111, 222, 444, 40, 50]
// 函数式编程
let totals = nums.filter(function(n){
    return n < 100;
}).map(function (n){
    return n * 2;
}).reduce(function (preValue, n){
    return preValue+n;
});
console.log(totals);

let totals2 = nums.filter(n => n < 100).map( n => n*2).reduce((pre, n) => pre+n, 0);
console.log(totals2)


// filter/map/reduce

// 1. filter 回调函数必须有一个要求： 必须返回一个布尔值
// true: 当返回true，函数内部自动将这次回调的n加入到新的数组中
// false: 返回false， 将会过滤这次的 n
let new4Nums = nums.filter(function (n){
    return n < 100;
})
console.log(new4Nums)

// 2. map
let new3Nums = nums.map(function (n){
    return n * 2;
});
console.log(new3Nums);

// 3. reduce
// 对数组中的内容进行汇总
let new5Nums = nums.reduce(function(preValue, n){
    return preValue + n;
}, 0);
console.log(new5Nums);

// 第一次： preValue -> 0, n -> 10
// 第二次： preValue -> 第一次的返回值, n -> 20
// 第三次： preValue -> 第二次的返回值, n -> 111
// 第四次： preValue -> 第三次的返回值, n -> 222

// 1. 取出所有的小于100的数字
let newNums = [];
for ( let n of nums ){
    if( n < 100){
        newNums.push(n)
    }
}
console.log(newNums);

// 2. 所有的数字 * 2
let new2Nums = [];
for ( let n of nums ){
    new2Nums.push(n*2)
}
console.log(new2Nums)

// 2. 所有的数字 * 2
let total = 0;
for ( let n of nums ){
    total += n;
}
console.log(total)
