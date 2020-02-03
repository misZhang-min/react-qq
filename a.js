// var a={},b='123',c=123;
//      a[b]='b';
//      a[c]='c';
//      console.log(a[b])
// var a={},b={key:'123'},c={key:123}
// a[b]='b';
// a[c]='c';
//  console.log(a[b])
// var a={n:1};
// var b=a;
// a.x=a={n:2}
// console.log(a.x,b.x)

// async function async1(){
//     console.log('async-1-start')
//     await async2()
//     console.log('async-1-end')
// }
// async function async2(){
//     console.log('2')
// }
// console.log('3')
// setTimeout(function(){
//     console.log('4')
// },0);
// async1()
// new Promise(function(resolve){
//    console.log('5')
//    resolve()
// }).then(function(){
//     console.log('6')
// })
// console.log('7')
//3 async-1-start 2 5 7 async-1-end 6 4
//@ts-ignore
// var b=10
// (function b(){
//     b=20;
//     console.log(b)
// })()
// var a = {i:1,toString: function(){return a.i++;}}
// if(a == 1 && a == 2 && a == 3){
//   console.log(1);
// }
// var a=10;
// (function(){
//     console.log(a)
//     a=5
//     console.log(window.a)
//     var a=20
//     console.log(a)
// })()
// var obj={
//     '2':3,
//     '3':4,
//     'length':Array.prototype.splice,
//     'push':Array.prototype.push
// };
// obj.push(1)
// obj.push(2)
// obj.push(10)
// console.log(obj)
// // {0:1,1:2,2:3,3:4,length:2}
// var name="Tom";
// (function(){
//     if(typeof name=="undefined"){
//         var name="Jack"
//         console.log('Goodbye'+name)
//     }else{
//         console.log('hellow'+name)
//     }
// })()
